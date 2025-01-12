-- Crear la tabla sentences
CREATE TABLE sentences (
                           idsentence SERIAL PRIMARY KEY,
                           sentence VARCHAR(45) NOT NULL
);

-- Insertar los valores
INSERT INTO sentences (sentence) VALUES
                                     ('Track your spending, take control!'),
                                     ('Your finances, simplified'),
                                     ('Understand your expenses, grow your savings'),
                                     ('Smart insights for smarter spending'),
                                     ('Master your budget, one step at a time');