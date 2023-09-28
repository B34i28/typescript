abstract class Country1 {
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
    public abstract populationGrowth(): number;
    private _statePrivacy:string;
    public planet = "Earth"
    public religion: string
    public get privateData(): string{
        return this._statePrivacy
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
}

let Pakistan1 = new OICCountry1("Pakistan","Urdu",250000000,2.5,"Old Private Data")

console.log(Pakistan1);

export{}