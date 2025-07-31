const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in-up">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl mb-6 animate-fade-in-left animate-delay-200">
              I am a second-year Computer Science student at TU/e with a deep passion for 
              automation and software engineering. My journey has taken me from building 
              immersive games with Unity and C# to developing full-stack web 
              platforms and crafting complex applications from scratch in Java.
            </p>
            
            <p className="text-xl mb-6 animate-fade-in-right animate-delay-300">
              My internship in the AR/VR space and experience with collaborative projects 
              have taught me the value of teamwork and clean code. I am driven by complex 
              challenges and thrive on turning theoretical concepts into practical, 
              functional software.
            </p>
            
            <p className="text-xl animate-fade-in-left animate-delay-400">
              Whether it&apos;s implementing pathfinding algorithms for autonomous navigation 
              or designing scalable web architectures, I approach every project with 
              curiosity, precision, and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
