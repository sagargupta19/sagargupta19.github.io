var names=new Array();
names[0]="ram";
names[1]="shayam";
names[2]="pun";
names[3]="jason";
names[4]="raghav";
names[5]="sagar";
names[6]="riya";
names[7]="shambhavi";
names[8]="avish";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}