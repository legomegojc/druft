let participants = [];
let teams = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function lottery() {
    const participantInput = document.getElementById('participant');
    const team1Input = document.getElementById('team1');
    const team2Input = document.getElementById('team2');
    const team3Input = document.getElementById('team3');
    const team4Input = document.getElementById('team4');
    const team5Input = document.getElementById('team5');

    const participantName = participantInput.value.trim();
    const teamNames = [
        team1Input.value.trim(),
        team2Input.value.trim(),
        team3Input.value.trim(),
        team4Input.value.trim(),
        team5Input.value.trim(),
    ].filter(team => team !== '');  // 空白でないチーム名のみ抽出

    if (participantName !== '') {
        participants.push(participantName);
        teams.push(...teamNames);

        participantInput.value = ''; // 参加者入力欄をクリア
        team1Input.value = ''; // チーム入力欄をクリア
        team2Input.value = ''; // チーム入力欄をクリア
        team3Input.value = ''; // チーム入力欄をクリア
        team4Input.value = ''; // チーム入力欄をクリア
        team5Input.value = ''; // チーム入力欄をクリア

        if (participants.length < 1) {
            alert('参加者が足りません。');
            return;
        }

        const teamIndex = Math.floor(Math.random() * teams.length);
        const selectedTeam = teams[teamIndex];

        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];

        // 派手なエフェクトの追加
        document.getElementById('result').innerHTML = '抽選中...';
        await sleep(3000);  // 3秒待機

        document.getElementById('result').innerHTML = `<text class="highlight"><span color="#F3306F">${winner}</span> さんが <span color="#F3306F">${
            teamNames.length > 0 ? selectedTeam : 'どれかのチーム'
        } </span>に選ばれました！</text>`;
    } else {
        alert('名前を入力してください。チーム名が入力されていない場合は、入力されているチームから抽選が行われます。');
        return;
    }
}

function resetParticipants() {
    participants = [];
    teams = [];
    document.getElementById('result').textContent = 'ここに結果が表示されます。';
}
