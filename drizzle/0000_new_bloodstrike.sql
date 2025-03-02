CREATE TABLE `comics_table` (
	`id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`link` varchar(255) NOT NULL,
	`chapter` int NOT NULL,
	CONSTRAINT `comics_table_id` PRIMARY KEY(`id`)
);
