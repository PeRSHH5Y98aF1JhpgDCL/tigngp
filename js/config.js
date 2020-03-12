let config = {
  upgrades: {
    dimComp: {
      name: 'Dimensional Compression',
      baseCost: D("10^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^10"),
      costScale: D(1e15),
      CSI: D(1e5),
	  HyperExpoCSI: D(1.2),
      desc: 'Mult per dims is increased by log2(level+1)/1.5 and then raised to the power of log3(level/2)+1, but dim cost scale is raised to the power of log2(level/2)+1, and your dimensions are reset, uncapped.', // Sorry Aarex
      levelCap: D(1e308),
      onBuy: ["resetLayer", jea([0])],
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
      baseCost: D(1e125),
      costScale: D(1e125),
	  CSI: D(1e125),
	  HyperExpoCSI: D(2),
      desc: 'Dimension powers are raised to the power of 1.2 but only if greater than 1 for each upgrade, also wipes other upgrades, uncapped.',
      levelCap: D(1e308),
      onBuy: [()=>{game.upgrades.dimComp.level.array=[[0,0]];game.upgrades.dimStab.level.array=[[0,0]];},"resetLayer",jea([0])]
    }
  }
}
