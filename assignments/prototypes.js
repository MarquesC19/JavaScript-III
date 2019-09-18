/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt,
  this.name = attributes.name,
  this.dimensions = attributes.dimensions
};

GameObject.prototype.destroy = function(){
{return `${this.name} was removed from the game.` 
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(statsAttributes){
  GameObject.call(this, statsAttributes);
  this.healthPoints = statsAttributes.healthPoints
};
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage =function() { 
  return `${this.name} took damage.`
};
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid(humanoidAttributes){
   CharacterStats.call(this,humanoidAttributes);
   this.team = humanoidAttributes.team,
   this.weapons = humanoidAttributes.weapons,
   this.language =humanoidAttrributes.language
 };
 Humanoid.prototype =Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet=function() {
  return `${this.name} offers a greeting in ${this.language}`
 };


//________________Hero________________
function Hero(heroAttributes){
  Humanoid.call(this, heroAttributes);

  Hero.prototype= Object.create(Humanoid.prototype);

  Hero.prototype.bigTimeSlasher = function bigTimeSlasher(character){
    character.healthsPoints= character.healthPoints -7;
    if(character.healthPoints <=0){
    return character.destroy;
    }else
    return `A direct hit! ${character.takeDamage(character)} and only has ${character.healthPoints}hp remaining.
  };



  // ________________Villain________________

function Villain(villainAttributes){
  Humanoid.call(this, villainAttributes);
  }


Villain.prototype = Object.create(Humanoid.prototype);

villain.prototype.crash=function crash(character){
  character.healthPoints= character.healthPoints -7;
  if(character.healthPoints <=0) {
    return charaacter.destroy;
  }else
  return `A direct hit! ${character.takeDamage(character)} and only has ${character.healthPoints} hp remaining.`
};
