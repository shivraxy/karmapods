insert into karma_db.karmauser(name,department_id,photoPath,email)
values ('Shivram',1,"Admin","shivram.jayakumar@gmail.com");

insert into karma_db.departments(deptname,location)
values(1,'Sunnyvale');

insert into karma_db.karmaactivity(user_id,activitydate,text,votes,liked)
values(1,SYSDATE(),'Voted no 1',1,1);

insert into karma_db.karmacomments(comment,activity_id)
values('This is my first comments',1);

select * from karma_db.karmaactivity;

