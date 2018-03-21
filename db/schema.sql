drop database karma_db;
create database karma_db;

create table karma_db.karmauser
(
user_id integer auto_increment not null,
name varchar(500),
department_id integer,
photoPath varchar(100),
email varchar(500),
primary key (user_id)
);

create table karma_db.departments
(department_id integer auto_increment not null,
deptname varchar(500),
location varchar(100),
primary key (department_id)
);

create table karma_db.karmaactivity
(activity_id integer auto_increment not null,
user_id integer,
user_name varchar(100),
activitydate date,
text varchar(2000),
votes integer(100),
liked integer(100),
peer_name varchar(5000),
image varchar(5000),
primary key (activity_id)
);


alter table karma_db.karmaactivity
add column image varchar(5000);


create table karma_db.karmacomments
(comments_id integer auto_increment not null,
comment varchar(2000),
activity_id integer(255),
primary key (comments_id)
);

