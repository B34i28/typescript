type PoemWithPages = { name:string; pages:number }
type PoemWithRhymes = { name:string; rhymes:boolean }

type Poem = PoemWithPages | PoemWithRhymes

let poem : Poem = Math.random() > 0.5
        ? { name:"The Double", pages:75 }
        : { name:"The Kind", rhymes:true }

poem.name

poem.pages

poem.rhymes