create database expressapp;
use expressapp;

create table users(
id int auto_increment primary key,
name text not null,
dob date not null,
address text not null,
description text not null,
createdAt datetime,
updatedAt datetime
);