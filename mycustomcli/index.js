// #!/user/bin/env/node
// console.log("hijji");

const MyGitHub= async (api)=>{
    const response= await fetch("https://api.github.com/users/Pradeep-gif-hub");
    const name=await response.json();
    console.log(name.follower);
} 