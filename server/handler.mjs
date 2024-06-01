import OpenAI from 'openai';

const OPENAI_API_KEY = 'sk-infinity-period-service-xFcYEhkCHBK9uyQWReE3T3BlbkFJqIGx3ubnAuDDRP9VYHXE';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // This is the default and can be omitted
});


const allCharacterInfo = `
Student Council 

Brett Coleman 
Germaphobic jerk.  He's the rude kid in stucco. Has a wide range of extracurriculars- (Sports) Lax, Soccer, Swim Team (Clubs) Math team (sucks at math) Sings (Men's Choir Group “The Industry”) Tutors in History.  He's a failed womanizer. He will sometimes attempt to speak in elvish... huge Lord of the Rings fan.  Blatantly insults people, for no reason, and the insults have no effect. Has high temper, but terrible comebacks.  He doesn't try to be irritating, but he is a bad person; he has bad intentions. Messed up a solo in 5th grade choir singing “Break Away”.  This is why he's a jerk. Soft side: loves Taylor Swift. Experiences mild epilepsy. Obsessed with “air quotes” although they don't make sense some times.     

Dan Martin 
Compared to John Tiedtke ( He's always smiling.  He is currently writing a musical, makes demos and people listen.  Very productive but very unorthodox.  Has three main voices(backgrounds for each character): Arabic Flamboyant, Dog, Underwater voice.  Wears ridiculous clothing everyday.  A music fanatic, Indie Music.  Uses substitutes for swear words.  Terrible at impression... of Scooby Doo.  Smells like ham. Like quality ham.  

Amy Fletcher 
Very punctual.  OCD. Her father is a teacher at the school; she has separation anxiety.  She is adopted.   She loves pain, loves to test her endurance.  She is quiet but insightful and very intelligent. Afraid to take a chance but is one of the only people who deserves to take it. Amy is Jewish. Runs. Plays Saxophone.

Bruce Wane 
Constantly compared to Bruce Wayne/Batman.  He is the “normal character”.  A good taste in fashion and literature. Well versed in music and film.  Top track runner. Does well in school, averages an A or B.  He had a collection of comic books, he likes the fact that they are vintage pieces of writing, he's not hugely into superheros. Goes to the football games, watches Modern Family and ESPN. He enjoys Modern Family more though.  Plays the acoustic guitar... to a degree. He has two brothers, one sister. Middle class family. He's got a pen pal in Illinois.  They are close friends even though he's never met (her or him). Tell that person everything.  Not named after Bruce Wayne, his parents don't even know who that is.   

Detention 

John Packer 
He's called cloudy because he used to breath in chalk dust and exhale it through his nose.  The troublemaker. Uses the bender excuse “trouble at home”. Instead his dad beats him, mother left, etc.  More sensitive to girls than Bender is. Still annoying, still a “tough guy” but not bad guy. He presents himself as “owning the place”.   Is good at magic, performs tricks. He ‘s not a magician; he does it to be annoying. He learned the tricks for his sister. Not a great student. Not failing, but having a C-D average.  No sports (perhaps wrestling?).  He thinks the comma is the greatest thing ever. You never have to stop your sentences. They never end; they just keep flowing and flowing.  He's a good speaker when angry but isn't as smooth as bender otherwise. He's a genius at Math, on the math team. No one knows about it, he does it cause he's good at it.  
 
Ramona Slyt 
Artsy Character.  She loves the feeling of ice, but not smooth ice. The feeling of rigid ice against her hands.  She loves to sculpt, to mold with her hands. “There is so much to be seen in feeling”.  She will be seen running her hands over the keyboard.  Has a knack for quotes- picking them up and  creating them.  Loves what is simple, and what is abstract. Leaves a lot open to interpretation. Constantly in trouble because of “freedom of expression” Has a soft spot for Packer.  She has two mothers, one of them was previously married to a man (her birth mother).        
  	       
Nolan St. Christopher 
The Matt Jones/ Sherlock Holmes character.  Doesn't compare himself to Sherlock Holmes.  Has a vast storage of knowledge and a wide range of vocabulary (often used).  He's quick and clever, but cold in what he says- as if the knowledge was obvious.  Holds himself with an air of arrogance.  Not many friends, not any really. He speaks out against his teachers in class, and thus, is always in detention.  He loves to plan and to scheme, even though he appears to have no strong interest in anything.  Reads Wikipedia for its inaccuracies not for information. He knows all the actual information, but he enjoys to see how others interpret it and how their knowledge falls, in most cases, quite short of necessity.       

Drama

Sam Quinto 
He is the premiere actor in the high school, though he thinks he is much more famous than he actually is. He constantly offers help to the other drama kids, but they rarely listen to him seeing as all the advice he gives is only to make himself look better.  He does not play sports and his peers think he is gay, though he is not.

Olivia Rockwell 
She is forced to play all female parts in drama productions because she is the only girl in drama club. Judy Garland is her acting idol. She broke up with Ethan after he became paralyzed, however, it was coincidence she broke up with him because things weren't working out. She claims to have a fear of ear buds because it's quirky. She's a black belt in karate, and very strong when she is provoked. She choreographs all the fight scenes. In general she is over dramatic though she is very calm whenever she's acting. She used to be fatter than fat, but she got liposuction.

Ethan Walker
He used to act as a different person everyday in an attempt to expand his knowledge and experience of acting. He was in detention a few times because his acting came off as offensive on a few occasions in which he pretended to be Kanye West, Maggie Q, and Gene Simmons. When he was pretending to be Helen Keller, he fell down a flight of stairs and is now paralyzed from the waist down, in a wheelchair (which is ironic because his last name is Walker).  His family runs marathons. He's a great guy though- jokes about his disability, clever, and never mean to anyone. He just plays everything off. He's one of the best actors (he'll make you feel what he can't). Doesn't participate in drama politics. He's friends with Bruce, they've known each other since first grade. He is sometimes the “prop” for the play (i.e. a car). Loves to pretend he has other ailments (using the wheelchair as a blanket justification). He stopped doing fighting sequences after his paralysis, though he did take part in one or two.

Others

Nicole Sharp 
Always campaigning to be the Student Council president, specifically against Dan. She has a quality of fierceness and ambition, unmatched by anyone. Constantly campaigning, she gets little sleep. Sly, alert, and conniving. She is clever and has great persuasion, she's great with her speech. Bruce's ex girlfriend, she broke up with him because he didn't provide enough “adventure”; he was too normal.  She boxes in her little free time... in an all female league.  Appears in many drama and media club productions (cameos) in order to gain supporters.  She always dresses in professional attire (very sharp) or purposefully “attractive” attire. She takes power naps in the janitors closet... but when this became known to the student body, it cost her the election. Loves the sport of figure skating, yes the sport. Knows states and etc. Also, she enjoys Disney on ice (a strange quality for such a professional but she likes Disney).  She has a vast amount of resources, her family is quite wealthy (but they will soon lose everything).  She has been raised to succeed. Her father, however, is a kind man and a relaxed man. She tries to participate in all clubs, except Stucco.  She's respectable. She works at Dunkin Donuts but doesn't really have to. She's a little superstitious, she'll touch the top of a chair before sitting in it, always.  

Jack, The Trader 
The “Jack of All Trades”. He a wide variety of jobs and is quickly spotlighted in a number of episodes. (He could be selling popcorn in one episode and playing dj over the speaker in another).  He's generally unbiased and sometimes tries to offer (terrible) advice.  He's single. Forever. 

Robyn Webber 
After seeing Drama's presentation at the rally, Stacy decided to join Drama. She is Nicole Sharp's campaign manager. She is very happy, and filled with life. She is always seen with a smile, and she is a great singer. She close friends with Amy Fletcher.  She is homeless, she lives in a van with her family, yet she is so upbeat.  Her family may be among the greatest people ever alive, very optimistic about their situation (they don't need a house to be a family).  She also works at Dunkin Donuts (among other jobs), this is how she met Nicole.    

Amy Sawyer 
Vicious, tough, angry character in detention. She develops an affection for Nolan, but it carries it out overwhelmingly - and straight forward. She's more crass than clever. Loves the Beatles... but actually for the quality of their music... and for their sex appeal.  She has a humor, but its vested in shock value.  She commands her parents like dogs.  She hates Mall Santas, but believes in the actual Santa (the rest are phonies). Actively protests against saving the whales.  She can read braille.  Has insomnia, never mentions it.  She's in SADD. She does not do drugs of any sort.  She is more distanced from the other detention members. The first time a boy asked her out, she punched him in the face.
`

const pilotEpisode = `
STUCCO
(pan across stucco, people having conversations)
(Dan Martin stands on table)
Dan Martin: (yells) Glee is a good show! (All heads turn, conversations stop) (Dan smiles) Now that I've got your attention with that blatant lie, we need to talk about “students stealing from Mr. Myers”. I don't know why he's specifically being targeted, but its gotta stop. Tell your friends. Okay, Bruce.

Bruce: Yeah?

Dan: Do your have our daily agenda? (Huge smile)

Bruce: Yep (Not so amused, hands the paper to Dan) 

Dan: (In Alfred's voice) Thank you Master Wayne.

Bruce: (Even less amused) Yep, no problem.

DETENTION

John (sitting facing Nolan)- A nickel.

Nolan (straight faced)- Thomas Jefferson

John (smirking)- A dime

Nolan (quickly)- Roosevelt 

John (as if he can get Nolan)- Washington.

Nolan (without missing a beat)- The quarter and the 1.

John (moving back in his seat)- Well it would appear I owe you a Lincoln.
(Puts a penny on the table)

Nolan- (Serious) Where's the other four hundred and ninety nine?


STUCCO
(Dan is still on the table looking down at the agenda)

Dan: (he starts kicking his legs out) And what... about...homecoming? Coleman (stares right at Brett Coleman who is wearing his Letterman) how is our budget (budget is said as “bud jet”) looking?  

Coleman: (his shoulders tense and he pushes his chest out as everyone focuses on him, he tries to make himself look masculine.) (In a deep voice, clearly trying): Right now we've got about seven hundred left over from last month's auction.  

Dan: (jumps off table, walks over to Coleman “Tiedtke style”) -camera follows- Which brings us to a total of.... 1,800 if my math is correct.

Paul: (kid sitting next to Coleman): (very “matter of fact”) It's not. We have about 1,300.  

Dan: Very good Paul (Dan gives him a thumbs up)    

(Dan walks to the center of the room, spin around in a disco pose): So I say... underwater theme? (switches to underwater voice).    


DETENTION 

Some people are talking in a circle.  

Packer is humming “Shiny Teeth and Me”

Greg:  Are you humming that song from Fairly Odd Parents?

Packer (turning around quickly): Why yes I am. (Moving closer to the kid) That is one of five things that constantly circulates through my head, the other four being “How I'm going to better myself and my community”, “The national anthem... of Canada” , “The song ‘My Date With the President's Daughter”, and Reese Witherspoon's career choices.

Greg: What?

Packer: I respect her as an actor.

STUCCO

Amy: (quietly)- We could do a 70s theme.

Coleman: (Puts a hand over Amy)- Shut up Amy. I say we remake Gotham City.

Dan: (Looking down) Nice idea Bruce.

Bruce: (clearly annoyed, but used to it) Wasn't me.     

Dan: Why?

Bruce: (angrily) Because I haven't made a single Batman reference in my entire life! Yes, my name is Bruce Wane, but it's spelt differently and my parents are still alive. Why can't anyone get over that?

Brett: (after a moment of silence) ...Why so serious?

(Bruce's face is one of disbelief)

Amy: (matter-of-fact) Because his girlfriend just dumped him.

Brett: (quickly/quietly) Damn it (looks down) (moment of silence)

Dan: Did she leave you for Harvey?

(everyone looks at Dan in disbelief)

DETENTION

(Scene modeled after “Reservoir Dogs”. All people in detention are standing, hands poised in a gun cocked position, pointed at each other, with rubber bands to act as “bullets”)

They all fire.

STUCCO

Dan: (Looks ashamed) … Um... do you want my oreo cakester?

(Bruce takes it without hesitation. No emotion.)

Brett: So.. what about a Disney Theme? (no one comments)

Amy: Yeah, we should do a Disney Theme (agreeing)

Brett: That's what I just friggin said! (Amy backs off and covers her face)

Dan: Meh...Disney sucks

DETENTION

John: All I'm saying is that eventually north becomes south and east becomes west so really, whats the point of the compass?

Nolan: Relativity.

(enter Ramona) (conversations stop, and everyone turns to her, standing in the doorway.  She walks to a seat and puts down her bag) (John walks over to her-camera follows him)

John: Excuse me, I couldn't help but notice that you hadn't checked in with the front desk, and we're a little full right now. (Ramona looks up) This is a fairly elite club and I'm assuming you didn't even make a reservation, so- (Ramona holds up pink slip) Welcome to Detention.

STUCCO

(EVERYONE YELLING ABOUT THEIR HOMECOMING IDEAS, DEBATING, DAN SLAMS HIS FIST ON THE TABLE AND CUTS THEM ALL OFF)

Dan: (angrily) This is Student Council! We are not animals!  This is a democracy! (silence) 

Teacher Advisor: Actually its not, you have no real power. This is a school club.

Dan (serious): Why would you say that? (quickly) Ok, anyway, Amy what's your favorite movie?

Amy: (Eagerly) A Cinderella Story.

Dan: (Turning) Alright, Bruce.

Bruce: Moon. 

Dan: Thank you. I know it was hard for you not to say “Batman Returns”

(Bruce leaves the room, pissed)

(Silence)

Dan: So outerspace theme!  

DETENTION

John: ...sounds healthy!

Nolan: Sounds impossible.

Ramona: (smirking) It isn't.

John: Really new girl... how would you know?

Ramona:  Unlike you, my GPA rests above 1.3

John:  And who are we to make assumptions? What is your name anyway?

Ramona: Biff.

John: Have you always been a girl?

Nolan: (On computer)- Her name is Ramona Slyt. 

John: Ah! So you're a chronic liar?

Ramona: No.

(John points at her- with a smile)

John: So, “Ramona”... are you ready for your initiation (extended)?

(Ramona looks puzzled)

STUCCO

Brett: I'll talk to the art students about making a paper mache comet.

Dan: Great! (overly excited) (Amy raises her hand) Amy, what's up?

Amy: Are you gonna go get Bruce?

Dan: I thought he had to leave.... he had some “non-girlfriend” thing to do.

Amy: No, he clearly left because he was pissed at you.

Dan.. Oh Fudruckers.  
HALLWAY-OUTSIDE “MYERS” ROOM

John:  Alright, listen up. We're a family here in detention and we've got a little tradition. In there is Mr.Myers, an enemy of fallen students, and the favored target of thieves. You're going to go in there and openly steal anything from him.  This object, artifiact, or even totem if you will, grants you access to detention each day (and to all detention based activities and family fun nights). Without the stolen object, you're gone. 

Ramona:  What'd you guys take?

Nolan: (straight): His lanyard. 

John: His wedding ring (he shows the ring) His wife divorced him a week earlier.  

(Ramona is gazing surprised)

John:... (looks in the room) Alright, go. 

STUCCO HALLWAY
     
Bruce is sitting against the wall, flicking the top of a pencil.

Dan: Ello Bruce.

Bruce: (quickly) Shut up, go away.

Dan: I just wanted to say sorry-

Bruce: Go away...just go away

(Dan kneels and puts his hand on Bruce's shoulder)

Dan: It's not your fault.  It's not your fault.

Bruce: What?

Dan: It's not your fault. (Camera moving closer- similar to Good Will Hunting)

Bruce:  You've gotta be kidding me.

Dan Hey, its not your fault.

Bruce: I know! Its your fault! 

Dan: Woah... man I didn't break up with you. 

(Silence)

Dan: Look, I'm sorry. I don't know... you know life is tough. Its never straight forward, never fits into simple categories or perfect solutions. Its just... its a mess. We need these stupid distractions to keep from breaking down.  We need to forget about the world sometimes and laugh a little.  Cause really, what is the point in moving on if we can't laugh now.  If we don't revile in our flaws then we never know what it is, who we are. We'd lose the thing that makes us all the same; that we all suck.  But that's just it, we all suck . Don't let anyone tell you otherwise. You suck Bruce Wane, and you deserve someone who sucks just as much.  That girl didn't. 

(The scene cuts from the hallway to the Detention, as Romona is stealing from Mr. Myers.  The only audio is the monologue and music).

(silence)

Dan: Alright, I'm gonna go end this meeting now, its getting crazy in there.

Bruce (smiles and looks up at Dan): Hey Dan (pause. Dan turns around) You suck.  

(Dan smiles)

Dan: Why do we fall Bruce?

Bruce: (quickly and walks away): So we can learn to pick ourselves up. 

DETENTION- HALLWAY

(Mr. Myers is out of breath as the detention kids run towards camera, out of the shot.)

John (to Ramona): Congrats.

(Ramona smirks)

(Cut to black)
`

const secondEpisode = `
8th Period 2

Concept - Detention (Rumors of Ramona) Stucco (Fundraiser)

STUCCO

(Dan is walking down the hallway on his way to Student Council, Nicole Sharp is posting up campaign posters with Stacy Webber. Dan is cut off by Nicole Sharp)

Nicole: (seriously straight forward, she means business) Hello Daniel

Dan: (awkwardly) Hey...Nicole

Nicole:  You look (looks at him) like you've gained a little weight.

Dan: What?

Nicole: Is the throne cushioned Dan? Do they wait on you? No. You must have just stopped caring. 

Dan: Look Nicole I don't really...

Nicole: Dan, if it becomes too much, just let me know. (Overly kind but false, mocking) At the very most, you'll only have to bear the presidency a little longer (she smiles)

Dan: Goodbye Nicole.   

(She nods)

DETENTION

(John is tossing a ball up and down while leaning against the wall of the detention room, next to the door)

John: (examining the “objects” of each student- the object that they stole from Mr. Myers)  Good. Good. Biff? Good. Good. (Throws “ball” at random kid, kid flinches). Alright, we all here? (innocent looking kid walks to the door)

Innocent kid: (sheepishly) Oh wait!

(John slams door in his face without looking back)  

(John walks to his seat)

Teacher: Thank you John... for your help... as always. You guys know the deal: I let you be and no one asks why I'm in the men's room all day. We good? Alright. (Teacher leaves with a tub of  ice cream and intense depression)

John: (looking around seriously) Where's the Italian?

STUCCO
 
Bruce: In Italy! The kid lived in Italy! Brett, why do you hate what you don't understand? 

Dan: (enters) Hey, Nacho Libres! (Camera pans to Dan) Let me hear a 5, 4!  

Everyone in Stucco: (used to this) 3, 2, 1.

Dan: 0! (Matter of Fact) That's how much money we have left in the budget. (Seriously) Where did that 1,300 go?

Brett: (Confused) I'm... I'm not sure. 

Bruce: How is he our treasurer?

Amy: Didn't you spend last year budget on Taylor Swift tickets?

(All people look at Brett)

Brett: No....well....not all of the money...I don't think....hopefully not.... I think it was a raffle?

(Scratches head and you can see “13” on his hand)

Bruce: Alright, lets just drop everything.

(Moment of silence)

Brett (under his breathe): ...drop everything now, meet me in the pouring rain...

DETENTION

(Ramona's molding play-doh while talking)

Nolan: Hmm, you appear to be pretty talented with your hands.

Ramona: It's part of my job description (smirks) I'm an artist.

Nolan:  A tactile artistic, 3-D sculpting, in the form of Vito Acconci?

(Ramona looks puzzled)

Nolan: Modern sculptor, born in 1940, taught at the Nova Scotia College of Art and Design? 

Ramona: No, I'm more free form.

Nolan: There's no such thing as free form.  Everything's a duplication, everything can be calculated.  (looks at play-doh) You're sculpting what you think is an abstract form of the human body, but nothing is abstract when all things are considered. (shows figure, Nolan ques up picture of a similar sculpture)

Ramona: (pauses) I'm not done yet. (puts figure in Nolan's hand and forces it closed) What is it now?

Nolan: I don't know, I could never know due to the Copenhagen's interpretation until I observe it, it neither exists nor doesn't exist while in my hand.  (Ramon opens hand) Now it's just a ruined knock off.

STUCCO

Amy: Well how are we going to get funds?

Brett: Well we're not getting anywhere with your nagging, so let's brainstorm some fundraiser ideas!

Dan: Yeah! Lets Raise some Funds... we could... do a musical. (Spirit Fingers)

O.S.: The Spider-Man one!

Dan: ...that cost millions of dollars to make... I was thinking... we do an original.

Amy: (fiddling with pencil nervously) Would... would we all write it.. because I-

Dan: (Enthusiastic) I've actually got a script right here! 

(cover face, moan)

DETENTION

Ramona: (annoyed) What are you even implying, I didn't do anything.

John: We never said that you did (pause)

Nolan: But we heard it.

STUCCO

Dan: (continuing, happily) “like an earthquake at the base of my spine” then the music stops and cops show up at the house! Then cut to a courthouse where the once clean shaven milkman has a beard with uncombed hair as he looks to the now disheveled mother while the little boy is in the corner crying as the judge shouts, “Guilty!” and end scene one!

(pan across the speechless student council and stop on Brett)

Brett: What the hell is a Bone Slicer?

Dan: (points to Amy) Amy?

Amy: I'm assuming it slices bones, but we are getting very off topic.

Bruce: I agree, we need a real idea.

Dan: So my musical is off the table?

Bruce: Yes

Dan: We're doing it?

Bruce: No. No it is wildly inappropriate and extremely racy.

Dan: I can respect that (pause) so fund raisers...what're we gonna do?

Bruce: (hesitant) We could do a bake sale...Amy, doesn't your mom work at Cupcake Kingdom?

Amy: No.

Bruce: Oh...okay

Brett: Bake sales...do I look like a woman?

Dan: It can be successful though, who could we get to help?

Bruce: Well I know that John Packer does quite a lot of “baking” (some laughter)

Brett: Seriously? He doesn't strike me as that type of (sudden realization of pun) Oh...you mean cocaine

Bruce: No, Brett. I don't.

Brett: Opium?

Bruce: What? Where are you getting this from?

DETENTION

John: (continuing) then he said that she mentioned that she had seen you doing that after she was walking back to her classroom. (pause)

Ramona: And you believed that?

John: Yeah, because I saw you walk into the bathroom with paint on your hands.

Ramona: I was in art- I was working on a piece. It wasn't me.

Nolan: It wasn't me? If that justification worked in court, then 87% of Baldwin County Correctional would be out on the streets, cooking your food, teaching your classes, babysitting your kids (looks at Ramona) or you...so don't take offense when I say that I don't believe you.

John: Hey Nolan... don't be so quick to judge. My uncle went to Baldwin County... he didn't do it (sure of himself).  

Ramona: But it wasn't me!

Nolan: See normally, I would've guessed that they'd only give you a day long suspension for the vandalism, however the obvious profanity pointed at Mr. Myers will probably result in worse.

John: Yeah, if you'd stuck to a word that's allowed on tv then you probably would've been better off, but you decided to describe him for what he really is. Kudos.  

Ramona: You're both thoughtless and narrow-minded, I would never use that word, it's unnecessarily filthy and ignorant. 
(pause)

John: What word Ramona? (Smirking) 

(Ramona's face drops)

STUCCO

Dan: Okay so the bake sale is a no go due to lack of experience in the kitchen-

Brett: Yeah Amy!

Dan: (to Brett) Calm yourself. (to stucco) So what's our next idea? (silence) Come on guys, we need ideas! How can the student council make money for homecoming?  To some people this will be the most important night of their lives.

Amy: Isn't that prom?

Dan: Oh yeah, never mind. To some people this will be a night to act like animals and rub up against anything that moves.

Brett: Damn straight! (points to Amy) I'm coming for you. (silence, Amy looks scared to death)

Dan: Okay...so fund raising ideas? (silence) Bruce, anything?

Bruce: No, sorry

Dan: Amy?

Amy: Not that I can think of.

Dan: Brett?

Brett: What if we got a bunch of dogs from the shelter and brought them to-

Bruce: No, no, no. I'm just gonna cut you off now to save you the embarrassment.

Dan: Okay, so we need some creativity to get us a fund raiser idea, and I think I know how to do that (begins setting up music) The fund raiser is for a dance, so lets dance to help us come up with some ideas. (“Hung Up” by Madonna begins playing, Dan walks infront of everyone) Alright everyone, stand up lets get our brains moving and our bodies pumping! (Brett winks at Amy, Amy quickly looks away, everyone stays seated except Dan) Come on, everyone get up! (Brett shoots out of his chair)

Bruce: I'm not dancing.

Amy: Me neither.

Dan: Come on, do some dancing and get inspired.

Bruce: No thank you.

Brett: Get out of the damn chairs!! (music pauses)

Dan: No, sh, sh, sh Brett no need to yell.  (to Amy and Bruce) But they're missing out. (music continues)

(They begin dancing, however...Brett's moves are something of an original nature. As he humps the table, he holds disturbing eye contact with Amy. Amy can't help but to see the foul dancing however she is constantly looking in any other direction.) (Brett starts seizing)

Amy: Oh my god, is Brett okay?

Brett: Y-yeah, I'm-m just dancing.

DETENTION

John: Hey, there's nothing wrong with it! This school really needs more student artwork, I mean honestly. Stuff that really speaks the truth. 

Ramona: Well then I'll paint a damn mural! But I didn't do anything to those stalls.

John: So you expect me and Mr. Holmes over here to believe that you went in there, covered in paint, and coincidentally a “Myers related” masterpiece pops a day later... and a day after he filed your extended.    

Ramona: Look you have no idea what you're talking about, so don't make assumptions-

Nolan: We know you did it.

(Ramona leaves)

Nolan: Ramona will be suspended for what she did in the bathroom.

John: So?

Nolan: Suspension also suspends all after school activities.

John: Sucks (doesn't seem to care).

STUCCO

(Brett is on the floor, drool coming from his mouth. Absolute silence. Brett shakes it off and gets up- camera is next to this face) (Still Silence)

Brett: Sorry 'bout that, guess I seized up for a sec. 

Amy: That was 24 minutes Brett. Are you okay?

Brett: Yeah. Does anyone have bread?

Amy:.. What?

Brett: I don't know, I'm just trying to change the subject.

Bruce: Seriously Brett, what just happened?

Brett: It was a small spasm... due to my heart rate or something. (playing it off)

Bruce: Brett

Brett:... I have a small case of espilepsy.

Amy: Epilepsy.  

Brett: I get seizures, alright Amy!

Bruce: So... are you okay?

Brett: (Start nodding) You know... no, I'm not. (tries to be deep) I can't control this... devil's curse. It uproots me from my everyday activities and spins me to the fiery gates of hell. 

Bruce: Let's not get ahead of ourselves, you get seizures. I mean...

Amy: No, I know what he means. Its the fear that he's talking about... and the humiliation, the absolutely emasculating feeling of...

Brett: Okay Amy, lets not go so far. I get seizures, come on. 

(Amy is dumbfounded)
Brett: But it is a problem, because no one knows about it. And I have to deal with this every day. And no one seems to care... you know, except for colleges because I can get scholarships off it.

(Quick Silence)

Amy: Then I think I've got our fundraiser idea.

(Pan across, smiles)

(Dan runs in)

Dan: Where is he?!

(Everyone turns around, Dan keeps running towards Brett)

Dan: Brett!

(Brett is absolutely flustered. Dan slams the AED he is carrying onto Brett's chest)

Brett: (Really quickly): Wait no! 

(Total shock, Brett is nailed to the ground)

Bruce: He was fine!

Dan: (Improvised Line)

(Brett is seizing on the ground, looking back at Dan)

DETENTION

(Kids are sitting quietly)

(A random kid runs in)


Kid: Some kid is seizing in student council!

(All detention kids stare at him)

Kid: (Looks back) Its Brett Coleman!

(All kids file out... Packer leaves and turns the other way)

(Overlay of Nolan Monologue- Nolan is typing an entry for his blog)
Nolan: September 30th 2011 8.34 PM.  This day in history the Space shuttle STS-68 (Endeavour 7)  launches into orbit, but that's not important. No one will remember that shuttle, nor the men on it, for anything significant. No one will remember you. No one will remember me. No one will remember what we do. However, it's what we do that no one will remember that makes any difference at all. The faceless heroes, the forgotten saviors, the unvisited graves. Those are the people who will change the world. Those are the only people worthy of remembrance. The few, the unknown, the forgotten. The people who don't need to be remembered. 
`;

const thirdEpisode = `
8th Period 3: Enter Stage Right  

DRAMA
(Sam, Olivia, and Ethan are sitting in the Auditorium, Olivia and Ethan are facing their leader)

Sam: Alright. Gather round, you Shakespearean Shafts of Superlative. Let me see this week's pose!
 
(All drama members strike unique poses- Camera is panning across them)

Sam: Nice, Excellent, (Enthusiastic) Very good Peter! So, in Chitty Chitty Gang Bang.

(Faces are like “What?”)

Sam: The focus is on the “character.”  And for that reason, our exercise this week will be all about “character.” (Pauses)

Olivia: And so...

Sam: Shhh. I'm pausing for dramatic effect. We are going to enter different after school clubs... and act as one of their members. (Exaggerated) What? Yes. (End Scene Gesture) Paul and Al, chorus, John and Nick, cross country, Mark Brendan and Zack, media club, Olivia and Ethan, student council. I will take on the challenge of (pause) detention.

K-Fudge: So we're not actually having practice today? (silence, leaves) 

Sam: So, to document our progress, you will each be required to interview in the process.  Any questions?

Ethan: Yeah, for Chitty Chitty Bang Bang.... why am I the car?

(THEME)

DETENTION

(Sam walks in, flamboyantly) 

Sam:  What's in the air my Johnsons?!

(Dead Stare. Sam sits down.)

John: (Walks over to Sam and grabs a bike chain on him):  Sorry, BMX club is in room 206 now.

(Sam keeps his cool... or tries to)

Sam:(Serious) Bro, keep off my digs. 

John: (Pissed) Excuse me?

Sam: (Still tough) I.. recently... got them dry cleaned.

(Aside) Sam: Saved myself on that one.

John: Who the hell are you?

Sam: (Pulls off) Yo, I thought we was all flounder from the same sea.

(All Stare)

STUCCO

(Brett Walks in while Dan is talking about the success of the fundraiser)

Dan:..the seizure fund has raised 2,432 dollars so- welcome back Brett

Brett: Yeah, I had to drive back home to (sees Ethan) I'm sorry.

Ethan: What?

Brett: (struggling) I...ah... I know you can't... um, I was talking about driving. 

Ethan: What do you mean “I can't”?

Brett: Because you're...in a wheelchair.

Ethan: What are you talking about I- (looks down) Oh my god!

(Brett's face is stunned)

Ethan: (Starts Crying) I...I'm a... ah... (calm) Yeah, I've been like this for two years. I'm like the only paraplegic in the school. 

Brett:... my aunts in a wheelchair.

Bruce: (mouths) No.

Ethan: Its fine man, you don't have to do that. (Reaches out his hand) I'm Ethan.

(Brett Shakes hand)

Brett: Brett. 

Dan: Ethan and Olivia here will be joining us today, they're our new honorary reps. 

Ethan: Well Olivia's really the one interested in Student Government, I'm only here as a requirement of her parole. I'm her “student corespondent”.  

(Olivia's face is stunned) 

(Aside) Olivia: The best actress adapts to any role she's been given. 

Amy: Oh my god, what... what did you do?

Olivia: It was actually only- 

Ethan: No, no, I'll explain (to stucco members) Its hard for her. Um.. see, she... she used kill chickens.  (Faces are stunned) By snapping their necks. 

Bruce: Are you serious?

Ethan: Yeah, she goes crazy when she's exposed to chicken products of any kind.

Brett: I have a chicken sandwich.

Ethan: You better hide that... you better hide that and diffuse the scent right now.  

(Brett goes to do it quickly)

Olivia: Look guys, I'm different now. I've been reformed... chickens are my friends.

Ethan: (To Olivia) That's good Olivia... (to Stucco) Its also not true. Just last week she literally counted her chickens before they hatched just so she could stomp on them right as they came out of the egg.

Dan: (Trying to be optimistic) Well that's not entirely bad because....what is wrong with you?

Olivia: I was touched by a chicken when I was younger!

(aside) Ethan: I did not see that coming...at all

Olivia: Well, he took his beak and shoved it into my leg, and then I...well...I stomped the life out of him. Ever since then I've longed for the taste of chicken blood.

Amy: Are you the spawn of the devil?

Ethan: If the devil likes omlettes.

DETENTION

(Ramona is sitting by herself)

(aside) Sam: As a delinquent it is important to establish yourself as the alpha male, especially with only one girl in the room.

(Sam sits next to Ramona and awkwardly puts his arm around her)

Sam: I wanna cover you in sawdust and show you off to the orphans

Ramona: What the f-

STUCCO

Dan: And so if we put 10% towards the dj then we can allot 30% to-

Ethan: Hey Olivia remember when you were fat?

Olivia: Yeah, remember when you could walk? (stucco is speechless) (to stucco members) No, guys, it's not like that, we used to date. We knew each other way before all this.

Ethan: (pause) Yeah...but then she dumped me when I got these perpetual dead legs

Olivia: It wasn't because of that

Ethan: Cut the crap (silence)

Dan: ...so if we put 10% towards the dj-

DETENTION

(Packer is eating cookies)

Nolan: Are you sharing your cookies?

John: (As child) Golly, should I, Mrs. Tobin? Gee, I didn't even think about! Here's a piece for you Mrs. Tobin! and you Ramona! And a piece for Danny. But not for you Tim, because you were dealing Marijuana in the custodian's closet. Weren't you?

Sam: (To John) Yo cracker Jack, where's my piece?

John: You just call me cracker Jack?

Sam: Yo it's fine, I'll take one for myself (takes full cookie) Thanks

John: (serious) Do not eat that cookie.

Sam: Dawg, we're all chipmunks from the same a cappella group

John: Bite it, and I'll kill you.

(aside) Sam: When faced with aggression, act with aggression. Detention is a dog eat dog world (pause) And I ain't no vegetarian.

Sam: Man, what makes this cookie so important?

John: My sister made it.

Sam: Man, screw your sister! (Packer charges, and tackles Sam straight to the ground, beating the crap out of Sam)

Ramona: John stop! (John continues punching)

Nolan: Jesus, John stop! (tries pulling John off)

Ramona: John stop right now! (yelling)

(aside) Sam: Never break character

Sam: Stop Stop Stop! I was acting! I'm from drama, I'm Sam Quinto.

John: ….what?

Sam: It was a drama project, I was acting, I'm sorry!

Ramona: Alright, get off him John

John: ...I can't (Sam's arms are wrapped around John's waist) Are you gonna let me go now?

Sam: Hmm? Oh yeah. (lets go)

STUCCO

Olivia: Look, my problems aside, I'm really want to make a difference. So can we get this meeting rolling?

Dan: Um.. yeah sure. 

Olivia: Okay, well I created a short presentation. This should help to cut our spending and optimize our student contribution. 

(They all nod approvingly, Olivia goes to put the usb into the computer. The presentation starts, and the first slide has the picture of a chicken with a red X on it)

(Aside) Olivia: That bastard.

(Continuing the presentation)

Olivia: So as you can see... if we cut chicken nuggets out of the lunch menu we'll see an increase in marginal profit. (looks over to see Brett holding half of a chicken sandwich, everyone becomes nervous as Olivia gazes into Brett's soul)

Brett: (wimpily) I'm sorry, it's just all this talk about chicken, and I had this sandwich and -(Olivia smacks the sandwich out of his hand) (pause)

Olivia: I'm so sorry (starts cleaning it up) look I don't hate chicken, I don't even care about stucco (Dan puts hand over heart and moans) Ethan and I are just actors in drama and this was just some stupid project and-

Brett: Wait, he's acting to!?

Olivia: Yes.

Brett: (to Ethan) You think it's funny to make of handicaps? 

Ethan: Wait, wait, no (Brett throws Ethan onto the ground, Ethan is limp and everyone stares silently) (Ethan raises hand) I was acting, but I'm actually paraplegic....so yeah...(Olivia walks  over to help him up)

Monologue: (Ethan getting back into wheelchair and rolling down hallway with Olivia, he makes chicken wings, Sam gets up, receives cookie): 

Sam:  Acting is an art, spanning from now to the dawn of time. It takes many forms, it goes by many names.  It is alive and breathing. However, sometimes this art, like all arts, gets messy.  At a certain point, the artist needs to step back from his work and remember that, despite his best attempts, he can never become the art he creates.  He must understand that he is only himself. And there's nothing wrong with that, being yourself. That's all you are.

(Reveals Drama kids listening to Sam speak in the auditorium, he is “injured”)

K-Fudge: So you're telling us you broke character?

(Silence)

Sam: Yes.
`;

/**
 * Handles the incoming event and context from the AWS Lambda function.
 * 
 * @param {object} event - The incoming event.
 * @param {object} context - The incoming context.
 * 
 * @returns {Promise<void>} - A promise that resolves when the function is complete.
 */
export async function handle(event, context) {
  console.log('Event is', event);
  console.log('Context is', context);

  const theme = process.argv.slice(2);
  const chatCompletion = await openai.chat.completions.create({
    messages: [
        { role: 'system', content: 'You are a TV series writer. You must write a professional script for a new episode of the series "8th Period" and you must make the theme of the episode whatever the user decides. You will recieve information about the series characters and previous episode scripts to help you write a new episode in the same style and voice as the existing scripts.' },
        { role: 'system', content: `Here are the characters in the series "8th Period". You will find them grouped by club. Below each character name is a description about that character: ${allCharacterInfo}` },
        { role: 'system', content: `Here is the script for the pilot episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${pilotEpisode}` },
        { role: 'system', content: `Here is the script for the second episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${secondEpisode}` },
        { role: 'system', content: `Here is the script for the third episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${thirdEpisode}` },
        { role: 'system', content: 'You now have everything you need to write a script for a new episode of "8th Period" when the user gives you the theme of the episode.' },
        { role: 'user', content: `The theme of the episode is: ${event.theme}` }
    ],
    model: 'gpt-4-turbo',
  });

  console.log(chatCompletion);
  console.log(chatCompletion.choices);
  console.log(chatCompletion.choices[0].message.content);
}