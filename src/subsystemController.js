export default class SubsystemController{
	constructor(parentShip){
		this.parentShip = parentShip;
	}
	initializeConnection = (defence, navigation, propulsion, sensors) =>{
		this.defence = defence;
		this.navigation = navigation;
		this.propulsion = propulsion;
		this.sensors = sensors;
	}
}