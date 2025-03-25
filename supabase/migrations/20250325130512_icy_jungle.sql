/*
  # Initial Schema Setup for Flipkart Clone

  1. New Tables
    - products
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - image_url (text)
      - category (text)
      - stock (integer)
      - created_at (timestamp)
    
    - orders
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - status (text)
      - total_amount (numeric)
      - created_at (timestamp)
    
    - order_items
      - id (uuid, primary key)
      - order_id (uuid, foreign key)
      - product_id (uuid, foreign key)
      - quantity (integer)
      - price (numeric)

    - cart_items
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - product_id (uuid, foreign key)
      - quantity (integer)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Products table
CREATE TABLE products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    price numeric NOT NULL CHECK (price >= 0),
    image_url text,
    category text NOT NULL,
    stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
    created_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE orders (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    total_amount numeric NOT NULL CHECK (total_amount >= 0),
    created_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE order_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id uuid REFERENCES orders NOT NULL,
    product_id uuid REFERENCES products NOT NULL,
    quantity integer NOT NULL CHECK (quantity > 0),
    price numeric NOT NULL CHECK (price >= 0)
);

-- Cart items table
CREATE TABLE cart_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    product_id uuid REFERENCES products NOT NULL,
    quantity integer NOT NULL CHECK (quantity > 0),
    created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Products are viewable by everyone"
    ON products FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Orders are viewable by owner"
    ON orders FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Order items are viewable by order owner"
    ON order_items FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM orders
            WHERE orders.id = order_items.order_id
            AND orders.user_id = auth.uid()
        )
    );

CREATE POLICY "Cart items are viewable by owner"
    ON cart_items FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Cart items can be inserted by owner"
    ON cart_items FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Cart items can be updated by owner"
    ON cart_items FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Cart items can be deleted by owner"
    ON cart_items FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);