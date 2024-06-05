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
He's called cloudy because he used to breath in chalk dust and exhale it through his nose.  The troublemaker. Uses the bender excuse “trouble at home”. Instead his dad beats him, mother left, etc.  More sensitive to girls than Bender is. Still annoying, still a “tough guy” but not bad guy. He presents himself as “owning the place”.   Is good at magic, performs tricks. He's not a magician; he does it to be annoying. He learned the tricks for his sister. Not a great student. Not failing, but having a C-D average.  No sports (perhaps wrestling?).  He thinks the comma is the greatest thing ever. You never have to stop your sentences. They never end; they just keep flowing and flowing.  He's a good speaker when angry but isn't as smooth as bender otherwise. He's a genius at Math, on the math team. No one knows about it, he does it cause he's good at it.  
 
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

const forthEpisode = `
8th Period 4:  PSA Drugs

STUCCO

Brett: Can we skip the rally if we hate school spirit?

Dan: You're a representative of student council.

Brett: So can I?

Dan: ...no. (Moves on) Alright, well the rally is gonna start at 12 and the band is going to play for about 10 minutes, then each club is going to have about 3 minutes to represent their club and try to get people to join. There are 10 clubs so it's going to take about 30 minutes, speaking of which (to Amy) have the clubs told you what they plan on doing during their time slots?

Amy: Yeah, everyone except the drama club.

Dan: Alright, can you swing by and ask them what they're doing?

Amy: Well...I was actually wondering if I could skip Stucco today. 

Dan: What? Y-wh-what?

Amy: I'm doing “dizzy bat”

Dan: (unassertive) Listen, whatever medication you're on-

Bruce: ...the game during the rally tomorrow.

Dan: Oh...well sure you can practice during Stucco today.

Brett: Wait, girls are allowed to participate in the rally?

Bruce: (to Brett) You're a cave man.

Brett: Amy, no offense, but I don't think you're cut out for physical activity.

Amy: (to herself) I've run three marathons.

Dan: Well then, you can help her train!

Amy: No! I'm fine by myself.

Brett: The president said we have to, so I think we have to.

Dan: It was a suggestion.

Brett: We're doing it! (stands up, grabs Amy's arm and begins walking to the door) Come on Amy, I'm gonna teach you a thing or two about having trouble seeing straight, and running like hell. (they exit)

(Dan and Bruce look to each other)

DRAMA

(Sam, Ethan, Olivia, and 2 others. Sam crawls unto stage, moaning. He then clutches his chest dramatically and falls to the ground. His mouth begins to foam, drama kids run onto the stage to help him (Ethan is left on audience level, looking at rescuers as if to say “Yeah, you go get him”. Olivia runs up beside Sam.)

Sam:  Save me... (Olivia looks concerned) Save me from all the cocaine.

Olivia: What?

Sam: Drugs have destroyed my life... now I'm... dead. (Sam wipes off foam)  

(All drama kids look annoyed, especially Olivia and K-Fudge.)

K-Fudge: Hell no. 

(All except Olivia leave stage)

Olivia: Oh my god Sam... you can't do that. Its just wrong.

(Sam gets up) 

Sam: (Confidently) Is it wrong? Is it wrong to keep the public aware of drug abuse?

Olivia: No, its wrong to pretend that you're dying. Why would you do that?

Sam: Because! (Pause, turn to audience of drama kids) Drama will be putting on a performance at the school rally. We will be educating our classmates on the evils of drugs. And this performance needs to be our best yet. 

(All groan)

Sam: Do not complain! We need people to love our performance because we need people to join... drama. We need to do some recruiting. Right now we only have about four and a half members.

(Cuts to Ethan, he smiles and raises his finger in an acknowledging gesture)

Olivia: (hopeful) So we're just gonna do something really simple?

CUT TO: (Sam is holding a nerf gun aimed at Ethan who is on the ground, with his wheelchair tipped over. Several other members are standing around them. The ridiculousness includes the “angel of death” and others) 

Ethan: (acting) It wasn't her fault! Cho was the merchant.

Sam: Stop! Stop! (everyone breaks character) We need a re-write. We want the audience to feel bad for Jaun and to be able to relate to his illiterate grandmother, this just isn't cutting it. (angel of death continues, Sam looks back) Stop. (angel stops)

STUCCO

(Brett and Amy are in the hallway, Brett is holding a bat)

Brett: Are you ready for this?

Amy: Yeah-

Brett: Don't talk! This is a mental game...now let's feel those biceps. (He grasps Amy's bicep, she looks up at him with an awkward face. His hand moves to her back, she jumps away quickly)

Amy: (stuttering) Dizzy bat has nothing to do with strength.

Brett: Fair enough. Let's just start off with some squat thrusts, I'll go first then you. Alright one (does squat thrust, then walks directly behind Amy) Alright now you're up.

Amy: Brett! Let's just get to the spinning.

Brett: (playfully) Fair enough, ya caught me again.

Amy: (quick) What?

Brett: (quicker/nervous) Um, nothing, nothing. I think the bat goes this way and the umm...or the bat goes the other way...you can do whatever.

DRAMA
(A childish looking drama kid is walking down the “street” whistling)

James:  Wow! I'm so glad there are no drugs in my life!

 (Man in a black morphsuit with the word “DRUGS” on it in white tape - “essence of drugs” - runs onto the stage and starts beating James. Cut to Dan and Bruce entering the auditorium)

Bruce: What the hell is-

Dan: Is this.

(Bruce looks annoyed, Dan shrugs)

Sam: (To stage) Cut! (Looking back at Bruce and Dan) Now look! We are in the presence of high school royalty. How are you today my nobles? 

Dan: Quite well... peasant! (Dan is all smiles)

(Sam  seems less enthused by this remark, Bruce cuts in)

Bruce: Sam, we're just here to check in on what you're doing for the rally. 

Sam: Ah, well (hoping down from stage, towards Dan and Bruce) we will be undertaking the simple task of saving this student body... from drugs. (Bruce, and even Dan, look exhausted by this) 

Bruce: (annoyed) Yeah, how humble. So how much time are you going to need?

Sam: Well brilliance cannot be limited-

Bruce: (stern) How much time?

Sam: (quickly) 2-3 minutes.

Dan: (Cheerful) Alright, sounds good. We'll see you then.

Sam: (As Bruce and Dan turn to leave) Actually... I could use a few extra hands...on stage...

HALLWAY

(Amy is set with her head on the bat)

Brett: (Stopwatch in hand)  Ready? Go! (She starts spinning) Good, Good... alright run!

(Amy runs, full speed, into a wall and collapses)

DRAMA

(“Evolution of America..... through Drugs”)

Bruce: (unenthusiastic) This is the evolution of America.... through Drugs.

(Quick Pan to right, there are two “kids” talking... one has a baseball glove and ball)

Kid1: Gee, it sure it is a nice day. Wanna play baseball?

Kid2: No I think I'm gonna do drugs instead!

Kid1: Boy, can I join!

(Quick Pan further right, there is a family at their dinner table)

Child: Hey Pa, what're we having for dinner?

Pa: We're having leftover drugs from last night!

Child: Golly! I could eat drugs forever!

Ma: Make sure you save some for you're sister, she's out at the drugstore right now.

(Quick Pan even further right, there is a pile of bodies that Bruce is standing next to)

Sam: (Seriously) Is this the America you want? 

HALLWAY

(Opens on Amy running into the wall again, Brett walks over to help Amy up)

Brett: That's the seventh time. 

Amy: (Getting up, speaking to Brett) If I have lemon pony, go to sea?

Brett: Lets get you to the nurse.

DRAMA

(Ethan is on the stage by himself while the other members sit and watch, he rolls onto stage)

Ethan: (sighs) (Unenthusiastic) I don't think this...(Sam motions to “go”)...I took drugs... and now I can't walk. (Quickly)  Really? Come on Sam? 

Sam: What?

Ethan: (looking down at script then up at Sam) I sold my legs for drugs? (mid-line Nicole Sharp walks into the auditorium.)

Sam: (enthusiastically): Nicole! Welcome!

Almost Simultaneously- Dan: No! / Drama (rushing up to meet her): Nicole!

Nicole: (Addressing them all, with slight contempt): Hello.

Sam: Oh Lady Sharp, thank you (bowing) for your more than generous donation to our little department here - (quietly) that makes dreams come true. 

Nicole: (happily) You're more than welcome. Unlike Dan Martin, I don't want to screw over the drama department. (pulls out paper without looking at Sam, starts to walk forward towards Dan and Bruce) Budget Cuts. (Sam takes paper, astonished)

Dan (Covers mouth quickly): Um Nicole, how did you get that?  

Nicole: Sleep. 

(Dan drops to the ground, Nicole ascends the stage to Bruce)

Nicole: Hello Bruce. 

(Bruce pops out of curtain, clearly trying to hide)

Bruce: (Quickly) Yeah? (To Sam Confidently) So your tech stuff looks good-

Sam: We don't have any tech for this-

Bruce: The carburetor's running fine and... (Turning to Nicole, awkwardly) Hey Nicole, how... are you?                          

Nicole: (unphased) I'm fine Bruce. Look, I just came to tell you that you need to stop whining on Facebook. 

Bruce: (Extremely awkward, choppy, nervous and blushing. Looks down with hand behind head) What're you talking about?

Nicole: (pulls out piece of paper and reads from it, professionally) “I miss you so much. I don't think I will ever be able to love again. Without you I feel like a lost puppy in the abandoned tundras of Antarctica, I am so alone. Thank you for the best 3 weeks of my life. Come back to me.” (finishes and glares Bruce)

Bruce: Did you hack my facebook account-

Nicole: (cuts him off) You posted it on my wall.

Bruce: (Weakly) That could have been anyone...

Nicole: Just stop alright, you're tainting my campaign for student council president next year. I can't have you as baggage. (turns to the drama members) Well good luck with your production tomorrow!

Drama together- Bye Nicole! (Dan is waking up)

Dan: She's the she-devil! (pause)

Bruce: I can respect that.

NURSE'S OFFICE

(Brett and Amy are sitting in office, Nurse is facing them)

Nurse: (hand on Amy's forehead) Alright, you should be fine, just try to get some fresh air.

OUTSIDE

(Amy and Brett walking side by side outside)

Brett: Sorry I've been going hard on you, I just really want you to win. I'm kinda competitive.

Amy: I understand though, I get the same way when I run marathons-

Brett: (disregards her) All I'm saying is that you're a great person even though I don't treat you that way sometimes.

Amy: Thank Brett, you're a great person too.

Brett: I can really see us getting along now that- (que Hawk Screech) (both look to the sky in terror) 

Amy: (scared to death) Was that a hawk? (Hawk Screeches again) (Amy covers her ears and screams, Brett plays dead, montage of Amy and Brett fearing the hawk begins)

NURSE'S OFFICE

(Amy and Brett sitting there scared)

DRAMA

(Sam is covered in war paint, shirt off, and screaming “Drugs” at the ceiling, slamming the ground. Cuts to Drama audience shocked.)

Sam: (Out of Breath, Beaten) I don't know what I'm doing! (Starts to cry)

Ethan: (Moving on stage. Kindly, concerned): Hey, Sam. I've got an idea.

Sam: (Exhausted) What?

Ethan: (soft but confident) Well, what if we all wore white tee shirts (Sam looks up at Ethan) and we stood, silent in the middle of the gymnasium, and after a few seconds one of us asks the crowd if they have ever wondered what it would be like to fall asleep in the backseat of a car, or to dive in the pool on a hot,humid day, and another asks whether they have ever wondered what it would feel like to grip the cold ice at the peak of Everest, or to hear a chorus of people roar as you cross the finish line, and someone else steps up and asks if they remember fearing the beast in the closest, or sitting in bed, awake, on early  Christmas morning, and finally, Sam, you step up and ask them all whether they remember what real ecstasy is, or the thrill of actual accomplishment, the rush of surprise, and the joy of fear. (Start to cut to Brett and Amy together, practicing. Brett mouths “One more Time”) Drugs dull life, they subtract from the momentary pleasures we feel and replace them with boredom, well compared to the instant gratification they offer. Its weak, it requires no effort, no struggle, no anticipation, its simply there to take. And its easy to take, instant gratification, but eventually it will mean nothing. You will become used to it, and all things will lose their appeal. Nothing compares.  But actually, nothing compares to real life. (Pause)  And then we all sit down. 

(All of Drama is silent and in awe, Sam nobs understandingly and begins to get up)

(Aside) Ethan: I was not going to tell people that I lost my legs because of drugs.

(Cuts to final, “still” scene, Amy after successfully completing dizzy bat, “The following day, Amy threw up before competition even began”)
`;

const fifthEpisode = `
8th Period Episode 5: The Hungry Games

DETENTION

(All 8 members are playing Seven Up. Opening angle of members with heads down on the desks.  Angle of members tapping others on the head. Members at the front of the Room - Rick, Packer, Randy, Jim, …. All heads look up)

Packer: (Improv Name based on Clothing), you're up first.  

Jake: (Angle in front rising slowly) (As if it were obvious) Randy.   

Randy: Damn it! You always know!

Jake: You always pick me... 

Randy: (Confidently) Perhaps it's because I have a man crush on you. (Jake's reaction) (Members' Reaction) I just said that...out loud, yes? (Packer Nods)  Well then. No Shame.

Packer: Alright. How about we do something else now that Seven Up is ruined forever.  

Sawyer: Something wrong with a man having feelings for another man Packer?  

Packer: Nope, just thought that right there was pretty strange.  Of course I could see why even a straight man would choose to like another guy over you Sawyer. When you lay out your options like that.

Randy: Look guys I didn't mean to-

Sawyer:  Yeah Cloudy, when was the last time a woman other than your mother showed any interest in you?

Packer:  Disappear Witch!

Nolan: Packer, calm down. She's a credit to female society.  At least she doesn't have the intellect... and wardrobe... of a third grader.
(Sawyer Smiles) 

Packer: Well Nolan, that's fine. I don't expect you to have much of a taste for women anyway....other than female ports. 

Quan:  I think she's kinda... (Packer turns to him) alright. (Packer death stare) I'll let myself out.

Sawyer: (To Packer) Keep it up and you'll drive them all out. Like fans at a Nickelback Concert. You know, like after their first song-

Packer: Yeah I got it.  But that's not a bad idea.

Randy:  A Nickelback Concert?

Packer: Randy, we could all appreciate you shutting your trap. No, I was thinking we see who can stay here longest (door shut). A bit of a survival test. 

Rick: New Game?

Packer: New Game.

DRAMA

Sam: (only looking to Olivia and Ethan, holding a sheet of paper) Alright, Olivia, Ethan, I'm glad you could join me for the audition process! How many people have shown?

Olivia: One.

Sam: One? Where're the others?

Ethan: What others?

Sam: This sign up sheet is filled! Where is...Dick Hertz? Ivan Bitchacockoff? Dick Whack? Ben Dover?

Ethan: Sam, are you listening to yourself?

Sam: Yeah, where's Dick Fitz? Seymour Bush? (sudden realization) Oh...I should've known we didn't have that many Dicks in our school. Alright, send her in!
     
THEME

DETENTION

Packer: Okay, lets start this up.

Sawyer: (instantly) I will kill anyone that does not leave this room in 8 seconds. 

(Reactions are clearly doubtful, almost laughing at her with their faces. “What?”) 

Sawyer: (to self) Okay. (Recognizing the doubt, she walks up to Thomas, and slams his head against the desk. Stares at Detention. Doubt is replaced with fear, an extra yells “OH, SH...”, and all members but 6 stay in the room) Let the games begin. (John Packer reaction)

Randy: (In accent) Yes, let the 74th Hunger Games begin-

Packer: Shut up Randy! No one likes those books!

Nolan: Actually, the trilogy is a New York Times Best Seller so a lot of people like those books. (Packer's reaction)

Sawyer: (to Nolan/seductively) You're really smart. (Nolan is uncomfortable) (Awkward Silence)

Ramona: (trying to alleviate the awkwardness) So why exactly are we staying in here?

Packer: (as if it were obvious) To win. The game. (Ramona's face is questioning) To win the game, what else matters?

Ramona: Alright, I'm leaving. I have to get my (pause) I have a doctors appointment.  

Sawyer and Packer: (quietly) One down.

DRAMA

(Robyn is standing alone on stage, with judges Sam, Ethan, and Olivia sitting in the front row)

Sam: Ah, welcome to our humble abode where dreams enter reality through the convex of a child's imagination-

E†han: Welcome to Drama, this is where we practice and this is where we'll conduct your audition.  

Sam: Yes, and quite an audition it will be! You are the challenger in our domain! You will climb mountains and swim through seas to simply get through stage one! There has never been more contested a position as this, and you may die. (Robyn's reaction) but it will be worth every ounce of blood you spill-

Olivia: Let's just start the audition.

Robyn: (nervously) Okay.

Sam: First I shall ask you some questions (pauses, pulls out papers) What is your favorite play?

Robyn: (Confidently) Who's Afraid of Virginia Woolf.

Sam: (Happily passionate) You theatrical skank! (To Olivia and Ethan) I really like this one! (To Robyn) Who's your favorite actor?

Robyn: (Confidently) James Stewart.

Sam: (Angrily passionate) You plebeian! It's not Christian Bale!?

Robyn: (weakly) No.

Sam: (head down) Alright (breath, looking up) How do you feel about nude scenes?

DETENTION

 (Packer is playing “I Don't Feel Like Dancing” chorus over and over again. Pan over all members, dead pan pained faces, Randy is dancing. Silence for a few seconds. Relief, Randy is disappointed. Nolan turns to talk to Jake “As I was saying-” Song begins again)

Nolan: (Instantly) (Improv animal scream) (Grabs ipod (phone?) and throws it to the ground. Reactions. Nolan's face, astonished) I am sorry. I just destroyed your phone. (Packer's face is calm) I tend to get... a little aggressive when I go for extended periods without food. I apologize.

Packer: It's not my phone (pan to Randy crying)

Randy: (Broken) What am I supposed to do- 

Nolan: (Tense) I said I apologize! 

(Randy's face is stunned)

Sawyer: (Pulls Nolan's chair closer to her. Seductively) Mmm, I liked that animal reaction you had there Nolan. Maybe I should lock you up and starve you. See what happens when I enter the lion's cage. (Nolan is extremely uncomfortable. Packer's reaction is also confused/uncomfortable)

(Cut to Randy and Jake)

Randy: (Still teary) Oh Jake, let me cry on your shoulder (moves to shoulder)

Jake: (Instantly) Get off Me!

Randy: Fine! God, I just can't win in here! (starts to cry more, covers his head in his arms, runs out of detention but hits the door)

DRAMA 

Sam: Robyn, the line is “Rorksheer ma stroop et un stoompa vencita comme usa lavity on groogon malter!” All you have to do is say in reverse while dancing to Rasputin and tapping out morse code! Is it that hard?!

(Robyn is stunned, and exhausted)

Ethan: Sam, you really need-

Sam: Ethan! This is my audition. Hush. (To Robyn) Now Robyn. Do you want to be a part of Drama? (Robyn Nods) Alright let's try something then. I'm going to come on stage and... um, Olivia too, (Ethan's face) and we are going to do an improv scene. (moving onto stage with Olivia) Alright, I'll set the scene (deep breath, then turning towards Robyn) Hello Mrs. Cofferage, as you know I'm running for moon President. (Reactions)

DETENTION

(Remaining members are sitting in a circle, having a seance, holding hands. Order: Packer, Nolan, Sawyer, Jake, Packer...)  

Packer: (eyes closed, tight angle - once he starts speaking, slow pan around circle ending on Jake.) Enter me Spirit. (Shutters) I sense you, I feel your icy touch. You. You were orphaned. You lived in a pawn shop, in the back, in storage.  The owner used to let you stay... but only, only if you dressed in all black so that when he turned off the light... so when he turned off the light it was as if you were gone... all except your pale white face... and this face, your face, well it didn't matter. No, what mattered was that he couldn't touch you, he couldn't touch you while looking at your face...

Jake: (Nervous) I have to go the bathroom.  

Sawyer: Then go.

Jake: Like in my pants, or should I leave. (Reactions. Packer begins to make a peeing sound, the rest join in (Pouring water, etc). Sawyer's pee noise is extremely loud and incredibly close and obnoxious. All stop and stare.)

Nolan: (Concerned) Is that how you pee?

Sawyer: Wouldn't you like to know (winks).  

Nolan: (pause) No...no, thank you.

Packer: Hey, loud pee-ers, high five. Not that ladylike, but alright.

Jake: Guys.... I shat myself 30 minutes ago. (Everyone is clearly uncomfortable.) Yeah. (Gets up to leave. Hears his pants. Sits back down)

Packer: Please leave.  (Jake gets up and leaves. Pants are heard)

Sawyer: How did we not know that?

Packer: (Honestly) I don't know. (Zooms to reveal wet pants).

DRAMA

(Olivia, Sam, and Robyn are still improving on stage. Sam is in mid song)

Sam: (To Robyn) So if you steal away in a spaceship.

Emily: (To Robyn) You'd have to shave your head!

Sam: And get up to the craters.

Emily:  By then she may be dead!


Sam:  But if she slinks into the polls, and checks off just my name.

Emily: They'll never believe her, It won't work, It would be a shame. (Sam points to Robyn who is trying to follow the flow of the scene)

Robyn:  (In a gorgeous tone, singing) A shame or not, it's worth the risk. I'll change the world, it will be brisk!

(Sam is awe struck)

Sam: (trying to cry)...wow...that was...that was beautiful.

Robyn: (to Sam, concerned) Are you crying?

Sam: (breaks concentration) I was trying to...either way, (begins walking back to seat) Your improv was very good, and your voice...was like that of a euphonic spirit singing of what love's first touch feels like. (to Olivia) What did you think?

Olivia: (assuring) It was beautiful.

Sam: (To Ethan) And your thoughts?

Ethan: (honestly) Yeah, it was very good.

Sam: Indeed (at seat, to Robyn) Well you have come so far and done very well, but there is one final task at hand.

Robyn: Okay.

Sam: Let me know when you're ready.

Robyn: I'm ready.

Sam: Okay, tell me, Ms. Robyn Webber. Why do you want to be in Drama? (Robyn's reaction)

DETENTION

(Packer is asleep on a desk. Sawyer is sitting on Nolan's lap)

Sawyer: See, I told you that this chair could support both our weight, no problem.

Nolan: (Face is rigid, but afraid) Yes. (Pause)  I think I should go now.

Sawyer: (Childish, mockingly playful) But Nolan, I haven't even given you your chocolate bar yet. (Sawyer smirks, there is a close up of the chocolate bar and Nolan's face)

Nolan: (Extremely eager, but restrained. Almost deranged due to lack of food) I want to have.    

Sawyer: (Toying) I know you do, you haven't eaten in hours. So come get it (she begins to slowly unpeal the wrapper)

Nolan: (Ignoring her blatant tactics, not wanting to get involved) Where did you get that?

Sawyer: (Still toying, still confident) Wouldn't you like to know?

Nolan: (Suddenly, Confident but still deranged) Where's Jack Merch.

Sawyer: (Confidence drops at Nolan's tone) Huh? (Nolan pushed Sawyer off him, stands up, sniffs the air, and makes a beeline for the closet in the room. He opens the closet to reveal Merch, who has a number of food items on him, almost a concession stand in the closet. Merch is clearly nervous as Nolan looks at him like a crazy man. Jack Merch, clearly intimidated, closes the closet door slowly as Nolan continues to look angrily. Nolan is about to explode when Sawyer intervenes.)

Sawyer: (afraid) Nolan! Here! (She tosses the candy outside the room. Nolan sprints after it like a dog and Sawyer shuts the door. The sound wakes Packer up.)

Packer: (Waking) God, I was having this awful nightmare (sees Sawyer, looks around) I was in... a meadow... hey, where is everyone.

Sawyer: Gone. Its just you and me.

Packer: Well from one nightmare to the next, I suppose. (Sawyer's reaction) Alright, I'm heading out. (Starts to leave)  

Sawyer: You're gonna let me win?

Packer: You have your talons dug so deep into the tile here, I don't think I could ever get you to leave. (Sawyer's reaction) (With mock sweetness) Goodnight Sweetheart. (Starts to leave)

Sawyer: (Surprised, determined to get a reaction from Packer) You know this makes me better than you.      

Packer: (at doorway) Of course. But who will ever know. (leaves)

Sawyer: (alone) Guess I'm the winner.

DRAMA

Robyn: (during monologue cut to John walking away from detention, Sawyer walking down the hallway near Nolan [Nolan seems uncomfortable, Sawyer is seductively/flirtatiously looking at him] As they walk out of vision from the room, Thomas awakes from being knocked out earlier) Well...my life has been filled with drama. Like many people my age, I may not be in the best situation in the world, but I don't want that to affect my outlook on life. I'll always have a smile on, because I believe that I'm the luckiest person in the world. I believe that, because I'm lying to myself, and what are actors but convincing liars. The best players in the game. Because all we really do is play games. Pretend to make everything all right, toss a few titles around. And the game is no fun played alone, acting by yourself is a nightmare (Sam nods as if in complete understanding).  But if everyone's in on it, if everyone's lying, it actually becomes something real. (She smiles) And It's actually kinda fun.  So, I guess I want to join Drama because I want to start pretending with other people. Because I'm tired of pretending alone.   

Sam: (Disappointed) Well, I like your voice.

Ethan: (Impressed) In my audition I just answered with “I like acting.”

Sam: (Assuring) Yeah it was heartfelt (To Robyn, honestly) Seeing as you're the only person who auditioned, you're in. However, you could have been up against the entire world, and I'd still pick you. We are very lucky to have your voice- you.

Robyn: Thank you

(credits)

END
`

/**
 * Handles the incoming event and context from the AWS Lambda function.
 * 
 * @param {object} event - The incoming event.
 * 
 * @returns {Promise<void>} - A promise that resolves when the function is complete.
 */
export async function handle(event) {
  const response = {
    statusCode: 200,
    errors: [],
    episodeScript: null,
  };

  let requestBody = {};

  if (event.body) {
    try {
      requestBody = JSON.parse(event.body);
    } catch (error) {
      response.statusCode = 400;
      response.errors.push({
        code: 'INVALID_REQUEST_BODY',
        message: 'The request body is invalid.',
      })
    }
  }
  
  const theme = requestBody.theme ?? 'whatever you want';

  const chatCompletion = await openai.chat.completions.create({
    messages: [
        { role: 'system', content: 'You are a web series writer. You must write a script for a new episode of the series "8th Period" and you must make the theme of the episode whatever the user decides. You will recieve information about the series characters and previous episode scripts to help you write a new episode in the same style and voice as the existing scripts.' },
        { role: 'system', content: `Here are the characters in the series "8th Period". You will find them grouped by club. Below each character name is a description about that character: ${allCharacterInfo}` },
        { role: 'system', content: `Here is the script for the pilot episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${pilotEpisode}` },
        { role: 'system', content: `Here is the script for another episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${secondEpisode}` },
        { role: 'system', content: `Here is the script for another episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${thirdEpisode}` },
        { role: 'system', content: `Here is the script for another episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${forthEpisode}` },
        { role: 'system', content: `Here is the script for another episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${fifthEpisode}` },
        { role: 'system', content: 'When you write your script, try to be witty and edgy - the intended audience is older teenages to young adults. It is very important that this new script feels like the previous scripts, and you should sometimes make references to things that happened in previous scripts.' },
        { role: 'system', content: 'When you write your script, try to make the subplots for each group of characters distinct. There should be a central conflict that the characters must overcome using their own abilities. Having some conflict is important. All subplots should eventually overlap and relate to the theme' },
        { role: 'system', content: 'You now have everything you need to write a script for a new episode of "8th Period" when the user gives you the theme of the episode. When formatting your script, try to make it look like a professional television script and ignore the formatting of the other 8th period scripts you were provided' },
        { role: 'user', content: `The theme of the episode is: ${theme}` }
    ],
    model: 'gpt-4o',
  });

  console.log('Chat completion is', chatCompletion);

  // check if chat completion is successful
  if (
    chatCompletion?.choices?.length
    && chatCompletion.choices[0]?.finish_reason === 'stop'
  ) {
    // take the first choice
    response.episodeScript = chatCompletion.choices[0]?.message?.content;
  } else {
    response.errors.push({
      code: 'CHAT_COMPLETION_FAILED',
      message: 'Chat completion failed.',
    });
  }

  return JSON.stringify(response);
}