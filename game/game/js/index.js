var name, className, mana, weaponName, DMG, spell1, spell2, spell3, spell4, manaPotion, healthPotion, dodge, health, magic, crit, spell1Name, spell2Name, spell3Name, spell4Name, spell1Mana, spell2Mana, spell3Mana, spell4Mana, classNumba;
var potionRegenings = 5;

function critFunction() {
  var randThree = Math.random();
  if (randThree * 100 <= crit) {
    return DMG * 2;
  }
  else {
    return DMG;
  }
}

function critSpellFunction() {
  var randThree = Math.random();
  if (randThree * 100 <= crit) {
    return 2;
  }
  else {
    return 1;
  }
}

function potionRegen(x) {
  if (x > 0) {
    var healed = potionRegenings * 20;
    return healed;
  }
  else {
    return 0;
  }
}


function useSpell1() {
  if (mana >= spell1Mana) {
    mana = mana - spell1Mana;
    return spell1;
  }
  else {
    return 0;
  }
}

function useSpell2() {
  if (mana >= spell2Mana) {
    mana = mana - spell2Mana;
    return spell2;
  }
  else {
    return 0;
  }
}

function useSpell3() {
  if (mana >= spell3Mana) {
    mana = mana - spell3Mana;
    return spell3;
  }
  else {
    return 0;
  }
}

function useSpell4() {
  if (mana >= spell4Mana) {
    mana = mana - spell4Mana;
    return spell4;
  }
  else {
    return 0;
  }
}

function dodges() {
  var randNumber = Math.random();
  if (randNumber * 100 <= dodge) {
    return 0;
  }
  else {
    return 1;
  }
}

function listStats() {
  document.getElementById('name').innerHTML = 'Name: ' + name;
  document.getElementById('className').innerHTML = 'Class: ' + className;
  document.getElementById('health').innerHTML = 'Health: ' + health;
  document.getElementById('mana').innerHTML = 'Mana: ' + mana;
  document.getElementById('DMG').innerHTML = 'Attack Damage: ' + DMG;
  document.getElementById('magic').innerHTML = 'Magic: ' + magic;
  document.getElementById('weaponName').innerHTML = 'Weapon: ' + weaponName;
  document.getElementById('dodge').innerHTML = 'Dodge Chance: ' + dodge + '%';
  document.getElementById('crit').innerHTML = 'Critical Attack Chance: ' + crit + '%';
  document.getElementById('healthPotion').innerHTML = 'Health Potion(s): ' + healthPotion;
  document.getElementById('manaPotion').innerHTML = 'Mana Potion(s): ' + manaPotion;
  document.getElementById('spell1').innerHTML = 'Spell One:<br>  -Name: ' + spell1Name + '<br>  -Mana Usage: ' + spell1Mana + '<br>  -Damage: ' + spell1;
  document.getElementById('spell2').innerHTML = 'Spell Two:<br>  -Name: ' + spell2Name + '<br>  -Mana Usage: ' + spell2Mana + '<br>  -Damage: ' + spell2;
  document.getElementById('spell3').innerHTML = 'Spell Three:<br>  -Name: ' + spell3Name + '<br>  -Mana Usage: ' + spell3Mana + '<br>  -Damage: ' + spell3;
  document.getElementById('spell4').innerHTML = 'Spell Four:<br>  -Name: ' + spell4Name + '<br>  -Mana Usage: ' + spell4Mana + '<br>  -Damage: ' + spell4;
  document.getElementById('cmd').innerHTML = 'Commands: <br>-Attack = Basic Attack<br>-HealthPotion = Use a Health Potion<br>-ManaPotion = Use a Mana Potion<br>-Spell1 = Use Spell One<br>-Spell2 = Use Spell Two<br>-Spell3 = Use Spell Three<br>-Spell4 = Use Spell Four';
}

function deleteListStats() {
  document.getElementById('name').style.display = 'none';
  document.getElementById('className').style.display = 'none';
  document.getElementById('health').style.display = 'none';
  document.getElementById('mana').style.display = 'none';
  document.getElementById('DMG').style.display = 'none';
  document.getElementById('magic').style.display = 'none';
  document.getElementById('weaponName').style.display = 'none';
  document.getElementById('dodge').style.display = 'none';
  document.getElementById('crit').style.display = 'none';
  document.getElementById('healthPotion').style.display = 'none';
  document.getElementById('manaPotion').style.display = 'none';
  document.getElementById('spell1').style.display = 'none';
  document.getElementById('spell2').style.display = 'none';
  document.getElementById('spell3').style.display = 'none';
  document.getElementById('spell4').style.display = 'none';
  document.getElementById('cmd').style.display = 'none';
}


function functionOne() {
  alert("You wake up in a deserted landscape. You remember that you mission is to survive through this treacherous place!");
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
      magic = 20;
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
        dodge = dodge + 10;
        crit = crit + 20;
      }
      document.getElementById('userChar').src = "../images/piq_62092_400x400.png";
      break;
    case 2:
      className = "Warrior";
      mana = 180;
      DMG = 45;
      health = 500;
      magic = 15;
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
        DMG = DMG + 10;
        health = health + 50;
      }
      else if (randOne <= 0.5) {
        weaponName = "Long Sword";
        DMG = DMG + 15;
      }
      else if (randOne <= 0.75) {
        weaponName = "Avarice Cutlass";
        crit = crit + 15;
        health = heatlh + 40;
      }
      else if (randOne <= 1) {
        weaponName = "Delvish Blade";
        dodge = dodge + 10;
      }
      document.getElementById('userChar').src = "../images/piq_75339_400x400.png";
      break;
    case 3:
      className = "Mage";
      mana = 420;
      DMG = 5;
      health = 300;
      magic = 30;
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
        magic = magic + 20;
        mana = mana + 30;
      }
      else if (randOne <= 0.5) {
        weaponName = "Bloodmoon Wand";
        magic = magic + 30;
      }
      else if (randOne <= 0.75) {
        weaponName = "Prototype Hexstaff";
        magic = magic + 5;
        crit = crit + 10;
      }
      else if (randOne <= 1) {
          weaponName = "Sorcerer's Shoes";
          dodge = dodge + 20;
          health = health + 60;
      }
      spell1 = magic * 2 + 60;
      spell2 = magic * 3 + 20;
      spell3 = magic * 4;
      spell4 = magic * 5;
      document.getElementById('userChar').src = "../images/piq_90809_400x400.png";
      break;
    case 4:
      className = "Rogue";
      mana = 240;
      DMG = 65;
      health = 200;
      dodge = 10;
      magic = 10;
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
        crit = crit + 25;
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
      document.getElementById('userChar').src = "../images/piq_140549_400x400.png";
      break;
  }
  //document.getElementById('buttonTwo').style.display = 'block';
  document.getElementById('starto').style.display = 'none';
  document.getElementById("bodyId").classList.remove("bodyClassInit");
  document.getElementById("bodyId").classList.add("bodyClassOne");
  document.getElementById("buttonTwo").classList.remove("hidden");
  document.getElementById("dungeonOne").style.display = 'block';
  document.getElementById("buttonTwo").classList.add("visible");
  listStats();
  alert("You walk into tall rockish building with small shining windows. You then blackout.");
  //document.body.style.backgroundImage = "url('../../images/night_sky_wallpaper_by_dji435-d66882b.png')";
}

function functionFour() {
  var dungeonMonster;
  var dungeonMonsterHealth;
  var dungeonMonsterSpell1;
  var dungeonMonsterSpell2;
  var dungeonMonsterDMG;
  var dungeonMonsterSpell1Name;
  var dungeonMonsterSpell2Name;
  var bool = true;
  alert("After you defeated the last monster, you enter another room that looks the same as the last.");
  var randTwo = prompt("Enter L to go towards the Blue. Enter R to go towards the Red").toUpperCase();
  if (randTwo == "R") {
      dungeonMonster = "Dreadful Drake";
      dungeonMonsterHealth = 1700;
      dungeonMonsterSpell1 = 100;
      dungeonMonsterSpell2 = 100;
      dungeonMonsterDMG = 60;
      dungeonMonsterSpell1Name = "Firey Breath";
      dungeonMonsterSpell2Name = "Wing Slam";
      //document.getElementById("bodyId").classList.remove("bodyClassTwo");
      document.getElementById("bodyId").classList.add("bodyClassDrake");
      document.getElementById('compChar').src = "../images/piq_48639_400x400.png";
      //document.p.color = 'black';
  }
  else if (randTwo == "L") {
      dungeonMonster = "Baron Nashor";
      dungeonMonsterHealth = 2000;
      dungeonMonsterSpell1 = 80;
      dungeonMonsterSpell2 = 80;
      dungeonMonsterDMG = 40;
      dungeonMonsterSpell1Name = "Tail Whip";
      dungeonMonsterSpell2Name = "Crunch Barrage";
      //document.getElementById("bodyId").classList.remove("bodyClassTwo");
      document.getElementById("bodyId").classList.add("bodyClassBaron");
      document.getElementById('compChar').src = "../images/pixel_snake_by_guiltplz-d5l7skp.png";
      //document.p.color = 'black';
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
          dungeonMonsterHealth = dungeonMonsterHealth - damaeTaken;
          alert("The " + dungeonMonster + " has lost " + damaeTaken + ". He has " + dungeonMonsterHealth + " health left!");
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
          var critt = critSpellFunction();
          var used = useSpell1() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell1Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL2":
          var critt = critSpellFunction();
          var used = useSpell2() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell2Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL3":
          var critt = critSpellFunction();
          var used = useSpell3() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell3Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL4":
          var critt = critSpellFunction();
          var used = useSpell4() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell4Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
      }
    }
    
    if (dungeonMonsterHealth <= 0) {
      alert("You have defeated the " + dungeonMonster + "!");
      alert("You blackout....");
      alert("When you finally come to your senses, you see you have escaped the dungeon, and that you are back home.")
      var randNum = Math.random();
      dungeonMonsterHealthBool = false;
      document.getElementById('bodyId').classList.remove('bodyClassDrake');
      document.getElementById('bodyId').classList.remove('bodyClassBaron');
      document.getElementById('bodyId').classList.add('bodyClassVictory');
      /*
      switch(classNumba) {
        case 1:
          if (randNum <= 0.25) {
            weaponName = weaponName.concat(" & Last Whisper");
            DMG = DMG + 60;
            crit = crit + 30;
          }
          else if (randNum <= 0.5) {
            weaponName = weaponName.concat(" & Heavy Revolter");
            DMG = DMG + 60;
            health = health + 60;
          }
          else if (randNum <= 0.75) {
            weaponName = weaponName.concat(" & Charged Laser");
            DMG = DMG + 80;
            crit = crit + 10
          }
          else {
            weaponName = weaponName.concat(" & Mini-Balista");
            DMG = DMG + 30;
            magic = magic + 30;

          }
          break;
        case 2:
          if (randNum <= 0.25) {
            weaponName = weaponName.concat(" & Slicing Katana");
            DMG = DMG + 50;
            dodge = dodge + 20;
          }
          else if (randNum <= 0.5) {
            weaponName = weaponName.concat(" & Heavy Offensive Shield");
            health = health + 100;
            DMG = DMG + 30;
          }
          else if (randNum <= 0.75) {
            weaponName = weaponName.concat(" & Defensive Shield");
            health = health + 100;
            dodge = dodge + 10;
          }

          else {
            weaponName = "Infinity Sword";
            crit = crit + 40;
            dodge = dodge + 30;
          }
          break;
          //Need to FInish underneath EHre
          case 3:
            if (randNum <= 0.25) {
              weaponName = "Abyssal Staff";
              magic = magic + 70;
            }
            else if (randNum <= 0.5) {
              weaponName = "Staff of Ember";
              magic = magic + 30;
              health = health + 40;
            }
            else if (randNum <= 0.75) {
              weaponName = "Rabadon's Scepter";
              mana = mana + 300;
              magic = magic + 10;
            }
            else {
              weaponName = "Staff of the Spectre";
              health = health + 70;
              mana = mana + 50;
            }
            break;
          case 4:
            if (randNum <= 0.25) {
              weaponName = "The King's Ghostblade";
              DMG = DMG + 50;
            }
            else if (randNum <= 0.5) {
              weaponName = "White Stinger"
              DMG = DMG + 20;
              dodge = dodge + 30;
            }
            else if (randNum <= 0.75) {
              weaponName = "Prospector's Blade";
              DMG = DMG + 20;
              crit = crit + 20;
            }
            else {
              weaponName = "Dervish Dagger";
              health = health + 70;
            }
      }//Here I need to put in the Weapon Name and their stats.
      //Here is the new Spell Formula
      spell1 = magic * 2 + 150;
      spell2 = magic * 3 + 100;
      spell3 = magic * 4 + 60;
      spell4 = magic * 5 + 80;
      */
    }
    
    else {
      alert("The " + dungeonMonster + " has " + dungeonMonsterHealth + " health left!");
      var randNumba = Math.random();
      var dodged = dodges();
      if (randNumba <= 0.3) {
        health = health - (dungeonMonsterSpell1 * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell1);
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      } // end if 0.3
      else if (randNumba <= 0.5) {
        health = health - (dungeonMonsterDMG * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s attack");
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      }
      else {
        health = health - (dungeonMonsterSpell2 * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell2);
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      }
    } // end else

    if (health <= 0) {
      alert("You have been defeated by the " + dungeonMonster + " !");
      deleteListStats();
      healthBool = false;
    }

  } //end while
  listStats();
  document.getElementById('dungeonTwo').style.display = 'hidden';
  document.getElementById('dungeonThree').style.display = 'block';
}

function functionThree() {
  var dungeonMonster;
  var dungeonMonsterHealth;
  var dungeonMonsterSpell1;
  var dungeonMonsterSpell2;
  var dungeonMonsterDMG;
  var dungeonMonsterSpell1Name;
  var dungeonMonsterSpell2Name;
  var bool = true;
  alert("You see two path ways. One red, one blue");
  var randTwo = prompt("Enter L if you want to go left, towards the blue. Enter R if you want to go right, towards the red.").toUpperCase();
  if (randTwo == "L") {
      dungeonMonster = "One-Eyed Blue Golem";
      dungeonMonsterHealth = 1200;
      dungeonMonsterSpell1 = 80;
      dungeonMonsterSpell2 = 100;
      dungeonMonsterDMG = 55;
      dungeonMonsterSpell1Name = "Rock Slam";
      dungeonMonsterSpell2Name = "Laser Sight";
      document.getElementById('compChar').src = "../images/b9671a1cfb3a1e41a1c5b202a46e10ef.png";
  }
  else if (randTwo == "R") {
      dungeonMonster = "Firey Red Lizard";
      dungeonMonsterHealth = 700;
      dungeonMonsterSpell1 = 100;
      dungeonMonsterSpell2 = 140;
      dungeonMonsterDMG = 70;
      dungeonMonsterSpell1Name = "Ravage Chomp";
      dungeonMonsterSpell2Name = "Claw Barrage";
      document.getElementById('compChar').src = "../images/tumblr_ma0tijLFPg1rfjowdo1_500.gif";
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
          dungeonMonsterHealth = dungeonMonsterHealth - damaeTaken;
          alert("The " + dungeonMonster + " has lost " + damaeTaken + ". He has " + dungeonMonsterHealth + " health left!");
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
          var critt = critSpellFunction();
          var used = useSpell1() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell1Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL2":
          var critt = critSpellFunction();
          var used = useSpell2() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell2Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL3":
          var critt = critSpellFunction();
          var used = useSpell3() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell3Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL4":
          var critt = critSpellFunction();
          var used = useSpell4() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell4Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
      }
    }
    
    if (dungeonMonsterHealth <= 0) {
      alert("You have defeated the " + dungeonMonster + "!");
      var randNum = Math.random();
      dungeonMonsterHealthBool = false;
      switch(classNumba) {
        case 1:
          if (randNum <= 0.25) {
            weaponName = weaponName.concat(" & Last Whisper");
            DMG = DMG + 60;
            crit = crit + 30;
          }
          else if (randNum <= 0.5) {
            weaponName = weaponName.concat(" & Heavy Revolter");
            DMG = DMG + 60;
            health = health + 60;
          }
          else if (randNum <= 0.75) {
            weaponName = weaponName.concat(" & Charged Laser");
            DMG = DMG + 80;
            crit = crit + 10
          }
          else {
            weaponName = weaponName.concat(" & Mini-Balista");
            DMG = DMG + 30;
            magic = magic + 30;

          }
          break;
        case 2:
          if (randNum <= 0.25) {
            weaponName = weaponName.concat(" & Slicing Katana");
            DMG = DMG + 50;
            dodge = dodge + 20;
          }
          else if (randNum <= 0.5) {
            weaponName = weaponName.concat(" & Heavy Offensive Shield");
            health = health + 100;
            DMG = DMG + 30;
          }
          else if (randNum <= 0.75) {
            weaponName = weaponName.concat(" & Defensive Shield");
            health = health + 100;
            dodge = dodge + 10;
          }

          else {
            weaponName = weaponName.concat(" & Infinity Sword");
            crit = crit + 40;
            dodge = dodge + 30;
          }
          break;
          //Need to FInish underneath EHre
        case 3:
            if (randNum <= 0.25) {
              weaponName = weaponName.concat(" & Abyssal Staff");
              magic = magic + 70;
              health = health + 30;
            }
            else if (randNum <= 0.5) {
              weaponName = weaponName.concat(" & Black Book of Magic");
              magic = magic + 50;
              crit = crit + 20;
            }
            else if (randNum <= 0.75) {
              weaponName = weaponName.concat(" & Rabadon's Deathcap");
              magic = magic + 70;
              mana = mana + 100;
            }
            else {
              weaponName = weaponName.concat(" & Staff of the Dark Realm");
              health = health + 70;
              mana = mana + 50;
              crit = crit + 20;
            }
            break;
        case 4:
            if (randNum <= 0.25) {
              weaponName = "Infinity Edge";
              DMG = DMG + 70;
              crit = crit + 20;
            }
            else if (randNum <= 0.5) {
              weaponName = "Kenzo's Ghostblade"
              DMG = DMG + 30;
              dodge = dodge + 30;
            }
            else if (randNum <= 0.75) {
              weaponName = "Blade of the Bantony";
              DMG = DMG + 20;
              crit = crit + 20;
              health = health + 70;
            }
            else {
              weaponName = "Sword of the Cults";
              health = health + 150;
            }
      }//Here I need to put in the Weapon Name and their stats.
      //Here is the new Spell Formula
      spell1 = magic * 2 + 150;
      spell2 = magic * 3 + 100;
      spell3 = magic * 4 + 60;
      spell4 = magic * 5 + 80;
      magic = magic + 20;
      DMG = DMG + 30;
      health = health + 200;
      document.getElementById('dungeonThree').style.display = 'block';
      document.getElementById('buttonFour').style.display = 'block';
      potionRegenings = 20;
      healthPotion = healthPotion + 5;
      manaPotion = manaPotion + 5;
    }
    
    else {
      alert("The " + dungeonMonster + " has " + dungeonMonsterHealth + " health left!");
      var randNumba = Math.random();
      var dodged = dodges();
      if (randNumba <= 0.3) {
        health = health - (dungeonMonsterSpell1 * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell1);
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      } // end if 0.3
      else if (randNumba <= 0.5) {
        health = health - (dungeonMonsterDMG * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s attack");
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      }
      else {
        health = health - (dungeonMonsterSpell2 * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell2);
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      }
    } // end else

    if (health <= 0) {
      alert("You have been defeated by the " + dungeonMonster + " !");
      document.getElementById('bodyId').classList.remove("bodyClassTwo");
      deleteListStats();
      healthBool = false;
    }

  } //end while
  listStats();
  document.getElementById('dungeonTwo').style.display = 'none';
  document.getElementById('buttonThree').style.display = 'none';
}

function functionTwo() {
  var randTwo = Math.random();
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
      document.getElementById('compChar').src = "../images/piq_14256_400x400.png";
  }
  else if (randTwo <= 0.5) {
      dungeonMonster = "Pack of Wolves";
      dungeonMonsterHealth = 250;
      dungeonMonsterSpell1 = 50;
      dungeonMonsterSpell2 = 70;
      dungeonMonsterDMG = 45;
      dungeonMonsterSpell1Name = "Shadow Strike";
      dungeonMonsterSpell2Name = "Crunch";
      document.getElementById('compChar').src = "../images/pixel_wolf__with_transparent_bg__by_shadows_echo-d4z4orb.gif";
  }
  else if (randTwo <= 0.75) {
      dungeonMonster = "Flock of Ravage Birds";
      dungeonMonsterHealth = 210;
      dungeonMonsterSpell1 = 60;
      dungeonMonsterSpell2 = 90;
      dungeonMonsterDMG = 55;
      dungeonMonsterSpell1Name = "Wing Attack";
      dungeonMonsterSpell2Name = "Drill Peck";
      document.getElementById('compChar').src = "../images/piq_28493_400x400.png";
  }
  else if (randTwo <= 1) {
      dungeonMonster = "Group of Rock Golems";
      dungeonMonsterHealth = 400;
      dungeonMonsterSpell1 = 20;
      dungeonMonsterSpell2 = 30;
      dungeonMonsterDMG = 15;
      dungeonMonsterSpell1Name = "Rock Smash";
      dungeonMonsterSpell2Name = "Stone Edge";
      document.getElementById('compChar').src = "../images/pokemon_sprite__076_golem_by_akatsukidevil-d5ridv8.png";
  }
  alert("You wake up to find yourself in a dungeon where only the lights from the bright red torches shine. You walk forward. You then find your tools and weapons next to you. As if the owners of this dungeon want you to escape.");
  alert("SUDDENLY, a wild " + dungeonMonster + " appears before you!");
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
          dungeonMonsterHealth = dungeonMonsterHealth - damaeTaken;
          alert("The " + dungeonMonster + " has lost " + damaeTaken + " health. He has " + dungeonMonsterHealth + " health left!");
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
          var critt = critSpellFunction();
          var used = useSpell1() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell1Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL2":
          var critt = critSpellFunction();
          var used = useSpell2() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell2Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL3":
          var critt = critSpellFunction();
          var used = useSpell3() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell3Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SPELL4":
          var critt = critSpellFunction();
          var used = useSpell4() * critt;
          dungeonMonsterHealth = dungeonMonsterHealth - used;
          if (used == 0) {
            alert("You do not have enough mana to cast this spell!");
          }
          else {
            alert("You use " + spell4Name + " and deal " + used + " damage!")
          }
          bool = false;
          break;
        case "SKIPMON":
          dungeonMonsterHealth = 0;
          bool = false;
          break;
      }
    }
    
    if (dungeonMonsterHealth <= 0) {
      alert("You have defeated the " + dungeonMonster + " !");
      alert("Then, a brown bag appears before you. You put your hand in, and you pull out a shiny new weapon. You then continue to walk through the dungeon.");
      var randNum = Math.random();
      dungeonMonsterHealthBool = false;
      document.getElementById("bodyId").classList.remove("bodyClassOne");
      document.getElementById("bodyId").classList.add("bodyClassTwo");
      magic = magic + 20;
      DMG = DMG + 50;
      health = health + 150;
      heakthPotion = healthPotion + 3;
      manaPotion = manaPotion + 3;
      switch(classNumba) {
        case 1:
          if (randNum <= 0.25) {
            weaponName = weaponName.concat(" & Infinity Bow");
            DMG = DMG + 30;
            crit = crit + 20;
          }
          else if (randNum <= 0.5) {
            weaponName = weaponName.concat(" & Heavy Revolter");
            DMG = DMG + 60;
            health = health + 60;
          }
          else if (randNum <= 0.75) {
            weaponName = weaponName.concat(" & Spear of Vengeance");
            DMG = DMG + 20;
            dodge = dodge + 40;
          }
          else {
            weaponName = weaponName.concat(" & Enchanted Boomerang");
            DMG = DMG + 30;
            magic = magic + 30;

          }
          break;
        case 2:
          if (randNum <= 0.25) {
            weaponName = weaponName.concat(" & Lightning BattleAxe");
            DMG = DMG + 50;
            dodge = dodge + 20;
          }
          else if (randNum <= 0.5) {
            weaponName = weaponName.concat(" & Bloodthirsty Blade");
            DMG = DMG + 30;
            health = health + 70;
          }
          else if (randNum <= 0.75) {
            weaponName = weaponName.concat(" & Titanic Shield");
            health = health + 150;
          }
          else {
            weaponName = weaponName.concat(" & Light Longsword");
            crit = crit + 40;
            dodge = dodge + 30;
          }
          break;
          case 3:
            if (randNum <= 0.25) {
              weaponName = weaponName.concat(" & Void Staff");
              magic = magic + 70;
            }
            else if (randNum <= 0.5) {
              weaponName = weaponName.concat(" & Staff of Ember");
              magic = magic + 30;
              health = health + 40;
            }
            else if (randNum <= 0.75) {
              weaponName = weaponName.concat(" & Rabadon's Scepter");
              mana = mana + 300;
              magic = magic + 10;
            }
            else {
              weaponName = weaponName.concat(" & Staff of the Spectre");
              health = health + 70;
              mana = mana + 50;
            }
            break;
          case 4:
            if (randNum <= 0.25) {
              weaponName = weaponName.concat(" & The King's Ghostblade");
              DMG = DMG + 50;
            }
            else if (randNum <= 0.5) {
              weaponName = weaponName.concat(" & White Stinger");
              DMG = DMG + 20;
              dodge = dodge + 30;
            }
            else if (randNum <= 0.75) {
              weaponName = weaponName.concat(" & Prospector's Blade");
              DMG = DMG + 20;
              crit = crit + 20;
            }
            else {
              weaponName = weaponName.concat(" & Dervish Dagger");
              health = health + 70;
            }
      }//Here I need to put in the Weapon Name and their stats.
      //Here is the new Spell Formula
      spell1 = magic * 2 + 100;
      spell2 = magic * 3 + 60;
      spell3 = magic * 4 + 30;
      spell4 = magic * 5 + 50;
      document.getElementById('buttonThree').style.display = 'block';
      document.getElementById('dungeonTwo').style.display = 'block';
      listStats();
      potionRegenings = 10;
    }
    
    else {
      alert("The " + dungeonMonster + " has " + dungeonMonsterHealth + " health left!");
      var randNumba = Math.random();
      var dodged = dodges();
      if (randNumba <= 0.4) {
        health = health - (dungeonMonsterSpell1 * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell1Name);
          alert("You have " + health + " health left and " + mana + " mana left!");
        }
      } // end if 0.3
      else if (randNumba <= 0.9) {
        health = health - (dungeonMonsterDMG * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s attack");
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      }
      else {
        health = health - (dungeonMonsterSpell2 * dodged);
        if (dodged == 0) {
          alert("You have managed to dodge their attack!");
        }
        else {
          alert("You get hit by the " + dungeonMonster + "'s " + dungeonMonsterSpell2Name);
          alert("You have " + health + " health left, and " + mana + " mana left!");
        }
      }
    } // end else

    if (health <= 0) {
      alert("You have been defeated by the " + dungeonMonster + " !");
      alert("You die a slow painful death....");
      document.getElementById("bodyId").classList.remove("bodyClassOne");
      document.getElementById("bodyId").style.backgroundColor = "black";
      deleteListStats();
      healthBool = false;
    }

  } //end while

  document.getElementById('dungeonOne').style.display = "none";
  
  

} //end func
