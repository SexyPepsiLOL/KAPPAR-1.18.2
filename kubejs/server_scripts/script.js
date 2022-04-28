// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes' , injectrecipes)

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

function injectrecipes(event){
	event.shapeless("minecraft:andesite",["minecraft:basalt","minecraft:quartz"])

	event.custom({
		"type": "assemblylinemachines:alloying",
		"part_a":{
			"tag": "forge:ingots/iron"
		},
		"part_b":{
			"tag": "minecraft:andesite"
		},
		"output":{
			"item": "create:andesite_alloy"
		},
		"time": 200
	})
	
}