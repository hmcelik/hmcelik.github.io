const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl mb-6">
              I am a second-year Computer Science student at TU/e with a deep passion for 
              robotics and software engineering. My journey has taken me from building 
              autonomous robot behaviors with ROS and Unity to developing full-stack web 
              platforms and crafting complex applications from scratch in Java.
            </p>
            
            <p className="text-xl mb-6">
              My internship in the AR/VR space and experience with collaborative projects 
              have taught me the value of teamwork and clean code. I am driven by complex 
              challenges and thrive on turning theoretical concepts into practical, 
              functional software.
            </p>
            
            <p className="text-xl">
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
