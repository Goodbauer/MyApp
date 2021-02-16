CREATE SEQUENCE clients_id_seq START 1000000;
CREATE TABLE IF NOT EXISTS clients
(
    id       BIGINT PRIMARY KEY DEFAULT nextval('clients_id_seq'),
    login    VARCHAR(200) NOT NULL,
    password VARCHAR(254) NOT NULL
);

