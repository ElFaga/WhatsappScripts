async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
TOY STORY 3
Story by
John Lasseter
Andrew Stanton
Lee Unkrich
Screenplay by
Michael Arndt
Blue sky, fluffy clouds.
The TOY STORY logo. A branding iron sears a “3” into it.
IMAGE bursts into FLAMES...
EXT. OLD WEST - DAY
A train races across the desert. MOVE IN on an ARMORED CAR.
Suddenly, the roof blows open.
EXT. TRAIN - DAY
Money bags fly out. ONE-EYED BART (Mr. Potato Head) follows.
ONE-EYED BART
Money, money, money! Ha! Ha! Ha!
Bart stashes the loot. Suddenly, a lasso yanks his arm off.
ONE-EYED BART
Hey!
The lasso lifts him off his feet. He falls, dazed. A
figure approaches -- WOODY. He pins Bart with his boot.
WOODY
You got a date with justice, One-Eyed
Bart!
ONE-EYED BART
Too bad, Sheriff -- I’m a married man.
A WAR CRY. Woody looks up.
VOICE (O.S.)
Ai! Ai-ai-ai-ai-ai-yah!
A Ninja warrior, ONE-EYED BETTY (Mrs. Potato Head), flips
down the train roof, wielding a sword and nun-chucks.
WOODY
One-Eyed Betty!
Woody handsprings away. He gets to the end of the Caboose.
Betty hits him with her purse. He teeters, then falls.
WOODY
Whoa, whoa... Ahhh...!
Bart and Betty laugh, peek over the edge...
GALLOPING HOOVES
TILT UP to find Woody, riding BULLSEYE, JESSIE at the reins.
JESSIE
I believe you dropped something,
Mister!
ONE-EYED BART
Jessie?!
WOODY
You’ve reached the end of the line,
Bart.
Bart pulls out a remote detonator.
ONE-EYED BART
I always wanted to go out with a
bang!
Ahead, a huge trestle bridge spans a canyon. ZOOM to
REVEAL -- The middle of the bridge is loaded with dynamite.
Bart laughs, hits the detonator. The bridge explodes.
Woody, Jessie, and Bullseye gasp.
JESSIE
Oh no!
WOODY
The orphans!
WHIP PAN -- A train car of TROLLS lean out the windows.
One-Eyed Bart cackles.
ONE-EYED BART
Hate to leave early, but our ride is
here.
HONK-HONK! A pink Corvette, driven by the three ALIENS,
pulls up alongside the train.
ALIENS
Oooooooooo!
ONE-EYED BART
It’s me or the kiddies, Sheriff!
Take your pick!
The Potato Heads leap off the train into the Corvette.
They speed off. Woody looks at the out-of-control train.
 2
WOODY
Ride like the wind, Bullseye!
Bullseye runs up next to the speeding locomotive.
WOODY
Hold him steady...
Woody stands, then leaps from Bullseye into the locomotive.
JESSIE
Woody, hurry!
Woody turns a gear, pulls the brake.
Train wheels lock. Sparks fly. Woody looks ahead.
POV -- The train skids toward the severed rails.
Bullseye and Jessie skid to a stop at the canyon edge.
Too late. Woody and the train plummet over the edge.
Bullseye and Jessie are horrified.
JESSIE
No...!
From deep in the canyon, a FLASH and RUMBLE.
Then, the entire train rises into the sky.
Holding it from below is BUZZ LIGHTYEAR.
BUZZ
Glad I could catch the train!
Woody leans out the front.
WOODY
Now let’s catch some criminals!
BUZZ
To Infinity... And Beyond!
CUT TO:
EXT. DESERT PLAINS
A large, hand-painted sign reads:
 Border Crossing
 One Mile
 Outlaws Welcome
 3
WHIP PAN -- The Corvette speeds past.
The Outlaws laugh gleefully. Bart kisses his loot.
The Aliens see something in the sky, point...
ALIENS
OooOOOOoooo!
Buzz flies out of the sun, firing his laser.
The Corvette is sliced in half. The halves fall away.
The Outlaws tumble into a heap.
Woody and Jessie step up. Buzz lands nearby, laser poised.
WOODY
Reach for the sky!
ONE-EYED BART
You can’t touch me, Sheriff! I
brought my attack dog with a
built-in force field!
Bart WHISTLES.
From above, SLINKY springs down the canyon walls, coils
crackling with energy. He circles the gang, bites his
tail. An ENERGY BUBBLE forms around them.
WOODY
Well, I brought my dinosaur, who eats
force-field dogs!
JESSIE
Yo-Dee-Le-Hi-HoooOOOOOOOO!
The Earth trembles. Cracks form. The ground bursts open.
A giant REX emerges, BELLOWING.
He leans toward Bart, lets out a fearsome ROAR.
A shadow. Rex stops. An intense HUM. Everyone looks up.
An enormous, pig-shaped spaceship hovers above them.
BUZZ
Evil Dr. Porkchop!!!
We FLY UP to...
 4
INT. SPACESHIP - DAY
DR. PORKCHOP (Hamm) sits on the bridge, sporting a bowler.
EVIL DR. PORKCHOP
That’s Mr. Evil Dr. Porkchop to you!
Bart, Betty, Slinky, and the Aliens are suddenly beamed up.
Hamm flips open a switch. A red button: DEATH BY MONKEYS.
He pushes it.
The ship’s belly swings open. A yellow barrel is dropped.
The barrel falls.
It explodes into a mushroom cloud of crazed red monkeys.
Woody, Buzz and Jessie flee. The Monkeys come after them.
Rex ROARS. The Monkeys swarm over him, taking him down.
Woody, Buzz and Jessie are overtaken and pinned down.
The spaceship’s snout rotates and opens. A giant laser
cannon powers up with a deafening HUM. Bart LAUGHS and
reaches for a button marked with a skull and crossbones...
Jessie turns away, eyes shut.
Bart LAUGHS louder.
Buzz turns away.
Bart CACKLES -- finger on the trigger.
Woody grimaces...
CUT TO:
INT. ANDY’S ROOM - DAY
Andy imitates One-Eyed Bart’s LAUGH.
On Woody and Buzz. Andy’s hands move Woody as he “talks”.
YOUNG ANDY (AS WOODY)
Buzz! Shoot your laser at my badge!
YOUNG ANDY (AS BUZZ)
Woody, no! It’ll kill you!
YOUNG ANDY (AS WOODY)
Just do it!
 5
Andy presses Buzz’s laser, makes a ricochet sound -- PSHOO!
-- off Woody’s badge and traces a line into the air...
...Where Hamm, the Potato Heads and the Aliens perch on a
winged cardboard box, crudely fashioned into a spaceship,
that dangles from the ceiling.
Andy hits the carton -- PPPKOOOOOSHHH!!!
The Toys tumble to pillows on the floor.
CUT TO:
CAMCORDER POV - HANDHELD
MOM’S hand pushes open a door. Andy, 8, in his cowboy hat,
jumps around making EXPLOSION NOISES.
He’s turned his room into a Western “set” complete with a
Tinkertoy trestle bridge, a Barrel of Monkeys, etc.
YOUNG ANDY
(as Woody)
You’re going to jail, Bart.
Camera ZOOMS IN. Andy looks up, stops.
YOUNG ANDY
Mom...!?
MOM (O.C.)
No, no...! Keep playing! Just
pretend I’m not here.
Suddenly, MOLLY, 2, toddles in, knocking over Tinker Toys.
MOM (O.C.)
Oh, no! Molly...!
YOUNG ANDY
No, it’s okay, Mom! It’s... A 50-
foot baby from outer space! She’s
on a rampage! Run for your lives!
Andy races around. Chaos, laughing. Buster enters, BARKING.
The CAMERA PIVOTS UPSIDE-DOWN, revealing Mom’s face.
MOM
Does the red light mean it’s going?
The TAPE GLITCHES and we JUMP TO...
BEGIN MUSIC -- “You’ve Got A Friend In Me”
 6
INT. ANDY’S KITCHEN - DAY - HANDHELD CAMCORDER POV
Molly sits in a high chair, party hat on, eating cake.
Camera PANS Andy’s Toys, wearing party hats. End on Andy,
holding Woody, stuffing cake in his mouth.
MOM (O.C.)
Come on, say ‘Happy Birthday’ to
Molly...
YOUNG ANDY
(mouth full)
Happhy Brffday!
MOM (O.C.)
Oh, charming.
Andy holds Woody up to CAMERA, cake crumbs flying.
YOUNG ANDY (AS WOODY)
Happhy Brffday!!!
JUMP TO:
INT. ANDY’S ROOM - DAY - HANDHELD CAMCORDER POV
Mom pencils a line above Andy’s head onto the door frame.
MOM (O.C.)
Look how tall you’re getting!
Andy steps away and beams.
JUMP TO:
INT. ANDY’S ROOM - DAY - HANDHELD CAMCORDER POV
Andy holds Woody against the door frame, marks a line above
Woody’s head. ZOOM OUT to reveal lines and labels for all
the toys, including for “Slinky” and “Slinky’s Butt”.
JUMP TO:
EXT. FRONT YARD - DAY - HANDHELD CAMCORDER POV
Andy gives Woody a piggyback ride.
JUMP TO:
 7
INT. ANDY’S ROOM - DAY - HANDHELD CAMCORDER POV
Andy holds Buzz towards camera, shoots his laser.
BUZZ
“Buzz Lightyear to the rescue!”
ANDY (AS WOODY)
Good work Buzz!
Andy makes Buzz and Woody high five.
JUMP TO:
INT. ANDY’S ROOM - NIGHT - HANDHELD CAMCORDER POV
Andy lies in a pillow fort, surrounded by toys, eating from
a huge bowl of popcorn, and watching an off-screen TV.
He stuffs popcorn in Rex’s mouth, turns back to the TV.
His eyes widen. The popcorn tumbles out of Rex’s mouth.
JUMP TO:
EXT. ANDY’S FRONT YARD - DAY - HANDHELD CAMCORDER POV
Andy rockets Jessie and Bullseye around the front yard,
while Mom struggles to keep him in the FRAME.
JUMP TO:
INT. ANDY’S ROOM - DAY - HANDHELD CAMCORDER POV
Andy, laughing, spins around, falls on his bed, pulls his
toys close -- holding Woody, Buzz and Jessie in the warm,
glowing embrace of a child’s innocent and boundless love.
The song FADES on “Our friendship will never die...”
FADE TO BLACK
WOODY (V.O.)
Okay -- places, everyone! C’mon,
get in position!
INT. TOY CHEST, ANDY’S ROOM - DAY
Dark, crowded. Toys crammed together. Light seeps in.
Nervous, backstage jitters. They speak in HUSHED TONES.
MRS. POTATO HEAD
Wait -- I can’t find my other eye!
 8
HAMM
Someone’s foot is in my face...
MR. POTATO HEAD
It’s mine! Give it back!
ALIENS
You saved our lives! We are
eternally grateful!
Potato Head groans. Buzz sits by the rim. Jessie climbs up.
JESSIE
Buzz, mind if I squeeze in next to
ya?!
BUZZ
Yes! No! I mean...! Why would I
mind?! Squeezing next to... You!
He laughs, nervous. She grins. Finally, he turns away.
BUZZ (CONT'D)
Is it hot in here?
REX (O.S.)
Here they come!
The Toys clamber to the rim and gaze out.
POV -- SARGE and two ARMY MEN slip in the room, dragging
something in a gym sock.
The Army Men arrive at the chest. Woody peers down.
WOODY
Sarge! You got it...?!
SARGE
Mission accomplished!
The Toys are thrilled. The Army Men hoist the sock up.
WOODY
Careful...! Careful!!!
Buzz turns the sock upside-down. A cell phone slides out.
Toys gather around.
WOODY (CONT'D)
All right, guys. We got one shot at
this. Everyone ready?
JESSIE
We’re ready, Woody! Let’s do it!
 9
WOODY
Buzz -- make the call.
Buzz flips open his wrist cover. A phone number is written
inside. Jessie pulls out a cordless phone, leans close to
Buzz. Buzz chuckles, nervous. Jessie dials the phone.
Woody tosses the cell phone to Rex.
Jessie gets to the last digit, hits it. Silence.
Suddenly, the cell phone RINGS. Rex yelps.
Buzz, Jessie and Woody peer over the rim. FOOTSTEPS on the
stairs.
BUZZ
Target is on approach.
Woody’s eyes are fixed on the door.
WOODY
Just like we rehearsed it, guys...
The door opens. ANDY enters but we only SEE his jean-clad
legs. He scans the room, zeroes in on the toy chest.
He lifts the lid REVEALING...
Andy is a teenager. His hair is long and his voice deep,
but he has the same kind face. He looks down, puzzled.
The Toys lie, lifeless, amid sports equipment and clothing.
The phone RINGS again. Andy’s hand rummages.
Woody hugs the cordless as Andy’s fingers pass by and find
the cell phone.
He pulls it out. The phone is stuck in Rex’s arms. Andy
pulls. Rex clings. Andy finally yanks the phone loose.
ANDY
Hello...?
CLOSE ON -- Woody, holding the phone. He closes his eyes.
ANDY (ON PHONE) (CONT'D)
Hello...?! Anyone there?
Andy hangs up, turns.
ANDY (CONT'D)
Molly, stay outta my room!
 10
MOLLY (O.S.)
I wasn’t in your room!
Andy scoffs, looks down at Rex in his hand. Rex lies
frozen, smiling -- eager to be played with.
Andy drops Rex in the box, shuts the lid, heads out.
ANDY
Then who was messing with my stuff?
MOLLY (O.S.)
It wasn’t me...!
He departs, closing the door -- CLICK.
CREAK -- Woody and Buzz push the chest open, share a look.
The other Toys climb out.
MR. POTATO HEAD
Well, that went well!
They spill out onto the floor. The room has changed --
rock posters, guitar, skateboard, other teen detritus.
REX
He held me! He actually held me!
HAMM
Oh, this is just sad.
MR. POTATO HEAD
Who are we kiddin’? The kid’s
seventeen years old!
Woody and Buzz jump down, exchange a glance. Buzz nods.
Woody waves his arms.
WOODY
Guys, hey, hold up! We need a staff
meeting! Everyone? A staff meeting!
GROANS of boredom.
HAMM
Not again...!
WOODY
Oh, come on! Slink? Gather everyone
up!
SLINKY
Uh... We are gathered, Woody!
The Toy Community is a lot smaller. Woody rolls with it.
 11
WOODY
Okay. First off -- we all knew
Operation Playtime was a long shot...
MR. POTATO HEAD
More like a misfire!
WOODY
...But we’ve always said this job
isn’t about getting played with.
It’s about...
JESSIE
...Being there for Andy. We know.
REX
But we can try again, right?
Woody looks at all of them. He shakes his head.
WOODY
I’m callin’ it, guys. We’re closin’
up shop.
Gasps. Everyone is crushed by this news.
WOODY (CONT'D)
Andy’s going to college any day
now... That was our last shot.
Mrs. Potato Head begins to sniffle. Buzz steps forward.
BUZZ
We’re going into Attic Mode, folks.
Keep your accessories with you at all
times -- spare parts, batteries...
Anything you need for an orderly
transition.
Potato Head steps up.
MR. POTATO HEAD
“Orderly?” Don’t you get it?! We’re
done! Finished! Over the hill!
WOODY
Hey, hey, now come on, guys! We all
knew this day was coming!
Buzz, in FOREGROUND, sees something off-screen, frowns.
POV -- Sarge and the Army Men climb up onto Andy’s desk.
The other Toys keep arguing.
 12
HAMM (O.C.)
Yeah, but now its here!
WOODY (O.C.)
Look, every toy goes through this!
No one wants to see their kid leave!
BUZZ
Hey! Sarge! What are you doing?!
Everyone turns. Sarge and his last two Soldiers climb to
the window sill.
SARGE
War’s over, folks. Me ‘n the boys
are movin’ on.
WOODY
Moving on...?!
BUZZ
You’re going AWOL?!
SARGE
We done our duty. Andy’s grown up.
SOLDIER ONE
And let’s face it -- when the trash
bags come out, we Army guys are the
first to go.
BUZZ
Trash bags...?!
WOODY
Who said anything about trash bags?
SARGE
It has been an honor serving with
you. Good luck, folks.
Sarge straps in tandem with Soldier One. They leap. Their
parachute opens and the wind carries them off.
SOLDIER TWO
You’re gonna need it...!
He jumps and flies off too. The Toys are stunned.
WOODY
No, no... Wait...! Wait! Wait!!!
REX
We’re getting thrown away?!
 13
WOODY
No! No one’s getting thrown away!
MR. POTATO HEAD
How do you know?!
Jessie begins to panic.
JESSIE
We’re being abandoned...!
BUZZ
We’ll be fine, Jessie!
HAMM
So why did Sarge leave?!
MRS. POTATO HEAD
Should we leave?!
SLINKY
I thought we were goin’ to the attic!
REX
Oh, I hate all this uncertainty...!
Woody turns, waves his arms.
WOODY
Whoa, whoa! Hold on! Quiet!!!
No one’s getting thrown out, okay?!
We’re all still here, aren’t we?!
(beat)
I mean, yeah, we’ve lost friends
along the way -- Wheezy and Etch
and...
REX
Bo Peep...?
Woody nods, stoic.
WOODY
Even... Even Bo. All good toys
who’ve gone on to new owners. But
through every yard sale, every spring
cleaning, Andy held on to us. He must
care about us or we wouldn’t be here.
You wait -- Andy’s gonna tuck us in
the attic. It’ll be safe and warm...
BUZZ
...And we’ll all be together.
 14
WOODY
Exactly. There’s games up there, and
books... And, and...
BUZZ
The race-car track...
WOODY
The race-car track. Thank you!
SLINKY
And the old TV...!
WOODY
There you go -- the old TV! And
those guys from the Christmas
decorations box! They’re fun, right?
The Toys shrug, MURMUR in semi-agreement. Woody softens.
WOODY (CONT'D)
And someday -- if we’re lucky -- Andy
may have kids of his own...
REX
And he’ll play with us then, right?
Woody looks at Rex, unable to say “yes”.
WOODY
We’ll always be there for him.
BUZZ
Come on, guys! Let’s get our parts
together, get ready, and go out on a
high note.
The Toys disperse.
MRS. POTATO HEAD
I’d better find my other eye...
MR. POTATO HEAD
Where’d ya leave it this time?
She puts a hand over her empty eye socket.
MRS. POTATO HEAD
Someplace dark. And dusty!
Hamm turns to Rex.
HAMM
C’mon. Let’s see how much we’re
goin’ for on eBay...
 15
Woody watches as the Toys trudge off.
WOODY
Don’t worry. Andy’s gonna take care
of us. I guarantee it.
ON THE DRESSER
Woody climbs up, surveys the room -- posters, guitar,
textbooks. He turns to a cork board where Andy’s high
school graduation photo is pinned. He lifts it to find...
A SNAPSHOT shows an eight-year-old Andy wearing a cowboy
hat and posing with Woody and Buzz and all of Andy’s toys.
Woody gazes at the halcyon past he can never return to.
Buzz steps up behind him.
BUZZ
You guarantee it, huh...?
WOODY
I dunno, Buzz. What else could I say?
BUZZ
Whatever happens, at least we’ll be
together.
CLOSE ON -- The SNAPSHOT of young Andy.
WOODY (O.C.)
For Infinity and Beyond...
FOOTSTEPS on the stairs. Woody and Buzz turn.
MOLLY (O.S.)
Can I have your stereo?
ANDY (O.S.)
No!
MOLLY (O.S.)
Why not?
ANDY (O.S.)
‘Cause I’m taking it with me!
The Toys scramble back into the toy chest. Andy enters
with Molly close behind.
MOLLY
Can I have your computer?
 16
ANDY
No!
MOLLY
Your video games?
ANDY
Forget it, Molly!
Molly sighs, walks off. Andy starts typing on his laptop.
Andy’s Mom enters carrying cardboard boxes and trash bags.
MOM
Okay, Andy, let’s get to work here.
Anything you’re not taking to college
either goes in the attic, or it’s
trash.
She picks up a box and writes “College” in magic marker.
Andy stares at his computer.
ANDY
Mom, I’m not leaving ‘til Friday!
MOM
C’mon -- it’s garbage day.
ANDY
Mom...!
She picks up his skateboard, puts it in the “College” box.
MOM
Look, it’s simple: Skateboard?
College. Little league trophy?
Probably attic. Apple core? Trash.
You can do the rest.
She tosses an apple core in a trash bag, hands it to Andy.
Molly opens the Toy Chest.
MOLLY
Why do you still have these Toys?
ANDY
Molly, out of my room...!
MOLLY
Three more days and it’s mine...!
She strides out the door.
MOM
Molly, you’re not off the hook either!
 17
THE TOY CHEST
The Toys watch as Mom picks up a box, enters Molly’s room.
MOM (CONT'D)
You have more toys than you know what
to do with. Some of ‘em could make
other kids really happy...
MOLLY
What kids...?
MOM
The children at the day care.
They’re always asking for donations.
Rex whispers.
REX
What’s “day care”?
WOODY
Shhh...!!!
Mom writes SUNNYSIDE on the box. Molly pouts.
MOLLY
But, Mom...
MOM
No “buts”. You choose the toys you
wanna donate. I’ll drop ‘em off at
Sunnyside.
Mom leaves. Molly sighs -- Moms! -- surveys the room. She
picks up a xylophone, a Magic 8-Ball, puts them in the box.
She picks up her old Barbie.
MOLLY POV -- Barbie smiles, desperately eager to please.
Molly, indifferent, tosses Barbie into the box, then buries
her face in a “Teen” magazine.
THE TOY CHEST
Across the hall, the Toys react.
JESSIE
Poor Barbie...!
HAMM
I get the Corvette.
 18
INT. ANDY’S ROOM - DAY
Mom walks back and finds Andy still on his laptop.
MOM
Andy, come on -- you need to start
making decisions.
ANDY
Like what?
She pulls open the toy chest.
MOM
Like, what are you gonna do with
these toys? Should we donate ‘em to
Sunnyside?
ANDY
No...!
MOM
Maybe sell them online...?
ANDY
Mom -- no one’s gonna want those old
toys. They’re junk!
THE TOYS
Silently hear this bombshell. Mom lowers the lid.
MOM
Fine. You have ‘til Friday --
anything that’s not packed for
college, or in the attic, is getting
thrown out.
ANDY
“Whatever you say, Mom.”
He stares at his laptop. She shakes her head, exits.
Andy sighs, closes his laptop. He turns, surveys his room.
He rolls his chair to the toy chest and opens the lid.
Inside are the Toys -- his old friends. They lie frozen,
smiling, forever eager to play.
Andy gazes at them, making a decision.
Abruptly, he grabs a trash bag, snaps it open. He picks up
the Toys -- Rex, Potato Head, Jessie -- tosses them in.
 19
He pulls Hamm’s cork, empties the change out, and dumps
him, with rest of the Toys, in the trash bag.
Then Andy picks up Buzz and Woody, looks at them.
POV -- Buzz, grinning and heroic. Woody, smiling and loyal.
TOYS POV -- Andy turns, tosses Woody in the College box.
The Toys gasp. Andy drops Buzz into the garbage bag.
IN THE BAG
Buzz is stunned and hurt.
Andy cinches the bag closed and carries it from the room.
Behind him, Woody pops up from the College box, shocked.
IN THE BAG
It’s dim and crowded.
REX
What’s happening...?!!!
MR. POTATO HEAD
We’re getting thrown out, you idiot!
That’s what’s happening!!!
Woody jumps from the box, runs across the room, hides
behind the door frame.
Andy walks onto the hall landing, reaches up, and pulls
open a trapdoor ladder that leads to the attic.
Woody watches, relieved.
Andy begins climbing to the attic. One rung... Two...
Molly enters the hall landing, struggling with her box.
It hits the door frame. A Magic 8-Ball falls out.
ANDY
You need a hand?
MOLLY
I got it...
Andy steps down, leaves the bag at the foot of the ladder,
grabs the 8-Ball. He helps Molly carry her box downstairs.
ANDY
Here. So, you gonna miss me when I’m
gone?
 20
MOLLY
If I say ‘no’, do I still get your
room?
ANDY
Nope.
MOLLY
Then, yes, I’ll miss you.
They disappear.
IN THE BAG
The Toys are piled all over each other. Jessie is hyperventilating. Buzz looks around -- plotting his next move.
JESSIE
I can’t breathe!
REX
This can’t be happening!!!
BUZZ
Quiet...!!!! What’s that sound?
They all listen. A faint CREAKING.
ON THE LANDING
The attic ladder -- spring loaded -- retracts, pushing the
toy-filled trash bag out of the way.
IN THE BAG
The bag is tipped over. The Toys tumble over each other.
TOYS
Whooaaaaa...!!!
ON THE LANDING
The ladder pushes free and rises to the ceiling, retracting
completely. Woody tiptoes into the hall toward the bag.
Suddenly, Mom enters carrying a trash bag. Woody retreats.
Mom trips over the toy-filled bag, looks down -- irritated.
MOM
Andy...?!
No answer. Mom sighs, picks up the toy-filled bag and
exits, carrying it downstairs.
 21
ANDY’S ROOM
Woody -- at the door -- is electrified.
WOODY
That’s not trash! That’s not trash!!
He steps back, mind reeling.
WOODY (CONT'D)
Think, Woody...! Think! Think!
(an idea)
Oooh!
(whistles)
Buster! C’mere, boy! C’mere!
Off-screen PAWS and the JINGLE of a dog collar. Buster
enters -- old, saggy, panting. Woody vaults onto his back.
WOODY (CONT'D)
Okay, boy! To the curb! Hyah!!!
Buster yawns and flops over, pinning Woody under him.
WOODY (CONT'D)
No, Buster, no...!
Woody grabs Buster by the jowls, pulls him backwards.
Finally, Buster rolls over. Woody sits up, gasping.
Off-screen, a door SLAMS. Woody turns.
Woody rushes to the window, gazes out.
POV -- Mom drops the trash bags at the curb.
WHIP PAN -- Rumbling up the street is a garbage truck.
Woody gasps.
IN THE BAG
Mounting panic.
JESSIE
We’re on the curb!
MR. POTATO HEAD
Oh, I knew it would come to this!
Buzz grabs the side of the bag, tries to tear it open.
BUZZ
Pull, everyone! Pull!!!
 22
EXT. ANDY’S HOUSE - DAY
Woody grabs a pair of scissors, shoves them in his holster.
He lunges for the drainpipe, slides down, hits a gutter and
tumbles into the bushes below. CRASH!
IN THE BAG
The Toys follow Buzz’s lead, pulling the sides of the bag.
REX
It won’t rip!
HAMM
Ah, forget it! It’s triple-ply highdensity polyethylene!
BUZZ
There’s gotta be a way out!
MR. POTATO HEAD
Andy doesn’t want us! What’s the
point?
BUZZ
(thinking)
Point... Point... POINT!!!
Buzz looks at Rex’s pointy tail.
OUTSIDE THE BAG
The truck RUMBLES closer, two driveways away.
IN THE BAG
The Toys follow Buzz, shoving Rex backwards.
BUZZ (CONT'D)
Push! Push!!!
REX
I can hear the garbage truck!
OUTSIDE THE BAG
The bag stretches. Rex’s tail is nearly through.
IN THE BAG
REX (CONT'D)
It’s getting closer-fffmmm!
Rex is muffled by a mouthful of plastic.
 23
IN THE YARD
Woody uses the scissors to snip his way out of the bush.
The garbage truck approaches Andy’s driveway.
Woody races out, dives behind the mail box post. The
GARBAGE MAN is in head phones, playing air guitar, drumming
the mail box. He empties a garbage can into the truck.
Woody ducks from behind the post, plunges his scissors into
a garbage bag.
Garbage spills out: wrong bag. He tries another. No luck.
As the Garbage Man turns, Woody ducks behind the post. The
Garbage Man grabs the last bags, tosses them in the truck.
He climbs on a running board, SLAPS the side.
The truck shifts into gear and lurches off down the street.
THE STREET
As the truck rumbles off, Woody ducks from behind the mail
box, runs after it. The truck pulls up at the next house.
Woody hides behind a fire hydrant.
The Garbage Man hops off the runner, yanks a lever. The
truck’s compactor lowers, scoops up the trash bags.
From behind the hydrant, Woody watches in horror.
The compactor retracts, CRUNCHING the bags remorselessly.
WOODY
Buzz...!!! Jessie...!!!
A TINKLE. Woody turns. In Andy’s driveway, an upside-down
recycling bin scurries on little feet into the garage.
Woody sighs, relieved.
INT. GARAGE - DAY
The Toys cast off the bin. They are traumatized.
SLINKY
Andy threw us out...!
HAMM
Like we were garbage...!
MR. POTATO HEAD
“Junk”! He called us “junk”!
 24
MRS. POTATO HEAD
How could he...?!
She SOBS on Mr. Potato Head’s shoulder.
BUZZ
(to himself)
This doesn’t make any sense...!
Jessie is furious.
JESSIE
I should’a seen this coming! It’s
Emily all over again!
She turns and scans the garage -- galvanized, determined.
HAMM
Sarge was right...!
MR. POTATO HEAD
Yeah! And Woody was wrong!
BUZZ
Wait a minute! Hold on! This is no
time to be hysterical.
HAMM
It’s the perfect time to be
hysterical!
REX
(hysterical)
Should we be hysterical...?!!!
SLINKY
No!
MR. POTATO HEAD
Yes!
BUZZ
Maybe! But not right now!
JESSIE (O.S.)
Yeeeeeeeeeeeeeee--hawwwwwwwwww...!!!
Everyone turns. Jessie is smiling.
JESSIE (CONT'D)
Fellas -- I know what to do!
They follow her gaze. In the hatchback of Mom’s car is
Molly’s box of toys, marked SUNNYSIDE.
 25
EXT. ANDY’S YARD - DAY
Woody darts from a tree to a landscape boulder, sneaking
towards the garage. He peeks out from behind a flowerpot.
WOODY
What the heck...?!
WOODY’S POV -- The Toys clamber into the Donation Box.
INT. CAR / GARAGE - DAY
Buzz stands outside the Donation Box as the other Toys
clamber in. Jessie helps the Aliens up into the box.
JESSIE
We should’a done this years ago!
BUZZ
Jessie, wait...! What about Woody?!
JESSIE
He’s fine, Buzz! Andy’s takin’ him
to college! Now we need to go!
Buzz looks at her and the others.
BUZZ
You’re right. Come on!
He helps pass the Aliens up. Woody approaches, incredulous.
WOODY
Buzz...?
BUZZ
Woody...!
WOODY
What’s going on? Don’t you know this
box is being donated!
BUZZ
It’s under control! We have a plan!
REX
We’re going to Day Care!
WOODY
Day Care?! What -- have you all lost
your marbles?!
MRS. POTATO HEAD
Didn’t you see? Andy threw us away!
 26
WOODY
No...! No, no, no! He was putting
you in the attic!
MR. POTATO HEAD
Attic? So how’d we end up on the
curb?!
WOODY
That was a mistake! Andy’s Mom
thought you were trash!
HAMM
Yeah! After he put us in a trash
bag!
MRS. POTATO HEAD
And called us “junk”!
WOODY
I know it looks bad but, guys, ya
gotta believe me!
MR. POTATO HEAD
Sure thing, “College Boy”!
JESSIE
Andy’s movin’ on, Woody! It’s time
we did the same.
Jessie and the others duck in the box, pull the flaps shut.
WOODY
Okay, out of the box! Everyone, right
now! Come on! Buzz -- gimme a hand.
We gotta get this thing outta here!
He walks around and tries to push the box out of the car.
BUZZ
Woody -- wait! We need to figure out
what’s best for every--...
SLAM!!! The hatchback shuts.
Buzz and Woody turn. Through the window, Andy’s Mom walks
to the driver’s seat, gets in. Woody and Buzz crouch down.
WOODY
Oh, great! Great!!! It’s gonna take
us forever to get back here!
The car lurches into gear and drives off.
 27
INT. DONATION BOX / CAR - DAY
The Toys have gathered around Barbie, who is sniffling.
Mrs. Potato Head pats her shoulder.
MRS. POTATO HEAD
It’s all right, Barbie. You’ll be
okay!
Barbie nods, putting on a brave front.
BARBIE
Well... Molly and I have been growing
apart for years, it’s just... I can’t
believe she would throw me away!
She breaks down again. Potato Head rolls his eyes.
MR. POTATO HEAD
Welcome to the club, Toots!
Suddenly, the box flaps open and Woody and Buzz vault in.
WOODY
Okay, everyone, listen up... We can
get back to Andy’s but we gotta move
fast. We’ll hide under the seats
‘til we get home...
The Toys react, incensed.
MR. POTATO HEAD
Get it through your vinyl noggin,
Woody -- Andy doesn’t want us anymore!
WOODY
He was putting you... In the
attic!!!
Jessie goes toe-to-toe with Woody.
JESSIE
He left us... On the curb!
Buzz intervenes.
BUZZ
Alright, calm down! Both of you!
WOODY
Okay, fine! Just wait’ll you see
what Day Care’s like!
REX
Why...?! What’s it like?!
 28
WOODY
Day Care is a sad, lonely place for
washed-up old toys who have no
owners.
Abruptly, Barbie bursts into tears.
HAMM
Quite the charmer, aren’t ya?
WOODY
Oh, you’ll see! As soon as we get to
Day Care, you’ll be begging to go home.
The car hits a bump and Woody tumbles.
EXT. DAY CARE, PARKING LOT - DAY
The car pulls into a modest day care center -- Sunnyside --
a cinder block building with bright, kid-friendly murals.
INT. / EXT. DONATION BOX / PARKING LOT - DAY
Andy’s Mom pulls out the box, carries it across the lot.
Inside the box, the Toys peer out the hand slots.
REX
Can anyone see anything?
JESSIE
There’s a playground...!
Through fencing we SEE glimpses of kids running and playing
with SHOUTS and LAUGHTER. The Toys look at each other.
JESSIE
We hit the jackpot, Bullseye!
HAMM
So much for “sad and lonely”, eh?
WOODY
Okay, calm down, guys. Let’s keep
this in perspective...
MR. POTATO HEAD
Perspective?! This place is perfect!
REX (CONT'D)
Woody, it’s nice! See, the door has
a rainbow on it!
 29
INT. LOBBY - DAY
Andy’s Mom is BUZZED through glass doors. A RECEPTIONIST
behind a counter types at a computer while a small girl on
the counter plays with a toy chimp. Andy’s Mom enters.
MOM
Hey, there!
RECEPTIONIST
Wow! Haven’t seen you in ages...
MOM
Just wanted to drop these old toys off.
She puts the box on the counter.
MOM (CONT'D)
Is this Bonnie?! Look how big you are!
The girl, BONNIE, looks up, then turns to her Mother, shy.
RECEPTIONIST
Say hi, sweetie!
BONNIE
Hi.
RECEPTIONIST
How are your kids? Molly and Andy?
MOM
Not kids anymore. Andy’s going to
college on Friday. Can you believe?
The Receptionist opens the box. Bonnie tries to look in.
RECEPTIONIST
You sure they won’t miss these?
MOM
Nah, they never get played with.
Mom departs and the Receptionist folds up the box flaps.
INT. DONATION BOX / HALLWAY - DAY
The Toys peek out as they are carried down a hallway.
MR. POTATO HEAD
You see any kids...?
REX
Where’s she taking us?
 30
INT. DONATION BOX / BUTTERFLY CLASSROOM - CONTINUOUS
The Box is placed on a counter. The Receptionist departs.
In the box, the Toys step up and jostle for a view.
JESSIE
Look...!
MR. POTATO HEAD
Wow!
REX
What?! What is it?!!!
TOYS’ POV -- An idyllic day care classroom, filled with the
happy bustle of four- and five-year-olds, playing with toys
-- dinosaurs, a baby doll, a pink Teddy bear, a Ken doll.
The Toys stare, agog. Rex jockeys for a peek.
REX (CONT'D)
Aaah! I can’t see!
A bell RINGS. A TEACHER opens the playground door.
BUTTERFLY ROOM TEACHER
Okay, everyone, recess! C’mon!
The kids CHEER and flood out on the playground. The
Teacher turns off lights, shuts the door behind her.
IN THE BOX
Silence. The room is still. The Toys speak sotto.
HAMM
So, now what do we do?
WOODY
We go back to Andy’s! Anyone see an
exit?
MR. POTATO HEAD
Exit schmexit! Let’s get played
with!
BUZZ
Careful! These toys might be jealous
of new arrivals!
REX
I wanna see! It’s my turn!
Rex presses in. The Toys react.
 31
BUZZ
Oooff...!!!
SLINKY
Whoa!
HAMM
Hey!
The whole box tilts and falls off the counter -- SPLAT!!!
The Toys spill out. They look up.
Around the room, all the Day Care Toys stare back.
A Jack In The Box pops up.
JACK IN THE BOX
New Toys!
They all CHEER and burst into smiles.
Jessie shakes hands with a ROCK MONSTER toy.
JESSIE
Well, howdy! Glad to meetcha!
Buzz extends his hand to a ROBOT toy.
BUZZ
Buzz Lightyear, at your service.
Hamm, Slinky and Barbie shake hands with an OCTOPUS toy.
HAMM
Oh boy, oh boy, oh boy!
Rex laughs, circled by adoring little dinosaurs.
An Insect Man ACTION FIGURE helps Mrs. Potato Head get up.
MRS. POTATO HEAD
Oooh, thank you!
(reaches for his bicep)
Oh, may I? Ohhh!
He flexes obligingly. She feels his arm, GIGGLES. Mr.
Potato Head looks on. He flexes his own arm. It sags.
A Crane toy circles the Aliens. They gaze up, rapturous.
ALIENS
The Claw...!!!
SFX -- HONK! HONK! Everyone turns.
 32
A Tonka Truck races forward, then backs up in a quick 180
arc, revealing a large pink Teddy bear, LOTSO, in its bed.
Lotso taps a Tinker Toy cane and the truck bed rises,
“dumping” him out. Like Bob Hope stepping off the links in
Palm Springs, Lotso exudes an easy, cheerful charisma.
LOTSO
Well, hello there! I thought I heard
new voices! Welcome to Sunnyside,
folks! I’m Lots-o’-Huggin’ Bear!
But, please, call me Lotso!
Buzz steps up, offers a hand.
BUZZ
Buzz Lightyear. We come in pea...
Lotso grabs Buzz, lifts him in a smothering hug.
LOTSO
(chuckling)
First thing you gotta know about
me... I’m a hugger!!
He releases Buzz, looks at the other Toys.
LOTSO (CONT'D)
Oh, look at y’all! You been through
a lot today, haven’t you?
MRS. POTATO HEAD
Oh, it’s been horrible!
LOTSO
Well, you’re safe now. We’re all
cast-offs here -- we been dumped,
donated, yard-saled, second-handed,
and just plain thrown out. But just
you wait -- you’ll find being donated
was the best thing that ever happened
to ya!
Woody scoffs, but Rex steps up excitedly.
REX
Mr. Lotso...? Do toys here get
played with every day?
LOTSO
All day long. Five days a week.
JESSIE
But what happens when the kids grow
up?
 33
Lotso steps to a wall of day-care class photos.
LOTSO
Well, now, I’ll tell ya -- when the
kids get old, new ones come in. When
they get old, new ones replace them.
You’ll never be outgrown or
neglected. Never abandoned or
forgotten. No owners means no
heartbreak.
The Toys are overjoyed. Even Woody is taken by this vision.
JESSIE
Yeee-hawww..!!!
MRS. POTATO HEAD
It’s a miracle!
MR. POTATO HEAD
(to Woody)
And you wanted us to stay at Andy’s!
WOODY
Because we’re Andy’s toys!
Lotso puts an arm around Woody.
LOTSO
So you got donated by this “Andy”,
huh? Well, it’s his loss, Sheriff!
He can’t hurt you no more.
WOODY
Whoa, whoa, whoa, whoa...
Lotso cuts him off.
LOTSO
Now let’s get you all settled in.
Ken?! Where is that boy? Ken...?!
New toys!
A Ken doll appears in an upper window of a doll house.
KEN
Far out! Hey, hi, everybody!
(to Lotso)
Down in a jiff, Lotso!
He rides down in an elevator and opens the door.
ON KEN -- Slip-on shoes, double-pleated shorts, and an
unbuttoned animal-print shirt that reveals his ripped abs.
He addresses the Toys with an air of boundless self-regard.
 34
KEN (CONT'D)
So. Who’s ready for Ken’s Dream Tour?
LOTSO
Let’s show our new friends where
they’ll be stayin’!
KEN
Folks, if you wanna step right this--
He turns, sees Barbie. She looks up, sees him.
Sparks fly. MUSIC swells. Destiny calls. They approach.
KEN (CONT'D)
Hi! I’m Ken.
BARBIE
Barbie.
(breathless)
Have we ever me--...?
KEN
Huh-uh...! I would’ve remembered!
(Barbie GIGGLES)
Love your leg warmers.
BARBIE
Nice ascot.
Lotso breaks the spell.
LOTSO
C’mon, Ken! Recess don’t last
forever!
KEN
Right on, Lotso! This way everyone!
He extends a gentlemanly arm. Barbie giggles, takes it.
LOTSO
You got a lot to look forward to, folks
-- the Little Ones love new toys!
He leads them off. Rex, Buzz, and Woody trail behind.
BUZZ
What a nice bear!
REX
And he smells like strawberries!
Woody sighs, exasperated.
 35
As they walk, Ken addresses the Toys like a tour leader.
KEN
Folks, if I can share, here at
Sunnyside, we’ve got, well, just
about anything a Toy could ask for.
Lotso leads them past shelves of toy supplies.
LOTSO
Spare parts, super glue, and enough
fresh batteries to choke a HungryHungry Hippo.
CLOSET DOOR
Lotso flings open a utility closet, revealing a spa-like
workshop in which smaller Toys fix up bigger Toys --
stitching rips, etc. The Toys gasp, impressed.
LOTSO (CONT'D)
Think you’re gettin’ old? Well, stop
your worryin’!
KEN
Our repair spa will keep you stuffed,
puffed, and lightly buffed!
An Elephant plushie is getting his belly re-stuffed. He
SNEEZES. Stuffing flies everywhere.
IN THE CLASSROOM
As the tour continues, Ken gestures to his Dream House.
KEN (CONT'D)
And this, well, this is where I live
-- Ken’s Dream House. It has a disco,
it’s got a dune buggy... And a whole
room just for trying on clothes.
BARBIE
You have everything!!!
KEN
Everything except someone to share it
with.
He looks down, walks off. Barbie sighs, about to faint.
Lotso reaches a bathroom door at the end of the room.
LOTSO
You need anything at all, you just
come talk to me. Here we are...!
 36
Lotso raps the door with his cane. It’s opened by a large
baby doll, BIG BABY, with a lazy, drooping eye. Big Baby
COOS, peers out at the Toys. They stare up in wonder.
LOTSO (CONT'D)
Well, thank you, Big Baby. Why don’t
you come meet our new friends?
He throws an arm around Big Baby in Toy-solidarity.
LOTSO (CONT'D)
Poor Baby! We were thrown out
together, me n’ him. Abandoned by
the same owner!
INT. BATHROOM - DAY
Lotso leads the Toys through a bathroom.
LOTSO
But we don’t need owners here at
Sunnyside! We own ourselves! We’re
masters of our own fate...! We
control our own destiny!
Mr. Potato Head slips and falls, losing his parts.
LOTSO (CONT'D)
Uh, watch out for puddles...
INT. CATERPILLAR ROOM - DAY
Lotso leads the Toys into a new classroom. The Day Care
Toys here are scuffier and more toddler-appropriate.
LOTSO
And here’s where you folks’ll be
staying -- the Caterpillar Room!
The Toys gaze up in awe. There’s kid stuff everywhere:
tiny tables and chairs, finger paintings, wood blocks,
banners of the alphabet, wire cubby bins, etc. The whole
beautiful, child-centric universe of day care.
JESSIE
Look at this place!
BUZZ
[Whistles]
HAMM
Holy moly, guacamole!
 37
MR. POTATO HEAD
Jackpot, baby!
SLINKY
Whoa, puppy!
REX
Wow!
A TOY TRAIN weaves through the room, blowing its WHISTLE.
The Potato Heads look around in wonder.
MRS. POTATO HEAD
(fighting tears)
It’s so beautiful!
Woody is awestruck. Something nudges him. A RINGING.
WOODY
What the...?
He looks down. An old Fisher Price Chatter Telephone is
bumping into him. Woody kneels down, friendly.
Woody (CONT'D)
Oh, hey, little fella...
LOTSO
How long’s it been since y’all got
played with?
SLINKY
It’s been years!
LOTSO
Well, just you wait. In a few minutes
that bell’s gonna ring and you’ll get
the playtime you’ve been dreaming of.
REX
Play! Real play!!! I can’t wait!!!
LOTSO
Now, if you’ll excuse us, we best be
headin’ back. Welcome to Sunnyside,
folks!
Lotso climbs back into the Tonka Truck. The Toys wave.
REX
Thank you!
HAMM
Thank you there, Buddy Boy!
 38
MR. POTATO HEAD
Take care, Pinky!
BUZZ
Goodbye, Mr. Lotso! Thank you!
MRS. POTATO HEAD
Goodbye...!
Barbie turns to Ken -- an end-of-the-first-date moment.
BARBIE
Will I see you again?
KEN
Oh, I’ll see you tonight. In my
dreams.
She giggles. They stare. It’s like they could both
spontaneously combust. At the bathroom door, Lotso waits.
LOTSO
Ken...! Let’s get a move on!
Ken turns to Barbie, takes her hands.
KEN
Barbie, come with me! Live in my
Dream House! I know it’s crazy! I
know we’ve just met! Aw, heck -- you
don’t know me from GI Joe. But when
I look at you I feel like we were...
KEN & BARBIE
...Made for each other!
They gasp, thunderstruck. Barbie turns, gazes to the Toys.
Jessie grins and winks. Mrs. Potato Head waves -- Go!
BARBIE
Yay!
She gives a leg kick. Ken pumps his fist.
KEN
Yessssssss...!!!
Lotso calls again.
LOTSO
Ken...!
KEN
Coming, Lotso!
 39
Ken leads Barbie to the Truck and they hop in, giddy.
Lotso taps his cane and the Truck roars off. Big Baby is
the last to exit, closing the door -- CLICK -- behind them.
Through windows, children are heard LAUGHING and PLAYING.
The Toys turn and wander toward the playground door.
HAMM
Sounds like kids to me...!
REX
Oh, I wanna get played with! Why
can’t time go faster?!!!
JESSIE
How many ya reckon are out there?!
MRS. POTATO HEAD
Oh, they sound so sweet!
Woody looks at them, knowing he’s fighting a losing battle.
WOODY
Look, everyone, it’s nice here, I
admit. But we need to go home...!
The Toys glance at each other. Jessie steps forward.
JESSIE
We can have a whole new life here,
Woody. A chance to make kids happy
again.
SLINKY
Why don’t you stay?
REX
Yeah, Woody! Stay with us!
HAMM
Come on, Woodster!
MR. POTATO HEAD
You’ll get played with...!
MRS. POTATO HEAD
Stay here!
JESSIE
You can make a new kid happy!
WOODY
I can’t! No, no! Guys, really, no!
The Toys are taken aback. Woody struggles to stay calm.
 40
WOODY (CONT'D)
I have a kid. You have a kid --
Andy! And if he wants us at college,
or in the attic, well, then our job
is to be there for him! Now I’m
going home! Anyone wants to join me
is welcome! C’mon, Buzz!
He heads off. Buzz stays put. Woody turns back.
WOODY (CONT'D)
Buzz...?
Buzz -- torn -- steps up to Woody, sober and gentle.
BUZZ
Our mission with Andy’s complete,
Woody.
WOODY
What...?!
BUZZ
And what’s important now is we stay
together.
WOODY
We wouldn’t even be together if it
weren’t for Andy! Look under your
boot, Buzz! You too, Jessie! Whose
name is written there?
The Toys stare at the ground. Rex pipes up.
REX
Maybe Andy doesn’t care about us any
more?
WOODY
Of course he does! He cares about
all of you! He was putting you in
the attic -- I saw! You can’t just
turn your back on him now!
Jessie steps forward -- incensed.
JESSIE
Woody -- wake up! It’s over! Andy
is all grown up!
Woody stares, trying to contain his anger.
WOODY
Okay, fine! Perfect! I can’t
believe how selfish you all are.
 41
Jessie glares back. No one moves.
WOODY (CONT'D)
So this is it? After all we’ve been
through?
Buzz steps forward, offers a handshake. Woody looks at
Buzz. He fixes his hat, turns away. Buzz is stung.
Woody walks to the hall door. Bullseye follows.
WOODY (CONT’D)
Bullseye, no. You need to stay!
He moves on. Bullseye again tries to follow.
WOODY (CONT'D)
Bullseye, no! I said stay!
(softens)
Look -- I don’t want you left alone
in the attic, okay? Now, stay.
Bullseye retreats. Jessie puts a consoling hand on him.
KEYS in a LOCK. The Toys turn.
BONNIE’S MOM (O.S.)
Bonnie...? Bonnie!
Woody looks at them, doesn’t know what else to say.
WOODY
I gotta go.
The Toys scatter. Woody hides behind the door just as
Bonnie’s Mom enters.
BONNIE’S MOM
Bonnie? You in here?
Woody sneaks out the door, into the hall.
CLOSE ON -- Buzz and Jessie, watching.
INT. HALLWAY
TEACHERS CHAT at the end of the hallway.
Woody peeks out from behind a garbage can, tip-toes into
the hall, turns. A janitor cart approaches. Woody falls
limp. The cart passes over Woody, leaving the hall empty.
A whistling JANITOR pushes the cart down the hallway.
TILT DOWN to FIND Woody holding the underside of the cart.
 42
WOODY POV -- He rolls through the lobby, toward the exit...
WOODY
C’mon, c’mon...
...and veers into a bathroom.
WOODY (CONT'D)
No, no...!
INT. BATHROOM - CONTINUOUS
The Janitor cleans the sinks. Woody sneaks into a nearby
stall. Looks up, sees an open window.
He tears a square of toilet paper, places it on the seat,
climbs up the tank lid, leaps to the toilet paper roll,
jumps to the top of the stall, backs toward the window.
At the sink, the Janitor looks in the mirror, starts.
JANITOR
What the heck?
Woody freezes. The Janitor stares at the mirror, Woody in
its reflection.
RACK FOCUS -- The Janitor reaches up, wipes a stain off.
JANITOR (CONT’D)
That’s better.
RACK BACK -- The window in the mirror. Woody’s gone.
EXT. PLAYGROUND - DAY
Woody finds himself above the playground. Below, Bonnie
plays hopscotch by herself. Her Mom walks over.
BONNIE’S MOM
Bonnie...? There you are. C’mon,
honey. Time to go home.
She leads Bonnie off. Woody climbs up a drainage pipe to
the roof. He runs across the roof, stops at the edge.
POV, PANNING -- A high wall surrounds the day care campus.
Woody frowns. A gust lifts his hat off, blows it away.
WOODY
Oh, no! No, no, no...!
 43
His hat lands under a kite tangled on the roof top. Woody
stares at the kite -- an idea.
CUT TO:
Woody runs across the roof, kite over his head. He leaps
and soars across the playground and over the wall. He
glides down, makes a perfect landing, and laughs, pleased.
Abruptly, another gust hits, yanking him high in the air.
Woody looks at the ground far below. The wind takes the
kite higher still, dipping and swirling frenetically.
Woody panics, wrapping himself around the kite’s cross-bar.
The bar snaps. The kite plummets. Woody tries desperately
to flap the kite wings, but it doesn’t slow his fall.
He crashes into a tree, hitting branches on the way down.
He falls from the tree and stops -- eyes shut -- inches
above the pavement. Opens one eye.
Slowly, his pull-string lifts him upward.
WOODY (CONT'D)
(voice box)
Reach for the sky!
Woody dangles from a branch, trying to free himself.
Bonnie approaches, playing hopscotch. Woody sees her, goes
limp. She bumps into Woody, looks up. Looks around. She
tugs Woody off the branch. His pull-string retracts.
WOODY (CONT'D)
(voice box)
You’re my favorite deputy!
She smiles. HONK HONK!
BONNIE’S MOM (O.S.)
Bonnie!
BONNIE
Coming!
She shoves Woody in her backpack, zips it up, runs off.
IN THE BACKPACK
Woody is trapped.
WOODY
Oh, great!
 44
As Bonnie and her Mom drive off, CRANE DOWN to REVEAL...
Woody’s hat, lying on the ground.
INT. CATERPILLAR ROOM - DAY
Bullseye whimpers, stares at the door. Jessie consoles him.
JESSIE
Oh, it’s gonna be okay, Bullseye.
BUZZ
Woody’s going to college with Andy.
It’s what he’s always wanted.
MR. POTATO HEAD
He’s crazy! College is no place for
a toy!
MRS. POTATO HEAD
Toys are for play time!
HAMM
Speaking of play time...! They’re
lining up out there!
Hamm, at the window, is spying on the playground.
BUZZ
How many?
HAMM
There must be dozens!
REX
Ohhh...! I can hardly wait!
BUZZ
Places, everyone!
The Toys scramble into play position.
Buzz notices the Day Care Toys edging away from the door --
ducking, hiding, trembling, diving for cover.
The bell RINGS. Kids SHRIEK. Footsteps THUNDER.
Rex spreads his arms and runs to the playground door.
REX
At last! I’m gonna get played with!
BUZZ
Uh, Rex...?
 45
REX
Come to Papa!
BOOM! The door bursts open, swatting Rex across the room.
A horde of squealing, hyped-up TODDLERS enter.
The Toys go limp. Buzz closes his helmet.
The toddlers descend on the Toys with SHRIEKS of delight.
Toys are snatched up by eager, excited hands.
A Boy and Girl stretch Slinky until his coil goes haywire.
A Boy smashes the Toy Train into a wall.
A Girl picks up Buzz, bringing him straight to her mouth.
A Girl dips Jessie’s hair in paint and uses her as a brush.
A Boy runs across the room, with Bullseye on top of a Corn
Popper toy. Bullseye slides off, gets caught in its wheels.
Hamm is bathed in glue... Then coated in green glitter.
A Girl “rides” Rex, snapping his tail off.
The Aliens are squashed as a Boy sits on them.
A Boy picks up Mr. Potato Head’s eye, shoves it up his nose.
A Girl uses Buzz to hammer a square peg into a round hole.
BUZZ POV -- Buzz smashes the peg. Bam, Bam, Bam!
A Boy runs by, tugs the Girl’s hair. She screams, tosses
Buzz away. He lands on the window sill.
BUZZ POV -- Across the playgound, in the Butterfly Room, a
class of Four- and Five-Year-Olds play lovingly with Lotso
and the other toys.
Buzz frowns -- Why is it Heaven in there and Hell in here?
Abruptly, a HAND grabs him, pulls him back into the fray.
CUT TO:
WOODY
(voicebox)
There’s a snake in my boot!
 46
INT. BONNIE'S BEDROOM - DAY
CLOSE ON -- Woody. His string is pulled again.
WOODY
(voicebox)
I’d like to join your posse, boys,
but first I’m gonna sing a little
song.
Bonnie holds Woody, smiles.
BONNIE
A sheriff..!! Move over, Mr.
Pricklepants! We have a guest!
She plunks Woody at a small table circled by other toys --
a HEDGEHOG, a UNICORN, and a TRICERATOPS.
BONNIE (CONT'D)
You want some coffee?
She sets out cups, pretends to pour.
BONNIE (CONT'D)
It’s good for you! But don’t drink
too much or you’ll hafta... Hafta...
She dances from foot to foot.
BONNIE (CONT'D)
Be right back...!
She runs out the door. Woody comes alive, looks around.
The other Toys stay frozen.
WOODY
Psst! Hey! Hello! Hi -- Excuse me!
The Hedgehog, MR. PRICKLEPANTS, comes alive briefly.
MR. PRICKLEPANTS
Shhh!
WOODY
Can you tell me where I am?
MR. PRICKLEPANTS
Shhhhhh!!!
UNICORN
The guy’s just askin’ a question!
 47
MR. PRICKLEPANTS
Well, excuse me, I’m trying to stay
in character!
He freezes again. The Unicorn, friendly, turns to Woody.
UNICORN
My name’s Buttercup.
MR. PRICKLEPANTS
Shhhh!!!!
TRICERATOPS
I’m Trixie!
MR. PRICKLEPANTS
Shhhhh!!!!
TRIXIE
Shhhhhh!!!!!
BOTH
Shhhhhhhhhh!!!!!!
WOODY
Guys, hey! I don’t know where I am!
TRIXIE
We’re either in a cafe in Paris, or a
coffee shop in New Jersey. I’m
pretty sure I just came back from the
doctor with life-changing news!
Woody is baffled.
BUTTERCUP
We do a lot of improv here. Just stay
loose, have fun, you’ll be fine.
WOODY
No, no, no, I...
A FLUSH. Woody gets back in his pose. Bonnie runs in.
BONNIE
Who wants lunch? Beep! Boop! Beep!
She pushes buttons on a toy microwave oven, opens the door,
removes a plastic hamburger, plunks it in front of Woody.
BONNIE (CONT'D)
It has a secret ingredient...
She lifts the top bun...
 48
BONNIE (CONT'D)
...Jellybeans!
Bonnie eats a jellybean, pulls Woody’s string.
WOODY
(voicebox)
Somebody’s poisoned the water hole!
BONNIE
Poison?!
She spits the jellybean -- it sticks to Pricklepants’s head.
BONNIE (CONT'D)
Who would do such a mean thing?!
She GASPS and becomes a different character.
BONNIE (CONT'D)
(as Witch)
Hee-hee-hee-hee-hee!!
She turns. SMASH ZOOM to a DOLL on the shelf behind her.
BONNIE (CONT'D)
The scary witch!!
Bonnie picks up the Doll, flies it around the room.
BONNIE (CONT'D)
Look out! She’s using her witch
powers!
CLOSE ON -- Woody.
BONNIE (AS WOODY) (CONT'D)
I know where to hide!
INT. BONNIE’S BEDROOM - MOMENTS LATER
The toy box at the foot of Bonnie’s bed. It creaks open.
Bonnie peeks out, grabs a Totoro, pulls it closed again.
INT. TOY BOX - DAY
Bonnie and Woody huddle in the dark.
BONNIE
She’ll never find us in here!
Bonnie surreptitiously lifts the Doll into view.
 49
BONNIE (CONT'D)
What’s wrong...?
She turns. Sees the doll, SCREAMS.
INT. BONNIE’S BEDROOM - DAY
The toy box tips over, spilling Bonnie and her Toys.
BONNIE
She found us! We need a spaceship to
get away!
She runs off into a closet. The Toys come alive.
TRIXIE
You’re doin’ great!
MR. PRICKLEPANTS
Are you classically trained?
WOODY
Look, I just need to know how to get
outta here...!
BUTTERCUP
There IS NO WAY OUT!!!
Woody is stunned.
BUTTERCUP (CONT'D)
Just kidding. Door’s right over
there.
The Doll gets up, greets Woody.
DOLL
Well, Cowboy, you just jumped right
in, didn’t ya? I’m Dolly.
WOODY
...Uh, Woody.
They shake.
DOLLY
“Woody”? Really? You’re gonna stick
with that? ‘Cuz now’s your chance to
change it -- new room and all. That’s
coming from a doll named “Dolly”.
A PEA POD TOY zips open behind Woody. He turns.
 50
PEA #1
Who’s the new guy?
PEA #2
Are you a real cowboy?
WOODY
Well, actually, I....
PEA #3
‘Course he’s not, pea-brain! He
don’t even have a hat!
WOODY
I do too have a... My hat?!
PEA #3
Told ‘ya!
BONNIE (O.S.)
I found the spaceship!!
MR. PRICKLEPANTS
Show time!
Woody and the Toys go lifeless as Bonnie runs out of the
closet with makeshift shoebox rocket.
BONNIE (AS WOODY)
Quick! Fasten your seatbelts! Close
your tray tables!
She stuffs the toys in the box, drops it on a bedsheet.
BONNIE (CONT’D)
Hold on, it might get a little bumpy!
3... 2... 1...! BLAST-OFF!!
She pulls the sheet taut. The Toys fly into the air.
SLOW MOTION -- Woody soaring. The moment is magical.
Woody and the others tumble onto the bed. Bonnie flops
down with them, hugging them close.
BONNIE (CONT'D)
Yeee-haaaaw!!! You saved us, cowboy!
You’re our hero!!!
She pulls Woody to her cheek -- just like Andy once did.
Woody glances at the other Toys. They smile at him.
He smiles back. That was great.
 51
INT. CATERPILLAR CLASSROOM - DUSK
The Toys come to life, groaning.
SLINKY
Oh, I’ve got a kink in my slink.
Rex staggers by, tail missing.
REX
My tail...! Where’s my tail?!
Buzz sits up, dazed.
Hamm pulls his cork. Detritus spills out. He strains.
POP -- a Weeble pops out. Hamm picks up a plastic arm.
HAMM
Someone need a hand?
He tosses it to Mr. and Mrs. Potato Head -- their parts
completely jumbled.
MR. POTATO HEAD
Where’s my nose... Here’s
your arm... Honey, the
moustache...?
MRS. POTATO HEAD
Here it is... Gimme that,
that’s mine...
Buzz straightens up -- back CRACKING.
BUZZ
I don’t recall play time being quite
that strenuous.
Rex pulls his tail from a peg board.
REX
Andy never played with us like that!
Jessie peels a decal off Bullseye’s nose.
JESSIE
We have to make the best of it.
MR. POTATO HEAD
But these toddlers! They don’t know
how to play with us!
REX
They’re too young!
HAMM
They’re sticky!
 52
MRS. POTATO HEAD
We should be in the Butterfly Room!
With the big kids!
MR. POTATO HEAD
That’s right!
HAMM
You said it!
BUZZ
We’ll get this straightened out --
I’ll go talk to Lotso about moving
us to the other room.
He clambers up a table, leaps to the bathroom door knob.
It doesn’t move.
BUZZ (CONT'D)
Blast. Try that one!
Jessie leaps to the hallway door latch.
JESSIE
It’s locked!
At the playground door, Slinky tests the door knob.
SLINKY
Same here!
Buzz drops down, points.
BUZZ
Try the windows.
Hamm, on the sill, examines a window lock.
HAMM
Eh, negatory. It’s a FensterSchneckler 380. Finest childproof
lock in the world.
MRS. POTATO HEAD
We’re trapped!
BUZZ
Wait! Did anyone notice the transom?
REX
What’s a transom, Buzz?
Buzz looks up -- atop the hallway door is an open transom.
MR. POTATO HEAD
Oh, great! How do we get up there?!
Buzz narrows his eyes, thinking.
 53
INT. CATERPILLAR CLASSROOM - LATER
The Toys hold a Fisher Price Corn Popper. Buzz, a loop of
red yarn wrapped across his chest, stands at the rear.
BUZZ
All right, everyone! On three!
One... Two...
JESSIE
Three!!!
They take off, pushing the popper at top speed.
JESSIE (CONT'D)
Let go!
The Toys drop away, leaving Buzz to jump onto the handle.
The popper strikes an upturned table, lofting Buzz in the
air. He grabs a string that runs across the room, using it
like a zip-line. As he reaches the end, Buzz leaps off,
expands his wings and flies towards a display of hanging
paper-mache caterpillars, using their legs to swing from
one to another. On the ground, Hamm makes signal.
HAMM
Jump!
Bullseye and Rex jump off a shelf, catapulting a broom
forward. Buzz bounces off the broom, towards the transom.
He flips, twists, and lands -- safe. The Toys rejoice.
REX
He did it!!!
JESSIE
Way to go, Buzz!
Buzz casts part of his yarn down to the Toys. They run and
grab it. Buzz turns to the hallway, stops.
BUZZ POV -- In the hall below, a pair of tough Day Care
Toys, TWITCH (Bug Man) and CHUNK (Rock Man) saunter past.
CHUNK
You think they had a fun playtime?
TWITCH
Shhh...!!! They might hear you!
Buzz frowns. O.S. GIGGLING. Buzz turns. Down the hall,
Ken and Barbie say goodbye at the Butterfly Room door.
 54
KEN
Okay, now you start.
BARBIE
I...
KEN
...love...
BARBIE
...you.
KEN
See?! That time I said “love”.
Okay, now, me first.
CLOSE ON -- Buzz. He stifles a dry heave.
BARBIE
Okay, okay, okay....!
KEN
I...
BARBIE
...love...
KEN
...you! See what I mean? It changes
every time!
BARBIE
You are so smart!
As the Tough Toys pass, they drag Ken away.
TWITCH
C’mon, Romeo... We’re late.
BARBIE
I’ll wait up for you!
KEN
Kisses...!
INT. HALLWAY - NIGHT
Buzz -- using the red yarn -- rappels down into the hall.
He unties the yarn and steals off down the hallway.
He reaches the Teacher’s Lounge, approaches cautiously.
 55
INT. TEACHERS’ LOUNGE - NIGHT
Buzz peeks in. Ken, Twitch and Chunk approach a vending
machine. Ken opens the bottom flap and they all go inside.
Buzz frowns. He walks to the vending machine. Suddenly --
strangely -- a cow MOOOOS.
Buzz looks around, confused. Then he looks up.
Silhouetted in the top of a glowing vending machine are Ken
and the rest of his Gang. A Rooster crows: COCKADOODLEDOO!! This is followed by MUFFLED LAUGHS and HUBBUB.
Buzz approaches the machine. From inside come VOICES.
GANG (O.S.)
Yeah, all right! Let’s go again!
Buzz pushes open the dispenser flap, climbs in. Above him,
a pig OINKS loudly. More LAUGHS and GRIPES.
INT. VENDING MACHINE - NIGHT
Buzz climbs up rows of candy bars and potato chips. He
gets to the top, sneaks towards the light. In the top of
the vending machine, a Gang of toys sits around a table.
KEN
All right, place yer bets! Any
splits? Here we go!
The Gang throws batteries, Monopoly money, other items into
a pot. Stretch the Octopus pulls the cord on a Farmer Says
toy. As the arrow spins, the Gang roots for their bets.
GANG
C’mon, Duckie, Duckie! Big Pig! Big
Pig...! Turkey! Gimme the Turkey!!
Ken waves his hand over the table.
KEN
All right. No more bets.
The spinning arrow stops on “Duck”.
FARMER SAYS TOY
Here is a duck: “Quack, quack”.
STRETCH
Yes! Yes! Come to Mama!
Stretch scoops up the pile of money. The others GROAN.
 56
KEN
Stretch takes the round.
The game continues, Ken presiding.
KEN
Okay, minimum bet, five Monopoly.
Coyotes wild. Changing two double AA's.
(as he changes money:)
Hey, what do you guys think of the
new recruits? Any Keepers?
SPARKS
Nah, disposable...!
STRETCH (CONT'D)
Landfill!
KEN
Cowgirl...? Dinosaur...?
TWITCH
Toddler fodder!
They start placing bets again.
KEN
How ‘bout that Spaceguy? He could be
useful.
Buzz reacts, listening.
CHUNK
He ain’t the sharpest knife in the...
place where they keep the knives.
SPARKS
Neither are you, Chunk.
LAUGHS. Twitch teases Ken.
TWITCH
You got a little Keeper yourself,
didn’t’cha, Ken?
KEN
Hey! Lay off, Twitch! Barbie’s
different!
STRETCH
Mr. Softy over here...!
CHUNK
Whaddaya expect from a girls toy?
 57
Ken stands, furious.
KEN
I’m not a girls toy! I’m not! Why
do you guys keep saying that?!!!
Twitch waves a hand.
TWITCH
All them Toys are disposable. We’ll
be lucky if they last us a week!
Buzz reacts. He turns to go... And bumps into Big Baby.
Big Baby tosses Buzz on the table. The Gang quickly grabs
and subdues him. Ken smirks.
KEN
Well, well, looky who we have here.
BUZZ
Stop! Let me go!
He struggles. Ken narrows his eyes.
KEN
Take him to “The Library”.
BUZZ
Nooooooo!
A sock puppet is pulled over Buzz’s head.
CUT TO:
INT. BONNIE’S BEDROOM - NIGHT
Bonnie sleeps -- toys tucked next to her. Woody carefully
slips from under the covers. Bonnie stirs, moves her arm.
Woody freezes, leg in the air. She settles back to sleep.
Woody tiptoes across the bed, looks around the room.
ZOOM IN -- Bonnie’s backpack, hanging from her door handle.
Woody pushes a chair to the door, climbs up, lifts a cape.
The address on the backpack is revealed -- 1225 Sycamore.
WOODY
1225 Sycamore!
MR. PRICKLEPANTS (O.S.)
Woody...! What’re you doing?
 58
Woody turns. Bonnie’s Toys are watching from the bed.
WOODY
I... I gotta get out of here!
TRIXIE
You’re leaving?!
BUTTERCUP
Didn’t you have fun today?
WOODY
Of course I did! More ‘n I’ve had in
years, but... Y’see, I belong to
someone else...
He holds up his boot, where “ANDY” is written.
BUTTERCUP
Who’s “Yid-nah”?
MR. PRICKLEPANTS
I believe it’s pronounced “Yid-nay”.
DOLLY
Guys -- it says “Andy”!
WOODY
He’s my Bonnie...! And he’s leaving
soon. I gotta get home!
PEA POD
Where’s home?
WOODY
Elm Street. 234 Elm.
(thinking)
You guys have a map?
DOLLY
We’re on it, Cowboy. Trixie...?
Trixie giggles.
TRIXIE
I’ll fire up the computer!
INT. STORAGE CLOSET - NIGHT
The sock is pulled off Buzz’s head. He’s tied to a toy
chair in a closet lit with an overhead bulb. In shadows,
Lotso’s Henchmen lurk. Buzz struggles to free himself.
 59
BUZZ
Unhand me, you cowards! I demand to
talk to Lotso!
KEN
Zip it, Buck Rogers! You don’t talk
to Lotso ‘til we say you can...
Abruptly, the door opens. Lotso stands, astonished.
LOTSO
Ken...?! What’s going on here?!
Why’s this Toy tied up?
KEN
He... He got out, Lotso!
LOTSO
Got out? Oh, no, no, no! This isn’t
how we treat our guests!
Lotso approaches Buzz, begins untying him.
LOTSO (CONT'D)
F.A.O. my Schwartz...! There you go.
I’m so sorry.
He frees Buzz. Buzz stands, casting a dark look at Ken.
BUZZ
Lotso, there’s been a mistake.
LOTSO
A mistake...?!!!
BUZZ
The children in the Caterpillar Room
are not age-appropriate for me and my
friends. We respectfully request a
transfer to the Butterfly Room.
LOTSO
(gestures grandly)
Well, request granted!
KEN
But, Lotso...
LOTSO
Hush now, Kenneth! This Toy’s shown
initiative! Leadership! Why, I’d
say we found ourselves a Keeper!
(to others)
Hear that, everyone?! We got a
Keeper!
 60
Lotso lifts Buzz’s arm -- World Champion! His Gang
applauds dutifully. Lotso throws his arm around Buzz.
LOTSO (CONT'D)
We’re callin’ you up to the Big
Leagues, son! From now on, you’ll
have anything you want!
BUZZ
Excellent! I’ll go get my friends.
Lotso stops.
LOTSO
Whoa, whoa! Hold on there, Boss!
Those Caterpillar kids need someone
to play with...!
BUZZ
But my friends don’t belong there!
LOTSO
Oh, none of us do! I agree! Which is
why -- for the good of our community --
we ask the newer toys, the stronger
ones, to take on the hardships the
rest of us can’t bear anymore.
Buzz frowns.
BUZZ
Well, I... I guess that makes sense.
Lotso smiles.
BUZZ
But I can’t accept. We’re a family.
We stay together.
Lotso’s smile fades.
LOTSO
Family man, eh? I understand.
(sharply)
Put him back in the “Time Out” chair.
Big Baby grabs Buzz and slams him into the toy chair.
BUZZ
What are you...? What?! Unhand me!
LOTSO
Bring in The Bookworm.
 61
Ken whistles. A RUSTLING from a shelf above, where rows of
files are cluttered.
BOOKWORM (O.S.)
Hold on... Here it is!
An aged Toy -- The Bookworm -- pushes aside files.
BOOKWORM
It was filed under “Lightyear”.
He tosses a small booklet down to Lotso. Lotso opens the
booklet, flips through it. Buzz looks close, reacts --
it’s a Buzz Lightyear Instruction Manual.
LOTSO
Let’s see here... Accessories...
Maintenance... Oh, here we go!
(reading)
“Remove screws to access battery
compartment...”
Big Baby pushes Buzz down, holding him while Sparks opens
Buzz’s battery compartment. Screws drop to the floor.
BUZZ
What are you doing?! Let go of me!
LOTSO
(reading)
“To return your Buzz Lightyear Action
Figure to its original factory
settings, slide the switch from PLAY
to DEMO...”
Lotso looks up, nods. Twitch looks -- inside the panel is
a MODE switch. He reaches for it. Buzz struggles.
BUZZ
Stop! No...! No...!!! NOOOOO!!!
INT. CATERPILLAR ROOM - NIGHT
The Toys sit near the door. The echo of Buzz’s scream is
heard. They turn.
JESSIE
What was that?
HAMM
Sounds like it came from the hall!
MRS. POTATO HEAD
I’ll see what it was!
 62
She marches to the door and plucks out her remaining eye.
She holds it under the door, sweeping it back and forth.
INT. HALLWAY - NIGHT
Mrs. Potato Head’s Eye, held by her hand, looks up and down
the hallway.
INT. CATERPILLAR ROOM - NIGHT
The Toys gather around her.
JESSIE
Whaddaya see? Anything...?
POV, PANNING -- The hall is dark and empty. Suddenly, a
VISION of Andy in his room FADES IN over the dark hallway.
MRS. POTATO HEAD
Nah, just a dark hallway and...
Wait, wait...! I see Andy!
The other Toys look at each other, disbelieving.
JESSIE
What?!
MR. POTATO HEAD
That’s impossible...!
MRS. POTATO HEAD
No, I really see him! In his room!
(realizing)
My other eye! The one I left behind!
She concentrates fiercely.
TRANSITION TO:
INT. ANDY’S ROOM - NIGHT - POV
From under the bed, we SEE college boxes piled up by the
open door. Andy crosses frame, carrying another box.
MRS. POTATO HEAD (V.O)
This is so weird...! He’s packing
up... Uh-oh. Oh, here comes Buster.
Buster sniffs under the bed, right toward her eye.
MRS. POTATO HEAD (V.O.)
Outta the way! Get away!
 63
Buster yawns, turns, and walks out of FRAME.
MRS. POTATO HEAD (V.O.)
Okay, Andy’s in the hall. He’s
looking in the attic. Wait, there’s
Mom. Why is he so upset?
Andy gestures -- I left the Toys right here! Mom shrugs.
Andy picks up a trash bag. Then Andy’s Mom remembers --
her hands fly to her face. Andy slaps his forehead.
MRS. POTATO HEAD (V.O.)
Oh, no! Oh, this is terrible!
TRANSITION BACK:
INT. CATERPILLAR ROOM - NIGHT
Mrs. Potato Head puts her eye back in, looks at the others.
MRS. POTATO HEAD
He’s looking for us! Andy’s looking
for us!
JESSIE
He’s looking for us?!
REX
So, Andy does want us! I knew it! I
just knew it!!!
Rex picks up an Alien, does a happy dance.
MRS. POTATO HEAD
I think he did mean to put us in the
attic!
SLINKY
Well, then Woody was telling the truth!
MR. POTATO HEAD
Holy cow!
HAMM
And you didn’t believe him!
MR. POTATO HEAD
Hey, you didn’t believe him first!
Jessie stands -- fire in her eyes.
JESSIE
Guys, we gotta... We gotta go home!
 64
CREAK -- A door opens. Light spills in. The Toys turn.
Lotso saunters in with his Gang.
JESSIE
Lotso...!
LOTSO
How’re y’all doin’ this fine evening?
JESSIE
Oh, thank heavens!
Jessie rushes to him. The others follow.
JESSIE (CONT'D)
Have you seen Buzz?
MRS. POTATO HEAD
There’s been a mistake! We have to
go!
LOTSO
Go?! Why, you just got here! In the
nick of time, too! We were runnin’
low on volunteers for the Little
Ones! They just love new Toys, now
don’t they?
MR. POTATO HEAD
Love?! We’ve been chewed! Kicked!
Drooled on!
MRS. POTATO HEAD
Just look at my pocketbook!
She holds up her chewed purse. Lotso bends down, amused.
LOTSO
Well, here’s the thing, Sweet Potato
-- you ain’t leavin’ Sunnyside.
MRS. POTATO HEAD
Sweet Potato?! Who do you think
you’re talking to? I have over
thirty accessories and I deserve more
respec--
Abruptly, Lotso yanks her mouth off. Everyone is shocked.
LOTSO
Ahh...! That’s better!
Lotso’s Henchmen snicker.
 65
MR. POTATO HEAD
Hey! No one takes my wife’s mouth!!!
Except me! Give it back, you furry
air freshener!
He steps up to retrieve the mouth. Lotso holds it above
him. He finally grabs it. Jessie heads for the door.
JESSIE
C’mon, guys -- we’re going home.
LOTSO
Whoa, Missy! You’re not going
anywhere.
JESSIE
(over her shoulder)
Oh, yeah? And who’s gonna stop us?
Jessie almost collides with a blank-faced Buzz, stepping
from the shadows. Jessie and the others are thrilled.
REX
Buzz! You’re back!
He runs -- arms open -- to greet him. Buzz makes a Kung-Fu
sound, strikes a pose.
REX (CONT'D)
Buzz...?
WHAM!!! Buzz tackles Rex, slamming him to the floor.
JESSIE
Hey!
Buzz leaps and kicks, spins the Toys around, and knocks
their legs from under them.
SLINKY
Buzz!
The Toys fall to the floor, stunned. Buzz stands atop
them, salutes.
BUZZ
Prisoners disabled, Commander Lotso!
JESSIE
Buzz? What are you doing...?
BUZZ
Silence, minions of Zurg! You’re in
the custody of the Galactic Alliance!
 66
REX
Zurg...?
MR. POTATO HEAD
Galactic Alliance...?
HAMM
Huh-boy...!
LOTSO
Good work, Lightyear. Now lock ‘em up!
BUZZ
Yes, sir!
JUMP CUTS -- Buzz and Lotso’s Gang herd the Toys into the
room’s wire-mesh cubbies.
Jessie fights back -- taking out Chunk and Sparks. Stretch
grabs her from behind, puts her in a wire cubby, shuts it.
STRETCH
Where do you think you’re going?!
Jessie reaches through the cubby wire to Buzz’s shoulder.
JESSIE
Buzz...?! We’re your friends!
He swats her hand away.
BUZZ
Spare me your lies, Temptress! Your
Emperor is defeated. And I’m immune
to your... Bewitching good looks.
He turns, ramrod straight, and walks off.
Big Baby lifts Mrs. Potato Head to a cubby. Mr. Potato
Head intercedes.
MR. POTATO HEAD
Hey, Mongo! Keep your paws off my
wife!
Big Baby drops Mrs. Potato Head in the cubby, turns and
picks up Mr. Potato Head.
MR. POTATO HEAD (CONT'D)
Hey, what are you doing? Let go of
me you drooling doofus!
Lotso steps in.
 67
 LOTSO
Wait! I think this Potato needs to
learn himself some manners! Take him
to The Box.
Big Baby hoists Potato Head up and toddles off.
MR. POTATO HEAD
Where’re you taking me? Put me down,
you moron! Bad baby! Bad baby!!!
They toddle past Barbie as she enters the room, confused.
BARBIE
Ken...?! What’s going on?!
KEN
Barbie...! I told you to wait in
the Dream House!
Ken puts an arm around her, leading her out.
BARBIE
What’re you doing to my friends?
Barbie looks over her shoulder as Sparks the Robot tosses
an Alien into a cubby. Twitch slams it shut.
BARBIE (CONT'D)
Hmmph!
She slaps Ken’s arm away and turns to join the Toys in
solidarity. Ken tries to grab her.
KEN
Wait, Barbie!
BARBIE
Don’t touch me! We’re through!
She stalks off. Ken is devastated. Then Barbie turns,
walks back to him. He smiles.
BARBIE (CONT'D)
And gimme my scarf back!
She yanks the ascot off his neck.
KEN
Oww!
Barbie is slammed into a cubby. Lotso surveys the room.
 68
LOTSO
Lightyear! Explain our overnight
accommodations.
BUZZ
Yes, sir!
Buzz strides past the Toys, each trapped in a cubby.
BUZZ (CONT'D)
Prisoners sleep in their cells! Any
Prisoner caught outside their cell
spends the night in The Box!
EXT. PLAYGROUND - NIGHT
Potato Head is carried to a covered sandbox. Big Baby
lifts the sandbox cover, tosses Potato Head in. Potato
Head reaches out, begging for mercy...
BUZZ (O.S.)
Roll call at dusk and dawn! Any
Prisoner misses roll call spends the
night in The Box!
...Big Baby lowers the lid, closing into BLACKNESS.
INT. CATERPILLAR ROOM - NIGHT
Buzz rattles off the rules. Jessie grows impatient.
BUZZ
Prisoners do not speak unless spoken
to! Any Prisoner talks back spends
the night...
JESSIE
...In The Box. We get it.
Buzz whips around. Lotso puts a calming hand on him.
LOTSO
At ease, soldier! They’re
neutralized! But remember: They’ll
say anything to make you doubt
yourself!
BUZZ
Don’t worry, Commander! Any doubt I
had got pounded out of me at the
Academy!
Lotso climbs on a podium of ABC blocks -- jovial, relaxed.
 69
LOTSO
Listen up, folks! We got a way of
doing things here at Sunnyside! If
you start at the bottom, pay your
dues... Life here can be a dream
come true! But if you break our
rules, step outta line, try to check
out early? Well... You’re just
hurtin’ yourselves.
He takes out Woody’s hat, tosses it. It slides across the
floor to Jessie’s cubby. The Toys gasp in horror.
JESSIE
Woody...!
(to Lotso)
What’d you do to him?!
Lotso sits back in his truck bed, taps his cane.
LOTSO
Y’all get a good night’s rest! You
got a full day of play time tomorrow.
Lotso chuckles as he and his cronies drive off. Buzz
remains behind, standing guard over the “cell block”.
The Toys grasp the bars of their cubbies -- the horrible
truth of their situation hitting home.
INT. KITCHEN - NIGHT
CLOSE ON -- A computer keyboard. Woody types an address.
WOODY
1-2-2-5... Sy--ca--more...
BLOOP -- Suddenly, an IM WINDOW pops up on the SCREEN.
WOODY (CONT'D)
Who’s “VelociSTAR237”?
Trixie pushes in.
TRIXIE
Oh...! That’s just a dinosaur toy
down the street. That’s nothing.
Lemme just take care of that!
(beat)
Just a dinosaur...!
Woody finishes typing.
 70
WOODY
All right. Sy--ca--more... Okay,
“Enter”!
Trixie hits the Return. Slowly, a map begins to assemble.
WOODY (CONT'D)
Please don’t be far! Please!
The map resolves itself. The route to Andy’s house is a
short “Z” -- less than two blocks away. Woody is amazed.
WOODY (CONT'D)
Right around the corner...?! It’s
right around the corner!!!
Ecstatic, he hugs Bonnie’s toys, leaps off the desk, does a
happy dance across the floor, strides to the kitchen door.
WOODY (CONT'D)
I’m going to college! Look at me,
I’m big toy on campus! Hello! Hey!
I’ll see you at the Sock Hop!
DOLLY
Okay, Potsie!
Woody starts to slip through a pet door.
WOODY
Oh, hey, listen -- if any of you guys
ever get to Sunnyside Day Care? You
tell ‘em Woody made it home!
Bonnie’s Toys gasp.
DOLLY
You came from Sunnyside?!
TRIXIE
But... How’d you escape?!!!
WOODY
It wasn’t easy, I... What do you
mean “escape”?
Bonnie’s Toys trade glances. Pricklepants steps forward.
MR. PRICKLEPANTS
Sunnyside is a place of ruin and
despair, ruled by an evil bear who
smells of strawberries!
WOODY
Lotso...?!
 71
BUTTERCUP
He may seem plush and huggable on the
outside. But inside, he’s a monster!
WOODY
But... How do you know that?
MR. PRICKLEPANTS
Chuckles... He’ll tell you!
They turn -- with awe and respect -- to a toy clown,
Chuckles, sitting on a sill, staring grimly out the window.
Woody steps forward.
CHUCKLES
Yeah, I knew Lotso. He was a good
toy. A friend. Me and him, we had
the same kid -- Daisy...
INT. DAISY’S LIVING ROOM - DAY - FLASHBACK
A freckle-faced five-year-old, DAISY, unwraps a gift under
a Christmas tree and finds a fresh, smiling Lotso inside.
CHUCKLES (V.O.)
I was there when Lotso got unwrapped.
She hugs him -- love at first sight.
CHUCKLES (V.O.)
Daisy loved us all, but Lotso...
Lotso was special.
INT. DAISY’S HOUSE - DAY - FLASHBACKS
QUICK CUTS: Daisy takes Lotso everywhere -- jumping through
a lawn sprinkler; pushed on a swing; in bed while she reads
to him, etc. He gazes lovingly at her.
 CHUCKLES (V.O.)
They did everything together. You
never seen a kid and a toy more in
love.
EXT. STATION WAGON - DAY - FLASHBACK
Daisy sits in the back of a station wagon, Lotso in her
lap. Big Baby and Chuckles are buckled in beside them.
CHUCKLES (V.O.)
One day, we took a drive...
 72
EXT. REST STOP - DAY - FLASHBACK
At a rest stop, Daisy’s Family has lunch in the grass while
Daisy plays happily with Lotso, Chuckles, and Big Baby.
CHUCKLES (V.O.)
Hit a rest stop, had a little play
time.
Daisy’s Mom waves a sandwich. Daisy puts down the Toys and
runs to join her family.
DISSOLVE TO:
A sleeping Daisy is carried to the car.
CHUCKLES (V.O.) (CONT'D)
After lunch, Daisy fell asleep.
A seat belt is clicked around the sleeping Daisy. The car
drives off.
Daisy’s Toys sit up, their worst fears come true.
DISSOLVES:
Lotso peers down the road, keeping vigil as the sun sets.
Days pass. Rain falls. The forgotten Toys remain.
CHUCKLES (V.O.) (CONT'D)
She never came back.
CLOSE -- A heart-shaped pendant reads, “My heart belongs
to...” A child’s writing shows Daisy’s name and address.
Lotso reads the pendant, hung around Big Baby’s neck. He
sets off across the fields. Chuckles and Big Baby follow.
CHUCKLES (V.O.) (CONT'D)
Lotso wouldn’t give up. It took
forever, but we finally made it back
to Daisy’s.
EXT. DAISY’S HOUSE - DUSK
Lotso, Chuckles and Big Baby stand in the bushes outside
Daisy’s window -- muddy, worn. Big Baby boosts Lotso and
Chuckles to the window sill. They peer in. Through the
window, Daisy lies in her bed, reading a picture book.
CHUCKLES (V.O.)
But by then, it was too late.
FAST ZOOM -- Tucked beside her is a brand-new Lotso Bear.
 73
TRACK IN ON -- Lotso. His Universe is shattered.
Lotso drops from the window. Rain begins to fall.
CHUCKLES (V.O.) (CONT'D)
Something changed that day inside
Lotso. Something snapped...
Lotso’s face hardens. Big Baby stares -- uncomprehending.
LOTSO
She replaced us. C’mon!
He turns to go, but Big Baby and Chuckles stay put.
YOUNG CHUCKLES
No, she only replaced yo--!
Lotso turns on Chuckles.
LOTSO
She replaced all of us! Didn’t she?!
Chuckles shrinks back, cowed. Big Baby looks at the
pendant, turns and begins climbing up towards Daisy’s
window. Lotso walks back to Big Baby and yanks him down.
LOTSO (CONT'D)
She don’t love you no more! Now
come on!
He rips the pendant off, throws it away, and stalks off.
Chuckles and Big Baby are left behind -- heart-broken.
EXT. TRUCK BUMPER - NIGHT
Lotso, Chuckles, and Big Baby hunch in the red, tail-lit
glow of the bumper of a delivery truck as it drives through
swirling rain. Their eyes are dead, hopeless.
CHUCKLES (V.O.)
We were lost. Cast off. Unloved.
Unwanted...
The truck hits a pothole, knocking them off the bumper.
They hit the pavement, tumble into a puddle in front of...
EXT. SUNNYSIDE DAY CARE, FRONT ENTRANCE - NIGHT
It’s dark. Rain pours. Lotso, Chuckles, and the Baby lift
their faces from the puddle.
A FLASH of lightning reveals the Sunnyside Day Care Center.
 74
CHUCKLES
Then we found Sunnyside. But Lotso
wasn’t my friend anymore...
Lotso stands, eyes narrowed. He limps towards the Day
Care. Chuckles and Big Baby watch from the puddle.
Lightning FLASHES.
MATCH CUT:
INT. KITCHEN - DAWN
Chuckles, remembering. Woody listens, rapt.
CHUCKLES
...He wasn’t anyone’s friend. He
took over Sunnyside, rigged the whole
system.
He reaches in his pocket, pulls out Big Baby’s pendant.
WOODY
So... How’d you get out?
CHUCKLES
I got broke. Bonnie found me, took
me home. Other Toys, they weren’t so
lucky.
(voice quavers)
It ain’t right, what Lotso done! New
toys -- they don’t stand a chance!
Woody looks up.
WOODY
But... My friends are in there!
BUTTERCUP
You can’t go back! It’s too
dangerous!
MR. PRICKLEPANTS
Returning now would be suicide!
DOLLY
But what about your... “Andy”?
TRIXIE
Isn’t he leaving tomorrow?
TRACK IN ON -- Woody, torn.
 75
INT. CATERPILLAR ROOM - DAWN
The room is still. A HARMONICA plays mournfully.
TRACK down the cubbies -- The Toys grip the bars, forlorn.
CRANE TO REVEAL Hamm, playing the harmonica.
Suddenly, Buzz pounds on Hamm’s cubby.
BUZZ
Quiet, musical hog! Knock it off!
Hamm stops playing, sighs. Buzz moves off. Bullseye looks
at Woody’s hat, whimpers sadly. Jessie pats his muzzle.
JESSIE
Oh, Bullseye... I miss Woody, too.
She turns away, bows her head.
JESSIE (CONT'D)
But he ain’t ever comin’ back.
Jessie lifts her boot, revealing “ANDY” written underneath.
Her eyes fill with regret.
The bathroom door bursts open. A Tonka truck races in the
room -- Lotso in the back, his Gang hanging off the sides,
WHOOPING it up. The truck comes screeching to a stop.
LOTSO
Rise and shine, Campers!
Buzz snaps to attention, salutes.
BUZZ
Commander Lotso, Sir! All quiet!
Nothing to report!
LOTSO
Excellent, Lightyear! C’mon -- we
need you back at Star Command!
Buzz hops in the back of the truck.
MRS. POTATO HEAD
Wait! What you have you done with my
husband?!
LOTSO
Big Baby...?
Big Baby steps forward and tosses a dazed Mr. Potato Head
into the room -- coughing, groaning, covered in sand.
 76
The Toys gasp. Mrs. Potato Head reaches out.
MRS. POTATO HEAD
Sweetheart...!
MR. POTATO HEAD
It was cold...! And dark...!
Nothing but sand and a couple of
Lincoln Logs...
HAMM
I don’t think those weren’t Lincoln
Logs.
Lotso addresses the room.
LOTSO
Y’all get ready -- you got a playdate with destiny!
CUT TO:
A BELL -- Ringing.
Bonnie runs down the hall and enters the Butterfly Room.
INT. BUTTERFLY ROOM - DAY
The room thrums with the happy CHATTER of young kids.
Bonnie drops off her backpack at the lockers, rushes off.
STAY on her backpack. It unzips. Woody peers out, then
surreptitiously scrambles to the top of a bookshelf.
INT. CEILING CRAWL SPACE, BUTTERFLY ROOM - DAY
Woody pushes aside an acoustic panel, climbs in the crawl
space above the tiles, and slides the panel back in place.
O.S. -- Children’s SHRIEKS. Woody turns.
INT. CEILING CRAWL SPACE, CATERPILLAR ROOM - DAY
Crawling, Woody follows the noise, puts his ear to a tile.
INT. CATERPILLAR ROOM - DAY
Woody pulls up the ceiling tile and drops onto an empty
reading loft, furnished with pillows and bean bag chairs.
He creeps to the edge of the loft and scans the room.
 77
POV -- Below, a Toddler uses Rex to hammer a bongo drum.
Another Toddler holds a Potato Head in each hand, then
smashes them to the ground. Their pieces scatter.
A child swings Jessie by her hair, releases her. Jessie
slams into a wall, drops to the floor.
Woody is horrified.
Then, off-screen, a toy-phone bell RINGS.
Woody turns. A Fisher Price Phone, The Lifer, wheels into
view. He RINGS again, drops his receiver, retreats into
shadows. Woody creeps to the phone, lifts the receiver.
WOODY
Uh... Hello...?
The Lifer’s voice is hoarse and grizzled.
LIFER
You shouldn’a come back, Cowboy.
They cracked down hard since you
left. More guards. More patrols.
You and your friends ain’t ever
gettin’ outta here now.
WOODY
I made it out once...
LIFER
You got lucky once. Want my advice?
Keep your heads down. You’ll survive.
WOODY
Yeah? For how long?
LIFER
(squints like Clint)
I been here years. They’ll never
break me. There’s only one way Toys
leave this place...
The Lifer rolls forward. Through the window, the Janitor --
across the yard -- dumps the broken Toy Train into a trash
chute. Woody shudders -- he’s just witnessed a Toy death.
LIFER (CONT'D)
Poor fella. Trash truck comes at
dawn. Then it’s off to The Dump...
Woody bends down, respectful.
 78
WOODY
I appreciate your concern, Old Timer.
But we have a kid waiting for us.
Now we’re leaving. If you’d help us
-- one toy to another -- I’d sure be
grateful.
The Lifer sighs.
LIFER
Well, if you’re gonna get out...
First thing you gotta get through’s
the doors.
SHOTS -- FAST TRACKING IN on knobs of the playground door;
the hall door; the office door. Each door is shut and
locked. Keys are left dangling on a hook in the office.
LIFER (V.O.) (CONT'D)
...Locked every night, inside and
out. Keys are left on a hook in the
office.
WOODY (V.O.)
Got it. What else?
SHOTS -- Night. Toy Trucks patrol the empty halls of the
Day Care. Outside, Trucks patrol the deserted playground.
LIFER (V.O.)
Lotso has trucks patrolling all night
long. Hallway. Lobby. Playground.
WOODY
Yeah, yeah... What about the wall?
SHOTS -- TRACKING along the mural-covered cinder block wall.
LIFER (V.O.)
Eight feet high. Cinderblock. No
way through it. You go over or
under.
Woody frowns.
WOODY
That’s it?! Doesn’t seem so bad.
LIFER
It’s not. Your real problem’s The
Monkey.
 79
INT. OFFICE - NIGHT
A TOY CHIMP sits at the console of security monitors.
LIFER (V.O.)
The Monkey’s the Eye in the Sky...
CLOSE ON -- THE MONKEY’S EYES
The bank of monitors is reflected in them.
LIFER (V.O.) (CONT'D)
He sees everything...
INT. CATERPILLAR ROOM - NIGHT
A Toy Bunny slips through the bars of his cubby, scampers
toward the hallway door.
LIFER (V.O.)
...Classrooms...
INT. OFFICE - NIGHT
The Monkey, staring at the security monitors, sees the
Bunny on screen, bares his teeth and SCREECHES, presses the
PA button, and begins furiously banging his cymbals.
INT. CATERPILLAR ROOM - NIGHT
The Bunny -- busted -- freezes and looks around in a panic.
The hall door opens and Lotso and his Gang step in. Big
Baby lurches toward the Bunny menacingly.
INT. HALLWAY - NIGHT
A Patrol Truck passes down a dark hallway. A Toy Penguin,
hidden, peeks out of a potted plant, jumps to the floor.
LIFER (V.O.)
...Hallways...
He waddles for the front door.
ZOOM UP to a security camera at the end of the hall.
INT. OFFICE - NIGHT
The Monkey sees the Penguin, hits the PA button, and begins
SCREECHING and banging cymbals.
 80
INT. HALLWAY - NIGHT
The Penguin is surrounded by Patrol Trucks. He puts his
wings up. Big Baby pushes his way through the trucks,
intent on meting out prompt and thorough justice.
EXT. PLAYGROUND - NIGHT
A trio of Plushies use a dart gun to fire a dart, tied with
string, over the wall. They begin scaling the wall.
LIFER
...Even the playground.
INT. OFFICE - NIGHT
The Monkey sees the Plushies, SCREECHES his alarm.
EXT. PLAYGROUND - NIGHT
A spotlight hits the Plushies. Within the spotlight rises
the silhouette of Big Baby, arms lifted.
INT. CATERPILLAR ROOM - DAY
The Lifer lays it on the line for Woody.
LIFER
You can unlock doors, sneak past
guards, climb the wall... But if you
don’t take out that Monkey, you ain’t
goin’ nowhere. Y’wanna get outta
here? Get ridda that Monkey!
SMASH TO:
INT. CATERPILLAR ROOM - DAY
A bell RINGS. The Toddlers -- playing rough -- look up.
TEACHER
Okay! Recess!
She opens the playground door. The Toddlers drop the Toys,
rush outside. The Teacher hits the lights, closes the door.
Jessie and the Toys sit up, groaning and aching.
WOODY (O.S.)
Pssst...! Pssst...! Hey, guys...!
 81
They look over. From a puppet theater, Woody waves.
JESSIE
Woody? Woody!!!
REX
Woody!
MRS. POTATO HEAD
Thank goodness!
They quickly run and gather around him, rejoicing.
SLINKY
You’re alive!!!
HAMM
Hey, Buddy!
WOODY
‘Course I’m alive...!
(sees Bullseye)
Hey, my hat!!!
Woody takes his hat from Bullseye, puts it on.
WOODY (CONT'D)
Wait. Where’s Buzz?
REX
Lotso did something to him!
SLINKY
He thinks he’s a Space Ranger again!
WOODY
Oh no...
HAMM
Oh yes. “Return of the Astro Nut!”
JESSIE
Oh, Woody, we were wrong to leave
Andy. I... I was wrong...
MR. POTATO HEAD
Jessie’s right, Woody -- she was
wrong!
WOODY
No, no. It’s my fault for leaving
you guys. From now on, we stick
together.
The Toys smile, reassured.
 82
SLINKY
But... Andy’s leavin’ for college!
JESSIE
College!!! Hog-tie the mailman!!!
We gotta get you home before Andy
leaves tomorrow!
HAMM
Tomorrow...? But, that means...
WOODY
It means we’re busting outta here
tonight.
MRS. POTATO HEAD
What?! Impossible!
REX
But there’s no way outta here!
WOODY
No, there is one way out. One way...
He turns.
RACK FOCUS -- Through the window is the trash chute on the
maintenance shed. Woody turns to the Toys. They huddle.
WOODY (CONT'D)
Okay, here’s the plan...
INT. CATERPILLAR ROOM - NIGHT
Ken, dapper in an evening robe, conducts his nightly roll
call. He’s trailed by Buzz. Big Baby stands guard.
KEN
Cowgirl...
JESSIE
Here.
KEN
Horse...
Bullseye WHINNIES.
KEN (CONT'D)
Piggy bank...
HAMM
Yo.
 83
INT. CEILING CRAWL SPACE, CATERPILLAR ROOM - NIGHT
From above, Woody watches through a ventilation grate.
KEN
Tyrannosaurus...
REX
Here.
KEN
Barbie...
BARBIE
Here...
INT. CATERPILLAR ROOM - CONTINUOUS
Ken strolls on.
KEN
Potato Head... Potato Head?
Silence. Buzz backs up, looks in the cubby.
BUZZ
Hey! Tuberous Root Man! Wake up!
Buzz rattles the bars. An actual potato rolls to the front
of the cubby -- a dummy potato, as it were.
BUZZ (CONT'D)
Impossible!
A NOISE. Ken and Buzz turn.
Potato Head is at the window, struggling with the locks.
BUZZ (CONT'D)
Hey!
Potato Head sees he’s been spotted. He jumps off the sill
and sprints to the bathroom door.
Buzz and Ken run across the room. Big Baby toddles after
them. As they EXIT FRAME we TILT UP to find...
Woody, in a hanging light, takes out a pipe cleaner, bends
it, uses it to snag the clothing line of kids’ paintings.
Potato Head reaches the bathroom, bangs on the door, then
turns to face Buzz, Ken, and Big Baby. They surround him.
 84
INT. FRONT OFFICE - NIGHT
The Monkey, at the security console, sees Buzz and Ken
corner Potato Head. He leans in to watch.
KEN
Little late for a stroll, eh, Potato
Head?
MR. POTATO HEAD
That’s Mr. Potato Head to you,
Smoothie!
PAN and ZOOM past the distracted Monkey to another monitor.
On it, Slinky slips out of his cubby cell.
KEN (O.S.)
You’re turning out to be quite the
trouble-maker, aren’t ya?
INT. CATERPILLAR CLASSROOM - NIGHT
Behind Ken and Buzz, Slinky runs to the middle of the room.
KEN (O.C.)
What’d you think you were gonna do?
Waltz right outta here?
Woody grabs a bag of marbles, grasps the clothesline, jumps.
MR. POTATO HEAD (O.C.)
And I would’a got away with it too,
if it weren’t for you meddling Toys!
Woody lowers via the clothesline, drops the bag of marbles,
grabs Slinky, and ascends back up to the ceiling.
MR. POTATO HEAD (CONT'D)
Ya ascot-wearin’ pink-noser! Mr.
Brains-Sold-Separately!!!
He kicks Ken. Ken yelps, turns to Big Baby.
KEN
Take him back to The Box!
Big Baby grabs Potato Head, lifts him off the ground.
MR. POTATO HEAD
No! Not The Box! I’m sorry! I
didn’t mean it! I like ascots!
Really! No... No! Noooooo!!!
They disappear through the bathroom door.
 85
INT. CEILING CRAWL SPACE - NIGHT
Woody and Slinky watch as Potato Head is dragged off. They
close the ceiling panel.
WOODY
Okay, check...
INT. CATERPILLAR CLASSROOM - NIGHT
Ken turns to Buzz.
KEN
Good work, Lightyear! Resume your,
uh... Space-guy... Thing-y!
BUZZ
Yes, sir, Well-Groomed Man!
He salutes, departs. Ken turns to go.
BARBIE (O.C.)
Ken...?! Ken...!
Ken stops. Barbie waves to him. Ken looks around, then
approaches warily. Barbie is tearful.
KEN
What do you want?
BARBIE
I can’t take it here, Ken! I want to
go to the Butterfly Room! With you!
KEN
Yeah, well, you should’a thought of
that yesterday.
BARBIE
I was wrong! I want to be with you,
Ken! In your Dream House! Take me
away from this! Take me away!
She breaks down sobbing. Ken is torn. Finally, he gives
in -- no match for a woman’s tears.
KEN
Darn it, Barbie...!
He moves closer, speaks low.
KEN (CONT'D)
Okay, but, things are complicated
around here. You gotta do what I say!
 86
BARBIE
(tears of gratitude)
I will, Ken! I promise!
Satisfied -- and a little smug -- he pulls open the cubby.
INT. SANDBOX - NIGHT
Big Baby opens the lid of the Sand Box.
MR. POTATO HEAD
Wait! I’ll do anything...! I’ll
change your diapers!
Big Baby tosses Potato Head in, lowers the lid.
EXT. PLAYGROUND - NIGHT
Big Baby turns and walks off. STAY ON the sand box.
TRACK IN to find a wood knot in the side of the box.
It pops out, falls to the ground. Potato Head’s hand
emerges, clutching his eye. It looks around.
One by one, Mr. Potato Head’s parts fly out the hole and
land on the ground, next to the sandbox.
INT. FRONT OFFICE - NIGHT
The Monkey sits motionless, staring maniacally at the
security monitors. The only sound is a TICKING clock.
Woody, clutching a pouch, drops into FRAME behind the Monkey
as Slinky, holding Woody’s ankles, lowers Woody head-first.
Woody -- dangling -- begins swinging closer and closer to
the Monkey.
The Monkey frowns at a reflection in the monitor.
The Monkey whips around, SCREECHING. Slinky slips. He and
Woody land on the Monkey, knocking the mic to the ground.
The Monkey HISSES, leaps off the desk, runs for the mic.
Woody lunges for the Monkey, but misses. He grabs the
microphone cord and whips it, tripping the Monkey.
Woody grabs the Monkey. The Monkey flips himself on top of
Woody and starts crashing his cymbals against Woody’s head.
 87
WOODY
Go... Get... The... Tape!!!
Slinky runs to a Scotch tape dispenser, grabs the tape with
his teeth, heads back toward Woody. The Monkey turns, sees
Slinky charging, tape in his mouth. He SCREECHES.
CUT TO BLACK
INT. KEN’S DREAM HOUSE, BUTTERFLY ROOM - NIGHT
Ken and Barbie ride the Dream House elevator to the top
floor. Ken opens the door.
KEN
And this... Is where the magic
happens.
FAST PULL BACK to REVEAL the living room of his Dream
House. Racks of clothes line the walls. Barbie gasps.
BARBIE
Look at all your clothes!!! I can’t
believe you never brought me up here!
Barbie flips through the racks. Ken joins her.
BARBIE (CONT'D)
Tennis whites! Mission to Mars!
KEN
I know, I know! Check this out --
“Kung-Fu Fighting”! “Campus Hero”
with matching sports pennant, huh?!
BARBIE
Flower Power...!!! Oh, Ken...!
Ken pivots away, his mood turning to melancholy reflection.
KEN
No one appreciates clothes here,
Barbie.
(then, bitter:)
No one.
Barbie walks up behind him.
BARBIE
Ken... Would you model a few outfits
for me? Just a few?
Ken is stunned -- no one’s ever asked this of him.
Throbbing DISCO begins.
 88
FASHION MONTAGE -- QUICK CUTS
Ken emerges from behind a screen, sporting some of the most
insane Ken outfits ever -- ‘90s, ‘80s, ‘70s, even 1960s --
with matching accessories.
Ken strikes just the right pose for each outfit -- slinging
a jacket over his shoulder; doing “The Frug” in a fringe
vest; polka-ing in Lederhosen; scuba moves; break dancing.
Barbie sits watching, enthralled. She laughs, claws her
hand, growls like a cat. Finally, she applauds wildly.
Ken grins -- exceptionally pleased with himself.
INT. OFFICE - NIGHT
Woody and Slinky finish taping up the struggling Monkey.
Slinky opens a desk drawer. Woody rolls the Monkey in.
Slinky pushes it closed.
SLINKY
Go get the key!
Woody runs to a bulletin board above the desk.
WOODY
Where is it...? Where is it...?
Where’s the key?
He finds the keys, buried under push-pinned papers.
WOODY (CONT'D)
Bingo!
Slinky toggles a security camera joystick.
INT. CATERPILLAR ROOM - NIGHT
Jessie sees the security camera panning back and forth.
She turns, whispers.
JESSIE
Yodel-Lay-Hee-Hoooooo...!!!
A few cubbies down, Hamm and Rex share a look.
ANGLE -- Buzz, patrolling...
HAMM (O.S.)
Hey! Whadda you think you’re doin?!
Buzz stops, turns.
 89
In the cell, Hamm plugs his cork into his belly.
HAMM
I told you -- keep your hands off of
my stuff!
Rex raises his fists, trying to sound tough.
REX
Make a move, Porky!
Hamm jumps Rex. They grapple. Buzz runs over.
BUZZ
Hey! No fighting! Break it up!
He pulls the “cell” from the cubby and they tumble out.
HAMM
Take that, Walnut-Brain! No wonder
you’re extinct!
Jessie and Bullseye steal out of their cubbies while Buzz
gets between Hamm and Rex, holding them apart.
BUZZ
Hey, you can’t hit each other!
That’s my job!
JESSIE (O.C.)
Yoo-hoo!
Buzz looks up. Jessie and Bullseye stand on a bookcase
above him, holding an empty, clear plastic toy bin.
They leap, slamming the bin over Buzz. Hamm and Rex leap
on top of it, pinning it to the floor.
BUZZ
(muffled)
Help! Prison riot!
Buzz FIRES his laser in a circle at the side of the bin.
He charges at the wall, hits it, and falls over.
Jessie turns to Bullseye.
JESSIE
Get the tortilla!
Bullseye heads to a locker, pulls out a lunch box. Jessie
opens it. Inside is a tortilla. Jessie grabs it, dashes
to the door, slides it under. She knocks and runs off.
 90
EXT. PLAYGROUND - NIGHT
The tortilla lays outside. From the shadows, one of Potato
Head’s arms appears, crawls over, grabs the tortilla, and
drags it into the darkness. One by one, the parts implant
themselves in the tortilla. The Tortilla stands unsteadily,
looks around, blinks, then heads off across the playground.
INT. KEN’S DREAM HOUSE, BUTTERFLY ROOM - NIGHT
Ken -- headband on -- is behind a shoji screen.
KEN
Ready?
BARBIE (O.C.)
Ready...!
Ken leaps from behind the screen in a Karate Gi and does a
series of fighting moves, kicking and punching the air.
KEN
Haiii-Yaaa! Wah! Whaaa-aaa-aaa --
He freezes mid-pose. Barbie isn’t there.
KEN (CONT'D)
Uh... Barbie?
Barbie leaps out of nowhere, tackling Ken. Ken lands on
his chest. Barbie grabs his head, spins it 180 degrees.
BARBIE
No more games, Ken. What did Lotso do
to Buzz, and how do we get him back?
Ken is secretly thrilled to have Barbie straddling his
chest, talking tough. He is defiant.
KEN
You can’t make me talk! You can’t!
Barbie glares at him, eyes narrowing.
Ken -- unable to contain his excitement -- blurts out:
KEN (CONT'D)
...But I’d like to see you try!!!
INT. HALLWAY - NIGHT
A Security truck patrols the hall. As it passes, the
office door opens. Woody peers out.
 91
INT. OFFICE - NIGHT
Slinky is poised with a key attached to a rubber-band sling
shot. Slinky pulls it back. Woody signals “Go!”
Slinky releases the slingshot. It shoots the key under the
door, across the hall and into the Caterpillar Room.
INT. CATERPILLAR ROOM - NIGHT
Jessie stops the key with her boot, picks it up.
EXT. PLAYGROUND - NIGHT
Mr. Potato Head hoists himself up a tricycle and onto a
classroom window ledge. He peers in.
Inside the Butterfly Room, Lotso is asleep. Potato Head
turns and uses the trike’s mirror to catch a moonbeam.
INT. CATERPILLAR ROOM - NIGHT
Mrs. Potato Head, on the sill by the door, sees the signal.
She uses the key to unlock the door.
EXT. PLAYGROUND - NIGHT
The door opens. Jessie, Bullseye, Mrs. Potato Head and the
Aliens slip outside. As a SPOTLIGHT sweeps past, they duck
behind a traffic cone then creep off across the playground.
INT. KEN’S DREAM HOUSE, BUTTERFLY ROOM - NIGHT
Ken is tied to a paddle-ball paddle by the ball’s string.
He glowers as Barbie browses through his racks of clothing.
BARBIE
Let’s see -- Hawaiian surf trunks...
She holds them up, then RIPS them apart. Ken is horrified.
KEN
Barbie, those were vintage!
(steels himself)
It’s okay! Go ahead, rip ‘em!
They’re a dime a dozen!
BARBIE
Oooohh! Glitter tux!
 92
RIPPPP...! She tosses the shreds at him. Ken groans in
torment, but remains defiant.
KEN
Who cares?! Who cares?! Sequins are
tacky!
Barbie picks up a Nehru jacket. Ken gasps in horror.
BARBIE
Oooohh!! A Nehru jacket!
KEN
Barbie!!! Not the Nehru...!
BARBIE
This is from, what -- 1967?
KEN
The Gruvvy Formal Collection, yes!
BARBIE
What a shame...
KEN
Oh, no! No! No, no, no...!!!
Barbie pulls at the seams. A stitch POPS. Ken cracks.
KEN (CONT'D)
There’s an instruction manual! Lotso
switched Buzz to Demo Mode...!
He breaks down, sobbing. Barbie, steely, grabs Ken.
BARBIE
Where’s that manual?
INT. UTILITY CLOSET - NIGHT
A sleepy Bookworm pulls the Buzz Lightyear Manual from his
stacks, hands it down to a waiting Figure in a SPACE SUIT.
BOOKWORM
I don’t know why this can’t wait til
morning, Ken, but... Here ya go!
The Figure salutes, turns, walks off. The Bookworm turns
away, then hears an odd CLICKING. He turns back, stares.
POV -- The Space-Suited Figure is wearing pink high heels.
The Bookworm rolls his eyes -- Ken! -- and turns away.
 93
INT. CLASSROOM CEILING CRAWL SPACE - NIGHT
SLINKY
What’s takin’ so doggone long?
A KNOCK. Woody slides the ceiling panel, revealing Barbie
in the Space Suit, helmet off.
WOODY
So how do we fix Buzz?
Barbie grins, hoists up Buzz’s Instruction Manual.
EXT. PLAYGROUND - NIGHT
Potato Head, on the ledge, sees Barbie pulled up into the
ceiling.
INT. CLASSROOM CEILING CRAWL SPACE - NIGHT
Woody gives Potato Head the “thumbs up”. Potato Head
responds with complicated baseball-catcher gestures.
EXT. PLAYGROUND - NIGHT
Potato Head turns and edges down the ledge. A FLUTTERING.
He looks. His path is blocked by a Pigeon. A stare down.
MR. POTATO HEAD
What’re you lookin’ at, Feathers?
The pigeon pecks him, taking a chunk out of his tortilla.
MR. POTATO HEAD (CONT'D)
Hey! Ow!
The pigeon pecks again. Potato Head slaps the pigeon. The
pigeon grabs his forehead, dragging him down the ledge.
Potato Head hits the pigeon with his hat, gives it a kick.
The pigeon flies off. Potato Head shakes his fist.
MR. POTATO HEAD (CONT'D)
Yeah, fly away, ya coward!
The tortilla rips and disintegrates.
MR. POTATO HEAD (CONT'D)
Uh-oh...
In pieces, he drops off the ledge to the ground.
 94
MR. POTATO HEAD (CONT'D)
Well, that’s just great!
A section of tortilla props itself up, looks around. It
spots the classroom vegetable garden. The eye goes wide.
INT. CATERPILLAR ROOM - NIGHT
Buzz is still trapped in the bin, banging on the ceiling.
Hamm and Rex have grown weary of his calls for help.
BUZZ
(muffled)
Help! Prison riot!
HAMM
Give it up. No one can hear you.
BUZZ
(looking up, muffled)
What...?
HAMM
I said no one can hear you!
BUZZ
(confused, muffled)
What...?!!!
REX
(yelling)
He said, “No one can...!!!”
HAMM
Shhhh...!!! Will you be quiet?!
He slaps a hand over Rex’s mouth. A NOISE. They look up.
A ceiling tile opens. Woody, Slinky, and Barbie drop in.
REX
Woody! You’re back!
Rex and Hamm move to the front of the bin. Buzz runs to
the back and jumps -- knocking Hamm and Rex off the bin.
Buzz makes a break for it -- running across the floor.
WOODY
Stop him! Don’t let him get out!
BUZZ
(into wrist radio)
Star Command, I’ve been taken hostage
by my own prisoners!!!
 95
Hamm and Rex tackle Buzz. Hamm, Rex, Woody and Slink keep
Buzz pinned down, as Barbie rushes over with the manual.
WOODY
Quick, open his back! There’s a
switch!
They pull open Buzz’s compartment, revealing the switch.
Woody flips it. Buzz struggles.
BUZZ
Unhand me, Zurg scum! The Galactic
courts will show you no mercy!
Woody flips the switch back and forth.
WOODY
It’s not working! Why’s it not
working? Where’s the manual?
Hamm flips through at top speed.
HAMM
Here we go! There should be a little
hole under the Switch!
WOODY
Little hole. Got it!
HAMM
(reading)
“To reset your Buzz Lightyear, insert
paper clip....”
WOODY
Rex, use your finger!
REX
Oh!
Rex sticks a finger in Buzz’s re-set hole.
WOODY
Okay, now what?
HAMM
All right, let’s see... “Caution: Do
not hold button for more than five
seconds.”
Abruptly, Buzz BEEPS loudly, falls limp, face plants.
The others all look at Rex. Rex lifts his finger.
 96
REX
It’s not my fault!
Suddenly, Buzz leaps up, knocking the Toys off him. He
strides forward, flips his wrist radio.
SPANISH BUZZ
Bitácora Espacial -- Me he despertado
de hipersueño en un planeta extraño.
(Star Log -- I’ve awakened from hypersleep on a strange planet.)
The Toys are speechless. Hamm glares at Rex.
HAMM
Now what did you do?!
REX
I did what you told me...!
Buzz -- hyper-alert -- glances sideways, narrows his eyes.
SPANISH BUZZ
Estoy rodeado por criaturas extrañas
y desconozco sus intenciónes!!!
(I'm surrounded by alien creatures of
unknown intent!!!)
He whips around -- flamboyant Latin-style -- and trains his
laser on Woody’s forehead.
SPANISH BUZZ (CONT'D)
¿Quién anda ahí? ¿Amigo? O Enemigo?
(Who goes there -- Friend? Or foe?)
WOODY
Uh... Amigos! We’re all amigos!
Satisfied, Buzz struts forward, greeting them.
SPANISH BUZZ
Me debo haber estrellado, y se me
borró la memoria.
(I must have crash landed and had my
memory erased.)
He approaches Woody, kisses both cheeks, strides off.
SPANISH BUZZ (CONT'D)
Han visto a mi nave espacial?
(Anyone seen my spaceship?)
WOODY
We gotta switch him back!
 97
SLINKY
How do we do that?
HAMM
(re: manual)
I dunno! That part’s in Spanish!
Patrol Truck lights pass by under the hall door.
WOODY
We don’t have time for this! C’mon!
Woody grabs Buzz, hustles him toward the playground door.
SPANISH BUZZ
Mi nave. ¿Lo encontraste? !Excelente!
(My spaceship? You know where it is?
Excellent!)
They pass the Lifer, watching from the shadows.
LIFER
Good luck, Cowboy.
EXT. PLAYGROUND - NIGHT
Jessie, Bullseye, and Mrs. Potato Head wait inside a
concrete pipe. Spotlights survey the playground.
MRS. POTATO HEAD
(points)
Here they come!
Woody, Hamm, Rex, Slinky, and Barbie steal across the
playground. Spanish Buzz, trailing behind, does elaborate
rear-guard defense poses. Woody has to grab him and pull
him along. They duck into the pipe.
JESSIE
What took you so long?
WOODY
Things got complicated. Where’s
Potato Head?
JESSIE
We haven’t seen him!
Woody turns and peers out on the playground. Buzz, the
last to arrive, sees Jessie. She turns to greet him.
JESSIE (CONT'D)
Buzz...
 98
Buzz is struck dumb. Time slows. His heart melts. He
approaches, drops to his knees, takes Jessie’s hand.
SPANISH BUZZ
Mi florecita del desierto...! Yo
nunca he visto la belleza verdadera
hasta esta noche!
(My desert flower...! I have never
seen true beauty til this night!)
Jessie is speechless. She turns to the others.
JESSIE
Did you guys fix Buzz?
HAMM
Eh... Sort of.
MRS. POTATO HEAD
Jessie, behind you! Someone’s coming!
The Toys turn. A tall figure looms. Mr. Cucumber Head
steps into the light -- irked, agitated.
MR. POTATO HEAD
You would not believe...! What I’ve
been through...! Tonight!
Mrs. Potato Head goes to him.
MRS. POTATO HEAD
Darling...! Are you okay?
MR. POTATO HEAD
I feel fresh! Healthy! It’s
terrible!
MRS. POTATO HEAD
You’ve lost weight! And so tall!
Bullseye nudges Potato Head’s torso toward him.
MR. POTATO HEAD
Ahhh, you’re a sight for detachable
eyes!
He plucks his eyes out and plants them on the spud.
TIME CUT:
The Jungle Gym slide. A Patrol Truck drives by. Slinky
slides down, pops out the bottom, looks both ways.
At the top of the slide, Woody holds Slinky’s back end.
The tail wags.
 99
WOODY (CONT'D)
Okay, all clear!
ON THE PLAYGROUND
The Toys shoot out the bottom of the slide, scamper off.
They huddle behind the spring of an animal rocking swing.
JESSIE
Almost there!
Jessie darts out, with others close behind. The lights of
a Patrol Truck approach.
WOODY
Back up, back up!
Woody backs into the shadows with Bullseye and the Aliens.
The Truck pulls up and stops.
Jessie looks back, sees Woody and the others still hiding.
Woody gestures “We’ll go around”. Jessie does a thumbs-up.
Woody and the Aliens ride Bullseye across the playground
swing set. They stop abruptly. Big Baby is sitting on the
last swing, CREAKING back and forth, gazing up at the moon.
Bullseye and Woody tip-toe behind Big Baby, approach the
wood siding for the swing set area. Bullseye leaps over
the siding but the last Alien falls to the ground. SQUEAK.
Big Baby swivels his head 180 degrees.
Woody, Bullseye, et al lie low behind the siding plank --
in the shadows, amid plastic shovels and buckets.
Big Baby dismounts, walks toward their hiding place.
Woody looks around desperately.
Big Baby reaches the wood siding, looks over.
No one’s there. Looks up and down. He walks off.
HOLD ON an overturned plastic bucket. Woody and Bullseye
peek out from underneath, share a relieved look.
Jessie, watching from the bushes, sighs with relief.
Abruptly, Spanish Buzz grabs her, yanks her to him. As
Jessie stands awkwardly, Spanish Buzz performs a solemn,
impassioned courtship dance around her.
Finally, Spanish Buzz takes Jessie in his arms.
 100
SPANISH BUZZ (CONT'D)
¡Ven conmigo! ¡Te mostraré las
maravillas de la galaxia, y juntos
lucharemos contra el despiadado Zurg!
(Come with me! I will show you the
wonders of the galaxy, and together
we will fight the evil Zurg!)
He plucks a dandelion, offers it to her.
At that moment, Woody pushes through the bushes -- safe.
Jessie leaves Buzz, runs and gives Woody an impulsive hug.
JESSIE
Woody! Thank goodness!
WOODY
C’mon! We’re almost there!
He and Jessie leads the Toys off, REVEALING Spanish Buzz --
stunned and heartbroken. He throws down his dandelion.
SPANISH BUZZ
El Vaquero...!!!
Mad with jealousy, he narrows his eyes and runs after them.
EXT. TRASH CHUTE - NIGHT
Woody leads the Toys to the trash chute. He jumps --
trying to grab the handle -- but can’t quite reach it.
WOODY
Buzz, c’mere, gimme a lift!
Buzz, smoldering, steps forward, dramatically pushes Woody
aside. With a lovelorn glance at Jessie, he hits a button.
SPANISH BUZZ
Buzz Lightyear al rescate!
(Buzz Lightyear to the rescue!)
Buzz steps to the chute, jumps up in a series of crazy,
acrobatic moves, and grabs the handle, pulling it down.
SPANISH BUZZ
Abierto...!
WOODY
Way to go, Buzz! C’mon, everyone!
The Toys boost each other up onto the trash chute lid.
 101
INT. GARBAGE CHUTE - NIGHT
Woody climbs in the chute with the others and peers down.
POV -- The grimy metal chute recedes into blackness.
JESSIE
Is it safe?
WOODY
I guess I’ll find out...
Woody begins a controlled slide down -- feet first, hand
bracing. He slips and it becomes an uncontrolled slide.
He scrambles for traction, eases to a stop at the bottom.
He gets up, stands at the edge of the slide’s precipice.
ANGLE -- An alley. The trash chute cantilevers over a halfclosed dumpster. Above him, stars twinkle -- freedom.
JESSIE (O.S.)
Woody...! You okay?
WOODY
Come on down. But not all at once.
MR. POTATO HEAD (O.S.)
What’d he say?
HAMM (O.S.)
I think he said, “All at once”.
NOISES.
WOODY
No...! No! No! No! No!
Too late. The Toys slide down together.
TOYS
Whoa! Watch out!
REX
Geronimo...!!!
They collide with Woody. Woody windmills his arms at the
edge of the chute. Jessie grabs him, pulls him to safety.
WOODY
Thanks, Jess.
Spanish Buzz looks about, confused and deeply disappointed.
SPANISH BUZZ
Donde esta mi nave...?!
(Where’s my spaceship...?!)
WOODY
Slink...? Think you can make it?
 102
SLINKY
I might be old, but I still got a
spring in my step.
He backs up, then leaps over the open pit to the closed lid
of the dumpster. He lands hard, clutches a metal handle.
REX
He did it!
HAMM
All right, Slinky-kins!
SLINKY
Okay! Climb across!
Suddenly, two pink paws step in front of Slinky. He looks
up. Lotso looms over him, grinning.
LOTSO
You lost, li’l doggy...?
Lotso kicks Slinky’s paws. He retracts, falling from the
lid. The Toys pull him to safety.
Behind Lotso, his Gang hops off a wall and joins him on the
dumpster lid. Lotso notices Woody among the others.
LOTSO (CONT'D)
Well, well...! Look who’s back!
A NOISE. The Toys turn. Lotso’s henchman -- Stretch, the
Octopus -- clambers down the chute, blocking an escape.
The Lifer Phone wheels into view -- wheels wobbling, one
eye broken, frayed phone dangling. His voice is hoarse.
LIFER
(via handset)
I’m sorry, Cowboy! They broke me...!
Lotso turns to the Toys, as cheerful as ever.
LOTSO
(incredulous)
What are you doin’?! Runnin’ back to
your kid? He don’ want you no more!
WOODY
That’s a lie!
LOTSO
Is it? Tell me this, Sheriff -- if
your kid loves you so much, why is he
leavin’?
 103
CLOSE ON -- Woody, fuming. He has no answer.
LOTSO (CONT'D)
Y’think you’re special, Cowboy?
You’re a piece of plastic! You were
made to be thrown away!
VROOM! A garbage truck turns into the far end of the alley
and RUMBLES toward them. Lotso turns.
LOTSO (CONT'D)
Speak of the devil...!
(turns back)
Now we need toys in our Caterpillar
Room. And you need to avoid that
truck. Why don’t you come on back,
join our family again?
He smiles. Woody seethes -- at a loss for words. Jessie
steps past him, eyes burning.
JESSIE
This isn’t a family, it’s a prison!
You’re a liar and a bully and I’d
rather rot in this dumpster than join
any family of yours!
Barbie steps forward.
BARBIE
Jessie’s right! Authority should
derive from the consent of the
governed! Not from the threat of
force!
Hamm and Potato Head share a glance -- Huh? Lotso grins.
LOTSO
If that’s what you want...!
He bangs his cane. Stretch, the Octopus, begins to prod
the Toys toward the precipice. Abruptly, Ken bursts from
the shadows -- still in his underwear.
KEN
Barbie! Wait...!
Everyone turns. He runs to Lotso.
KEN (CONT'D)
Don’t do this, Lotso...!
LOTSO
She’s a Barbie doll, Ken! There’s a
hundred million just like her!
 104
KEN
Not to me there’s not!
He glances at her. She sighs. Lotso picks up Ken.
LOTSO
Fine! Why don’t you join her?!
He tosses Ken across the dumpster chasm. The Toys grab
him, pull him to safety. Barbie hugs him.
BARBIE
Oh, Ken!
Ken stands and addresses Lotso’s Gang, earnest and heroic.
KEN
Everyone! Listen! Sunnyside could
be cool and groovy if we treated each
other fair!
(points)
It’s Lotso! He’s made us into a
pyramid and he put himself on top!
Lotso’s Gang eyes each other. There’s a shift in sympathy
but no one wants to stick their neck out. Lotso is amused.
LOTSO
Anyone concur with Ken?
No one moves. The truck RUMBLES closer -- two dumpsters
away. Lotso turns to the Toys. His face hardens.
LOTSO (CONT'D)
I didn’t throw you away. Your kid did.
Ain’t one kid ever loved a toy, really!
Chew on that when you’re at the dump!
He turns away. Woody steps forward.
WOODY
Wait...! What about Daisy?
Lotso keeps a steely composure.
LOTSO
I don’t know what you’re talking
about.
WOODY
Daisy...? You used to do everything
with her!
LOTSO
Yeah -- then she threw us out!
 105
WOODY
No -- she lost you!
LOTSO
She replaced us!
WOODY
(pointing)
She replaced you! And if you couldn’t
have her, no one could! You lied to
Big Baby and you been lying ever since!
Woody yanks something from his holster. It’s the rusty old
pendant, “My Heart Belongs To: DAISY”. Lotso is stunned.
LOTSO
Where’d you get that...?!
WOODY
She loved you, Lotso...
LOTSO
She never loved me!
WOODY
...As much as any kid ever loved a
toy!
Woody throws the pendant. It lands at Big Baby’s feet.
Big Baby stares, electrified, at the pendant -- a token of
his long-lost love. He picks it up. His lip trembles.
BIG BABY
Mama...!
Lotso grabs the pendant. He pokes Big Baby like a bully.
LOTSO
What -- you want your Mommy back? She
never loved you! Don’t be such a baby!
He throws it down and CRUSHES it with his cane. Big Baby’s
face crumples. Lotso turns, yells at Stretch the Octopus.
LOTSO (CONT'D)
Push ‘em in! All of ‘em!
(to his Gang)
This is what happens when you dummies
try to think!
He shoves Big Baby. Big Baby shrinks back, hurt.
Stretch advances on Woody and the Toys. They teeter at the
edge of the precipice. Lotso faces them, sneering.
 106
LOTSO (CONT'D)
We’re all just trash, waitin’ to be
thrown away! That’s all a toy is!
Abruptly, Lotso is lifted from behind by Big Baby.
LOTSO (CONT'D)
Put me down! What’re you doing?
Big Baby carries him to the edge of the dumpster.
LOTSO (CONT'D)
Help me! Help!
Around the dumpster, no one moves. Big Baby tosses Lotso
into the dumpster. He lands in the shadows, looks up.
With a CREAK, the Big Baby tugs at the open dumpster lid.
LOTSO (CONT'D)
No...! Wait...!
KLOON! Big Baby watches -- blank-eyed, pitiless -- as the
lid SLAMS down, shutting Lotso in. No one can believe it.
REX
He’s gone!!!
MR. POTATO HEAD
Holy cow!!!
BIG BABY
Ah-pppbbblllmmmmmmm...!!!
He blows a RASPBERRY at Lotso. VROOOM! The Toys turn.
The garbage truck is only 100 feet -- 15 seconds -- away.
WOODY
C’mon! Hurry!
The Toys hop on the now-closed dumpster lid, rush to the
retaining wall, and help each other clamber onto it.
A SQUEAK. Woody turns. At the crack between the two lids
are the three Aliens. One Alien is stuck. He struggles
while the other two stand around ineffectually.
WOODY (CONT'D)
Oh...! For crying out loud!
Woody glances at the approaching truck, then runs back.
JESSIE
Woody...!
Woody yanks the Alien free. Spanish Buzz gestures.
 107
SPANISH BUZZ
Vaquero, andale!
(Cowboy, hurry!)
The Aliens retreat to safety. Woody tries to follow, but a
pink paw grabs his leg. Woody tries to free himself, but
the paw drags him slowly into the dumpster’s depths.
The Toys watch, horrified, as Woody disappears.
The truck turns and approaches the dumpster, fork out.
HAMM
Oh, boy! Incoming!
BA-BOOM! The truck’s forks slide into the dumpster and
begin lifting it up. As it rises past the retaining wall
Jessie and Buzz fearlessly jump onto the rising dumpster.
JESSIE
C’mon!
The other Toys follow. Barbie tries to follow too, but Ken
holds her back.
KEN
Barbie, no...!
They all try to lift the dumpster lid. It won’t budge.
The dumpster rises up, up, up -- and begins to tilt.
As the dumpster tilts, they start to lose their footing.
As the dumpster nears vertical, the lid swings open and
trash begins pouring into the truck. Woody calls out...
WOODY
Jess!
JESSIE
Woody!
Woody falls into darkness. A FLASH of pink goes by --
Lotso tumbles past. The dumpster LURCHES to a stop.
All the Toys fall into the truck.
Barbie -- on the wall -- reaches forward.
BARBIE
No...!!!
She turns away, burying her head in Ken’s comforting arms.
 108
INT. GARBAGE TRUCK - NIGHT
The Toys find themselves in darkness, awash in garbage.
WOODY
Can you hear me?! Is everyone okay?!!
MR. POTATO HEAD
Of course not, you imbecile! We’re
doomed!
Buzz pulls himself from a mound of garbage. He GLOWS.
WOODY
Everyone! Go to Buzz! C’mon!!!
The Toys begin wading toward Buzz.
EXT. STREETS - NIGHT
The garbage truck rumbles through the streets.
INT. GARBAGE TRUCK - NIGHT
The Toys congregate around Buzz.
WOODY
We all here? Slinky...? Rex...?
The truck lurches to a stop. The hydraulic motor STARTS.
Woody looks up. A dumpster appears above them, tilting.
WOODY (CONT'D)
Against the wall, everybody! Quick!
He leads the Toys to the front of the truck, seeking
shelter. Buzz remains behind.
SPANISH BUZZ
Senorita! Senorita, donde estas...?!
(Miss...! Miss, where are you...?!)
JESSIE (O.S.)
Buzz...!
He turns. Somewhere in the DARKNESS, her voice rings out.
A trickle of garbage begins to sprinkle down from above.
SPANISH BUZZ
Senorita...!
Buzz runs through the falling trash until he finds her
pressed against the far wall -- terrified.
 109
CLUMP! Something large falls behind them. They look up.
Garbage is falling out of the dumpster directly above them.
Buzz takes Jessie’s hand and they run across the garbage
truck bay, dodging madly while trash rains down upon them.
Against the back wall, the Toys watch, aghast.
HAMM
They’ll never make it!
Buzz grabs Jessie and carries her -- dodging and weaving.
A SCRAPING sound above.
MRS. POTATO HEAD
Look out!
Buzz and Jessie look up. An old TV set falls towards them.
Buzz lunges and tosses Jessie out of the way. She turns.
CRASH!!! The TV smashes down on Buzz. A deluge of trash
piles on top, burying him completely.
JESSIE
Buzz...!!!
As the dumpster above recedes, Jessie runs forward and
begins digging. The other Toys join her.
WOODY
Anyone see him?!
SLINKY
Over here, y’all! I found him!
They rush over and drag Buzz from the pile. Buzz’s eyes
are closed. Jessie pops his shield, shakes him.
JESSIE
Buzz, you okay?! Buzz! Buzz!!!
No response. Jessie shakes him again. And again.
JESSIE
No...!
She hugs him, sobbing.
A BEEP. Buzz jack-knifes forward, then lurches back.
Jessie pulls away. Buzz sits up, eyes open -- disoriented.
He sniffs the air with distaste. Then he sees the others.
The Toys gape at him in open-mouthed wonder.
 110
Buzz frowns.
BUZZ
That wasn’t me, was it?
JESSIE
Oh, Buzz! You’re back!!! You’re
back, you’re back, you’re back!!!
She throws her arms around him, hugs him tight.
BUZZ
Yes, I’m back!
(beat)
Where’ve I been?
WOODY
Beyond Infinity, Space Ranger!
BUZZ
Woody!
Woody smiles -- partners again. Buzz looks around.
BUZZ (CONT'D)
But... Where are we now?!
REX
(excitable)
In a garbage truck on the way to the
dump!
Buzz’s smile freezes.
EXT. TRI-COUNTY DUMP - NIGHT
The garbage truck drives in the entrance.
INT. GARBAGE TRUCK - NIGHT
The truck grinds to a halt. The BEEP-BEEP-BEEP backing-up
alarm begins to sound. The Toys look around.
WOODY
Everyone -- stay together!
Everything lurches. The truck bay begins to tilt.
EXT. DUMP - NIGHT
The garbage truck tilts up -- higher and higher. Trash
begins pouring out the back, onto the dump below.
 111
INT. GARBAGE TRUCK - NIGHT
The back flap opens, allowing garbage to spill out. A
trash pit is revealed below. The Toys begin sliding out.
WOODY
Hold on! We’re going in...!
TOYS
Whoa...!
EXT. DUMP - NIGHT
The garbage truck extends fully, tilting 70 degrees. The
stream of garbage becomes a torrent.
INT. GARBAGE TRUCK - NIGHT
The Toys cling together, screaming, as they slide out into
the open night.
EXT. GARBAGE PIT - NIGHT
Woody lands on a trash heap -- Oooff! A plastic bag whips
by. He sits up. He’s in a vast, wind-blown landfill.
Nearby, Hamm and Rex unearth themselves. Mr. Potato Head
helps Mrs. Potato Head up.
MR. POTATO HEAD
You got all your pieces?
The Aliens pop up. One points to some heavy machinery --
with a giant claw -- in the distance.
ALIEN
The Cla-a-a-aw!
They toddle off toward it.
WOODY
Hey! Guys, no...! No!!!
Suddenly, the trio of Aliens is bathed in headlights.
Before anyone can react, a bulldozer passes over them...
Just like that, they’re gone.
MRS. POTATO HEAD
My Babies...!!!
A blinding LIGHT pours over her and envelops the Toys.
 112
Woody turns. A bulldozer -- with giant, studded wheels and
a massive grate -- is heading right at them. Rex SCREAMS.
The Toys are pushed backward toward a trench.
WOODY (CONT'D)
Hang on!
They tumble as the bulldozer pushes them over the edge.
EXT. CONVEYER BELT - NIGHT
The Toys land on a conveyor belt entering a dark tunnel.
INT. CONVEYER BELT - NIGHT
Woody sits up and watches the light receding behind them.
The other Toys gather round.
MRS. POTATO HEAD
Woody! What do we do?
WOODY
We’ll be okay if we stay toge--...
VWOOSH! Slinky is pulled up OUT OF FRAME.
WOODY (CONT'D)
Slinky...!
SLINKY
Woody...!
Slinky is fixed to a fast-moving conveyor belt above them.
Woody runs after him.
WOODY
Slinky, get down from there!
A hammer shoots up and CLANKS on the belt, narrowly missing
Slinky. All around them, other pieces of metal begin
FLYING UP and sticking to the ceiling belt. Jessie yells.
JESSIE
It’s a magnet! Watch out!
High above, Slinky looks around.
SLINKY
Uh, you might wanna take a look at
this!
The Toys scramble up a pile of debris.
 113
Ahead is a Shredder -- two fast-spinning vertical cylinders
that shred everything on the belt. Buzz sees a lunch box
near him starting to quiver....
BUZZ
Quick! Grab something metal!
He grabs it and is pulled up to the magnetic belt. Woody
grabs a metal handle and flies up, sticking to the ceiling
belt. Hamm dives into a nearby pot and is lifted upwards.
HAMM
You heard the guy...!
Each Toy grabs a metal object and lifts -- CLUNK! -- to the
ceiling. Rex, the last, grabs an aluminum can, a CD, etc.
REX
It’s not working!!!
Finally, he grabs a metal fan and sails up to safety.
Suddenly, a pink paw thrusts out from the belt below.
LOTSO (O.S.)
Help...! Help me!!!
Woody turns. Lotso is pinned under a golf bag.
LOTSO (CONT'D)
I’m stuck! Help!!! Please!
Woody looks at the approaching shredder. He lets go.
JESSIE
Woody...!
Woody lands on the belt, runs back to Lotso.
LOTSO
Thank you!
WOODY
Don’t thank me yet.
Woody struggles to lift the bag. Buzz drops down next to
Woody. Jessie eyes the approaching shredder.
JESSIE
Buzz...!!! Woody...?!!!
Woody and Buzz push together. They still can’t move it.
Woody pulls out a golf club. The magnet tugs it upward.
Buzz grabs it. Together, they pull it down and jam it
under the bag for leverage. The bag finally lifts...
 114
WOODY
Go! Go!
...and Lotso scrambles out.
Woody grabs Lotso. He and Buzz point the club skyward.
They’re pulled up to safety as the golf bag is pulverized.
Lotso looks back at the shredder, then at Woody.
LOTSO
Thank you, Sheriff...!
WOODY
We’re all in this together.
(turns)
Right guys...?
All the Toys have vanished.
WOODY (CONT'D)
Guys?!
JESSIE (O.S.)
Woody! Down here!
Jessie and the others wave from a conveyer belt far below.
Woody and Buzz let go and plummet.
EXT. DUMP / STAIRWAY TO HEAVEN - NIGHT
Woody, Buzz and Lotso land on the bed of a big, fast-moving
conveyer belt with metal walls. The Toys gather around.
JESSIE
Woody!
The toothed belt begins to ascend upwards.
REX
Woody! Look! I can see daylight!
We’re gonna be okay!
Rex points to a bright amber GLOW at the top of the belt.
The toys scramble forward. Woody’s smile drops.
WOODY
I don’t think that’s daylight...
FAST TRACK -- At the end of the conveyer belt, garbage
falls into a burning, churning vortex.
WOODY (CONT'D)
Run!!!
 115
Unable to jump off, the Toys begin running down the belt.
They dodge, duck and hurdle over the coming trash, but
they’re no match for the speed of the rising conveyor.
Lotso trips, falls. A pulsing blue LIGHT. He looks up.
High on the wall ahead is an Emergency Stop button. A
ladder leads to the button. Lotso leaps up, grabs the
bottom rung. He can’t pull himself up.
LOTSO
Sheriff...! The button! Help me!
The Toys look back, see Lotso. As they pass, Woody, Buzz
and Jessie boost Lotso up.
WOODY
Go!!! Go!!! Hit the button!
Lotso scrambles up the ladder toward the glowing button.
The Toys are carried up the conveyor belt toward the pit.
The Toys watch Lotso -- receding -- as he climbs.
Lotso stays focussed on the button above him.
The Toys reach the belt’s acme -- heels at the edge of the
waterfall of trash cascading to a melting, churning vortex.
WOODY (CONT'D)
Hurry!!!
Lotso reaches the walkway where the blue button glows. He
turns and looks -- malevolent -- at the helpless Toys.
WOODY (CONT'D)
Just push it! Push it!
BUZZ
Push it!!!
Lotso smirks, gives a salute.
LOTSO
Where’s your kid now, Sheriff?!
He turns, runs off down the walkway.
WOODY
No... No...! No...!!!
BUZZ
Lotso...!!!
 116
The Toys YELL as they tumble off the belt...
EXT. INCINERATOR HOPPER - NIGHT
The Toys land in a giant vortex of trash being sucked down
into the glowing eye of an incinerator.
It’s chaos -- trash tumbles over itself as sparks and ashes
fly through the air. The ROAR is overwhelming.
Woody stands and starts trying to climb out.
The Toys do the same, climbing desperately, fighting
against the trash tumbling into the vortex of fire.
They slip, fall, get up and slip again. It’s a nightmare --
no matter how fast they climb, they inexorably slide
backwards. Rex slides past Woody, towards the incinerator.
REX
Ahhhhhh!
WOODY
Rex!!!
Woody grabs Rex’s hand, slides further toward the inferno.
They are all being pulled inescapably downward.
There’s no way out. Jessie looks at Buzz.
JESSIE
Buzz...! What do we do?
Buzz looks at her. He reaches out, takes her hand.
Jessie grabs Bullseye’s hoof. Slinky takes Hamm’s hand.
Hamm reaches out to Rex. The Potato Heads hold each other.
Mr. Potato Head grabs Rex.
Buzz reaches out to Woody...
Woody takes Buzz’s hand, and the circle is complete.
As they approach the vortex, heat waves blast their faces.
The Toys close their eyes, turn away.
Woody stares at the fire, shuts his eyes.
This is the end.
 117
A LIGHT from above shines in Woody’s face.
He opens his eyes.
A giant mechanical Claw lowers towards them.
The Claw plunges into the trash around them, closing them
in its grip, then raises them up.
They soar into the air, away from the ROARING incinerator.
Woody looks around in disbelief.
The Claw spins, passing in front of the crane booth.
INT. CRANE OPERATOR’S BOOTH - NIGHT
In the booth, the Aliens man the joysticks.
ALIENS
The Clawwwww!!!
They lean into the joystick, steering the Claw to safety.
EXT. DUMP - DAWN
The Claw lowers and opens, dropping the Toys to earth. They
spill out, COUGHING and GROANING like shipwreck survivors.
Woody sits up, looks around. Rex pops up through trash.
REX
Whew...!
They have faced death and survived, and are profoundly
shaken. Potato Head stares at the sky.
MR. POTATO HEAD
Y’know all that bad stuff I said
about Andy’s attic? I take it all
back.
SLINKY
You’re darn tootin’!
HAMM
You said it!
Buzz and Jessie sit up, still holding hands. She looks at
him, smiles. He smiles and holds her gaze.
Mrs. Potato Head takes Mr. Potato Head’s hand.
 118
MRS. POTATO HEAD
Oh, darling! You were so brave!
A SQUEAK. The Potato Heads turn, see the Aliens approach.
MRS. POTATO HEAD (CONT'D)
You saved our lives...!
MR. POTATO HEAD
And we... Are eternally grateful!
Potato Head scoops them into his arms for a big, proud hug.
MR. POTATO HEAD (CONT'D)
My boys...!
ALIENS
Daaddddyyyy...!!!
Hamm looks around.
HAMM
Hey! Where’s that furball Lotso?
SLINKY
I’d like to loosen his stitching!
WOODY
Forget it, guys. He’s not worth it.
EXT. GARBAGE DUMP, ELSEWHERE - DAY
Lotso limps toward the dump exit. A NOISE. He turns, then
drops, freezing.
A truck’s wheels SCREECH to a halt in front of Lotso. A
door OPENS and SHUTS. FOOTSTEPS. A hand picks him up.
GARBAGE MAN ONE (O.S.)
Hey!
GARBAGE MAN TWO (O.S.)
Whatcha got?
GARBAGE MAN ONE (O.S.)
I had me one a these when I was a
kid!
He buries his nose in Lotso’s tummy, inhales.
GARBAGE MAN ONE (CONT'D)
(nostalgic rapture)
Strawberries...!
 119
EXT. GARBAGE DUMP - DAY
The truck exits the dump -- Lotso strapped to the grill.
He comes to life, panicked. On the grill are a couple of
muddy, bug-spattered Plushies, including a sad-eyed FROG.
FROG
Hey, buddy...!
(Lotso turns)
...Y’might wanna keep yer mouth shut!
The others SNICKER. Lotso WHIMPERS. The truck RUMBLES off.
ANGLE -- The truck passes, REVEALING the Toys, unaware of
Lotso’s karmic comeuppance. Jessie sees Woody lagging.
JESSIE
C’mon, Woody -- we gotta get you home!
BUZZ
That’s right, “College Boy”!
WOODY
But... What about you guys? Maybe
the attic’s not such a great idea.
He glances at them, uneasy. Jessie steps to him.
JESSIE
We’re Andy’s Toys, Woody...
BUZZ
We’ll be there for him. Together.
Woody smiles.
WOODY
I just hope he hasn’t left yet...
MRS. POTATO HEAD
Wait a minute! Wait, I’ll check!
She covers her good eye, concentrates.
MRS. POTATO HEAD (CONT'D)
He’s still packing...!
(GASPS)
...But he’s almost done!
HAMM
He lives halfway across town...!
REX
We’ll never get there in time!
 120
The Toys glance at each other. Then, distantly, comes the
air-guitar WAILING of Andy’s Neighborhood Garbage Man.
The Toys turn, see him a dozen yards away. They brighten.
EXT. DRIVEWAY - DAY
Andy’s loading up his hatchback with boxes. Molly’s on the
lawn playing with Buster. As the garbage truck passes...
MOLLY
C’mere, boy. C’mon, Buster!
MOM
Is that it, honey? You got
everything?
ANDY
Yeah, just a few more boxes in my
room.
At the curb, REVEAL the Toys hiding behind a garbage can.
Woody peeks around, gestures to the other Toys.
WOODY
Okay, c’mon!
INT. BACK YARD - DAY
TIGHT ON SPIGOT -- Woody’s hand comes in, turns it.
The Toys huddle while Woody hoses them off. Buzz closes
his helmet. The Toys react to the cold water.
TOYS
Eeeaauggh...!!! Brrr...!!! Stop!!!
HAMM
That’s enough, that’s enough, that’s
enough!!
WOODY
All right, go! Go, go!
The Toys run off. Potato Head pulls off his nose, blows
out a spray of water.
EXT. GARAGE ROOF - DAY
Slinky heaves himself up to the edge of the garage roof.
One by one, the Toys scurry up his Slink, then make their
way along the roof towards Andy’s open window.
 121
INT. ANDY’S ROOM - DAY
Buzz and Woody peer in.
BUZZ
All clear...!
They clamber through the window, jump to the floor. The
other Toys follow, scrambling across the room.
Mrs. Potato Head stops, puts a hand over her working eye.
TRANSITION:
POV -- Under the bed, looking out. Mrs. Potato Head’s feet
are in front of us, facing away.
MRS. POTATO HEAD (V.O.)
There you are...!
The feet turn and a hand reaches TOWARD US, GRABBING the
subjective eye.
TRANSITION:
She pops her eye back in, blinks... And GIGGLES, tickled.
The Toys climb into a box marked “Attic”. Buzz helps them.
On the desk is a box marked “College”. Woody heads for it.
He reaches the box, turns. This may be the last time he
ever sees the other Toys. He scrambles back toward Buzz.
WOODY
Buzz...
Buzz turns. Woody offers a hand. They shake.
WOODY (CONT'D)
This isn’t good-bye.
SLINKY (O.S.)
Hey, Woody...
Woody looks up. Slinky lowers a paw.
SLINKY (CONT'D)
...Have fun at college!
HAMM
Yeah, but not too much fun!
Woody laughs, shakes hands with Slinky.
 122
REX
Woody, take care of Andy.
MRS. POTATO HEAD
Yeah...
MR. POTATO HEAD
He’s a good kid. Tell him to get a
haircut.
WOODY
I will.
Woody sees Jessie.
WOODY (CONT'D)
Jessie -- you’ll be okay in the attic?
JESSIE
‘Course I will. Besides...
(leans in)
...I know about Buzz’s “Spanish Mode”.
BUZZ
My what...?
He turns, confused. Woody and Jessie share a smile.
MOM (O.S.)
Honey, you want some food for the
road?
ANDY (O.S.)
I’ll get something on the way.
Woody turns to Buzz -- there’s so much he wants to say.
Buzz just smiles.
BUZZ
You know where to find us, Cowboy.
Woody smiles. He turns, runs to the desk.
Buzz climbs in the Attic box with the others.
On the desk, Woody jumps on the edge of the College box,
looks back at his friends. FOOTSTEPS climb the stairs.
Woody gives Buzz a salute. Buzz smiles, salutes back.
Woody lowers into the College box. The Toys duck in the
Attic box, pull the flaps shut just as Andy and Mom enter.
MOM
Did you say goodbye to Molly?
 123
ANDY
Mom, we’ve said goodbye like ten
times!
Mom stops, suddenly overwhelmed. The room is empty.
MOM
Oh, Andy...!
Andy, beside her, is abashed.
ANDY (O.C.)
Mom...! It’s okay...
IN THE COLLEGE BOX
Woody quietly peeks out the hand holes.
POV -- Woody can half-see Mom hug Andy.
MOM
I know, it’s just... I wish I could
always be with you.
ANDY
You will be, Mom.
ON WOODY
He turns and glances off, noticing something.
THE PHOTO
Of young Andy, playing with Woody and the other Toys.
TRACK IN ON
Woody. Mom and Andy’s words echo in his head.
WOODY POV -- His GAZE SHIFTS from Andy-holding-Woody to
Woody-with-the-other-Toys.
Suddenly, Woody half-smiles -- an epiphany. Sadness and
uncertainty are replaced by happiness and determination.
FOOTSTEPS and collar JINGLES approach. Molly steps to the
room’s threshold with Buster.
MOLLY (O.C.)
Hey... Aren’t you gonna say goodbye
to Buster?
Andy and Mom step into the hallway.
 124
ANDY (O.S.)
Of course I will...!
(to Buster)
Who’s a good doggie?! Who’s a good
doggie?!!! I’m gonna miss you!
While Andy scratches Buster’s belly, Woody jumps out of the
box, grabs a pen and a sticky note. He sneaks across the
room, jumps on the Attic box, starts frantically writing.
Buster starts BARKING. Woody finishes writing, looks up.
MOLLY (O.C.)
He’s telling you to go already.
MOM (O.C.)
C’mon, get the rest of your things.
Woody gasps, looks up at the door.
TRACK IN -- THE DOOR
Andy walks in. Mom and Molly stay in the hallway.
ANDY
Okay, Buster, don’t let Molly near my
stuff.
Andy turns, crouches to pick up the Attic box.
He stops, noticing the yellow Post-It on the box top.
He opens the flaps, finding all of his Toys.
ANDY (CONT'D)
Hey...!
He digs through them -- pulling a few out, making sure
they’re all there -- smiling with fondness and relief.
He picks up the Post-It, reads it. He calls out.
ANDY (CONT'D)
Hey, Mom... So, you really think I
should donate these?
Mom answers from the hallway.
MOM (O.S.)
It’s up to you, honey. Whatever you
want to do.
CUT TO:
 125
INT. CAR - DAY
Andy cruises, looking for an address. A box with “Attic”
crossed out sits in the passenger seat. The car slows.
EXT. HOUSE - DAY
Andy grabs the box and gets out.
TRACK IN -- The hand slot of the College box, left behind.
POV - COLLEGE BOX -- Andy crosses the street and approaches
the house.
Andy stops, glances at the box. On the Post-It is written:
 DONATE TO:
Bonnie
1225 Sycamore Road
TILT UP -- The address on the front gate. It matches.
Andy sees Bonnie playing in the front yard, while her Mom
and Dad garden nearby.
BONNIE
No! Don’t go in there! The bakery
is haunted...!!!
(another voice:)
Shhhhhh!!! Are you crazy?! You’ll
wake up all the ghosts!
Andy watches Bonnie play -- exuberant and unself-conscious.
BONNIE (CONT’D)
Look out! The ghosts are throwing
pies! Splat! Splat! Splat!
Bonnie notices Andy and immediately stops playing.
BONNIE (CONT'D)
Mom...?
Bonnie’s Mom looks over, sees Andy. She stands.
BONNIE’S MOM
Andy...!
ANDY
Hi!
Andy lets himself in the gate.
 126
BONNIE’S MOM
Wow! Look at you! I hear you’re off
to college?!
ANDY
Yeah. Right now, actually.
BONNIE’S MOM
So, what can we do for you?
Bonnie goes and stands behind her Mom.
ANDY
Uhh... I have some toys here.
BONNIE’S MOM
Ohhh...! You hear that, Bonnie?
Bonnie peeks around her Mom, curious.
ANDY
So you’re Bonnie?
He hunches down so he’s eye to eye with her.
ANDY (CONT'D)
I’m Andy. Someone told me you’re
really good with toys. These are
mine, but I’m going away now, so I
need someone really special to play
with them.
Bonnie is uncertain. Andy sits in front of her, crosslegged. He opens the box, pulls out Jessie and Bullseye.
ANDY (CONT'D)
This is Jessie -- the roughest,
toughest cowgirl in the whole West.
She loves critters, but none more’n
her best pal, Bullseye.
(whinnies; then, as Jessie)
Yee-haw! Here.
Bonnie looks at her Mom, who nods. She walks forward. Andy
gives Jessie and Bullseye to her. A smile escapes Bonnie.
Andy pulls out Rex.
ANDY (CONT'D)
This is Rex -- the meanest, most
terrifying dinosaur who ever lived.
(dinosaur voice)
“Raaawwwrrrrr...!!!”
He thrusts Rex at her. Bonnie backs up, grins, takes him.
 127
Andy pulls out the Potato Heads.
ANDY (CONT'D)
The Potato Heads -- Mister and
Missus. You gotta keep ‘em together
‘cause they’re madly in love.
Bonnie nods, takes them. Andy pulls out Slinky and Hamm.
ANDY (CONT'D)
Now Slinky here is as loyal as any
dog you could want. But Hamm? He’ll
keep your money safe...
He drops a quarter into Hamm’s slot.
ANDY (CONT'D)
...but he’s also one of the most
dastardly villains of all time...
(Hamm voice)
“...Evil Dr. Pork Chop!”
Bonnie smiles, takes them. He pulls out the three Aliens.
ANDY (CONT'D)
These little dudes are from a
strange, alien world -- Pizza Planet!
She smiles. He hands them to her, then pulls out Buzz.
ANDY (CONT'D)
And this is Buzz Lightyear -- the
coolest toy ever. Look, he can fly...
(deploys wings)
...And shoot lasers...
(fires laser)
He’s sworn to protect the galaxy from
the evil Emperor Zurg!
Andy hands over Buzz. Bonnie presses a button on him.
BUZZ
“To Infinity... And Beyond!!!”
Bonnie looks up, happily surrounded by Andy’s toys.
ANDY
Now, you gotta promise to take good
care of these guys. They mean a lot
to me.
Bonnie nods. She glances in the box. Her eyes go wide.
BONNIE
My cowboy!
 128
Andy looks down, sees Woody lying in the box.
ANDY
Woody...? What’s he doing in there?
He lifts Woody out. Bonnie points.
BONNIE
“There’s a snake in my boot!”
Andy -- amazed -- pulls Woody’s pull-string.
WOODY
(voice-box)
“There’s a snake in my boot!”
Bonnie giggles and reaches for him, but Andy instinctively
pulls Woody away. Bonnie looks at Andy, confused.
Andy looks down at Woody, makes a decision.
He holds Woody out -- gentle and serious.
ANDY
Now, Woody -- he’s been my pal as
long as I can remember. He’s brave,
like a cowboy should be. And kind,
and smart. But the thing that makes
Woody special? Is he’ll never give
up on you -- ever. He’ll be there
for you, no matter what. Y’think you
can take care of him for me?
(she nods)
Okay, then.
He hands Woody to Bonnie. She hugs him.
Andy suddenly grabs Hamm.
ANDY (CONT’D)
Oh, no! Dr. Pork Chop’s attacking
the haunted bakery! Pchoo! Pchoo!
Without missing a beat, Bonnie joins in the play.
BONNIE
Oh, no! The ghosts are getting away!
Woody’ll stop ‘em!!
She swoops Woody in the air. Andy grabs Slinky and gives
chase. They EXIT FRAME, laughing.
ANDY
Pchoo! Pchoo! Pchoo!
 129
EXT. BONNIE’S HOUSE - LATE AFTERNOON - MONTAGE
Bonnie and Andy play together with all their Toys.
EXT. BONNIE’S HOUSE - DUSK
Andy walks to his car, turns. Bonnie stands on the porch,
the Toys scattered at her feet. She clutches Woody.
Bonnie makes Woody’s arm wave at Andy. Andy smiles.
He gets in his car. He takes one last look at all his Toys
on Bonnie’s porch, and Woody in Bonnie’s arms...
ANDY
Thanks, guys.
...And pulls away.
BONNIE
Look, Mommy! They’re all playing
together!
Bonnie puts Woody down and runs to her mother’s arms.
BONNIE’S MOM (O.C.)
C’mon -- let’s get some lunch.
She scoops up Bonnie, swings her around. Mother and
daughter laugh as they step into the house.
On the porch, the Toys come to life, sit up.
Woody watches Andy drive away.
WOODY
So long, partner.
Buzz puts an arm around Woody.
They watch Andy drive off.
The other Toys gather around, and we...
CRANE UP TO
...Blue sky, and fluffy clouds.
THE END
 130
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
