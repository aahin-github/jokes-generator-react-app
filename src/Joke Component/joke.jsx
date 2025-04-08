import { useState } from "react";
import './joke.css'


const jokes = [
    "What does a storm cloud wear under his raincoat? Thunderwear.",
    "What do kids play when their mom is using the phone? Bored games.",
    "What do you call an ant who fights crime? A vigilANTe!",
    "Why are snails slow? Because they're carrying a house on their back.",
    "What's the smartest insect? A spelling bee!",
    "What is fast, loud and crunchy? A rocket chip.",
    "How does the ocean say hi? It waves!",
    "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
    "Why did the teddy bear say no to dessert? Because she was stuffed.",
    "Why did the soccer player take so long to eat dinner? Because he thought he couldn't use his hands.",
    "Name the kind of tree you can hold in your hand? A palm tree!",
    "What do birds give out on Halloween? Tweets.",
    "What has ears but cannot hear? A cornfield.",
    "What's a cat's favorite dessert? A bowl full of mice-cream.",
    "Where did the music teacher leave her keys? In the piano!",
    "What did the policeman say to his hungry stomach? 'Freeze. You're under a vest.'",
    "What did the left eye say to the right eye? 'Between us, something smells!'",
    "What do you call a guy who's really loud? Mike.",
    "Why do birds fly south in the winter? It's faster than walking!",
    "What did the lava say to his girlfriend? 'I lava you!'",
    "Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
    "What did Yoda say when he saw himself in 4k? HDMI.",
    "Which superhero hits home runs? Batman!",
    "What's Thanos' favorite app on his phone? Snapchat.",
    "Sandy's mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!",
    "What is a room with no walls? A mushroom.",
    "Why did the blue jay get in trouble at school? For tweeting on a test!",
    "What social events do spiders love to attend? Webbings.",
    "What did one pickle say to the other? Dill with it.",
    "What is brown, hairy and wears sunglasses? A coconut on vacation.",
    "Why is a football stadium always cold? It has lots of fans!",
    "What did one math book say to the other? 'I've got so many problems.'",
    "What did the Dalmatian say after lunch? That hit the spot!",
    "What do you call two bananas on the floor? Slippers.",
    "Why did the chicken cross the playground? To get to the other slide.",
    "Why do ducks have feathers on their tails? To cover their butt quacks.",
    "How does a vampire start a letter? 'Tomb it may concern…'",
    "A plane crashed in the jungle, and every single person died. Who survived? Married couples.",
    "What kind of math do birds love? Owl-gebra!",
    "Why can't you ever tell a joke around glass? It could crack up.",
    "What do you call a Star Wars droid that takes the long way around? R2 detour.",
    "How do you stop an astronaut's baby from crying? You rocket.",
    "Why did the scarecrow win a Nobel prize? Because she was outstanding in her field.",
    "How do you know when a bike is thinking? You can see their wheels turning.",
    "Why was 6 afraid of 7? Because 7,8,9.",
    "What goes up and down but doesn't move? The staircase.",
    "What kind of shoes do frogs love? Open-toad!",
    "How did the baby tell his mom he had a wet diaper? He sent her a pee-mail.",
    "What is a witch's favorite subject in school? Spelling.",
    "What's brown and sticky? A stick.",
    "Why do ducks always pay with cash? Because they always have bills!",
    "How did Benjamin Franklin feel holding his kite when he discovered electricity? Shocked!",
    "When does a joke become a 'dad' joke? When the punchline is a parent.",
    "How much did the man sell his dead batteries for? Nothing, they were free of charge!",
    "Where do most horses live? In neighhh-borhoods!",
    "Why did the Daddy Rabbit go to the barber? He had a lot of little hares.",
    "How do you make a lemon drop? Let it fall from the tree.",
    "Why can't you ever trust atoms? Because they make up everything.",
    "Which planet loves to sing? Nep-tune!",
    "What's a private investigator's favorite shoe? Sneak-ers.",
    "What did the limestone say to the geologist? Don't take me for granite!",
    "If an electric train is traveling south at 10 miles per hour and the wind is blowing North at 10 miles per hour, which way does the smoke blow? Fooled you! Electric trains don't blow smoke.",
    "Why are basketball courts always wet? Because the players dribble.",
    "How do billboards talk? Sign language.",
    "What do you call a duck that gets good grades? A wise quacker.",
    "What do you call a fish without an eye? A fsh.",
    "What kind of keys are sweet? Cookies!",
    "What board game does the sky love to play? Twister.",
    "Why does a seagull fly over the sea? Because if it flew over the bay, it would be a baygull.",
    "What do you call a tired bull? A bulldozer.",
    "What do you call cheese that belongs to someone else? Nacho cheese!",
    "Why are pizza jokes the worst? They're too cheesy.",
    "What kind of water cannot freeze? Hot water.",
    "Why was the belt arrested? Because it was holding up some pants.",
    "Why did the peanut get into a rocket? He wanted to be an astro-nut!",
    "Did you hear the joke about the roof? Never mind, it would go over your head.",
    "Why did the cookie go to the hospital? Because it was feeling a little crummy.",
    "What did the ghost call his Mum and Dad? His transparents.",
    "What did one hat say to the other? You wait here; I'll go on ahead.",
    "What fruit do twins love? Pears!",
    "What time is it when people are throwing pieces of bread at your head? Time to duck.",
    "Why was the baby strawberry crying? Because their parents were in a jam.",
    "Why don't you ever see giraffes in middle school? Because they're all in high school.",
    "How do bees brush their hair? With honeycombs!",
    "What do you do if someone rolls their eyes at you? Roll them right back.",
    "What did the Baby Corn say to the Mama Corn? 'Where is Pop Corn?'",
    "What gets wetter the more it dries? A towel.",
    "Why won't peanut butter tell you a secret? He's afraid you'll spread it!",
    "What's the difference between a car and a fish? You can tune a car, but you can't tuna fish.",
    "What is worse than raining cats and dogs? Hailing taxis.",
    "What do you call an old snowman? A glass of water."
];
const Joke = () => {
    const [result, setResult] = useState("");


    const handleClick = () => {
        let randomNumber = Math.floor(Math.random() * jokes.length)
        const value = jokes[randomNumber];
        setResult(value);
    }

    return (
        <>
            <div className="container">
                <h2>Click to Generate Random - English Joke</h2>

                <div>
                    <div className="wrapper">
                        <p>Setup:</p>
                        {result === ''? <p className="question">{jokes[0].slice(0, jokes[0].lastIndexOf("?") + 1)}</p>:<p className="question">{result.slice(0, result.lastIndexOf("?") + 1)}</p>}
                    </div>

                    <div className="wrapper">
                        <p>Punch line:</p>
                        {result===''?<p className="answer">{jokes[0].slice(jokes[0].lastIndexOf("?") + 1)}</p>:<p className="answer">{result.slice(result.lastIndexOf("?") + 1)}</p>}
                    </div>
                </div>
                <button onClick={() => handleClick()}>Click to Generate</button>
            </div>
        </>
    )

}
export default Joke;