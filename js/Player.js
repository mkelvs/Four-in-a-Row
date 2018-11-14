class Player {
  constructor(id, name, tokenColor, isPlayerTurn = false) {
    this.id = id;
    this.name = name;
    this.tokenColor = tokenColor;
    this.isPlayerTurn = isPlayerTurn;
  }
}
