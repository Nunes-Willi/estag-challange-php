--Every command here will be executed when the container is created

CREATE TABLE IF NOT EXISTS mytable (
    MYID SERIAL PRIMARY KEY,
    DESCRIPTION VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS mytable2 (
    MYID SERIAL PRIMARY KEY,
    DESCRIPTION VARCHAR(50)
);

INSERT INTO mytable (DESCRIPTION) VALUES ('TESTE');
INSERT INTO mytable (DESCRIPTION) VALUES ('TESTE2');

CREATE TABLE CATEGORIES (
   CODE SERIAL PRIMARY KEY,
    NAME VARCHAR(255),
    TAX NUMERIC(10,2)
);

CREATE TABLE PRODUCTS (
   CODE SERIAL PRIMARY KEY,
    NAME VARCHAR(255),
    AMOUNT NUMERIC(10,2),
    PRICE NUMERIC(10,2),
    CATEGORY_CODE INTEGER,
    CONSTRAINT FK_CATEGORY FOREIGN KEY (CATEGORY_CODE) REFERENCES CATEGORIES(CODE)
);

CREATE TABLE ORDERS (
   CODE SERIAL PRIMARY KEY,
    TOTAL NUMERIC(10,2),
    TAX NUMERIC(10,2)
);

CREATE TABLE ORDER_ITEM(
   CODE SERIAL PRIMARY KEY,
    ORDER_CODE INTEGER,
    PRODUCT_CODE INTEGER,
    AMOUNT INTEGER,
    PRICE NUMERIC(10,2),
    TAX NUMERIC(10,2),
    CONSTRAINT FK_PRODUCT FOREIGN KEY (PRODUCT_CODE) REFERENCES PRODUCTS(CODE),
    CONSTRAINT FK_ORDER FOREIGN KEY (ORDER_CODE) REFERENCES ORDERS(CODE)
)