let config = {
  upgrades: {
    dimComp: {
      name: 'Dimensional Compression',
      baseCost: D("10^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^10"),
      costScale: D(1e15),
      CSI: D(1e5),
	  HyperExpoCSI: D(1.2),
      desc: 'haha no it breaks the game', // Sorry Aarex
      levelCap: D(1e308),
    },
    dimStab: {
      name: 'Dimension Stabilizer',
      baseCost: D(1e10),
      costScale: D(1e5),
	  CSI: D(1e5),
	  HyperExpoCSI: D(1.1),
      desc: 'Slowdown effect is multiplied by 1/(1.09^level), uncapped',
      levelCap: D(1e308),
      onBuy: ["resetDimCache", "slowdown"],
    },
    dimColl: {
      name: 'Dimensional Collapse',
      baseCost: D(1e30),
	  HyperExpoCSI: D(1.5),
      desc: 'Dimension powers are raised to the power of 1.2 but only if greater than 1 for each upgrade, also wipes other upgrades, uncapped.',
      levelCap: D(1e308),
      onBuy: [()=>{game.upgrades.tickspeed.level.array=[[0,0]];game.upgrades.dimStab.level.array=[[0,0]];game.upgrades.dimSale.level.array=[[0,0]]},"resetLayer",'[{"array":[[0,0]],"layer":0,"sign":1}]']
    },
	  tickspeed:{
	  	baseCost:D(1e3),
		costScale:D(1e1),
		HyperExpoCSI:D(1.01),
		name:"Tickspeed",
		desc:'Multiplies Dimensions by 1.1, uncapped.(affects after dimColl)',
		levelCap:D(1e308)
	  },
	  dimSale:{
	  	baseCost:D(1e15),
		costScale:D(1e15),
		CSI:D(1e10),
		HyperExpoCSI:D(1.01),
		name:"Dimensional Sale",
		desc:'Dimension costs are reduced by ^0.8, uncapped.',
		levelCap:D(1e308)
	  }
  }
}
