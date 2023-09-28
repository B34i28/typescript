abstract class Country {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate
    }
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    public abstract populationGrowth(): number;
}

class OICCountry extends Country {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number
    ) {
        super(name,language,population,populationGrowthRate)
    }
    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate/100)
        return this.population
    }
}

let Pakistan = new OICCountry("Pakistan","Urdu",250000000,2.5)

console.log(Pakistan);

Pakistan.populationGrowth()

console.log(Pakistan);

