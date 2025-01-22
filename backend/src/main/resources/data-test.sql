-- Populating "CATEGORY_TRANSACTIONS"
INSERT INTO "CATEGORY_TRANSACTIONS" ("idCategoryTransaction", "categoryTransaction") VALUES
                                                                                         (1, 'Food'),
                                                                                         (2, 'Utilities'),
                                                                                         (3, 'Entertainment');

-- Populating "CATEGORY_USERS"
INSERT INTO "CATEGORY_USERS" ("idCategoryUser", "categoryUser") VALUES
                                                                    (1, 'USER'),
                                                                    (2, 'ADMINISTRATOR');

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
