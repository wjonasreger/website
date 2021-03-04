var store = [{
        "title": "Epidemic, Endemic, and Eradication Simulations by Primer",
        "excerpt":" ","categories": ["Primer"],
        "tags": ["covid19","math"],
        "url": "http://localhost:4000/website/primer/epidemic-endemic-eradication-primer/",
        "teaser": "http://localhost:4000/website/assets/images/unsplash/vengadesh-sago-QR1O0HRaax4-unsplash.jpg"
      },{
        "title": "Let's Get Motivating!",
        "excerpt":"Motivation for later.    ","categories": ["fun"],
        "tags": ["tofu","fun"],
        "url": "http://localhost:4000/website/fun/Motivation/",
        "teaser": "http://localhost:4000/website/assets/images/unsplash/vengadesh-sago-QR1O0HRaax4-unsplash.jpg"
      },{
        "title": "LaTex Test (Laplace Distribution)",
        "excerpt":"Inverse CDF Sampling of the Laplace Distribution     The Laplace distribution has location $\\mu \\in \\mathbb{R}$ and scale $\\sigma \\in \\mathbb{R}^+$ with:   Probability Density Function:   \\[f(x \\mid \\mu, \\sigma) =      \\frac{1}{2\\sigma}\\text{exp}\\left(-\\frac{\\mid x - \\mu \\mid}{\\sigma}\\right),      \\quad x \\in \\mathbb{R}\\]  Cumulative Density Function:   \\[F(x \\mid \\mu, \\sigma) =      \\frac12 + \\frac12 \\text{sign}(x-\\mu)     \\left(1-\\text{exp}\\left(-\\frac{\\mid x - \\mu \\mid}{\\sigma}\\right)\\right),      \\quad x \\in \\mathbb{R}\\]  Inverse CDF:   \\[F^{-1}(u \\mid \\mu, \\sigma) =      \\mu - \\sigma \\cdot \\text{sign}(u - 0.5)\\ln(1-2 \\mid u - 0.5 \\mid),      \\quad u \\in [0,1]\\]  LaTex Code:  PDF: $$f(x \\mid \\mu, \\sigma) =      \\frac{1}{2\\sigma}\\text{exp}\\left(-\\frac{\\mid x - \\mu \\mid}{\\sigma}\\right),      \\quad x \\in \\mathbb{R}$$  CDF: $$F(x \\mid \\mu, \\sigma) =      \\frac12 + \\frac12 \\text{sign}(x-\\mu)     \\left(1-\\text{exp}\\left(-\\frac{\\mid x - \\mu \\mid}{\\sigma}\\right)\\right),      \\quad x \\in \\mathbb{R}$$  ICDF: $$F^{-1}(u \\mid \\mu, \\sigma) =      \\mu - \\sigma \\cdot \\text{sign}(u - 0.5)\\ln(1-2 \\mid u - 0.5 \\mid),      \\quad u \\in [0,1]$$   R Code:  # PDF dlaplace = function(x, mu, sigma) {   density = (1/(2*sigma))*exp(-abs(x-mu)/sigma)   return(density) }  # CDF qlaplace = function(u, mu, sigma) {   FuInv = mu - sigma * sign(u - 0.5) * log(1-2*abs(u - 0.5))   return(FuInv) }  # ICDF sampling set.seed(1) U = runif(1000) mu = 1; sigma = 2 X = qlaplace(U, mu, sigma)  # Empirical vs. Theoretical density xx = seq(-15, 15, 0.1) fx = dlaplace(xx, mu, sigma) hist(X,       main = \"Empirical vs. Theoretical density\",       ylim = c(0, max(fx)),       col = rgb(232, 74, 39, max = 255, alpha = 200),      freq = F) lines(xx, fx, type = 'l', lwd = 2, col = '#13294b')                     This is a plot comparing the empirical (histogram) and theoretical (curve) densities of the Laplace distribution.            Liquid Code:  { %   include figure image_path=\"/assets/images/mathstat-posts/laplace_EvT_densityplot.png\"   alt=\"This is a plot comparing the empirical (histogram) and theoretical (curve) densities of the Laplace distribution.\"   caption=\"This is a plot comparing the empirical (histogram) and theoretical (curve) densities of the Laplace distribution.\" % }  ","categories": ["LaTex"],
        "tags": ["latex","math","stat","jekyll","test"],
        "url": "http://localhost:4000/website/latex/LaTex-Test/",
        "teaser": "http://localhost:4000/website/assets/images/mathstat-posts/laplace_EvT_densityplot.png"
      },]
