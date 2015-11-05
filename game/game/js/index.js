var name, className, mana, weaponName, DMG, spell1, spell2, spell3, spell4, manaPotion, healthPotion, dodge, health, magic, crit, spell1Name, spell2Name, spell3Name, spell4Name, spell1Mana, spell2Mana, spell3Mana, spell4Mana, classNumba;
var potionRegen = 3;

function critFunction() {
  var randThree = Math.random();
  if (randThree * 100 <= crit) {
    return DMG * 2;
  }
  else {
    return DMG;
  }
}

function potionRegen(x) {
  if (x > 0) {
    var healed = potionRegen * 20;
    return healed;
  }
  else {
    return 0;
  }
}


function useSpell1() {
  if (mana > spell1Mana) {
    return spell1;
  }
  else {
    return 0;
  }
}

function useSpell2() {
  if (mana > spell2Mana) {
    return spell2;
  }
  else {
    return 0;
  }
}

function useSpell3() {
  if (mana > spell3Mana) {
    return spell3;
  }
  else {
    return 0;
  }
}

function useSpell4() {
  if (mana > spell4Mana) {
    return spell4;
  }
  else {
    return 0;
  }
}

function dodge() {
  var randNumber = Math.random();
  if (randNumber * 100 <= dodge) {
    return 0;
  }
  else {
    return 1;
  }
}

function functionOne() {
  name = prompt("What is your name?");
  var var1 = true;
  manaPotion = 3;
  healthPotion = 3;
  crit = 0;
  dodge = 0;
  magic = 0;
  while (var1 == true) {
    classNumba = Number(prompt("Choose a number relative to your class.\n 1. Marksman \n 2. Warrior \n 3. Mage \n 4. Rogue"));
    if (isNaN(classNumba) == false) {
      var1 = false;
    }
  }
  var randOne = Math.random();
  switch(classNumba) {
    case 1:
      className = "Marksman";
      mana = 300;
      DMG = 55;
      health = 300;
      dodge = 0;
      spell1 = magic * 2 + 60;
      spell2 = magic * 3 + 20;
      spell3 = magic * 4;
      spell4 = magic * 5;
      spell1Name = "Enchanted Shot";
      spell2Name = "Marksman's Throw";
      spell3Name = "Multiplying Projectile";
      spell4Name = "Headshot";
      spell1Mana = 50;
      spell2Mana = 70;
      spell3Mana = 100;
      spell4Mana = 150;
      if (randOne <= 0.25) {
        weaponName = "Doran's Bow";
        DMG = DMG + 10;
        health = health + 30;
      }
      else if (randOne <= 0.5) {
        weaponName = "Long Bow";
        DMG = DMG + 20;
      }
      else if (randOne <= 0.75) {
        weaponName = "Recurve Shield";
        health = health + 100;
      }
      else if (randOne <= 1) {
        weaponName = "Marksman's Boots";
        dodge = 10;
        crit = 20
      }
      break;
    case 2:
      className = "Warrior";
      mana = 180;
      DMG = 35;
      health = 500;
      spell1 = magic * 2 + 60;
      spell2 = magic * 3 + 20;
      spell3 = magic * 4;
      spell4 = magic * 5;
      spell1Name = "Enchanted Axe";
      spell2Name = "Strengthened Strike";
      spell3Name = "Sharpened Assault";
      spell4Name = "Slice";
      spell1Mana = 50;
      spell2Mana = 70;
      spell3Mana = 100;
      spell4Mana = 150;
      if (randOne <= 0.25) {
        weaponName = "Doran's Blade";
        DMG = DMG + 7;
        health = health + 50;
      }
      else if (randOne <= 0.5) {
        weaponName = "Long Sword";
        DMG = DMG + 15;
      }
      else if (randOne <= 0.75) {
        weaponName = "Avarice Cutlass";
        crit = 15;
        health = heatlh + 40;
      }
      else if (randOne <= 1) {
        weaponName = "Delvish Blade";
        dodge = 10;
      }
      break;
    case 3:
      className = "Mage";
      mana = 420;
      DMG = 5;
      health = 300;
      spell1Name = "Magical Strike";
      spell2Name = "Mystic Storm";
      spell3Name = "Empowered Light";
      spell4Name = "Fire";
      spell1Mana = 30;
      spell2Mana = 40;
      spell3Mana = 90;
      spell4Mana = 120;
      if (randOne <= 0.25) {
        weaponName = "Doran's Staff";
        magic = 20;
        mana = mana + 30;
      }
      else if (randOne <= 0.5) {
        weaponName = "Bloodmoon Wand";
        magic = 30;
      }
      else if (randOne <= 0.75) {
        weaponName = "Prototype Hexstaff";
        magic = 5;
        crit = 10;
      }
      else if (randOne <= 1) {
          weaponName = "Sorcerer's Shoes";
          dodge = 20;
          health = health + 60;
      }
      spell1 = magic * 2 + 60;
      spell2 = magic * 3 + 20;
      spell3 = magic * 4;
      spell4 = magic * 5;
      break;
    case 4:
      className = "Rogue";
      mana = 240;
      DMG = 65;
      health = 200;
      dodge = 10;
      spell1 = magic * 2 + 60;
      spell2 = magic * 3 + 20;
      spell3 = magic * 4;
      spell4 = magic * 5;
      spell1Name = "Backstab";
      spell2Name = "Pressure Strike";
      spell3Name = "Multiplying Attack";
      spell4Name = "Stab";
      spell1Mana = 50;
      spell2Mana = 70;
      spell3Mana = 100;
      spell4Mana = 150;
      if (randOne <= 0.25) {
        weaponName = "Shining Dagger";
        crit = 25;
      }
      else if (randOne <= 0.5) {
        weaponName = "Sunfire's Shiv";
        health = health + 30;
      }
      else if (randOne <= 0.75) {
        weaponName = "Vampiric Knife";
        DMG = DMG + 10;
      }
      else if (randOne <= 1) {
          weaponName = "Frostfang Sabre";
          mana = mana + 30;
      }
      break;
  }
  document.getElementById('starto').style.display = 'none';
  document.write('Name: ' + name + '<br>');
  document.write('Class: ' + className + '<br>');
  document.write('Health: ' + health + '<br>');
  document.write('Mana: ' + mana + '<br>');
  document.write('Attack Damage: ' + DMG + '<br>');
  document.write('Magic: ' + magic + '<br>');
  document.write('Weapon: ' + weaponName + '<br>');
  document.write('Dodge Chance: ' + dodge + '%<br>');
  document.write('Critical Attack Chance: ' + crit + '%<br>');
  document.write('Health Potion(s): ' + healthPotion + '<br>');
  document.write('Mana Potion(s): ' + manaPotion + '<br>');
  document.write('Spell One:<br>  -Name: ' + spell1Name + '<br>  -Mana Usage: ' + spell1Mana + '<br>  -Damage: ' + spell1);
  document.write('Spell Two:<br>  -Name: ' + spell2Name + '<br>  -Mana Usage: ' + spell2Mana + '<br>  -Damage: ' + spell2);
  document.write('Spell Three:<br>  -Name: ' + spell3Name + '<br>  -Mana Usage: ' + spell3Mana + '<br>  -Damage: ' + spell3);
  document.write('Spell Four:<br>  -Name: ' + spell4Name + '<br>  -Mana Usage: ' + spell4Mana + '<br>  -Damage: ' + spell4);
  document.write('Commands: <br>-Attack = Basic Attack<br>-HealthPotion = Use a Health Potion<br>-ManaPotion = Use a Mana Potion<br>-Spell1 = Use Spell One<br>-Spell2 = Use Spell Two<br>-Spell3 = Use Spell Three<br>-Spell4 = Use Spell Four');
  //document.getElementById('buttonTwo').style.display = 'block';
  document.getElementById("bodyId").classList.remove("bodyClassInit");
  document.getElementById("bodyId").classList.add("bodyClassOne");
  document.getElementById("buttonTwo").classList.remove("hidden");
  document.getElementById("buttonTwo").classList.add("visible");
  //document.body.style.backgroundImage = "url('../../images/night_sky_wallpaper_by_dji435-d66882b.png')";
}

function functionTwo() {
  var randTwo = Number.math();
  var dungeonMonster;
  var dungeonMonsterHealth;
  var dungeonMonsterSpell1;
  var dungeonMonsterSpell2;
  var dungeonMonsterDMG;
  var dungeonMonsterSpell1Name;
  var dungeonMonsterSpell2Name;
  var bool = true;
  if (randTwo <= 0.25) {
      dungeonMonster = "Grump the Gromp";
      dungeonMonsterHealth = 300;
      dungeonMonsterSpell1 = 40;
      dungeonMonsterSpell2 = 60;
      dungeonMonsterDMG = 30;
      dungeonMonsterSpell1Name = "Scratch";
      dungeonMonsterSpell2Name = "Bite";
  }
  else if (randTwo <= 0.5) {
      dungeonMonster = "Pack of Wolves";
      dungeonMonsterHealth = 250;
      dungeonMonsterSpell1 = 50;
      dungeonMonsterSpell2 = 70;
      dungeonMonsterDMG = 45;
      dungeonMonsterSpell1Name = "Shadow Strike";
      dungeonMonsterSpell2Name = "Crunch";
  }
  else if (randTwo <= 0.75) {
      dungeonMonster = "Flock of Ravage Birds";
      dungeonMonsterHealth = 210;
      dungeonMonsterSpell1 = 60;
      dungeonMonsterSpell2 = 90;
      dungeonMonsterDMG = 55;
      dungeonMonsterSpell1Name = "Wing Attack";
      dungeonMonsterSpell2Name = "Drill Peck";
  }
  else if (randTwo <= 1) {
      dungeonMonster = "Group of Rock Golems";
      dungeonMonsterHealth = 400;
      dungeonMonsterSpell1 = 20;
      dungeonMonsterSpell2 = 30;
      dungeonMonsterDMG = 15;
      dungeonMonsterSpell1Name = "Rock Smash";
      dungeonMonsterSpell2Name = "Stone Edge";
  }

  alert("A wild " + dungeonMonster + "has appeared!");
  var monsterUserHealthBool = true;
  var dungeonMonsterHealthBool = true;
  var healthBool = true;
  var bool = true;
  while (dungeonMonsterHealthBool && healthBool == true) {
    bool = true
    
    while (bool) {
      var cmd = prompt("Type a Command from the lists of Commands").toUpperCase();
      switch(cmd) {
        case "ATTACK":
          var damaeTaken = critFunction();
          dungeonMonsterHealth = dungeonMonsterHealth - dameTaken;
          alert("The " + dungeonMonster + " has lost " + dameTaken ". He has " + dungeonMonsterHealth + " health left!")
          bool = false;
          break;
        case "HEALTHPOTION":
          var healthRegening = potionRegen(healthPotion);
          health = health + healthRegening;
          healthPotion = healthPotion - 1;
          if (healthRegening == 0) {
            alert("You do not have any more health potions!");
          }
          else {
            alert("You have used a health potion and has regened " + healthRegening + " health! You have" + healthPotion + ' health potions left!')
          }
          bool = false;
          break;
        case "MANAPOTION":
          var healthRegening = potionRegen(manaPotion);
          mana = mana + healthRegening;
          manaPotion = manaPotion - 1;
          if (healthRegening == 0) {
            alert("You do not have any more mana potions!");
          }
          else {
            alert("You have used a mana potion and has regened " + healthRegening + " mana! You have " + manaPotion + ' mana potions left!')
          }
          bool = false;
          break;
        case "SPELL1":
          var used = useSpell1();
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell1Name + " and deal " + spell1 + " damage!")
          }
          bool = false;
          break;
        case "SPELL2":
          var used = useSpell2();
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell2Name + " and deal " + spell2 + " damage!")
          }
          bool = false;
          break;
        case "SPELL3":
          var used = useSpell3();
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell3Name + " and deal " + spell3 + " damage!")
          }
          bool = false;
          break;
        case "SPELL4":
          var used = useSpell4();
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell4Name + " and deal " + spell4 + " damage!")
          }
          bool = false;
          break;
      }
    }
    
    if (dungeonMonsterHealth <= 0) {
      alert("You have defeated the " + dungeonMonster + " !");
      var randNum = Math.random();
      dungeonMonsterHealthBool = false;
      switch(classNumba) {
        case 1:
          if (randNum <= 0.25) {
            weaponName = "Infinity Bow";
            DMG = DMG + 30;
            crit = crit + 20;
          }
          else if (randNum <= 0.5) {
            weaponName = "Heavy Revolter";
            DMG = DMG + 60;
            health = health + 60;
          }
          else if (randNum <= 0.75) {
            weaponName = "Spear of Vengeance";
            DMG = DMG + 20;
            dodge = 40;
          }
          else {
            weaponName = "Enchanted Boomerang";
            DMG = DMG + 30;
            magic = magic + 30;

          }
          break;
        case 2:
          if (randNum <= 0.25) {
            weaponName = "Lightning BattleAxe";
            DMG = DMG + 50;
            dodge = dodge + 20;
          }
          else if (randNum <= 0.5) {
            weaponName = "Bloodthirsty Blade";
            DMG = DMG + 30;
            health = health + 70;
          }
          else if (randNum <= 0.75) {
            weaponName = "Titanic Shield";
            health = health + 150;
          }
          else {
            weaponName = "Light Longsword";
            crit = crit + 40;
            dodge = dodge + 30;
          }
          break;
          case 3:
            if (randNum <= 0.25) {
              weaponName = "Void Staff";
              magic = magic + 70;
            }
            else if (randNum <= 0.5) {
              weaponName = ""
            }
      }//Here I need to put in the Weapon Name and their stats.
      //Here is the new Spell Formula

    }
    
    else {
      alert("The " + dungeonMonster + " has " + dungeonMonsterHealth + " health left!");
      var randNumba = Math.random();
      var dodged = dodge();
      if (randNumba <= 0.4) {
        health = health - (dungeonMonsterSpell1 * dodged);
        if (dodged = 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell1)
        }
      } // end if 0.3
      else if (randNumba <= 0.9) {
        health = health - (dungeonMonsterDMG * dodged);
        if (dodged = 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s attack")
        }
      }
      else {
        health = health - (dungeonMonsterSpell2 * dodged);
        if (dodged = 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell2)
        }
      }
    } // end else

    if (health <= 0) {
      alert("You have been defeated by the " + dungeonMonster + " !");
      healthBool = false;
    }

  } //end while

} //end func