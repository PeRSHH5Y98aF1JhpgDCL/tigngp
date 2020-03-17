setTimeout(()=>{
  (()=>{
window.newGame=function() {
  clearAll()
  window.game = new Game()
  setupUpgrades()
  game.prestige[jea([0])] = new Layer();
}

window.nyanSave=function() {
  localStorage.setItem('tigsave', getFinalSaveString())
}

    
    window.loadCheck=function(){
    if (!game.time) {game.time=D(0)}
    }
    
window.nyanLoad=function(save, imp=false) {
  save = (save || localStorage.getItem("tigsave"))
  if (typeof save == "string") {
    try {
      save = atob(save)
      if (save.indexOf("NaN") != -1) {
        if (!confirm("Oh oh, there are NaNs here! Do you still wish to load the save?")) {
          if (confirm("Do you wish to export the savefile for debugging? (RECOMMENDED)")) {
            breakPoint = true
            alert("Now you can use export in options and then refresh and select no in previous question to continue playing.")
          }
          else throw "NaN in save"
        }
      }
      save = JSON.parse(save)
    } catch(err) {
      if (!imp) newGame()
      return false
    }
    clearAll()
    window.game = new Game()
    let temp = ["lastUpdate", "notation", "upgradesBought"]
    temp.forEach(function(name) {
      if (name in save) game[name] = save[name]
    })
    
    // Run some init stuff
    setupUpgrades()
    
    // upgradesBought
    for (let id in game.upgradesBought) {
      window.game.upgradesBought[id] = D(game.upgradesBought[id])
    }
    
    // prestige
    for (let i=0; i<save.prestige.length; i++) {
      layer = save.prestige[i]
      window.game.prestige[jea(layer.loc)] = new Layer(ea(layer.loc), D(layer.points), D(layer.power), layer.dims, layer.tslp)
    }
    loadCheck()
    game.time=game.time.add(new Date().getTime()-game.lastUpdate)
    return true
  }
  return false
}

window.getFinalSaveString=function() {
  return btoa(getSaveString())
}

window.getSaveString=function() {
  let save = getMinimalGameObj()
  return JSON.stringify(save)
}

window.getMinimalGameObj=function() {
  let ret = {
    lastUpdate: game.lastUpdate,
    notation: game.notation,
    upgradesBought: {},
    prestige: Object.values(game.prestige).map(x => x.objectify()),
    time:time.toString()
  }
  for (let id in game.upgradesBought) {
    ret.upgradesBought[id] = game.upgradesBought[id].toString()
  }
  return ret
}

window.wipe=function() {
  newGame();
  nyanSave();
}}).call(window)
setInterval(nyanSave,10000)},10)
