//make sure the answers are all in lower case

//user answers are not case sensitive
//exact question: user must enter the exact answer - answer must be a string
//match question: user must enter the answer word within their answer - answer must be an array
//required: number of keywords required for match question (any over this they are given extra points for)

var topics = ["hardware","logic","data"];

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
			answer: ["reduced instruction set computer"],
			answerType: "exact",
		},
		{
			question: "What does CISC stand for?</i>",
			answer: ["complex instruction set computer"],
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
	],
	logic: [
	//also includes evaluation of boolean statements
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
	],
};