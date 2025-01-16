-- Populating "CATEGORY_TRANSACTIONS"
INSERT INTO "CATEGORY_TRANSACTIONS" ("idCategoryTransaction", "categoryTransaction") VALUES
                                                                                         (1, 'Food'),
                                                                                         (2, 'Utilities'),
                                                                                         (3, 'Entertainment');

-- Populating "CATEGORY_USERS"
INSERT INTO "CATEGORY_USERS" ("idCategoryUser", "categoryUser") VALUES
                                                                    (1, 'Regular'),
                                                                    (2, 'Premium'),
                                                                    (3, 'Administrator');

-- Populating "SENTENCES"
INSERT INTO "SENTENCES" ("idSentence", "sentence") VALUES
                                                       (1, 'Welcome to our system.'),
                                                       (2, 'Your transaction has been completed.'),
                                                       (3, 'Please update your profile.');

-- Populating "TYPE_TRANSACTIONS"
INSERT INTO "TYPE_TRANSACTIONS" ("idTypeTransaction", "typeTransaction") VALUES
                                                                             (1, 'Debit'),
                                                                             (2, 'Credit'),
                                                                             (3, 'Transfer');

-- Populating "USERS"
INSERT INTO "USERS" ("idUser", "idCategoryUser", "name", "lastname", "mail", "password", "age", "fisicalMoney", "digitalMoney") VALUES
                                                                                                                                    (1, 1, 'John', 'Doe', 'john.doe@example.com', 'password123', 30, 1500.00, 500.00),
                                                                                                                                    (2, 2, 'Jane', 'Smith', 'jane.smith@example.com', 'securepass', 25, 1000.00, 1200.00),
                                                                                                                                    (3, 3, 'Admin', 'User', 'admin@example.com', 'adminpass', 40, 2000.00, 3000.00);

-- Populating "TRANSACTIONS"
INSERT INTO "TRANSACTIONS" ("idTransaction", "idTypeTransaction", "idCategoryTransaction", "concept", "amount", "date", "category") VALUES
                                                                                                                                        (1, 1, 1, 'Groceries', 100, '2025-01-01', 'Food'),
                                                                                                                                        (2, 2, 2, 'Electric Bill', 75, '2025-01-05', 'Utilities'),
                                                                                                                                        (3, 3, 3, 'Movie Tickets', 50, '2025-01-10', 'Entertainment');

-- Populating "USERS_TRANSACTIONS"
INSERT INTO "USERS_TRANSACTIONS" ("idUser", "idTransaction") VALUES
                                                                 (1, 1),
                                                                 (2, 2),
                                                                 (3, 3);
