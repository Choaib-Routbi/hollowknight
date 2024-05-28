var home_btn = document.getElementById("home_btn")
var seconde_btn = document.getElementById("seconde_btn")
var Pricing_btn = document.getElementById("Pricing_btn")
var FAQs_btn = document.getElementById("FAQs_btn")
var About_btn = document.getElementById("About_btn")
var Support = document.getElementById("Support")

// nav buttons focus 
home_btn.onclick=()=>{
    home_btn.setAttribute("class","nav_a_clicked")
    seconde_btn.removeAttribute("class")
    Pricing_btn.removeAttribute("class")
    FAQs_btn.removeAttribute("class")
    About_btn.removeAttribute("class")
    Support.removeAttribute("class")



}
seconde_btn.onclick=()=>{
    seconde_btn.setAttribute("class","nav_a_clicked")
    home_btn.removeAttribute("class")
    Pricing_btn.removeAttribute("class")
    FAQs_btn.removeAttribute("class")
    About_btn.removeAttribute("class")    
    Support.removeAttribute("class")
    
    
    

}
Pricing_btn.onclick=()=>{
    Pricing_btn.setAttribute("class","nav_a_clicked")
    seconde_btn.removeAttribute("class")
    home_btn.removeAttribute("class")
    FAQs_btn.removeAttribute("class")
    About_btn.removeAttribute("class")   
    Support.removeAttribute("class")
    
    
    

}
FAQs_btn.onclick=()=>{
    FAQs_btn.setAttribute("class","nav_a_clicked")
    Pricing_btn.removeAttribute("class")
    seconde_btn.removeAttribute("class")
    home_btn.removeAttribute("class")
    About_btn.removeAttribute("class")   
    Support.removeAttribute("class")
    
    
    

}
About_btn.onclick=()=>{
    About_btn.setAttribute("class","nav_a_clicked")
    FAQs_btn.removeAttribute("class")
    Pricing_btn.removeAttribute("class")
    seconde_btn.removeAttribute("class")
    home_btn.removeAttribute("class")
    Support.removeAttribute("class")
    
    
    
    

}
Support.onclick=()=>{
    Support.setAttribute("class","nav_a_clicked")
    About_btn.removeAttribute("class")
    FAQs_btn.removeAttribute("class")
    Pricing_btn.removeAttribute("class")
    seconde_btn.removeAttribute("class")
    home_btn.removeAttribute("class")
    
    
    
    

}

// close charm infos

var close_info = document.getElementById("close")
var charm_help_ctnr = document.getElementById("charm_help_ctnr")

close_info.onclick=()=>{
    charm_help_ctnr.style.display="none"
}
//////////////////////

var card1  = document.getElementById("card1") 
var card2  = document.getElementById("card2") 
var card3  = document.getElementById("card3") 
var card4  = document.getElementById("card4") 
var card5  = document.getElementById("card5") 
var card6  = document.getElementById("card6") 
var card7  = document.getElementById("card7") 
var card8  = document.getElementById("card8") 
var card9  = document.getElementById("card9") 
var card10 = document.getElementById("card10")  
var card11 = document.getElementById("card11")  
var card12 = document.getElementById("card12")  
var card13 = document.getElementById("card13")  
var card14 = document.getElementById("card14")  
var card15 = document.getElementById("card15")  
var card16 = document.getElementById("card16")  
var card17 = document.getElementById("card17")  
var card18 = document.getElementById("card18")  
var card19 = document.getElementById("card19")  
var card20 = document.getElementById("card20")  
var card21 = document.getElementById("card21")  
var card22 = document.getElementById("card22")  
var card23 = document.getElementById("card23")  
var card24 = document.getElementById("card24")  
var card25 = document.getElementById("card25")  
var card26 = document.getElementById("card26")  
var card27 = document.getElementById("card27")  
var card28 = document.getElementById("card28") 
var card29 = document.getElementById("card29") 
var card30 = document.getElementById("card30") 
var card31 = document.getElementById("card31") 
var card32 = document.getElementById("card32") 
var card33 = document.getElementById("card33") 
var card34 = document.getElementById("card34") 
var card35 = document.getElementById("card35") 
var card36 = document.getElementById("card36") 
var card37 = document.getElementById("card37") 
var card38 = document.getElementById("card38") 
var card39 = document.getElementById("card39") 
var card40 = document.getElementById("card40") 
var card41 = document.getElementById("card41") 
var card42 = document.getElementById("card42") 
var card43 = document.getElementById("card43") 
var card44 = document.getElementById("card44") 
var card45 = document.getElementById("card45") 
var card46 = document.getElementById("card46") 

var circle1 = document.getElementById("circle1")
var circle2 = document.getElementById("circle2")

var mapv1 = document.getElementById("mapv1")
var mapv2 = document.getElementById("mapv2")

circle1.style.backgroundColor="var(--green)"
mapv1.style.display="block"
mapv2.style.display="none"


circle1.onclick=()=>{
    circle1.style.backgroundColor="var(--green)"
    circle2.style.backgroundColor="rgba(145, 145, 145, 0.356)"
    mapv2.style.display="none"
    mapv1.style.display="block"

}
circle2.onclick=()=>{
    circle2.style.backgroundColor="var(--green)"
    circle1.style.backgroundColor="rgba(145, 145, 145, 0.356)"
    mapv1.style.display="none"
    mapv2.style.display="block"

}

var charm_name = document.getElementById("charm_name")
var charm_use = document.getElementById("charm_use")
var charm_location = document.getElementById("charm_location")

card1.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Void Heart"
    charm_use.innerText=" An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.This charm is a part of its bearer and can not be unequipped.(Secondary Effect: Grants access to multiple endings, locks out all other endings. Removes hostility from some enemy types.)"
    charm_location.innerText="Abyss (Western region of the Abyss called the Birthplace. Requires AND REPLACES Kingsoul Charm.)"
}
card2.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Wayward Compass"
charm_use.innerText="Whispers its location to the bearer whenever a map is open, allowing wanderers to pinpoint their current location."
charm_location.innerText="Dirtmouth (Iselda & Cornifer's Shop - 220 Geo)"
    // card2.classList.add("bounce")
}
card3.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Gathering Swarm"
charm_use.innerText="A swarm will follow the bearer and gather up any loose Geo ,Useful for those who can t bear to leave anything behind, no matter how insignificant."
charm_location.innerText="Dirtmouth (Sly - 300 Geo)"
}
card4.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Stalwart Shell"
charm_use.innerText="Builds resilience. When recovering from damage, the bearer will remain invulnerable for longer. Makes it easier to escape from dangerous situations."
charm_location.innerText="Dirtmouth (Sly - 200 Geo)"
}
card5.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Soul Catcher"
charm_use.innerText="Used by shamans to draw more Soul from the world around them. Increases the amount of Soul gained when striking an enemy with the nail."
charm_location.innerText="Forgotten Crossroads (Obtained after defeating Elder Baldur)"
}
card6.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Shaman Stone"
charm_use.innerText="Said to contain the knowledge of past generations of shaman. Increases the power of spells, dealing more damage to foes."
charm_location.innerText="Forgotten Crossroads (Charm Lover Salubra - 220 Geo)"
}
card7.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Soul Eater"
charm_use.innerText="Forgotten shaman artifact, used to draw Soul from still-living creatures. Greatly increases the amount of Soul gained when striking an enemy with the nail."
charm_location.innerText="Resting Grounds (Requires Desolate Dive/Descending Dark)"
}
card8.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Dashmaster"
charm_use.innerText="Bears the likeness of an eccentric bug known only as 'The Dashmaster'.The bearer will be able to dash more often as well as dash downwards. Perfect for those who want to move around as quickly as possible."
charm_location.innerText="Fungal Wastes (South of Mantis Village and just left of southern area Bench)"
}
card9.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Sprintmaster"
charm_use.innerText="Bears the likeness of a strange bug known only as 'The Sprintmaster'.Increases the running speed of the bearer, allowing them to avoid danger or overtake rivals."
charm_location.innerText="Dirtmouth (Sly - 400 Geo. Requires Shopkeeper's Key.)"
}
card10.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Grubsong"
    charm_use.innerText="Contains the gratitude of freed grubs.Gain Soul when taking damage."
    charm_location.innerText="Forgotten Crossroads (Grubfather - Requires 10 Grubs)"
}
card11.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Grubberfly's Elegy"
    charm_use.innerText="Contains the gratitude of gr ubs who will move to the next stage of their lives. Imbues weapons with a holy strength.When the bearer is at full health, they will fire beams of white-hot energy from their nail."
    charm_location.innerText="Forgotten Crossroads (Grubfather - Requires 46 Grubs)"
}
card12.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Fragile/Unbreakable Heart"
    charm_use.innerText="Increases the health of the bearer, allowing them to take more damage.(Grants 2 Extra Masks)Fragile version breaks upon death. Visit Leg Eater to repair it for 200 Geo (Equip Defender's Crest to repair for 160 Geo)"
    charm_location.innerText="Fungal Wastes (Leg Eater - 350 Geo. Equip Defender's Crest to purchase for 280 Geo.)Upgrade: Dirtmouth (Divine - 12,000 Geo)"
}
card13.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Fragile/Unbreakable Greed"
    charm_use.innerText="Causes the bearer to find more Geo when defeating enemies.Fragile version breaks upon death. Visit Leg Eater to repair it for 200 Geo (Equip Defender's Crest to repair for 120 Geo)"
charm_location.innerText="	Fungal Wastes (Leg Eater - 250 Geo. Equip Defender's Crest to purchase for 200 Geo)Upgrade: Dirtmouth (Divine - 9000 Geo)"
}
card14.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Fragile/Unbreakable Strength"
    charm_use.innerText="Strengthens the bearer, increasing the damage they deal to enemies with their nail.Fragile version breaks upon death. Visit Leg Eater to repair it for 350 Geo (Equip Defender's Crest to repair for 280 Geo)"
charm_location.innerText="	Fungal Wastes (Leg Eater - 600 Geo. Equip Defender's Crest to purchase for 480 Geo)Upgrade: Dirtmouth (Divine - 15,000 Geo)"
}
card15.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Spell Twister"
    charm_use.innerText="Reflecting the desires of the Soul Sanctum for mastery over Soul, it improves the bearer's ability to cast spells.Reduces the Soul cost of casting spells."
charm_location.innerText="City of Tears (Northeastern part of Soul Sanctum)"
}
card16.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Steady Body"
    charm_use.innerText="Keeps its bearer from recoil ing backwards when they strike an enemy with a nail.Allows one to stay steady and keep attacking."
charm_location.innerText="Forgotten Crossroads (Charm Lover Salubra - 120 Geo)"
}
card17.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Heavy Blow"
    charm_use.innerText="Formed from the nails of fall en warriors.Increases the force of the bearer's nail, causing enemies to recoil further when hit."
charm_location.innerText="Dirtmouth (Sly - 350 Geo. Requires Shopkeeper's Key)"
}
card18.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Quick Slash"
    charm_use.innerText="Born from imperfect, discarded nails that have fused together. The nails still long to be wielded.Allows the bearer to slash much more rapidly with their nail."
charm_location.innerText="Kingdom's Edge (Hidden room in southeastern Kingdom's Edge)"
}
card19.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Longnail"
    charm_use.innerText="Increases the range of the bearer's nail, allowing them to strike foes from further away."
charm_location.innerText="Forgotten Crossroads (Charm Lover Salubra - 300 Geo)"
}
card20.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Mark of Pride"
    charm_use.innerText="Freely given by the Mantis Tribe to those they respect.Greatly increases the range of the bearer's nail, allowing them to strike foes from further away"
charm_location.innerText="Fungal Wastes (Chest in Mantis Village, northeast of Mantis Lords encounter. Requires victory over Mantis Lords)"
}
card21.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Fury of the Fallen"
    charm_use.innerText="Embodies the fury and heroism that comes upon those who are about to die.When close to death, the bearer's strength will increase."
charm_location.innerText="Dirtmouth (Obtainable during intro sequence in King's Pass, but requires use of Nail Jump technique.)"
}
card22.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Thorns of Agony"
    charm_use.innerText="Senses the pain of its bearer and lashes out at the world around them.When taking damage, sprout thorny vines that damage nearby foes."
charm_location.innerText="	Greenpath (Thorny platforming area towards the center of the region. Requires Mothwing Cloak)"
}
card23.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Baldur Shell"
    charm_use.innerText="Protects its bearer with a hard shell while focusing Soul.The shell is not indestructible and will shatter if it absorbs too much damage."
charm_location.innerText="Howling Cliffs (Southwestern section, near Greenpath)"
}
card24.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Flukenest"
charm_use.innerText="Living charm born in the gut of a Flukemarm.Transforms the Vengeful Spirit spell into a horde of volatile baby flukes."
charm_location.innerText="Royal Waterways (Southwestern region. Requires victory over Flukemarm)"
}
card25.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Defender's Crest"
charm_use.innerText="Unique charm bestowed by the King of Hallownest to his most loyal knight. Scratched and dirty, but still cared for.Causes the bearer to emit a heroic odour."
charm_location.innerText="Royal Waterways (Northeastern region. Requires victory over Dung Defender)"
}
card26.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Glowing Womb"
charm_use.innerText="Drains the Soul of its bearer and uses it to birth hatchlings.The hatchlings have no desire to eat or live, and will sacrifice themselves to protect their parent."
charm_location.innerText="Forgotten Crossroads (Central region, near False Knight. Requires Crystal Heart.)"
}
card27.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Quick Focus"
charm_use.innerText="A charm containing a crystal lens.Increases the speed of focusing Soul, allowing the bearer to heal damage faster."
charm_location.innerText="Forgotten Crossroads (Charm Lover Salubra - 800 Geo)"
}
card28.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="lifeblood heart"
charm_use.innerText="Contains a living core that seeps precious lifeblood.When resting, the bearer will gain a coating of lifeblood that protects from a modest amount of damage.(Sitting at a bench grants 2 temporary bonus Masks.)"
charm_location.innerText="Abyss (Western region of the Abyss called the Birthplace. Requires AND REPLACES Kingsoul Charm.)"
}
card29.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="deep focus"
charm_use.innerText="Naturally formed within a crystal over a long period. Draws in Soul from the surrounding air.The bearer will focus Soul at a slower rate, but the healing effect will double."
charm_location.innerText="Crystal Peak (Hidden area below passageway to Dirtmouth. Requires Crystal Heart.)"
}
card30.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Lifeblood Core"
charm_use.innerText="Contains a living core that seeps precious lifeblood.When resting, the bearer will gain a coating of lifeblood that protects from a modest amount of damage.(Sitting at a bench grants 2 temporary bonus Masks.)"
charm_location.innerText="The Abyss (Western region. Entry to the hidden room requires the player to currently possess 15+ Lifeblood masks, via Lifeseeds, Lifeblood Heart, Joni's Blessing, Fragile Heart)"
}

card31.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Joni's Blessing"
charm_use.innerText="Blessed by Joni, the kindly heretic. Transfigures vital fluids into blue lifeblood.The bearer will have a healthier shell and can take more damage, but they will not be able to heal themselves by focusing Soul."
charm_location.innerText="Howling Cliffs (Hidden chamber in central/southern Howling Cliffs, called Joni's Repose.)"
}

card32.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Hiveblood"
charm_use.innerText="Golden nugget of the Hive's precious hardened nectar.Heals the bearer's wounds over time, allowing them to regain health without focusing Soul."
charm_location.innerText="The Hive (Eastern region. Requires victory over Hive Knight)"
}

card33.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Spore Shroom"
charm_use.innerText="Composed of living fungal matter. Scatters spores when exposed to Soul.When focusing Soul, emit a spore cloud that slowly damages enemies.(Secondary effect: grants the bearer the ability to speak with Mister Mushroom, read fungal Lore Tablets)"
charm_location.innerText="Fungal Wastes (Southwestern region, south of Queen's Station Stagway. Requires Mantis Claw.)"
}

card34.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Sharp Shadow"
charm_use.innerText="Contains a forbidden spell that transforms shadows into deadly weapons.When using Shadow Dash, the bearer's body will sharpen and damage enemies."
charm_location.innerText="Deepnest (Southeastern corner. Requires Shade Cloak.)"
}

card35.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Shape of Unn"
charm_use.innerText="Reveals the form of Unn within the bearer.While focusing Soul, the bearer will take on a new shape and can move freely to avoid enemies."
charm_location.innerText="Greenpath (Lake of Unn region. Requires Isma's Tear.)"
}

card36.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Nailmaster's Glory"
charm_use.innerText="Contains the passion, skill and regrets of a Nailmaster.Increases the bearer's mastery of Nail Arts, allowing them to focus their power faster and unleash arts sooner."
charm_location.innerText="Dirtmouth (Sly - Awarded after collecting all Nail Arts. Requires Great Slash, Dash Slash, Cyclone Slash.)"
}

card37.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Weaversong"
charm_use.innerText="Silken charm containing a song of farewell, left by the Weavers who departed Hallownest for their old home.Summons weaverlings to give the lonely bearer some companionship and protection."
charm_location.innerText="Deepnest (Southern/central region)"
}

card38.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Dream Wielder"
charm_use.innerText="	Transient charm created for those who wield the Dream Nail and collect Essence.Allows the bearer to charge the Dream Nail faster and collect more Soul when striking foes."
charm_location.innerText="Resting Grounds (Seer - Requires 500 Essence)"
}

card39.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Dreamshield"
charm_use.innerText="Defensive charm once wielded by a tride that could shape dreams.Conjures a shield that follows the bearer and attempts to protect them."
charm_location.innerText="Resting Grounds (Eastern region, just south of the Seer.)"
}

card40.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Grimmchild"
charm_use.innerText="Worn by those who take part in the Grimm Troupe's RitualThe bearer must seek the Grimmkin and collect their flames. Uncollected flames will appear on the bearer's map.(Summons a flying creature which will deal damage to enemies. Damage dealt scales with number of flames collected.)"
charm_location.innerText="Dirtmouth (Grimm)"
}

card41.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Carefree Melody"
charm_use.innerText="	Token commemorating the start of a friendship.Contains a song of protections that may defend the bearer from damage."
charm_location.innerText="Dirtmouth. (After banishing the Grimm Troupe in the Howling Cliffs, speak to Nymm, who is standing next to the Dirtmouth Bench)"
}

card42.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="White Fragment"
charm_use.innerText="	Fragment of a white charm. It can not be equipped."
charm_location.innerText="Queen's Gardens (White Lady - Requires victory over Traitor Lord.)"
}

card43.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="White Fragment (Second)"
charm_use.innerText="Fragment of a white charm. It can not be equipped."
charm_location.innerText="White Palace (Pale King)"
}

card44.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Kingsoul"
charm_use.innerText="	Holy charm symbolising a union between higher beings.The bearer will slowly absorb the limitless Soul contained within.Opens the way to a birthplace.(Secondary Effect: Grants access to the Birthplace in the southern Abyss.)"
charm_location.innerText="Created by obtaining both White Fragment Charms."
}
card45.onclick=()=>{
    charm_help_ctnr.style.display="block"
    charm_name.innerText="Kingsoul"
charm_use.innerText="	Holy charm symbolising a union between higher beings.The bearer will slowly absorb the limitless Soul contained within.Opens the way to a birthplace.(Secondary Effect: Grants access to the Birthplace in the southern Abyss.)"
charm_location.innerText="Abyss (Western region of the Abyss called the Birthplace. Requires AND REPLACES Kingsoul Charm.)"
}

var boss_img = document.querySelectorAll(".boss_img")

for (let i = 0; i < boss_img.length; i++) {
    const element = boss_img[i];
    
    boss_img[i].onclick=()=>{
        boss_img[i].style.scale="2"
        
        
    }
}
// console.log(window.innerHeight , window.innerWidth)

// bosses arrows
var goLeft = document.getElementById("goLeft")
var goRight = document.getElementById("goRight")
var bosses_container = document.getElementById("bosses_container")
var leftcount = 0

goLeft.onclick=()=>{

        leftcount++
        bosses_container.style.left="130%"

}
goRight.onclick=()=>{

        leftcount++
        bosses_container.style.left="50%"

}

// var b_cards = document.querySelectorAll(".b_cards")
// console.log(b_cards[5].getBoundingClientRect().right)

// goLeft.addEventListener('click',()=>{
//     for (let i = 0; i < b_cards.length; i++) {
//         b_cards[i].style.scale=1

//         if ( b_cards[i].getBoundingClientRect().right < 1900 ) {
//             b_cards[i].style.scale=2
//         } else {
//             console.log("not feet")
//         }
        
//     }
// })

//animate project /////////////////////////////////
window.addEventListener('scroll',()=>{

    var game_discription = document.getElementById("game_discription")
    var game_discription_position = game_discription.getBoundingClientRect()

    
    
        if (game_discription_position.top < window.innerHeight && game_discription_position.bottom >= 0) {
            game_discription.style.opacity=1
            game_discription.classList.add("animate")

        
        } else {
            game_discription.classList.remove("animate")
            game_discription.style.opacity=0
            
            
        }
    })
    ///////////////
window.addEventListener('scroll',()=>{

    var game_info = document.getElementById("game_info")
    var game_info_position = game_info.getBoundingClientRect()

        if (game_info_position.top < window.innerHeight && game_info_position.bottom >= 0) {
            game_info.style.opacity=1
            game_info.classList.add("animate")

        
        } else {
            game_info.classList.remove("animate")
            game_info.style.opacity=0
            
            
        }
    
}
)
    ///////////////////
    var geo_pngs = document.querySelectorAll(".geo_pngs")

window.addEventListener('scroll',()=>{

    var position = geo_pngs[0].getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            geo_pngs[0].style.opacity=1
            geo_pngs[0].classList.add("animate_geo1")

        
        } else {
            geo_pngs[0].classList.remove("animate_geo1")
            geo_pngs[0].style.opacity=0
            
            
        }
    
}
)
window.addEventListener('scroll',()=>{

    var position = geo_pngs[1].getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            geo_pngs[1].style.opacity=1
            geo_pngs[1].classList.add("animate_geo2")

        
        } else {
            geo_pngs[1].classList.remove("animate_geo2")
            geo_pngs[1].style.opacity=0
            
            
        }
    
}
)
window.addEventListener('scroll',()=>{

    var position = geo_pngs[2].getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            geo_pngs[2].style.opacity=1
            geo_pngs[2].classList.add("animate_geo3")

        
        } else {
            geo_pngs[2].classList.remove("animate_geo3")
            geo_pngs[2].style.opacity=0
            
            
        }
    
}
)
window.addEventListener('scroll',()=>{

    var position = geo_pngs[3].getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            geo_pngs[3].style.opacity=1
            geo_pngs[3].classList.add("animate_geo4")

        
        } else {
            geo_pngs[3].classList.remove("animate_geo4")
            geo_pngs[3].style.opacity=0
            
            
        }
    
}
)
window.addEventListener('scroll',()=>{

    var position = geo_pngs[4].getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            geo_pngs[4].style.opacity=1
            geo_pngs[4].classList.add("animate_geo5")

        
        } else {
            geo_pngs[4].classList.remove("animate_geo5")
            geo_pngs[4].style.opacity=0
            
            
        }
    
}
)
    ///////////////
    window.addEventListener('scroll',()=>{

        var mapv1 = document.getElementById("mapv1")
        var position = mapv1.getBoundingClientRect()
    
            if (position.top < window.innerHeight && position.bottom >= 0) {
                mapv1.style.opacity=1
                mapv1.classList.add("animate")
    
            
            } else {
                mapv1.classList.remove("animate")
                mapv1.style.opacity=0
                
                
            }
        
    }
    )
        ///////////////////
    window.addEventListener('scroll',()=>{

        var mapv2 = document.getElementById("mapv2")
        var position = mapv2.getBoundingClientRect()
    
            if (position.top < window.innerHeight && position.bottom >= 0) {
                mapv2.style.opacity=1
                mapv2.classList.add("animate")
    
            
            } else {
                mapv2.classList.remove("animate")
                mapv2.style.opacity=0
                
                
            }
        
    }
    )
        ///////////////////
            ///////////////////
    window.addEventListener('scroll',()=>{

        var swipToBottom = document.getElementById("swipToBottom")
        var position = swipToBottom.getBoundingClientRect()
    
            if (position.top < 2100 && position.bottom >= -200) {
                swipToBottom.style.opacity=0
                swipToBottom.classList.add("animate")
    
            
            } else {
                swipToBottom.classList.remove("animate")
                swipToBottom.style.opacity=1
                
                
            }
        
    }
    )

/////////////////////////////////////////////////////////////////////////////////

