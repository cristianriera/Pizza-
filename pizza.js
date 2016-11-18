class pizza{
  //type constructor below
  constructor(s,mt,vt){
    this.size = s;
    this.meatToppings = mt;
    this.veggieToppings = vt;
  }
  sizeCost(){
    if(this.size == "Small"){
      this.sizeCost = 7.99;
      return sizeCost;
    }
    else if(this.size == "Medium"){
      this.sizeCost = 9.99;
      return sizeCost;
    }
    else if(this.size == "Large"){
      this.sizeCost = 12.99;
      return sizeCost;
    }
    else if(this.size == "Extra-Large"){
      this.sizeCost = 15.99;
      return sizeCost;
    }
  }
  toppingCost(){
  }

  //type instance functions below



  //type class functions below


}
