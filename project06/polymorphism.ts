class Country1 {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number,
        _statePrivacy: string,
        religion: string
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate
        this._statePrivacy = _statePrivacy
        this.religion = religion
        
    }
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    public populationGrowth(): number{return 1};
    private _statePrivacy:string;
    public planet = "Earth"
    public religion: string
    public get privateData(): string{
        return this._statePrivacy
    }
    public greeting():string{
        return "Hello"
    }
}

class OICCountry1 extends Country1 {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number,
        _statePrivacy:string,
        religion = "Islam"
    ) {
        super(name,language,population,populationGrowthRate,_statePrivacy,religion)
    }
    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate/100)
        return this.population
    }
    public greeting(): string {
        return "Asslam o alikum"
    }
}

let Pakistan1 = new OICCountry1("Pakistan","Urdu",250000000,2.5,"Old Private Data")

console.log(Pakistan1);
console.log(Pakistan1.greeting());

let China = new Country1("China","Medrian",100000000,0,"Chinese Data","Bhudism")

console.log(China);
console.log(China.greeting());


export{}