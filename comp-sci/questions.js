//make sure the answers are all in lower case

//user answers are not case sensitive
//exact question: user must enter the exact answer - answer must be a string
//match question: user must enter the answer word within their answer - answer must be an array
//required: number of keywords required for match question (any over this they are given extra points for)

var topics = ["hardware","logic","data", "misc"];

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
	//also includes hex, binary, denary conversion, addition of binary
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
			answer: "runtime",
			answerType: "exact",
		},
		{
			question: "Which error is caused by division by incorrect parameters for a subroutine?",
			answer: "runtime",
			answerType: "exact",
		},
		{
			question: "Which error is thrown before the program runs?",
			answer: "syntax",
			answerType: "exact",
		},
	],
};
