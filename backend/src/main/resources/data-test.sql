-- Populating "CATEGORY_USERS"
INSERT INTO "CATEGORY_USERS" ("idCategoryUser", "categoryUser") VALUES
                                                                    (1, 'USER'),
                                                                    (2, 'ADMINISTRATOR');

-- Populating "SENTENCES"
INSERT INTO "SENTENCES" ("idSentence", "sentence") VALUES
                                                       (1, 'Track your spending, take control'),
                                                       (2, 'Your finances, simplified'),
                                                       (3, 'Understand your expenses, grow your savings'),
                                                       (4, 'Smart insights for smarter spending'),
                                                       (5, 'Master your budget, one step at a time'),
                                                       (6, 'Take charge of your money, effortlessly'),
                                                       (7, 'Spend smarter, save better');


-- Populating "TYPE_TRANSACTIONS"
INSERT INTO "TYPE_TRANSACTIONS" ("idTypeTransaction", "typeTransaction") VALUES
                                                                             (1, 'Expense'),
                                                                             (2, 'Income');
