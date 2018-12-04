// make sure the answers are all in lower case

// user answers are not case sensitive
// exact question: user must enter the exact answer - answer must be a string
// match question: user must enter the answer word within their answer - answer must be an array
// required: number of keywords required for match question (any over this they are given extra points for)

var topics = ["hardware", "logic", "data", "software", "misc", "ethics"];

var data  = {
	hardware: [
		{
			question: "I need a storage device that has a high capacity, is small, and will not likely break. <br> A: Optical storage <br> B: ROM <br> C: Magnetic storage <br> D: Solid-state storage",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "I need a storage device that is portable, cheap, and cannot be overwriten. <br> A: Magnetic storage <br> B: Optical storage <br> C: Solid-state storage <br> D: Pen-and-paper storage",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "I need a storage device that has a high capacity, is fast to access, and is cheap to manufacture. <br> A: Solid-state storage <br> B: RAM <br> C: Magnetic storage <br> D: Optical storage",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "Which is <strong>not</strong> an example of a device which uses embedded systems? <br> A: Wi-fi router <br> B: Microwave oven <br> C: Laptop <br> D: Blood pressure reader",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "Why are embedded systems used? <i>more answers give you more points</i>",
			answer: ["size", "cost", "cheap", "automatic"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which is <strong>not</strong> required for <strong>all</strong> computer systems? <br> A: Screen <br> B: Operating system <br> C: Motherboard <br> D: Memory",
			answer: "a",
			answerType: "exact",
		},
		{
			question: "What are the factors that affect the performance of my CPU? <i>more answers give you more points</i>",
			answer: ["cache","clock speed","number of cores"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What are the <strong>two</strong> types of processors?",
			answer: ["risc","cisc"],
			answerType: "match",
			required: 2,
		},
		{
			question: "What are the <strong>two</strong> parts of an instruction?",
			answer: ["opcode","operand"],
			answerType: "match",
			required: 2,
		},
		{
			question: "What are the <strong>three</strong> parts of a CPU cycle?",
			answer: ["fetch","decode","execute"],
			answerType: "match",
			required: 3,
		},
		{
			question: "What is hardware?",
			answer: ["physical"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What are the parts of a CPU (their abbreviations)? <i>more answers give you more points</i>",
			answer: ["alu","acc","cu","mar","mdr","pc"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which part of the CPU is represented by: <img src='./assets/alu.PNG'>? <br> A: Arithmetic logic unit <br> B: Register <br> C: Bus <br> D: Control unit",
			answer: "a",
			answerType: "exact",
		},
		{
			question: "Which part of the CPU is represented by: <img src='./assets/register.PNG'>? <br> A: Arithmetic logic unit <br> B: Register <br> C: Bus <br> D: Control unit",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "Which part of the CPU is represented by: <img src='./assets/cu.PNG'>? <br> A: Arithmetic logic unit <br> B: Register <br> C: Bus <br> D: Control unit",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "What does ALU stand for?",
			answer: "arithmetic logic unit",
			answerType: "exact",
		},
		{
			question: "What does ACC stand for?",
			answer: "accumulator",
			answerType: "exact",
		},
		{
			question: "What does CU stand for?",
			answer: "control unit",
			answerType: "exact",
		},
		{
			question: "What does MAR stand for?",
			answer: "memory address register",
			answerType: "exact",
		},
		{
			question: "What does MDR stand for?",
			answer: "memory data register",
			answerType: "exact",
		},
		{
			question: "What does PC stand for?",
			answer: "program counter",
			answerType: "exact",
			required: 1,
		},
		{
			question: "What does RISC stand for?</i>",
			answer: "reduced instruction set computer",
			answerType: "exact",
		},
		{
			question: "What does CISC stand for?</i>",
			answer: "complex instruction set computer",
			answerType: "exact",
		},
		{
			question: "Which is <strong>not</strong> an <strong>input</strong> device? <br> A: Gyroscope <br> B: Microphone <br> C: External storage <br> D: Hard drive",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "Which is <strong>not</strong> an <strong>output</strong> device? <br> A: Monitor <br> B: Gyroscope <br> C: Speaker <br> D: Hard drive",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "What are examples of flash memory? <i>more answers give you more points</i>",
			answer: ["usb","sd","solid-state drive"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What must be considered when choosing a suitable secondary storage device? <i>more answers give you more points</i>",
			answer: ["capacity","speed","portability","durability","reliability","cost"],
			answerType: "match",
			required: 1,
		},
		{
			question: "How is data transferred between the memory and the CPU?",
			answer: ["bus"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What is the name for 4 bits? <br> A: Chomp <br> B: Byte <br> C: Bit <br> D: Nibble",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "What is the name for 8 bits? <br> A: Chomp <br> B: Chunk <br> C: Byte <br> D: Nibble",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "How many bytes in a kB?",
			answer: "1024",
			answerType: "exact",
		},
		{
			question: "How many kB in a MB?",
			answer: "1024",
			answerType: "exact",
		},
		{
			question: "What does RAM stand for?",
			answer: "random access memory",
			answerType: "exact",
		},
		{
			question: "What does ROM stand for?",
			answer: "read only memory",
			answerType: "exact",
		},
		{
			question: "What does GPU stand for?",
			answer: "graphics processing unit",
			answerType: "exact",
		},
		{
			question: "What is the place in the computer where the program and data that are currently in use are stored?",
			answer: "ram",
			answerType: "exact",
		},
		{
			question: "What is the place in the computer where the programs needed to boot up the computer are stored?",
			answer: "rom",
			answerType: "exact",
		},
		{
			question: "Does RAM or ROM have a higher memory capacity?",
			answer: "ram",
			answerType: "exact",
		},
		{
			question: "Which type of computer memory is volatile?",
			answer: "ram",
			answerType: "exact",
		},
		{
			question: "What type of storage is a hard disk? <br> A: Optical <br> B: Waterman <br> C: Magnetic <br> D: Solid-state",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "Which hardware component connects other components together? <i>(HINT: other components are soldered to this)</i>",
			answer: ["motherboard"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which hardware component provides output to your speakers? <i>(HINT: uses digital-to-analogue converter)</i>",
			answer: ["sound board"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What is the abbreviation of the hardware component that performs massive, complex computations on large sets of data? <i>(HINT: primarily used for rendering and displaying graphics to the screen)</i>",
			answer: ["gpu"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List some common uses of the GPU. <i>more answers give you more points</i>",
			answer: ["gaming", "data", "cryptocurrency"],
			answerType: "match",
			required: 1,
		},
	],
	logic: [
	// also includes evaluation of boolean statements
		{
			question: "What is the hardware's logic controlled by?",
			answer: ["logic gate"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which logic gate is represented by: <img src='./assets/and.png'>? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "a",
			answerType: "exact",
		},
		{
			question: "Which logic gate is represented by: <img src='./assets/or.png'>? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "Which logic gate is represented by: <img src='./assets/not.png'>? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "Which logic gate is represented by: <img src='./assets/xor.png'>? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "Which logic gate has an output of 1 only if all its inputs are 1? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "a",
			answerType: "exact",
		},
		{
			question: "Which logic gate has an output of 1 if any of its inputs are 1? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "Which logic gate has an output of 1 if its input is 0? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "Which logic gate has an output of 1 if either but not both of its inputs are 1? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "What does the symbol + mean in logical operations? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "What does the symbol . mean in logical operations? <br> A: AND <br> B: OR <br> C: NOT <br> D: XOR",
			answer: "a",
			answerType: "exact",
		},
		// tbd: truth tables, simplify, simplification rules, simplify this with + and .
	],
	data: [
	// also includes hex, binary, denary conversion, addition of binary
	// tbd: binary shift
		{
			question: "What is the measurement of sampling rate?",
			answer: ["hertz"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which <strong>three</strong> factors affect file size of a sound file?",
			answer: ["length", "sample rate", "resolution"],
			answerType: "match",
			required: 3,
		},
		{
			question: "Which factors can affect quality of a sound file's playback? <i>more answers give you more points</i>",
			answer: ["sample rate", "resolution"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Find the file size of a sound file that is 10 seconds long, has a 150Hz sample rate, and has an 8 bit sample resolution. Give your answer in bytes.",
			answer: "1500",
			answerType: "exact",
		},
		{
			question: "Find the file size of a sound file that is 10 seconds long, has a 100Hz sample rate, and has an 4 bit sample resolution. Give your answer in bits.",
			answer: "4000",
			answerType: "exact",
		},
		{
			question: "What error is given when the total from adding binary numbers cannot be stored within a byte of data? <br> A: Logical error <br> B: Overflow error <br> C: Stack error <br> D: Binary error",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "What is a positive of a lossless file format?",
			answer: ["quality"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What is a negative of a lossless file format?",
			answer: ["size"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Give a common example of a lossless sound file format. <i>more answers give you more points</i>",
			answer: ["wav", "aiff", "flac", "alac", "ape"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Give a common example of a lossy sound file format. <i>more answers give you more points</i>",
			answer: ["mp3", "aac", "vorbis", "wma", "ape"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What information does metadata store for images? <i>more answers give you more points</i>",
			answer: ["dimension", "resolution", "compression", "depth", "colour", "author", "time", "date", "creator", "purpose", "size", "source", "quality", "location"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List an example of a character set. <i>more answers give you more points</i>",
			answer: ["ascii", "unicode", "iso"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What data type is '3.4'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "What data type is '2.0'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "What data type is '2'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "a",
			answerType: "exact",
		},
		{
			question: "What data type is 'true'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "What data type is 'V'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "What data type is '@'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "What data type is 'Computer science is fun!'? <br> A: Integer <br> B: Real <br> C: Boolean <br> D: Character <br> E: String",
			answer: "e",
			answerType: "exact",
		},
		{
			question: "What data type is ['Bob', 'Jane', 'Bill']? <br> A: String <br> B: One-dimensional string array <br> C: Two-dimensional string array <br> D: Three-dimensional string array",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "What is the name of an array that does not have a fixed length?",
			answer: ["dynamic"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What is the name of an array that has a fixed length?",
			answer: ["static"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which is an array of different data types? <br> A: Table <br> B: Record <br> C: Field <br> D: Database",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "Which is an array of the same data type? <br> A: Table <br> B: Record <br> C: Field <br> D: Database",
			answer: "c",
			answerType: "exact",
		},
		// tbd validation types
	],
	software: [
		{
			question: "Which type of software controls the operation of hardware in a computer?",
			answer: ["system"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which type of software is the everyday programs that we use to create documents and perform tasks?",
			answer: ["application"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which type of software provides a platform to run applications software?",
			answer: ["system"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a type of systems software. <i>more answers give you more points</i>",
			answer: ["device driver", "utility software", "operating system"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which type of systems software: <ul><li>Is loaded by the computer after the initial boot-up</li><li>Controls the operations of the hardware</li><li>Manages all other software</li></ul>?",
			answer: "operating system",
			answerType: "exact",
		},
		{
			question: "Give a role of the operating system. <i>more answers give you more points</i>",
			answer: ["user interface", "memory", "multitask", "peripheral management", "drivers", "user", "file"],
			answerType: "match",
			required: 1,
		},
		{
			question: "<strong>True</strong> or <strong>false</strong>: a computer cannot be used without an operating system.",
			answer: "true",
			answerType: "exact",
			suddenDeath: true,
		},
		{
			question: "What does GUI stand for?",
			answer: "graphical user interface",
			answerType: "exact",
		},
		{
			question: "What does CLI stand for?",
			answer: "command line interface",
			answerType: "exact",
		},
		{
			question: "What does NLI stand for?",
			answer: "natural language interface",
			answerType: "exact",
		},
		{
			question: "Give an example of an NLI. <i>more answers give you more points</i>",
			answer: ["siri", "alexa", "cortana", "google assistant"],
			answerType: "match",
			required: 1,
		},
	],
	// topics that are small enough to not be worth their own section
	misc: [
		// principles of programming
		{
			question: "List a high-level language. <i>more answers give you more points</i>",
			answer: ["visual basic", "python", "javascript", "java", "c#", "c++", "go"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a low-level language. <i>more answers give you more points</i>",
			answer: ["assembly", "machine"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a benefit of low-level languages. <i>more answers give you more points</i>",
			answer: ["speed", "control"],
			answerType: "match",
			required: 1,
		},
		// software engineering
		{
			question: "What does IDE stand for?",
			answer: "integrated development environment",
			answerType: "exact",
		},
		{
			question: "List a feature of an IDE. <i>more answers give you more points</i>",
			answer: ["code editor", "runtime environment", "error diagnostics"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a way to debug a program using an IDE. <i>more answers give you more points</i>",
			answer: ["trace", "break point", "memory inspection"],
			answerType: "match",
			required: 1,
		},
		// program construction
		{
			question: "List a type of translator. <i>more answers give you more points</i>",
			answer: ["compiler", "interpreter", "assembler"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which type of translator translates one line at a time?",
			answer: "interpreter",
			answerType: "exact",
		},
		{
			question: "Which type of translator translates all lines at once?",
			answer: "compiler",
			answerType: "exact",
		},
		{
			question: "Which type of translator translates assembly language?",
			answer: "assembler",
			answerType: "exact",
		},
		{
			question: "Which type of translator produces an executable file with runs the program?",
			answer: "compiler",
			answerType: "exact",
		},
		{
			question: "List a stage involved in he compilation process. <i>more answers give you more points</i>",
			answer: ["lexical analysis", "symbol table construction", "syntax analysis", "semantic analysis", "code generation", "optimisation"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which compilation stage involves removing white space?",
			answer: "lexical analysis",
			answerType: "exact",
		},
		{
			question: "Which compilation stage involves storing variable and subroutine names?",
			answer: "symbol table construction",
			answerType: "exact",
		},
		{
			question: "Which compilation stage involves checking the syntax is correct?",
			answer: "syntax analysis",
			answerType: "exact",
		},
		{
			question: "Which compilation stage involves checking variable types?",
			answer: "semantic analysis",
			answerType: "exact",
		},
		{
			question: "Which compilation stage involves converting the code into object code (understood by computer)?",
			answer: "code generation",
			answerType: "exact",
		},
		{
			question: "Which compilation stage involves making the program run better on the processor?",
			answer: "optimisation",
			answerType: "exact",
		},
		{
			question: "List a type of error that can occur during programming. <i>more answers give you more points</i>",
			answer: ["syntax", "logic", "runtime", "linking", "rounding", "truncation"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which error is caused by division by 0?",
			answer: ["runtime"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which error is caused by division by incorrect parameters for a subroutine?",
			answer: ["runtime"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which error is thrown before the program runs?",
			answer: ["syntax"],
			answerType: "match",
			required: 1,
		},
	],
	ethics: [
		{
			question: "Which best describes 'ethics'? <br> A: How something works <br> B: A set of moral principles <br> C: What governments think about an issue <br> D: A fill-up for a GCSE spec ",
			answer: "b",
			answerType: "exact",
		},
		{
			question: "List an ethical impact of technology. <i>more answers give you more points</i>",
			answer: ["privacy", "cybersecurity", "hacking", "access", "equality"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a possible cause of loss of privacy due to technology. <i>more answers give you more points</i>",
			answer: ["monitoring", "interception", "distribution", "theft"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a type of hacker. <i>more answers give you more points</i>",
			answer: ["white-hat", "black-hat", "grey-hat"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which type of hacker is seen as most ethical?",
			answer: "white-hat",
			answerType: "exact",
		},
		{
			question: "Which best describes 'legislation'? <br> A: A penalty that applies to someone who breaks the law <br> B: The altering of existing law(s) by a government <br> C: Law(s) introduced by a government <br> D: Protest against a law ",
			answer: "c",
			answerType: "exact",
		},
		{
			question: "Which best describes 'sanction'? <br> A: A penalty that applies to someone who breaks the law <br> B: The altering of existing law(s) by a government <br> C: Law(s) introduced by a government <br> D: Protest against a law ",
			answer: "a",
			answerType: "exact",
		},
		{
			question: "List a type of sanction. <i>more answers give you more points</i>",
			answer: ["fine", "prison sentence"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which act relevant to computing: <ul><li>Limits the amount of data that an organisation is allowed to collect about a person</li><li>Governs the security of the data when it has been collected</li></ul>",
			answer: ["data protection"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What year was the Data Protection Act passed?",
			answer: "1998",
			answerType: "exact",
		},
		{
			question: "Which act relevant to computing: <ul><li>Protects personal data held by organisations from hackers</li></ul>",
			answer: ["computer misuse"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What year was the Computer Misuse Act passed?",
			answer: "1990",
			answerType: "exact",
		},
		{
			question: "Which act relevant to computing: <ul><li>Protects intellectual property</li></ul>",
			answer: ["copyright", "design", "patents"],
			answerType: "match",
			required: 3,
		},
		{
			question: "What year was the Copyright, Designs and Patents Act passed?",
			answer: "1988",
			answerType: "exact",
		},
		{
			question: "What crime does the Copyright, Designs and Patents Act combat?",
			answer: "piracy",
			answerType: "exact",
		},
		{
			question: "Which act relevant to computing: <ul><li>Makes it possible for the public to access information about a public organisation</li><li>Requires public organisations to publish certain data on a regular basis</li></ul>",
			answer: ["freedom of information"],
			answerType: "match",
			required: 1,
		},
		{
			question: "What year was the Freedom of Information Act passed?",
			answer: "2000",
			answerType: "exact",
		},
		{
			question: "List an example of a type of public organisation. <i>more answers give you more points</i>",
			answer: ["school", "university", "parliament", "council", "police", "government", "nhs", "army"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which of these does not apply to a Creative Commons license? <br> A: There are many different types of the license <br> B: Work may be shared freely if under this license <br> C: Licenses provided by Creative Commons organisation <br> D: Individual must ask owner's position to use work under this license ",
			answer: "d",
			answerType: "exact",
		},
		{
			question: "List a type of Creative Commons license. <i>more answers give you more points</i>",
			answer: ["attribution", "share-alike", "non-commerical", "no derivative works"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a negative impact of technology on the environment. <i>more answers give you more points</i>",
			answer: ["waste", "pollution", "resource", "landfill", "material", "packaging"],
			answerType: "match",
			required: 1,
		},
		{
			question: "List a positive impact of technology on the environment. <i>more answers give you more points</i>",
			answer: ["education", "communication", "research"],
			answerType: "match",
			required: 1,
		},
		{
			question: "Which typically uses the least power? <br> A: Large monitor desktop computer <br> B: Small monitor desktop computer <br> C: Large monitor laptop computer <br> D: Small monitor laptop computer ",
			answer: "d",
			answerType: "exact",
		},
	],
};
