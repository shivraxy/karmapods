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
activitydate date,
text varchar(2000),
votes integer(100),
liked integer(100),
primary key (activity_id)
);


create table karma_db.karmacomments
(comments_id integer auto_increment not null,
comment varchar(2000),
activity_id integer(255),
primary key (comments_id)
);

