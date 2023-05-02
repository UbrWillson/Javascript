
class Human{
name;
surname;
age;

constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}



get_name(){
    return this.name;
}
set_name(value){
    this.name = value;
}


get_surname(){
    return this.surname;
}
set_surname(value){
    this.surname = value;
}

get_age(){
    return this.age;
}
set_age(value){
this.age = value

}


all_info(){
    return `name: ${this.name}, surname: ${this.surname}, age:${this.age}`;
}
}

let human = new Human("Perry", "Jackson", 999)
console.log(human)




class Knight extends Human{
strength;
skill_duration;
sword;
horse;
sword_lvl = 10;
damage = 1;
hit_point = 3;
constructor(strength,skill_duration,sword,horse,name,surname,age){
    super(name, surname, age);
    this.strength = strength;
    this.skill_duration = skill_duration;
    this.sword = sword + " lvl:" + this.sword_lvl + " урон:" + this.damage;
    this.horse = horse;
    this.hit_point = 3;
}
get_strength(){
    return this.strength;
}
set_strength(value){
this.strength = value
}

get_skill_duration(){
    return this.skill_duration;
}
set_skill_duration(value){
this.skill_duration = value
}

get_sword(){
    console.log("Ваш меч б'є по 50 урона")
    return this.sword;
    
}
set_sword(value){
this.sword = value
}

get_horse(){
    return this.horse;
}
set_horse(value){
this.horse = value
}
all_info(){
    return `strength: ${this.name}, 
    skill_duration: ${this.skill_duration},
    sword: ${this.sword},
    horse: ${this.horse}`
}
}
let knight = new Knight("222", "323", "steel sword", "231", "Jack", "Jackson", "23")



class Bad_knight extends Human{
    strength;
    skill_duration;
    sword;
    horse;
    sword_lvl = 10;
    damage = 1;
    hit_point = 3;
    
    constructor(strength,skill_duration,sword,horse,name,surname,age){
        super(name, surname, age);
        this.strength = strength;
        this.skill_duration = skill_duration;
        this.sword = sword + " lvl:" + this.sword_lvl + " урон:" + this.damage;
        this.horse = horse;
        this.hit_point = 3;
    }
    get_strength(){
        return this.strength;
    }
    set_strength(value){
    this.strength = value
    }
    
    get_skill_duration(){
        return this.skill_duration;
    }
    set_skill_duration(value){
    this.skill_duration = value
    }
    
    get_sword(){
        console.log("Ваш меч б'є по 50 урона")
        return this.sword;
        
    }
    set_sword(value){
    this.sword = value
    }
    
    get_horse(){
        return this.horse;
    }
    set_horse(value){
    this.horse = value
    }
    all_info(){
        return `strength: ${this.name}, 
        skill_duration: ${this.skill_duration},
        sword: ${this.sword},
        horse: ${this.horse}`
    }
    }

    let bad_knight = new Knight("222", "323", "steel sword", "231", "Jack", "Jackson", "23")

   function damage_dealing(){
    
   }