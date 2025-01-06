-- Crear la tabla sentences
CREATE TABLE sentences (
                           idSentence INT PRIMARY KEY,
                           sentence VARCHAR(45)
);

-- Insertar los 10 valores
INSERT INTO sentences (idSentence, sentence) VALUES
                                                 (1, 'Track your spending, take control!'),
                                                 (2, 'Your finances, simplified'),
                                                 (3, 'Understand your expenses, grow your savings'),
                                                 (4, 'Smart insights for smarter spending'),
                                                 (5, 'Master your budget, one step at a time');
