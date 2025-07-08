import "./css/AsciiArt.css"
const AsciiArt = () => {
  const myart = `
  ____                                                   
 /\\  _\`\\                                           __    
 \\ \\ \\L\\ \\_ __    __    ___ ___     ____     __   /\\_\\   
  \\ \\ ,__/\\\`'__\\/'__\`\\/' __\` __\`\\  /',__\\  /'__\`\\ \\/\\ \\  
   \\ \\ \\/\\ \\ \\//\\  __//\\ \\/\\ \\/\\ \\/\\__, \`\\/\\ \\L\\.\\_\\ \\ \\ 
    \\ \\_\\ \\ \\_\\\\ \\____\\ \\_\\ \\_\\ \\_\\/\\____/\\ \\__/.\\_\\\\ \\_\\
     \\/_/  \\/_/ \\/____/\\/_/\\/_/\\/_/\\/___/  \\/__/\\/_/ \\/_/
                                                         
  `

  return (
    <div className="ascii-art-container">
      <pre>{myart}</pre>

      <p className="asciiart-welcome">
        Welcome
      </p>

      <p className="asciiart-meta">
        Version: <code>1.0.0</code>
      </p>

      <p className="asciiart-meta">
        Find the source code for this project here:&nbsp;
        <a 
          href="https://github.com/sajjapremsai/fornerds.github.io" 
          className="asciiart-repolink" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  )
}

export default AsciiArt
