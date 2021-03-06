var name		= "Restorer of Stuff";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Brought 17 cultivation projects back from the brink";
var status_text		= "Felicitations on those 17 cultivation projects you restored to full health. Not only did they continue to give you stuff, they also earned you this badge!";
var last_published	= 1348802487;
var is_shareworthy	= 1;
var url		= "restorer-of-stuff";
var category		= "cultivation";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2012-06-14\/restorer_of_stuff_1339702880.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2012-06-14\/restorer_of_stuff_1339702880_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2012-06-14\/restorer_of_stuff_1339702880_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2012-06-14\/restorer_of_stuff_1339702880_40.png";
function on_apply(pc){
	
}
var conditions = {
	784 : {
		type	: "group_sum",
		group	: "cultivation_projects_restored",
		value	: "17"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(1250 * multiplier), true);
	pc.stats_add_favor_points("mab", round_to_5(250 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 1250,
	"favor"	: {
		"giant"		: "mab",
		"points"	: 250
	}
};

//log.info("restorer_of_stuff.js LOADED");

// generated ok (NO DATE)
