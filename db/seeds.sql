insert into karma_db.karmauser(name,department_id,photoPath,email)
values ('Shivram',1,"Admin","shivram.jayakumar@gmail.com");

insert into karma_db.departments(deptname,location)
values('IT','Sunnyvale');

insert into karma_db.karmaactivity(user_id,activitydate,text,votes,peer_name)
values(1,SYSDATE(),'This is my second message',1,'Crazy Person');

insert into karma_db.karmaactivity(activitydate,user_name,text,peer_name,image)
values(SYSDATE(),'This is my second message',1,'Crazy Person');

select * from karma_db.karmaactivity;

insert into karma_db.karmacomments(comment,activity_id)
values('This is my first comments',1);

select ku.name,ka.peer_name,substr(ka.text,1,20),ka.votes, count(1) comments
from karma_db.karmaactivity ka
inner join karma_db.karmauser ku on 
ka.user_name = ku.name
left join karma_db.karmacomments kc
on ka.activity_id =kc.activity_id
group by ka.activity_id,ku.name,ka.peer_name,ka.text,ka.votes
order by votes desc;


select ku.name,kd.deptname,substr(ka.text,1,20) text,ka.votes
from karma_db.karmaactivity ka
inner join karma_db.karmauser ku on 
ka.user_id = ku.user_id
inner join karma_db.departments kd
on ku.department_id = kd.department_id
left outer join karma_db.karmacomments kc
on ka.activity_id =kc.activity_id
order by votes desc;



select * from karma_db.karmaactivity;

delete from karma_db.karmaactivity
where image is null;

truncate table karma_db.karmaactivity;

