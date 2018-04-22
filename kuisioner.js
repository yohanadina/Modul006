function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah C# merupakan bahasa pemrograman paling keren sedunia?',
                          ['Ya', 'Enggak'],
                          '0');

    var q2 = new Question('Apakah yang merupakan genre dari film romantis ?',
                          ['Avengers', 'Dilan', 'Danur'],
                          '1');

    var q3 = new Question('Apa pendapat anda tentang kuliah itu?',
                          ['Membosankan', 'Mengasyikan', 'Membahagiakan', 'Menjenuhkan'],
                          '2');

    var q4 = new Question('Apa menu makan siang anda hari ini?',
                          ['Singkong', 'Dage', 'Pizza', 'Nasi telur'],
                          '3');

    var q5 = new Question('Tugas kuliah itu lebih baik dikerjakan saat?',
                          ['Jauh jauh hari', 'Tidak usah digarap', 'Digarap setelah deadline', 'Deadline'],
                          '0');

    var q6 = new Question('Apakah mata kuliah yang anda sukai ?',
                          ['Kewarganegaraan', 'Pemrograman', 'Bahasa Inggris'],
                          '1');

    var q7 = new Question('Siapakah dosen yang menajar mata kuliah pengebis di Stikom Yos Sudarso?',
                          ['Oskar', 'Pados', 'Agus', 'Maya'],
                          '2');

    var q8 = new Question('Apakah di Stikom Yos Sudarso ada perayaan natal dan paskah?',
                          ['Ya', 'Tidak'],
                          '0');

    var q9 = new Question('Berikut ini manakah yang merupakan hewan herbivora?',
                          ['Harimau', 'Kucing', 'Sapi', 'Ular'],
                          '2');
    var q10 = new Question('Manakah yang merupakan tumbuhan monokotil?',
                          ['Rambutan', 'Jeruk', 'Jagung', 'Mangga'],
                          '2');

    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};