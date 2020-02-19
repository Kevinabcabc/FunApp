import {
    observable,
    action,
    computed
} from 'mobx'

class Store {
    @observable
    navigation: null

    @observable
    IfIphoneX: boolean

    @action
    setNavigation(navigation){
        this.navigation = navigation
    }
    @action
    setDeviceIfIphoneX(bo: boolean){
        this.IfIphoneX=bo
    }
    @action
    getDevideIfIphoneX(){
        return this.IfIphoneX
    }
}

export default new Store()

