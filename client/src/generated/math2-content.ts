/* 此文件由 scripts/build-math-content.mjs 根据大观园分类、原始知识点 PDF 与用户指定资料自动生成，请勿手工修改。 */
import type { MathChapter } from '@/math/types'

export const mathChapters: MathChapter[] = [
  {
    "id": "calculus-01",
    "partId": "calculus",
    "partTitle": "高等数学",
    "title": "第一章　极限",
    "topics": [
      {
        "id": "calculus-01-001",
        "title": "函数",
        "body": "##### 函数定义域、复合函数、奇偶性、周期性、单调性与有界性\n\n- 定义域同时检查：分母不为零、偶次根号内非负、对数真数为正、反三角函数自变量范围。\n- 复合函数 \\(f(g(x))\\) 还要满足 \\(x\\in D_g\\) 且 \\(g(x)\\in D_f\\)。\n- 判断奇偶性前先看定义域是否关于原点对称；再比较 \\(f(-x)\\) 与 \\(f(x)\\)。\n- 两个周期函数只有在周期之比为有理数时才一定能找到公共周期。\n- 单调性用 \\(f'(x)\\) 的正负判断；连续函数在闭区间上一定有界并能取到最大值、最小值。\n\n##### 三角函数公式一览\n\n<!-- formula {\"items\":[{\"id\":\"calculus-14whcx3-1\",\"title\":\"三角函数公式一览：sin^2x+cos^2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"\\\\sin^2x+\\\\cos^2x=1\"},{\"id\":\"calculus-14whcx3-2\",\"title\":\"三角函数公式一览：1+tan^2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"1+\\\\tan^2x=\\\\sec^2x\"},{\"id\":\"calculus-14whcx3-3\",\"title\":\"三角函数公式一览：1+cot^2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"1+\\\\cot^2x=\\\\csc^2x\"}]} -->\n\\[\n\\sin^2x+\\cos^2x=1,\\qquad 1+\\tan^2x=\\sec^2x,\\qquad 1+\\cot^2x=\\csc^2x.\n\\]\n\n<!-- formula {\"id\":\"calculus-10gpfye\",\"title\":\"三角函数公式一览：sin(α±β)\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta,\n\\]\n\n<!-- formula {\"id\":\"calculus-18l8nlr\",\"title\":\"三角函数公式一览：cos(α±β)\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta,\n\\]\n\n<!-- formula {\"id\":\"calculus-rfdwi7\",\"title\":\"三角函数公式一览：tan(α±β)\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\tan(\\alpha\\pm\\beta)=\\frac{\\tan\\alpha\\pm\\tan\\beta}{1\\mp\\tan\\alpha\\tan\\beta}.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1d200g4-1\",\"title\":\"三角函数公式一览：sin2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"\\\\sin2x=2\\\\sin x\\\\cos x\"},{\"id\":\"calculus-1d200g4-2\",\"title\":\"三角函数公式一览：cos2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"\\\\cos2x=2\\\\cos^2x-1=1-2\\\\sin^2x=\\\\cos^2x-\\\\sin^2x\"}]} -->\n\\[\n\\sin2x=2\\sin x\\cos x,\\quad\n\\cos2x=2\\cos^2x-1=1-2\\sin^2x=\\cos^2x-\\sin^2x.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-7tp7xw-1\",\"title\":\"三角函数公式一览：sin^2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"\\\\sin^2x=\\\\frac{1-\\\\cos2x}{2}\"},{\"id\":\"calculus-7tp7xw-2\",\"title\":\"三角函数公式一览：cos^2x\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"\\\\cos^2x=\\\\frac{1+\\\\cos2x}{2}\"},{\"id\":\"calculus-7tp7xw-3\",\"title\":\"三角函数公式一览：tanfrac x2\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\",\"latex\":\"\\\\tan\\\\frac x2=\\\\frac{\\\\sin x}{1+\\\\cos x}=\\\\frac{1-\\\\cos x}{\\\\sin x}\"}]} -->\n\\[\n\\sin^2x=\\frac{1-\\cos2x}{2},\\qquad\n\\cos^2x=\\frac{1+\\cos2x}{2},\\qquad\n\\tan\\frac x2=\\frac{\\sin x}{1+\\cos x}=\\frac{1-\\cos x}{\\sin x}.\n\\]\n\n诱导公式：\n\n<!-- formula {\"id\":\"calculus-apf03j\",\"title\":\"三角函数公式一览：sin\",\"aliases\":[],\"context\":\"诱导公式：\"} -->\n\\[\n\\sin\\left(\\frac\\pi2\\pm x\\right)=\\cos x,qquad\n\\cos\\left(\\frac\\pi2\\pm x\\right)=\\mp\\sin x,\n\\]\n\n<!-- formula {\"id\":\"calculus-98y7lx\",\"title\":\"三角函数公式一览：sin(nπ+x)\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\sin(n\\pi+x)=(-1)^n\\sin x,qquad\n\\cos(n\\pi+x)=(-1)^n\\cos x\\quad(n\\in\\mathbb Z).\n\\]\n\n<!-- formula {\"id\":\"calculus-1yyd0hr\",\"title\":\"三角函数公式一览：sinαcosβ\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\sin\\alpha\\cos\\beta=\\frac{\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)}2,\n\\]\n\n<!-- formula {\"id\":\"calculus-1osyo2x\",\"title\":\"三角函数公式一览：cosαsinβ\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\cos\\alpha\\sin\\beta=\\frac{\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)}2,\n\\]\n\n<!-- formula {\"id\":\"calculus-bebeec\",\"title\":\"三角函数公式一览：cosαcosβ\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\cos\\alpha\\cos\\beta=\\frac{\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)}2,\n\\]\n\n<!-- formula {\"id\":\"calculus-14wf41w\",\"title\":\"三角函数公式一览：sinαsinβ\",\"aliases\":[],\"context\":\"所属知识点：三角函数公式一览。\"} -->\n\\[\n\\sin\\alpha\\sin\\beta=\\frac{\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)}2.\n\\]\n\n辅助角公式：\n\n<!-- formula {\"id\":\"calculus-45sktk\",\"title\":\"三角函数公式一览：asin x+bcos x\",\"aliases\":[],\"context\":\"辅助角公式：\"} -->\n\\[\na\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\sin(x+\\varphi),\n\\quad\n\\cos\\varphi=\\frac a{\\sqrt{a^2+b^2}},\\quad\n\\sin\\varphi=\\frac b{\\sqrt{a^2+b^2}}.\n\\]\n\n##### 反三角函数公式一览\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1trzc5o-1\",\"title\":\"反三角函数公式一览：arcsin x+arccos x\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\",\"latex\":\"\\\\arcsin x+\\\\arccos x=\\\\frac\\\\pi2\"},{\"id\":\"calculus-1trzc5o-2\",\"title\":\"反三角函数公式一览：arctan x+arccotx\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\",\"latex\":\"\\\\arctan x+\\\\operatorname{arccot}x=\\\\frac\\\\pi2\"}]} -->\n\\[\n\\arcsin x+\\arccos x=\\frac\\pi2,\\qquad\n\\arctan x+\\operatorname{arccot}x=\\frac\\pi2,\n\\]\n\n<!-- formula {\"id\":\"calculus-1kq4omn\",\"title\":\"反三角函数公式一览：arctan x+arctanfrac1x\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\"} -->\n\\[\n\\arctan x+\\arctan\\frac1x=\n\\begin{cases}\n\\dfrac\\pi2,&x>0,\\\\[2mm]\n-\\dfrac\\pi2,&x<0.\n\\end{cases}\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1xkua6w-1\",\"title\":\"反三角函数公式一览：arcsin(-x)\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\",\"latex\":\"\\\\arcsin(-x)=-\\\\arcsin x\"},{\"id\":\"calculus-1xkua6w-2\",\"title\":\"反三角函数公式一览：arccos(-x)\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\",\"latex\":\"\\\\arccos(-x)=\\\\pi-\\\\arccos x\"}]} -->\n\\[\n\\arcsin(-x)=-\\arcsin x,\\qquad\n\\arccos(-x)=\\pi-\\arccos x,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-idfizk-1\",\"title\":\"反三角函数公式一览：arctan(-x)\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\",\"latex\":\"\\\\arctan(-x)=-\\\\arctan x\"},{\"id\":\"calculus-idfizk-2\",\"title\":\"反三角函数公式一览：arccot(-x)\",\"aliases\":[],\"context\":\"所属知识点：反三角函数公式一览。\",\"latex\":\"\\\\operatorname{arccot}(-x)=\\\\pi-\\\\operatorname{arccot}x\"}]} -->\n\\[\n\\arctan(-x)=-\\arctan x,\\qquad\n\\operatorname{arccot}(-x)=\\pi-\\operatorname{arccot}x.\n\\]\n\n\\(\\arcsin x\\) 的定义域为 \\([-1,1]\\)、值域为 \\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)；\\(\\arccos x\\) 的定义域为 \\([-1,1]\\)、值域为 \\([0,\\pi]\\)。\n\n##### 常用代数公式与不等式\n\n<!-- formula {\"items\":[{\"id\":\"calculus-6rwcdg-1\",\"title\":\"常用代数公式与不等式：a^n-b^n\",\"aliases\":[],\"context\":\"所属知识点：常用代数公式与不等式。\",\"latex\":\"a^n-b^n=(a-b)\\\\sum_{k=0}^{n-1}a^{n-1-k}b^k\"},{\"id\":\"calculus-6rwcdg-2\",\"title\":\"常用代数公式与不等式：(a+b)^n\",\"aliases\":[],\"context\":\"所属知识点：常用代数公式与不等式。\",\"latex\":\"(a+b)^n=\\\\sum_{k=0}^n\\\\binom nk a^kb^{n-k}\"}]} -->\n\\[\na^n-b^n=(a-b)\\sum_{k=0}^{n-1}a^{n-1-k}b^k,\\qquad\n(a+b)^n=\\sum_{k=0}^n\\binom nk a^kb^{n-k}.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-lqdnet-1\",\"title\":\"常用代数公式与不等式：1+2+cdots+n\",\"aliases\":[],\"context\":\"所属知识点：常用代数公式与不等式。\",\"latex\":\"1+2+\\\\cdots+n=\\\\frac{n(n+1)}2\"},{\"id\":\"calculus-lqdnet-2\",\"title\":\"常用代数公式与不等式：1^2+2^2+cdots+n^2\",\"aliases\":[],\"context\":\"所属知识点：常用代数公式与不等式。\",\"latex\":\"1^2+2^2+\\\\cdots+n^2=\\\\frac{n(n+1)(2n+1)}6\"}]} -->\n\\[\n1+2+\\cdots+n=\\frac{n(n+1)}2,\\qquad\n1^2+2^2+\\cdots+n^2=\\frac{n(n+1)(2n+1)}6.\n\\]\n\n对非负数：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-5kfk7a-1\",\"title\":\"常用代数公式与不等式：(a_1+cdots+a_n)/(n)\",\"aliases\":[],\"context\":\"对非负数：\",\"latex\":\"\\\\frac{a_1+\\\\cdots+a_n}{n}\\\\ge\\\\sqrt[n]{a_1a_2\\\\cdots a_n}\"},{\"id\":\"calculus-5kfk7a-2\",\"title\":\"常用代数公式与不等式：2ab\",\"aliases\":[],\"context\":\"对非负数：\",\"latex\":\"2ab\\\\le a^2+b^2\"}]} -->\n\\[\n\\frac{a_1+\\cdots+a_n}{n}\\ge\\sqrt[n]{a_1a_2\\cdots a_n},\\qquad\n2ab\\le a^2+b^2.\n\\]\n\n对一切实数 \\(x\\)，<!-- formula {\"id\":\"calculus-exponential-tangent-inequality\",\"title\":\"指数函数切线不等式\",\"aliases\":[\"e^x大于等于1+x\",\"指数不等式\"],\"context\":\"对一切实数成立；等号在 x=0 时成立。\"} -->\\(e^x\\ge1+x\\)；对 \\(x>0\\)，<!-- formula {\"id\":\"calculus-log-tangent-inequality\",\"title\":\"对数函数切线不等式\",\"aliases\":[\"lnx小于等于x减1\",\"对数不等式\"],\"context\":\"x>0 时成立；等号在 x=1 时成立。\"} -->\\(\\ln x\\le x-1\\)。\n\n<!-- formula {\"id\":\"calculus-12mugxo\",\"title\":\"常用代数公式与不等式：||a|-|b||\",\"aliases\":[],\"context\":\"对一切实数 x，e^x\\\\ge1+x；对 x>0，\\\\ln x\\\\le x-1。\"} -->\n\\[\n\\bigl||a|-|b|\\bigr|\\le |a\\pm b|\\le |a|+|b|.\n\\]\n\n<!-- formula {\"id\":\"calculus-1795s97-1\",\"title\":\"常用代数公式与不等式：0\",\"aliases\":[],\"context\":\"所属知识点：常用代数公式与不等式。\"} -->\n\\[\n0<x<\\frac\\pi2:\\qquad \\frac{2x}{\\pi}<\\sin x<x<\\tan x.\n\\]\n\n<!-- formula {\"id\":\"calculus-p7gzx-1\",\"title\":\"常用代数公式与不等式：x\",\"aliases\":[],\"context\":\"所属知识点：常用代数公式与不等式。\"} -->\n\\[\nx>-1:\\qquad \\frac{x}{1+x}\\le \\ln(1+x)\\le x,\n\\]\n\n等号仅在 \\(x=0\\) 时成立。\n\n##### 一元二次方程与韦达公式\n\n<!-- formula {\"id\":\"calculus-17ldpng-1\",\"title\":\"一元二次方程与韦达公式：ax^2+bx+c\",\"aliases\":[],\"context\":\"所属知识点：一元二次方程与韦达公式。\"} -->\n\\[\nax^2+bx+c=0\\quad(a\\ne0),\\qquad\nx_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a},\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-r10u6x-1\",\"title\":\"一元二次方程与韦达公式：x_1+x_2\",\"aliases\":[],\"context\":\"所属知识点：一元二次方程与韦达公式。\",\"latex\":\"x_1+x_2=-\\\\frac ba\"},{\"id\":\"calculus-r10u6x-2\",\"title\":\"一元二次方程与韦达公式：x_1x_2\",\"aliases\":[],\"context\":\"所属知识点：一元二次方程与韦达公式。\",\"latex\":\"x_1x_2=\\\\frac ca\"}]} -->\n\\[\nx_1+x_2=-\\frac ba,\\qquad x_1x_2=\\frac ca.\n\\]\n\n##### 平面距离公式\n\n<!-- formula {\"id\":\"calculus-1kbob0m\",\"title\":\"平面距离公式：d((x_1,y_1),(x_2,y_2))\",\"aliases\":[],\"context\":\"所属知识点：平面距离公式。\"} -->\n\\[\nd\\bigl((x_1,y_1),(x_2,y_2)\\bigr)\n=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2},\n\\]\n\n<!-- formula {\"id\":\"calculus-ikgse8\",\"title\":\"平面距离公式：d((x_0,y_0),Ax+By+C\",\"aliases\":[],\"context\":\"所属知识点：平面距离公式。\"} -->\n\\[\nd\\bigl((x_0,y_0),Ax+By+C=0\\bigr)\n=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}.\n\\]\n\n##### 等比数列公式\n\n<!-- formula {\"items\":[{\"id\":\"calculus-ovz2wk-1\",\"title\":\"等比数列公式：a_n\",\"aliases\":[],\"context\":\"所属知识点：等比数列公式。\",\"latex\":\"a_n=a_1q^{n-1}\"},{\"id\":\"calculus-ovz2wk-2\",\"title\":\"等比数列公式：S_n\",\"aliases\":[],\"context\":\"所属知识点：等比数列公式。\",\"latex\":\"S_n=\\\\begin{cases}\\nna_1,&q=1,\\\\\\\\[1mm]\\n\\\\dfrac{a_1(1-q^n)}{1-q},&q\\\\ne1.\\n\\\\end{cases}\"}]} -->\n\\[\na_n=a_1q^{n-1},\\qquad\nS_n=\\begin{cases}\nna_1,&q=1,\\\\[1mm]\n\\dfrac{a_1(1-q^n)}{1-q},&q\\ne1.\n\\end{cases}\n\\]\n\n##### 函数对称性结论\n\n若 \\(f(a+x)=f(b-x)\\)，则图形关于直线 \\(x=\\frac{a+b}{2}\\) 对称；若 \\(f(a+x)+f(b-x)=c\\)，则图形关于点 \\(\\left(\\frac{a+b}{2},\\frac c2\\right)\\) 中心对称。\n\n##### 取整函数与符号函数\n\n<!-- formula {\"id\":\"calculus-1b0vduh\",\"title\":\"取整函数与符号函数：x-1\",\"aliases\":[],\"context\":\"所属知识点：取整函数与符号函数。\"} -->\n\\[\nx-1<\\lfloor x\\rfloor\\le x<\\lfloor x\\rfloor+1,qquad\n\\lfloor x+n\\rfloor=\\lfloor x\\rfloor+n\\quad(n\\in\\mathbb Z),\n\\]\n\n<!-- formula {\"id\":\"calculus-xann14\",\"title\":\"取整函数与符号函数：sgnx\",\"aliases\":[],\"context\":\"所属知识点：取整函数与符号函数。\"} -->\n\\[\n\\operatorname{sgn}x=\n\\begin{cases}\n1,&x>0,\\\\\n0,&x=0,\\\\\n-1,&x<0.\n\\end{cases}\n\\]\n\n##### 函数方程换元与复合函数单调性判断\n\n给出 \\(f(x)\\) 与 \\(f\\!\\left(\\frac1x\\right)\\)、\\(f(-x)\\) 等关系时，对自变量作同样替换，联立所得等式求函数。复合函数判断单调性时，先确定内层函数的值域，再看外层函数在该范围内的单调性。\n\n##### 反函数的定义域、值域与单调性\n\n函数在所讨论区间上一一对应时才有反函数；原函数的定义域和值域在反函数中互换。若原函数严格递增或严格递减，反函数在对应区间上也分别严格递增或严格递减。\\(f^{-1}(x)\\) 不是 \\(\\frac1{f(x)}\\)。",
        "searchText": "函数 函数 函数 函数定义域、复合函数、奇偶性、周期性、单调性与有界性 定义域同时检查：分母不为零、偶次根号内非负、对数真数为正、反三角函数自变量范围。 复合函数 f(g(x)) 还要满足 x D g 且 g(x) D f。 判断奇偶性前先看定义域是否关于原点对称；再比较 f(-x) 与 f(x)。 两个周期函数只有在周期之比为有理数时才一定能找到公共周期。 单调性用 f'(x) 的正负判断；连续函数在闭区间上一定有界并能取到最大值、最小值。 三角函数公式一览 ^2x+ ^2x=1, 1+ ^2x= ^2x, 1+ ^2x= ^2x. ( )= , ( )= , ( )= 1 . 2x=2 x x, 2x=2 ^2x-1=1-2 ^2x= ^2x- ^2x. ^2x= 1- 2x 2 , ^2x= 1+ 2x 2 , x2= x 1+ x = 1- x x . 诱导公式： ≤ft( 2 x )= x,qquad ≤ft( 2 x )= x, (n +x)=(-1)^n x,qquad (n +x)=(-1)^n x (n Z). = ( + )+ ( - ) 2, = ( + )- ( - ) 2, = ( + )+ ( - ) 2, = ( - )- ( + ) 2. 辅助角公式： a x+b x= a^2+b^2 (x+ ), = a a^2+b^2 , = b a^2+b^2 . 反三角函数公式一览 x+ x= 2, x+ arccot x= 2, x+ 1x= cases 2,&x 0,\\\\[2mm] - 2,&x<0. cases (-x)=- x, (-x)= - x, (-x)=- x, arccot (-x)= - arccot x. x 的定义域为 [-1,1]、值域为 ≤ft[- 2 , 2 ]； x 的定义域为 [-1,1]、值域为 [0, ]。 常用代数公式与不等式 a^n-b^n=(a-b) k=0 ^ n-1 a^ n-1-k b^k, (a+b)^n= k=0 ^n nk a^kb^ n-k . 1+2+ +n= n(n+1) 2, 1^2+2^2+ +n^2= n(n+1)(2n+1) 6. 对非负数： a 1+ +a n n ≥ [n] a 1a 2 a n , 2ab≤ a^2+b^2. 对一切实数 x， e^x≥1+x；对 x 0， x≤ x-1。 a - b ≤ a b ≤ a + b . 0<x< 2: 2x < x<x< x. x -1: x 1+x ≤ (1+x)≤ x, 等号仅在 x=0 时成立。 一元二次方程与韦达公式 ax^2+bx+c=0 (a≠0), x 1,2 = -b b^2-4ac 2a , x 1+x 2=- ba, x 1x 2= ca. 平面距离公式 d ((x 1,y 1),(x 2,y 2) ) = (x 1-x 2)^2+(y 1-y 2)^2 , d ((x 0,y 0),Ax+By+C=0 ) = Ax 0+By 0+C A^2+B^2 . 等比数列公式 a n=a 1q^ n-1 , S n= cases na 1,&q=1,\\\\[1mm] a 1(1-q^n) 1-q ,&q≠1. cases 函数对称性结论 若 f(a+x)=f(b-x)，则图形关于直线 x= a+b 2 对称；若 f(a+x)+f(b-x)=c，则图形关于点 ≤ft( a+b 2 , c2 ) 中心对称。 取整函数与符号函数 x-1< x ≤ x< x +1,qquad x+n = x +n (n Z), sgn x= cases 1,&x 0,\\\\ 0,&x=0,\\\\ -1,&x<0. cases 函数方程换元与复合函数单调性判断 给出 f(x) 与 f\\!≤ft( 1x )、f(-x) 等关系时，对自变量作同样替换，联立所得等式求函数。复合函数判断单调性时，先确定内层函数的值域，再看外层函数在该范围内的单调性。 反函数的定义域、值域与单调性 函数在所讨论区间上一一对应时才有反函数；原函数的定义域和值域在反函数中互换。若原函数严格递增或严格递减，反函数在对应区间上也分别严格递增或严格递减。f^ -1 (x) 不是 1 f(x) 。",
        "summary": "函数定义域、复合函数、奇偶性、周期性、单调性与有界性 定义域同时检查：分母不为零、偶次根号内非负、对数真数为正、反三角函数自变量范围。 复合函数 f(g(x)) 还要满足 x D g 且 g(x) D f。 判断奇偶性前先看定义域是否关于原点对称；再比较 …",
        "anchors": [
          {
            "id": "anchor-lbvq5s",
            "legacyId": "calculus-01-001-anchor-001",
            "title": "函数定义域、复合函数、奇偶性、周期性、单调性与有界性",
            "searchText": "函数定义域、复合函数、奇偶性、周期性、单调性与有界性 定义域同时检查：分母不为零、偶次根号内非负、对数真数为正、反三角函数自变量范围。 复合函数 f(g(x)) 还要满足 x D g 且 g(x) D f。 判断奇偶性前先看定义域是否关于原点对称；再比较 f(-x) 与 f(x)。 两个周期函数只有在周期之比为有理数时才一定能找到公共周期。 单调性用 f'(x) 的正负判断；连续函数在闭区间上一定有界并能取到最大值、最小值。",
            "summary": "定义域同时检查：分母不为零、偶次根号内非负、对数真数为正、反三角函数自变量范围。 复合函数 f(g(x)) 还要满足 x D g 且 g(x) D f。 判断奇偶性前先看定义域是否关于原点对称；再比较 f(-x) 与 f(x)。 两个周期函数只有在周期之比…"
          },
          {
            "id": "anchor-j518hz",
            "legacyId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览",
            "searchText": "三角函数公式一览 ^2x+ ^2x=1, 1+ ^2x= ^2x, 1+ ^2x= ^2x. ( )= , ( )= , ( )= 1 . 2x=2 x x, 2x=2 ^2x-1=1-2 ^2x= ^2x- ^2x. ^2x= 1- 2x 2 , ^2x= 1+ 2x 2 , x2= x 1+ x = 1- x x . 诱导公式： ≤ft( 2 x )= x,qquad ≤ft( 2 x )= x, (n +x)=(-1)^n x,qquad (n +x)=(-1)^n x (n Z). = ( + )+ ( - ) 2, = ( + )- ( - ) 2, = ( + )+ ( - ) 2, = ( - )- ( + ) 2. 辅助角公式： a x+b x= a^2+b^2 (x+ ), = a a^2+b^2 , = b a^2+b^2 .",
            "summary": "^2x+ ^2x=1, 1+ ^2x= ^2x, 1+ ^2x= ^2x. ( )= , ( )= , ( )= 1 . 2x=2 x x, 2x=2 ^2x-1=1-2 ^2x= ^2x- ^2x. ^2x= 1- 2x 2 , ^2x= 1+ 2x 2…"
          },
          {
            "id": "anchor-t7xlog",
            "legacyId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览",
            "searchText": "反三角函数公式一览 x+ x= 2, x+ arccot x= 2, x+ 1x= cases 2,&x 0,\\\\[2mm] - 2,&x<0. cases (-x)=- x, (-x)= - x, (-x)=- x, arccot (-x)= - arccot x. x 的定义域为 [-1,1]、值域为 ≤ft[- 2 , 2 ]； x 的定义域为 [-1,1]、值域为 [0, ]。",
            "summary": "x+ x= 2, x+ arccot x= 2, x+ 1x= cases 2,&x 0,\\\\[2mm] - 2,&x<0. cases (-x)=- x, (-x)= - x, (-x)=- x, arccot (-x)= - arccot x. x 的…"
          },
          {
            "id": "anchor-4ye243",
            "legacyId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式",
            "searchText": "常用代数公式与不等式 a^n-b^n=(a-b) k=0 ^ n-1 a^ n-1-k b^k, (a+b)^n= k=0 ^n nk a^kb^ n-k . 1+2+ +n= n(n+1) 2, 1^2+2^2+ +n^2= n(n+1)(2n+1) 6. 对非负数： a 1+ +a n n ≥ [n] a 1a 2 a n , 2ab≤ a^2+b^2. 对一切实数 x， e^x≥1+x；对 x 0， x≤ x-1。 a - b ≤ a b ≤ a + b . 0<x< 2: 2x < x<x< x. x -1: x 1+x ≤ (1+x)≤ x, 等号仅在 x=0 时成立。",
            "summary": "a^n-b^n=(a-b) k=0 ^ n-1 a^ n-1-k b^k, (a+b)^n= k=0 ^n nk a^kb^ n-k . 1+2+ +n= n(n+1) 2, 1^2+2^2+ +n^2= n(n+1)(2n+1) 6. 对非负数： a 1…"
          },
          {
            "id": "anchor-1d76xhd",
            "legacyId": "calculus-01-001-anchor-005",
            "title": "一元二次方程与韦达公式",
            "searchText": "一元二次方程与韦达公式 ax^2+bx+c=0 (a≠0), x 1,2 = -b b^2-4ac 2a , x 1+x 2=- ba, x 1x 2= ca.",
            "summary": "ax^2+bx+c=0 (a≠0), x 1,2 = -b b^2-4ac 2a , x 1+x 2=- ba, x 1x 2= ca."
          },
          {
            "id": "anchor-1bazviw",
            "legacyId": "calculus-01-001-anchor-006",
            "title": "平面距离公式",
            "searchText": "平面距离公式 d ((x 1,y 1),(x 2,y 2) ) = (x 1-x 2)^2+(y 1-y 2)^2 , d ((x 0,y 0),Ax+By+C=0 ) = Ax 0+By 0+C A^2+B^2 .",
            "summary": "d ((x 1,y 1),(x 2,y 2) ) = (x 1-x 2)^2+(y 1-y 2)^2 , d ((x 0,y 0),Ax+By+C=0 ) = Ax 0+By 0+C A^2+B^2 ."
          },
          {
            "id": "anchor-2z340d",
            "legacyId": "calculus-01-001-anchor-007",
            "title": "等比数列公式",
            "searchText": "等比数列公式 a n=a 1q^ n-1 , S n= cases na 1,&q=1,\\\\[1mm] a 1(1-q^n) 1-q ,&q≠1. cases",
            "summary": "a n=a 1q^ n-1 , S n= cases na 1,&q=1,\\\\[1mm] a 1(1-q^n) 1-q ,&q≠1. cases"
          },
          {
            "id": "anchor-8ea5i0",
            "legacyId": "calculus-01-001-anchor-008",
            "title": "函数对称性结论",
            "searchText": "函数对称性结论 若 f(a+x)=f(b-x)，则图形关于直线 x= a+b 2 对称；若 f(a+x)+f(b-x)=c，则图形关于点 ≤ft( a+b 2 , c2 ) 中心对称。",
            "summary": "若 f(a+x)=f(b-x)，则图形关于直线 x= a+b 2 对称；若 f(a+x)+f(b-x)=c，则图形关于点 ≤ft( a+b 2 , c2 ) 中心对称。"
          },
          {
            "id": "anchor-aj5441",
            "legacyId": "calculus-01-001-anchor-009",
            "title": "取整函数与符号函数",
            "searchText": "取整函数与符号函数 x-1< x ≤ x< x +1,qquad x+n = x +n (n Z), sgn x= cases 1,&x 0,\\\\ 0,&x=0,\\\\ -1,&x<0. cases",
            "summary": "x-1< x ≤ x< x +1,qquad x+n = x +n (n Z), sgn x= cases 1,&x 0,\\\\ 0,&x=0,\\\\ -1,&x<0. cases"
          },
          {
            "id": "anchor-j2hham",
            "legacyId": "calculus-01-001-anchor-010",
            "title": "函数方程换元与复合函数单调性判断",
            "searchText": "函数方程换元与复合函数单调性判断 给出 f(x) 与 f\\!≤ft( 1x )、f(-x) 等关系时，对自变量作同样替换，联立所得等式求函数。复合函数判断单调性时，先确定内层函数的值域，再看外层函数在该范围内的单调性。",
            "summary": "给出 f(x) 与 f\\!≤ft( 1x )、f(-x) 等关系时，对自变量作同样替换，联立所得等式求函数。复合函数判断单调性时，先确定内层函数的值域，再看外层函数在该范围内的单调性。"
          },
          {
            "id": "anchor-3hexw1",
            "legacyId": "calculus-01-001-anchor-011",
            "title": "反函数的定义域、值域与单调性",
            "searchText": "反函数的定义域、值域与单调性 函数在所讨论区间上一一对应时才有反函数；原函数的定义域和值域在反函数中互换。若原函数严格递增或严格递减，反函数在对应区间上也分别严格递增或严格递减。f^ -1 (x) 不是 1 f(x) 。",
            "summary": "函数在所讨论区间上一一对应时才有反函数；原函数的定义域和值域在反函数中互换。若原函数严格递增或严格递减，反函数在对应区间上也分别严格递增或严格递减。f^ -1 (x) 不是 1 f(x) 。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-14whcx3-1",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sin^2x+cos^2x",
            "latex": "\\sin^2x+\\cos^2x=1",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 0
          },
          {
            "id": "calculus-14whcx3-2",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：1+tan^2x",
            "latex": "1+\\tan^2x=\\sec^2x",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 1
          },
          {
            "id": "calculus-14whcx3-3",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：1+cot^2x",
            "latex": "1+\\cot^2x=\\csc^2x",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 2
          },
          {
            "id": "calculus-10gpfye",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sin(α±β)",
            "latex": "\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta,",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 3
          },
          {
            "id": "calculus-18l8nlr",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：cos(α±β)",
            "latex": "\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta,",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 4
          },
          {
            "id": "calculus-rfdwi7",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：tan(α±β)",
            "latex": "\\tan(\\alpha\\pm\\beta)=\\frac{\\tan\\alpha\\pm\\tan\\beta}{1\\mp\\tan\\alpha\\tan\\beta}.",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 5
          },
          {
            "id": "calculus-1d200g4-1",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sin2x",
            "latex": "\\sin2x=2\\sin x\\cos x",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 6
          },
          {
            "id": "calculus-1d200g4-2",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：cos2x",
            "latex": "\\cos2x=2\\cos^2x-1=1-2\\sin^2x=\\cos^2x-\\sin^2x",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 7
          },
          {
            "id": "calculus-7tp7xw-1",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sin^2x",
            "latex": "\\sin^2x=\\frac{1-\\cos2x}{2}",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 8
          },
          {
            "id": "calculus-7tp7xw-2",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：cos^2x",
            "latex": "\\cos^2x=\\frac{1+\\cos2x}{2}",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 9
          },
          {
            "id": "calculus-7tp7xw-3",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：tanfrac x2",
            "latex": "\\tan\\frac x2=\\frac{\\sin x}{1+\\cos x}=\\frac{1-\\cos x}{\\sin x}",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 10
          },
          {
            "id": "calculus-apf03j",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sin",
            "latex": "\\sin\\left(\\frac\\pi2\\pm x\\right)=\\cos x,qquad\n\\cos\\left(\\frac\\pi2\\pm x\\right)=\\mp\\sin x,",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "诱导公式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 11
          },
          {
            "id": "calculus-98y7lx",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sin(nπ+x)",
            "latex": "\\sin(n\\pi+x)=(-1)^n\\sin x,qquad\n\\cos(n\\pi+x)=(-1)^n\\cos x\\quad(n\\in\\mathbb Z).",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 12
          },
          {
            "id": "calculus-1yyd0hr",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sinαcosβ",
            "latex": "\\sin\\alpha\\cos\\beta=\\frac{\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)}2,",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 13
          },
          {
            "id": "calculus-1osyo2x",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：cosαsinβ",
            "latex": "\\cos\\alpha\\sin\\beta=\\frac{\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)}2,",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 14
          },
          {
            "id": "calculus-bebeec",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：cosαcosβ",
            "latex": "\\cos\\alpha\\cos\\beta=\\frac{\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)}2,",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 15
          },
          {
            "id": "calculus-14wf41w",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：sinαsinβ",
            "latex": "\\sin\\alpha\\sin\\beta=\\frac{\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)}2.",
            "sourceBlockIndex": 17,
            "searchAliases": [],
            "context": "所属知识点：三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 16
          },
          {
            "id": "calculus-45sktk",
            "parentAnchorId": "anchor-j518hz",
            "legacyParentAnchorId": "calculus-01-001-anchor-002",
            "title": "三角函数公式一览：asin x+bcos x",
            "latex": "a\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\sin(x+\\varphi),\n\\quad\n\\cos\\varphi=\\frac a{\\sqrt{a^2+b^2}},\\quad\n\\sin\\varphi=\\frac b{\\sqrt{a^2+b^2}}.",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "辅助角公式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 17
          },
          {
            "id": "calculus-1trzc5o-1",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arcsin x+arccos x",
            "latex": "\\arcsin x+\\arccos x=\\frac\\pi2",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 18
          },
          {
            "id": "calculus-1trzc5o-2",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arctan x+arccotx",
            "latex": "\\arctan x+\\operatorname{arccot}x=\\frac\\pi2",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 19
          },
          {
            "id": "calculus-1kq4omn",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arctan x+arctanfrac1x",
            "latex": "\\arctan x+\\arctan\\frac1x=\n\\begin{cases}\n\\dfrac\\pi2,&x>0,\\\\[2mm]\n-\\dfrac\\pi2,&x<0.\n\\end{cases}",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 20
          },
          {
            "id": "calculus-1xkua6w-1",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arcsin(-x)",
            "latex": "\\arcsin(-x)=-\\arcsin x",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 21
          },
          {
            "id": "calculus-1xkua6w-2",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arccos(-x)",
            "latex": "\\arccos(-x)=\\pi-\\arccos x",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 22
          },
          {
            "id": "calculus-idfizk-1",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arctan(-x)",
            "latex": "\\arctan(-x)=-\\arctan x",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 23
          },
          {
            "id": "calculus-idfizk-2",
            "parentAnchorId": "anchor-t7xlog",
            "legacyParentAnchorId": "calculus-01-001-anchor-003",
            "title": "反三角函数公式一览：arccot(-x)",
            "latex": "\\operatorname{arccot}(-x)=\\pi-\\operatorname{arccot}x",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "所属知识点：反三角函数公式一览。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 24
          },
          {
            "id": "calculus-6rwcdg-1",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：a^n-b^n",
            "latex": "a^n-b^n=(a-b)\\sum_{k=0}^{n-1}a^{n-1-k}b^k",
            "sourceBlockIndex": 29,
            "searchAliases": [],
            "context": "所属知识点：常用代数公式与不等式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 25
          },
          {
            "id": "calculus-6rwcdg-2",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：(a+b)^n",
            "latex": "(a+b)^n=\\sum_{k=0}^n\\binom nk a^kb^{n-k}",
            "sourceBlockIndex": 29,
            "searchAliases": [],
            "context": "所属知识点：常用代数公式与不等式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 26
          },
          {
            "id": "calculus-lqdnet-1",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：1+2+cdots+n",
            "latex": "1+2+\\cdots+n=\\frac{n(n+1)}2",
            "sourceBlockIndex": 30,
            "searchAliases": [],
            "context": "所属知识点：常用代数公式与不等式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 27
          },
          {
            "id": "calculus-lqdnet-2",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：1^2+2^2+cdots+n^2",
            "latex": "1^2+2^2+\\cdots+n^2=\\frac{n(n+1)(2n+1)}6",
            "sourceBlockIndex": 30,
            "searchAliases": [],
            "context": "所属知识点：常用代数公式与不等式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 28
          },
          {
            "id": "calculus-5kfk7a-1",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：(a_1+cdots+a_n)/(n)",
            "latex": "\\frac{a_1+\\cdots+a_n}{n}\\ge\\sqrt[n]{a_1a_2\\cdots a_n}",
            "sourceBlockIndex": 31,
            "searchAliases": [],
            "context": "对非负数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 29
          },
          {
            "id": "calculus-5kfk7a-2",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：2ab",
            "latex": "2ab\\le a^2+b^2",
            "sourceBlockIndex": 31,
            "searchAliases": [],
            "context": "对非负数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 30
          },
          {
            "id": "calculus-exponential-tangent-inequality",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "指数函数切线不等式",
            "latex": "e^x\\ge1+x",
            "sourceBlockIndex": 33,
            "searchAliases": [
              "e^x大于等于1+x",
              "指数不等式"
            ],
            "context": "对一切实数成立；等号在 x=0 时成立。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 31
          },
          {
            "id": "calculus-log-tangent-inequality",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "对数函数切线不等式",
            "latex": "\\ln x\\le x-1",
            "sourceBlockIndex": 35,
            "searchAliases": [
              "lnx小于等于x减1",
              "对数不等式"
            ],
            "context": "x>0 时成立；等号在 x=1 时成立。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 32
          },
          {
            "id": "calculus-12mugxo",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：||a|-|b||",
            "latex": "\\bigl||a|-|b|\\bigr|\\le |a\\pm b|\\le |a|+|b|.",
            "sourceBlockIndex": 36,
            "searchAliases": [],
            "context": "对一切实数 x，e^x\\ge1+x；对 x>0，\\ln x\\le x-1。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 33
          },
          {
            "id": "calculus-1795s97-1",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：0",
            "latex": "0<x<\\frac\\pi2:\\qquad \\frac{2x}{\\pi}<\\sin x<x<\\tan x.",
            "sourceBlockIndex": 37,
            "searchAliases": [],
            "context": "所属知识点：常用代数公式与不等式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 34
          },
          {
            "id": "calculus-p7gzx-1",
            "parentAnchorId": "anchor-4ye243",
            "legacyParentAnchorId": "calculus-01-001-anchor-004",
            "title": "常用代数公式与不等式：x",
            "latex": "x>-1:\\qquad \\frac{x}{1+x}\\le \\ln(1+x)\\le x,",
            "sourceBlockIndex": 38,
            "searchAliases": [],
            "context": "所属知识点：常用代数公式与不等式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 35
          },
          {
            "id": "calculus-17ldpng-1",
            "parentAnchorId": "anchor-1d76xhd",
            "legacyParentAnchorId": "calculus-01-001-anchor-005",
            "title": "一元二次方程与韦达公式：ax^2+bx+c",
            "latex": "ax^2+bx+c=0\\quad(a\\ne0),\\qquad\nx_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a},",
            "sourceBlockIndex": 40,
            "searchAliases": [],
            "context": "所属知识点：一元二次方程与韦达公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 36
          },
          {
            "id": "calculus-r10u6x-1",
            "parentAnchorId": "anchor-1d76xhd",
            "legacyParentAnchorId": "calculus-01-001-anchor-005",
            "title": "一元二次方程与韦达公式：x_1+x_2",
            "latex": "x_1+x_2=-\\frac ba",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "所属知识点：一元二次方程与韦达公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 37
          },
          {
            "id": "calculus-r10u6x-2",
            "parentAnchorId": "anchor-1d76xhd",
            "legacyParentAnchorId": "calculus-01-001-anchor-005",
            "title": "一元二次方程与韦达公式：x_1x_2",
            "latex": "x_1x_2=\\frac ca",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "所属知识点：一元二次方程与韦达公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 38
          },
          {
            "id": "calculus-1kbob0m",
            "parentAnchorId": "anchor-1bazviw",
            "legacyParentAnchorId": "calculus-01-001-anchor-006",
            "title": "平面距离公式：d((x_1,y_1),(x_2,y_2))",
            "latex": "d\\bigl((x_1,y_1),(x_2,y_2)\\bigr)\n=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2},",
            "sourceBlockIndex": 42,
            "searchAliases": [],
            "context": "所属知识点：平面距离公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 39
          },
          {
            "id": "calculus-ikgse8",
            "parentAnchorId": "anchor-1bazviw",
            "legacyParentAnchorId": "calculus-01-001-anchor-006",
            "title": "平面距离公式：d((x_0,y_0),Ax+By+C",
            "latex": "d\\bigl((x_0,y_0),Ax+By+C=0\\bigr)\n=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}.",
            "sourceBlockIndex": 43,
            "searchAliases": [],
            "context": "所属知识点：平面距离公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 40
          },
          {
            "id": "calculus-ovz2wk-1",
            "parentAnchorId": "anchor-2z340d",
            "legacyParentAnchorId": "calculus-01-001-anchor-007",
            "title": "等比数列公式：a_n",
            "latex": "a_n=a_1q^{n-1}",
            "sourceBlockIndex": 44,
            "searchAliases": [],
            "context": "所属知识点：等比数列公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 41
          },
          {
            "id": "calculus-ovz2wk-2",
            "parentAnchorId": "anchor-2z340d",
            "legacyParentAnchorId": "calculus-01-001-anchor-007",
            "title": "等比数列公式：S_n",
            "latex": "S_n=\\begin{cases}\nna_1,&q=1,\\\\[1mm]\n\\dfrac{a_1(1-q^n)}{1-q},&q\\ne1.\n\\end{cases}",
            "sourceBlockIndex": 44,
            "searchAliases": [],
            "context": "所属知识点：等比数列公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 42
          },
          {
            "id": "calculus-1b0vduh",
            "parentAnchorId": "anchor-aj5441",
            "legacyParentAnchorId": "calculus-01-001-anchor-009",
            "title": "取整函数与符号函数：x-1",
            "latex": "x-1<\\lfloor x\\rfloor\\le x<\\lfloor x\\rfloor+1,qquad\n\\lfloor x+n\\rfloor=\\lfloor x\\rfloor+n\\quad(n\\in\\mathbb Z),",
            "sourceBlockIndex": 49,
            "searchAliases": [],
            "context": "所属知识点：取整函数与符号函数。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 43
          },
          {
            "id": "calculus-xann14",
            "parentAnchorId": "anchor-aj5441",
            "legacyParentAnchorId": "calculus-01-001-anchor-009",
            "title": "取整函数与符号函数：sgnx",
            "latex": "\\operatorname{sgn}x=\n\\begin{cases}\n1,&x>0,\\\\\n0,&x=0,\\\\\n-1,&x<0.\n\\end{cases}",
            "sourceBlockIndex": 50,
            "searchAliases": [],
            "context": "所属知识点：取整函数与符号函数。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-001",
            "order": 44
          }
        ]
      },
      {
        "id": "calculus-01-002",
        "title": "极限",
        "body": "##### 极限运算法则、等价无穷小与高阶无穷小公式\n\n**极限运算法则**　若 \\(\\lim f=A,\\lim g=B\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1mvw3nb-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：lim(af+bg)\",\"aliases\":[],\"context\":\"极限运算法则　若 \\\\lim f=A,\\\\lim g=B，则\",\"latex\":\"\\\\lim(af+bg)=aA+bB\"},{\"id\":\"calculus-1mvw3nb-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：lim(fg)\",\"aliases\":[],\"context\":\"极限运算法则　若 \\\\lim f=A,\\\\lim g=B，则\",\"latex\":\"\\\\lim(fg)=AB\"},{\"id\":\"calculus-1mvw3nb-3\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：limfrac fg\",\"aliases\":[],\"context\":\"极限运算法则　若 \\\\lim f=A,\\\\lim g=B，则\",\"latex\":\"\\\\lim\\\\frac fg=\\\\frac AB\\\\quad (B\\\\ne0)\"}]} -->\n\\[\n\\lim(af+bg)=aA+bB,\\qquad\n\\lim(fg)=AB,\\qquad\n\\lim\\frac fg=\\frac AB\\quad(B\\ne0).\n\\]\n\n若 \\(\\varphi(x)\\to u_0\\)，且 \\(f\\) 在 \\(u_0\\) 连续，则\n\n<!-- formula {\"id\":\"calculus-8wjxb\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：lim f(φ(x))\",\"aliases\":[],\"context\":\"若 \\\\(\\\\varphi(x)\\\\to u_0\\\\)，且 f 在 u_0 连续，则\"} -->\n\\[\n\\lim f(\\varphi(x))=f(u_0).\n\\]\n\n当 \\(x\\to0\\) 时：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1yof5kw-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：sin x\",\"aliases\":[],\"context\":\"当 x\\\\to0 时：\",\"latex\":\"\\\\sin x\\\\sim x\"},{\"id\":\"calculus-1yof5kw-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：tan x\",\"aliases\":[],\"context\":\"当 x\\\\to0 时：\",\"latex\":\"\\\\tan x\\\\sim x\"},{\"id\":\"calculus-1yof5kw-3\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：arcsin x\",\"aliases\":[],\"context\":\"当 x\\\\to0 时：\",\"latex\":\"\\\\arcsin x\\\\sim x\"},{\"id\":\"calculus-1yof5kw-4\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：arctan x\",\"aliases\":[],\"context\":\"当 x\\\\to0 时：\",\"latex\":\"\\\\arctan x\\\\sim x\"}]} -->\n\\[\n\\sin x\\sim x,\\quad \\tan x\\sim x,\\quad \\arcsin x\\sim x,\\quad \\arctan x\\sim x,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-en5lzh-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：e^x-1\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"e^x-1\\\\sim x\"},{\"id\":\"calculus-en5lzh-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：ln(1+x)\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"\\\\ln(1+x)\\\\sim x\"},{\"id\":\"calculus-en5lzh-3\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：(1+x)^a-1\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"(1+x)^a-1\\\\sim ax\"}]} -->\n\\[\ne^x-1\\sim x,\\quad \\ln(1+x)\\sim x,\\quad (1+x)^a-1\\sim ax,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-15hshia-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：1-cos x\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"1-\\\\cos x\\\\sim \\\\frac{x^2}{2}\"},{\"id\":\"calculus-15hshia-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：a^x-1\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"a^x-1\\\\sim x\\\\ln a\"}]} -->\n\\[\n1-\\cos x\\sim \\frac{x^2}{2},\\qquad a^x-1\\sim x\\ln a.\n\\]\n\n高阶常用等价式：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-fem39z-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：x-sin x\",\"aliases\":[],\"context\":\"高阶常用等价式：\",\"latex\":\"x-\\\\sin x\\\\sim\\\\frac{x^3}{6}\"},{\"id\":\"calculus-fem39z-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：tan x-x\",\"aliases\":[],\"context\":\"高阶常用等价式：\",\"latex\":\"\\\\tan x-x\\\\sim\\\\frac{x^3}{3}\"}]} -->\n\\[\nx-\\sin x\\sim\\frac{x^3}{6},\\qquad\n\\tan x-x\\sim\\frac{x^3}{3},\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-4t1nrh-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：arcsin x-x\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"\\\\arcsin x-x\\\\sim\\\\frac{x^3}{6}\"},{\"id\":\"calculus-4t1nrh-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：x-arctan x\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"x-\\\\arctan x\\\\sim\\\\frac{x^3}{3}\"}]} -->\n\\[\n\\arcsin x-x\\sim\\frac{x^3}{6},\\qquad\nx-\\arctan x\\sim\\frac{x^3}{3}.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1058a1k-1\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：x-ln(1+x)\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"x-\\\\ln(1+x)\\\\sim\\\\frac{x^2}{2}\"},{\"id\":\"calculus-1058a1k-2\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：ln\",\"aliases\":[],\"context\":\"所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。\",\"latex\":\"\\\\ln\\\\!\\\\left(x+\\\\sqrt{1+x^2}\\\\right)-x\\\\sim-\\\\frac{x^3}{6}\"}]} -->\n\\[\nx-\\ln(1+x)\\sim\\frac{x^2}{2},\\qquad\n\\ln\\!\\left(x+\\sqrt{1+x^2}\\right)-x\\sim-\\frac{x^3}{6}.\n\\]\n\n等价无穷小的等价判据：\n\n<!-- formula {\"id\":\"calculus-18r0zly\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：α\",\"aliases\":[],\"context\":\"等价无穷小的等价判据：\"} -->\n\\[\n\\alpha\\sim\\beta\n\\Longleftrightarrow \\alpha-\\beta=o(\\alpha)\n\\Longleftrightarrow \\alpha-\\beta=o(\\beta).\n\\]\n\n若 \\(u(x)\\to0\\)，则可把上式中的 \\(x\\) 换成 \\(u(x)\\)。更一般地，若 \\(u\\to0\\)、\\(uv\\to0\\)，则\n\n<!-- formula {\"id\":\"calculus-ndli7f\",\"title\":\"极限运算法则、等价无穷小与高阶无穷小公式：(1+u)^v-1\",\"aliases\":[],\"context\":\"若 \\\\(u(x)\\\\to0\\\\)，则可把上式中的 x 换成 \\\\(u(x)\\\\)。更一般地，若 u\\\\to0、uv\\\\to0，则\"} -->\n\\[\n(1+u)^v-1\\sim uv.\n\\]\n\n##### 常用泰勒展开式（集中速查）\n\n指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 \\(x\\to0\\) 时，只记到做题所需的阶数：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1hq160m-1\",\"title\":\"常用泰勒展开式（集中速查）：e^x\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"e^x=1+x+\\\\frac{x^2}{2}+\\\\frac{x^3}{6}+o(x^3)\"},{\"id\":\"calculus-1hq160m-2\",\"title\":\"常用泰勒展开式（集中速查）：frac11-x\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"\\\\frac1{1-x}=1+x+x^2+x^3+o(x^3)\"},{\"id\":\"calculus-1hq160m-3\",\"title\":\"常用泰勒展开式（集中速查）：frac11+x\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"\\\\frac1{1+x}=1-x+x^2-x^3+o(x^3)\"},{\"id\":\"calculus-1hq160m-4\",\"title\":\"常用泰勒展开式（集中速查）：ln(1+x)\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"\\\\ln(1+x)=x-\\\\frac{x^2}{2}+\\\\frac{x^3}{3}+o(x^3)\"},{\"id\":\"calculus-1hq160m-5\",\"title\":\"常用泰勒展开式（集中速查）：sin x\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"\\\\sin x=x-\\\\frac{x^3}{6}+\\\\frac{x^5}{120}+o(x^5)\"},{\"id\":\"calculus-1hq160m-6\",\"title\":\"常用泰勒展开式（集中速查）：cos x\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"\\\\cos x=1-\\\\frac{x^2}{2}+\\\\frac{x^4}{24}+o(x^4)\"},{\"id\":\"calculus-1hq160m-7\",\"title\":\"常用泰勒展开式（集中速查）：(1+x)^a\",\"aliases\":[],\"context\":\"指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\\\to0 时，只记到做题所需的阶数：\",\"latex\":\"(1+x)^a=1+ax+\\\\frac{a(a-1)}{2}x^2+\\\\frac{a(a-1)(a-2)}{6}x^3+o(x^3)\"}]} -->\n\\[\n\\begin{aligned}\ne^x&=1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+o(x^3),\\\\\n\\frac1{1-x}&=1+x+x^2+x^3+o(x^3),\\\\\n\\frac1{1+x}&=1-x+x^2-x^3+o(x^3),\\\\\n\\ln(1+x)&=x-\\frac{x^2}{2}+\\frac{x^3}{3}+o(x^3),\\\\\n\\sin x&=x-\\frac{x^3}{6}+\\frac{x^5}{120}+o(x^5),\\\\\n\\cos x&=1-\\frac{x^2}{2}+\\frac{x^4}{24}+o(x^4),\\\\\n(1+x)^a&=1+ax+\\frac{a(a-1)}{2}x^2+\\frac{a(a-1)(a-2)}{6}x^3+o(x^3).\n\\end{aligned}\n\\]\n\n补充几个常用三阶式：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1knzfju-1\",\"title\":\"常用泰勒展开式（集中速查）：tan x\",\"aliases\":[],\"context\":\"补充几个常用三阶式：\",\"latex\":\"\\\\tan x=x+\\\\frac{x^3}{3}+o(x^3)\"},{\"id\":\"calculus-1knzfju-2\",\"title\":\"常用泰勒展开式（集中速查）：arcsin x\",\"aliases\":[],\"context\":\"补充几个常用三阶式：\",\"latex\":\"\\\\arcsin x=x+\\\\frac{x^3}{6}+o(x^3)\"},{\"id\":\"calculus-1knzfju-3\",\"title\":\"常用泰勒展开式（集中速查）：arctan x\",\"aliases\":[],\"context\":\"补充几个常用三阶式：\",\"latex\":\"\\\\arctan x=x-\\\\frac{x^3}{3}+o(x^3)\"}]} -->\n\\[\n\\tan x=x+\\frac{x^3}{3}+o(x^3),\\quad\n\\arcsin x=x+\\frac{x^3}{6}+o(x^3),\\quad\n\\arctan x=x-\\frac{x^3}{3}+o(x^3),\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1nfa9d9-1\",\"title\":\"常用泰勒展开式（集中速查）：sqrt1+x\",\"aliases\":[],\"context\":\"所属知识点：常用泰勒展开式（集中速查）。\",\"latex\":\"\\\\sqrt{1+x}=1+\\\\frac{x}{2}-\\\\frac{x^2}{8}+o(x^2)\"},{\"id\":\"calculus-1nfa9d9-2\",\"title\":\"常用泰勒展开式（集中速查）：ln\",\"aliases\":[],\"context\":\"所属知识点：常用泰勒展开式（集中速查）。\",\"latex\":\"\\\\ln\\\\!\\\\left(x+\\\\sqrt{1+x^2}\\\\right)=x-\\\\frac{x^3}{6}+o(x^3)\"}]} -->\n\\[\n\\sqrt{1+x}=1+\\frac{x}{2}-\\frac{x^2}{8}+o(x^2),\\qquad\n\\ln\\!\\left(x+\\sqrt{1+x^2}\\right)=x-\\frac{x^3}{6}+o(x^3).\n\\]\n\n通用公式（\\(x_0=0\\) 时即麦克劳林公式）：\n\n<!-- formula {\"id\":\"calculus-1cqcqda\",\"title\":\"常用泰勒展开式（集中速查）：f(x)\",\"aliases\":[],\"context\":\"通用公式（x_0=0 时即麦克劳林公式）：\"} -->\n\\[\nf(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+R_n(x).\n\\]\n\n求等价无穷小时用佩亚诺余项 <!-- formula {\"id\":\"calculus-taylor-peano-remainder\",\"title\":\"泰勒公式的佩亚诺余项\",\"aliases\":[\"佩亚诺余项\",\"小o余项\"],\"context\":\"用于局部等价与阶数比较；x 趋于 x₀。\"} -->\\(R_n(x)=o((x-x_0)^n)\\)；需要估计误差时可用拉格朗日余项 <!-- formula {\"id\":\"calculus-taylor-lagrange-remainder\",\"title\":\"泰勒公式的拉格朗日余项\",\"aliases\":[\"拉格朗日余项\",\"泰勒误差估计\"],\"context\":\"f 在相关区间上具有 n+1 阶导数，ξ 位于 x 与 x₀ 之间。\"} -->\\(R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}\\)。不要在和差中只替换最低阶等价式，先看前几项是否抵消。\n\n##### 七类未定式、洛必达法则与幂指函数极限\n\n- \\(\\frac00\\)、\\(\\frac{\\infty}{\\infty}\\)：先化简、等价替换或洛必达；洛必达前必须确认型别和条件。\n- \\(0\\cdot\\infty\\)：改写成商。\n- \\(\\infty-\\infty\\)：通分、有理化或提取主项。\n- \\(1^\\infty\\)、\\(0^0\\)、\\(\\infty^0\\)：设原式为 \\(y\\)，先求 \\(\\ln y\\)，最后取指数。\n- 分子分母相减严重时，展开到第一个不抵消的项；不必把所有因子展开到同一阶。\n\n**洛必达法则**　当 \\(\\frac fg\\) 为 \\(\\frac00\\) 型或 \\(\\frac{\\infty}{\\infty}\\) 型，并满足相应可导条件，且导数之比的极限存在或为无穷时：\n\n<!-- formula {\"id\":\"calculus-83v85p\",\"title\":\"七类未定式、洛必达法则与幂指函数极限：lim(f(x))/(g(x))\",\"aliases\":[],\"context\":\"分子分母相减严重时，展开到第一个不抵消的项；不必把所有因子展开到同一阶。\"} -->\n\\[\n\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}.\n\\]\n\n洛必达后若仍是相同未定式可以继续使用；每次都要重新检查型别。等价无穷小只能直接替换乘积或商中的因子，和差中的替换必须保证不会丢掉抵消后的首个非零项。\n\n幂指型极限统一公式：\n\n<!-- formula {\"id\":\"calculus-l7xpfv-1\",\"title\":\"七类未定式、洛必达法则与幂指函数极限：lim f(x)^g(x)\",\"aliases\":[],\"context\":\"幂指型极限统一公式：\"} -->\n\\[\n\\lim f(x)^{g(x)}\n=\\exp\\!\\left(\\lim g(x)\\ln f(x)\\right)\\qquad(f(x)>0).\n\\]\n\n特别地，若 \\(u(x)\\to0\\)、\\(v(x)\\to\\infty\\)、\\(u(x)v(x)\\to A\\)，则\n\n<!-- formula {\"id\":\"calculus-1c5ti32\",\"title\":\"七类未定式、洛必达法则与幂指函数极限：[1+u(x)]^v(x)to e^A\",\"aliases\":[],\"context\":\"特别地，若 \\\\(u(x)\\\\to0\\\\)、\\\\(v(x)\\\\to\\\\infty\\\\)、\\\\(u(x)v(x)\\\\to A\\\\)，则\"} -->\n\\[\n[1+u(x)]^{v(x)}\\to e^A.\n\\]\n\n##### 两个重要极限、数列极限、黎曼和与递推数列\n\n两个重要极限：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-8xvs7x-1\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_xto0(sin x)/(x)\",\"aliases\":[],\"context\":\"两个重要极限：\",\"latex\":\"\\\\lim_{x\\\\to0}\\\\frac{\\\\sin x}{x}=1\"},{\"id\":\"calculus-8xvs7x-2\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_xto0(1+x)^frac1x\",\"aliases\":[],\"context\":\"两个重要极限：\",\"latex\":\"\\\\lim_{x\\\\to0}(1+x)^{\\\\frac1x}=e\"}]} -->\n\\[\n\\lim_{x\\to0}\\frac{\\sin x}{x}=1,\\qquad\n\\lim_{x\\to0}(1+x)^{\\frac1x}=e,\n\\]\n\n以及等价形式\n\n<!-- formula {\"items\":[{\"id\":\"calculus-3qrfxs-1\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_nto∞\",\"aliases\":[],\"context\":\"以及等价形式\",\"latex\":\"\\\\lim_{n\\\\to\\\\infty}\\\\left(1+\\\\frac1n\\\\right)^n=e\"},{\"id\":\"calculus-3qrfxs-2\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_xto∞\",\"aliases\":[],\"context\":\"以及等价形式\",\"latex\":\"\\\\lim_{x\\\\to\\\\infty}\\\\left(1+\\\\frac ax\\\\right)^x=e^a\"}]} -->\n\\[\n\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n=e,\\qquad\n\\lim_{x\\to\\infty}\\left(1+\\frac ax\\right)^x=e^a.\n\\]\n\n<!-- formula {\"id\":\"calculus-102nllp\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_nto∞a^frac1n\",\"aliases\":[],\"context\":\"所属知识点：两个重要极限、数列极限、黎曼和与递推数列。\"} -->\n\\[\n\\lim_{n\\to\\infty}a^{\\frac1n}=1\\quad(a>0),\\qquad\n\\lim_{n\\to\\infty}n^{\\frac1n}=1.\n\\]\n\n若 \\(a_1,\\ldots,a_m>0\\)，则\n\n<!-- formula {\"id\":\"calculus-1lfos2w\",\"title\":\"有限个正数的 n 次根极限取最大值\",\"aliases\":[],\"context\":\"若 a_1,\\\\ldots,a_m>0，则\"} -->\n\\[\n\\lim_{n\\to\\infty}\\sqrt[n]{a_1^n+a_2^n+\\cdots+a_m^n}\n=\\max\\{a_1,a_2,\\ldots,a_m\\}.\n\\]\n\n若 \\(a_0b_0\\ne0\\)，则\n\n<!-- formula {\"id\":\"calculus-79gyl1\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_xto∞\",\"aliases\":[],\"context\":\"若 a_0b_0\\\\ne0，则\"} -->\n\\[\n\\lim_{x\\to\\infty}\n\\frac{a_0x^n+a_1x^{n-1}+\\cdots+a_n}\n{b_0x^m+b_1x^{m-1}+\\cdots+b_m}\n=\n\\begin{cases}\n0,&n<m,\\\\\n\\dfrac{a_0}{b_0},&n=m,\\\\\n\\infty\\text{ 或 }-\\infty,&n>m,\n\\end{cases}\n\\]\n\n最后一种情形的符号由最高次项决定。\n\n<!-- formula {\"id\":\"calculus-v7iqrw\",\"title\":\"两个重要极限、数列极限、黎曼和与递推数列：lim_nto∞frac1nΣ_k\",\"aliases\":[],\"context\":\"最后一种情形的符号由最高次项决定。\"} -->\n\\[\n\\lim_{n\\to\\infty}\\frac1n\\sum_{k=1}^n f\\!\\left(\\frac{k}{n}\\right)=\\int_0^1 f(x)\\,dx.\n\\]\n\n一般区间 \\([a,b]\\) 的和要整理成“函数值乘小区间宽度”。乘积先取对数化为和。递推数列先证单调有界，再令极限为 \\(L\\) 代回递推式；代数方程有多个根时，用数列范围筛选。\n\n夹逼准则：若在去心邻域内 \\(g(x)\\le f(x)\\le h(x)\\)，且 \\(g,h\\to A\\)，则 \\(f\\to A\\)。单调有界数列一定收敛；递增数列的极限是其上确界，递减数列的极限是其下确界。\n\n##### 极限存在、左右极限、局部有界性、保号性与保序性\n\n<!-- formula {\"id\":\"calculus-1i1evgc\",\"title\":\"极限存在、左右极限、局部有界性、保号性与保序性：lim_xto x_0f(x)\",\"aliases\":[],\"context\":\"所属知识点：极限存在、左右极限、局部有界性、保号性与保序性。\"} -->\n\\[\n\\lim_{x\\to x_0}f(x)=A\n\\Longleftrightarrow\n\\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=A.\n\\]\n\n有限极限存在时，函数在该点的某个去心邻域内有界；若 \\(A>0\\)，则该邻域内 \\(f(x)>0\\)。若附近恒有 \\(f(x)\\le g(x)\\)，且两边极限都存在，则\n\n<!-- formula {\"id\":\"calculus-173gpr9\",\"title\":\"极限存在、左右极限、局部有界性、保号性与保序性：lim f(x)\",\"aliases\":[],\"context\":\"有限极限存在时，函数在该点的某个去心邻域内有界；若 A>0，则该邻域内 \\\\(f(x)>0\\\\)。若附近恒有 \\\\(f(x)\\\\le g(x)\\\\)，且两边极限都存在，则\"} -->\n\\[\n\\lim f(x)\\le\\lim g(x).\n\\]\n\n##### 夹逼准则、无穷小乘有界量与递推数列压缩估计\n\n<!-- formula {\"id\":\"calculus-t5e1pl\",\"title\":\"夹逼准则、无穷小乘有界量与递推数列压缩估计：g(x)\",\"aliases\":[],\"context\":\"所属知识点：夹逼准则、无穷小乘有界量与递推数列压缩估计。\"} -->\n\\[\ng(x)\\le f(x)\\le h(x),\\qquad g(x),h(x)\\to A\n\\Longrightarrow f(x)\\to A.\n\\]\n\n<!-- formula {\"id\":\"calculus-6qws51\",\"title\":\"夹逼准则、无穷小乘有界量与递推数列压缩估计：α(x)to0, β(x) 有界\",\"aliases\":[],\"context\":\"所属知识点：夹逼准则、无穷小乘有界量与递推数列压缩估计。\"} -->\n\\[\n\\alpha(x)\\to0,\\qquad \\beta(x)\\text{ 有界}\n\\Longrightarrow \\alpha(x)\\beta(x)\\to0.\n\\]\n\n若递推数列在一个不变区间内满足\n\n<!-- formula {\"id\":\"calculus-1qr3ruk-1\",\"title\":\"夹逼准则、无穷小乘有界量与递推数列压缩估计：|a_n+1-A|\",\"aliases\":[],\"context\":\"若递推数列在一个不变区间内满足\"} -->\n\\[\n|a_{n+1}-A|\\le q|a_n-A|,\\qquad 0<q<1,\n\\]\n\n则\n\n<!-- formula {\"id\":\"calculus-u3z71g\",\"title\":\"夹逼准则、无穷小乘有界量与递推数列压缩估计：|a_n-A|\",\"aliases\":[],\"context\":\"所属知识点：夹逼准则、无穷小乘有界量与递推数列压缩估计。\"} -->\n\\[\n|a_n-A|\\le q^{n-1}|a_1-A|\\to0.\n\\]\n\n##### 数列乘积、无限乘积与对数化\n\n各因子为正时，乘积先取对数：\n\n<!-- formula {\"id\":\"calculus-9esrln\",\"title\":\"数列乘积、无限乘积与对数化：u_n\",\"aliases\":[],\"context\":\"各因子为正时，乘积先取对数：\"} -->\n\\[\nu_n=\\prod_{k=1}^n a_k\n\\Longrightarrow\n\\ln u_n=\\sum_{k=1}^n\\ln a_k.\n\\]\n\n常用望远镜乘积：\n\n<!-- formula {\"id\":\"calculus-1lhjtmk\",\"title\":\"数列乘积、无限乘积与对数化：(1-x)(1+x)(1+x^2)cdots(1+x^2^n)\",\"aliases\":[],\"context\":\"常用望远镜乘积：\"} -->\n\\[\n(1-x)(1+x)(1+x^2)\\cdots(1+x^{2^n})=1-x^{2^{n+1}}.\n\\]\n\n##### 无穷小阶数、等价判据与积分等价\n\n若\n\n<!-- formula {\"id\":\"calculus-137lxxy\",\"title\":\"无穷小阶数、等价判据与积分等价：lim(α(x))/(β(x))\",\"aliases\":[],\"context\":\"所属知识点：无穷小阶数、等价判据与积分等价。\"} -->\n\\[\n\\lim\\frac{\\alpha(x)}{\\beta(x)}=\n\\begin{cases}\n0,&\\alpha\\text{ 比 }\\beta\\text{ 高阶},\\\\\nc\\ne0,&\\alpha\\text{ 与 }\\beta\\text{ 同阶},\\\\\n1,&\\alpha\\sim\\beta,\\\\\n\\infty,&\\alpha\\text{ 比 }\\beta\\text{ 低阶}.\n\\end{cases}\n\\]\n\n“无界”不等于“趋于无穷大”；趋于无穷大一定无界，反过来不成立。\n\n若 \\(f(x)\\sim g(x)\\)、二者在去心邻域内同号且积分存在，则在相应端点附近\n\n<!-- formula {\"id\":\"calculus-o00lnb\",\"title\":\"无穷小阶数、等价判据与积分等价：∫_x_0^xf(t) dt\",\"aliases\":[],\"context\":\"若 \\\\(f(x)\\\\sim g(x)\\\\)、二者在去心邻域内同号且积分存在，则在相应端点附近\"} -->\n\\[\n\\int_{x_0}^{x}f(t)\\,dt\\sim\\int_{x_0}^{x}g(t)\\,dt.\n\\]\n\n若 \\(f(t)\\sim c t^m\\ (t\\to0^+)\\)、\\(\\varphi(x)\\sim d x^n\\ (x\\to0^+)\\)，其中\n\\(c\\ne0\\)、\\(d>0\\)、\\(m,n\\) 为非负整数，则\n\n<!-- formula {\"id\":\"calculus-1po8to\",\"title\":\"无穷小阶数、等价判据与积分等价：∫_0^φ(x)f(t) dt\",\"aliases\":[],\"context\":\"若 \\\\(f(t)\\\\sim c t^m\\\\ (t\\\\to0^+)\\\\)、\\\\(\\\\varphi(x)\\\\sim d x^n\\\\ (x\\\\to0^+)\\\\)，其中\"} -->\n\\[\n\\int_0^{\\varphi(x)}f(t)\\,dt\n\\sim\\frac{c}{m+1}[\\varphi(x)]^{m+1}\n\\sim\\frac{cd^{m+1}}{m+1}x^{n(m+1)}.\n\\]\n\n##### 含参数极限、导数定义型极限与三类渐近线\n\n<!-- formula {\"id\":\"calculus-4w22q8\",\"title\":\"含参数极限、导数定义型极限与三类渐近线：x\",\"aliases\":[],\"context\":\"所属知识点：含参数极限、导数定义型极限与三类渐近线。\"} -->\n\\[\nx=x_0:\\ \\lim_{x\\to x_0}f(x)=\\infty,\n\\]\n\n<!-- formula {\"id\":\"calculus-18wudsw\",\"title\":\"含参数极限、导数定义型极限与三类渐近线：y\",\"aliases\":[],\"context\":\"所属知识点：含参数极限、导数定义型极限与三类渐近线。\"} -->\n\\[\ny=b:\\ \\lim_{x\\to\\pm\\infty}f(x)=b,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1443xil-1\",\"title\":\"含参数极限、导数定义型极限与三类渐近线：y\",\"aliases\":[],\"context\":\"所属知识点：含参数极限、导数定义型极限与三类渐近线。\",\"latex\":\"y=kx+b:\\\\ k=\\\\lim_{x\\\\to\\\\pm\\\\infty}\\\\frac{f(x)}x\"},{\"id\":\"calculus-1443xil-2\",\"title\":\"含参数极限、导数定义型极限与三类渐近线：b\",\"aliases\":[],\"context\":\"所属知识点：含参数极限、导数定义型极限与三类渐近线。\",\"latex\":\"b=\\\\lim_{x\\\\to\\\\pm\\\\infty}[f(x)-kx]\"}]} -->\n\\[\ny=kx+b:\\ k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}x,\\quad\nb=\\lim_{x\\to\\pm\\infty}[f(x)-kx].\n\\]\n\n含参数极限存在时，先让左右极限相等，再排除分母为零或表达式无意义的参数。极限中出现\n\n<!-- formula {\"id\":\"calculus-m3ictv\",\"title\":\"含参数极限、导数定义型极限与三类渐近线：(f(x)-f(x_0))/(x-x_0)\",\"aliases\":[],\"context\":\"含参数极限存在时，先让左右极限相等，再排除分母为零或表达式无意义的参数。极限中出现\"} -->\n\\[\n\\frac{f(x)-f(x_0)}{x-x_0}\n\\]\n\n时，直接按导数定义识别。",
        "searchText": "极限 极限 极限 极限运算法则、等价无穷小与高阶无穷小公式 极限运算法则 若 f=A, g=B，则 (af+bg)=aA+bB, (fg)=AB, fg= AB (B≠0). 若 (x) u 0，且 f 在 u 0 连续，则 f( (x))=f(u 0). 当 x 0 时： x x, x x, x x, x x, e^x-1 x, (1+x) x, (1+x)^a-1 ax, 1- x x^2 2 , a^x-1 x a. 高阶常用等价式： x- x x^3 6 , x-x x^3 3 , x-x x^3 6 , x- x x^3 3 . x- (1+x) x^2 2 , \\!≤ft(x+ 1+x^2 )-x - x^3 6 . 等价无穷小的等价判据： - =o( ) - =o( ). 若 u(x) 0，则可把上式中的 x 换成 u(x)。更一般地，若 u 0、uv 0，则 (1+u)^v-1 uv. 常用泰勒展开式（集中速查） 指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x 0 时，只记到做题所需的阶数： aligned e^x&=1+x+ x^2 2 + x^3 6 +o(x^3),\\\\ 1 1-x &=1+x+x^2+x^3+o(x^3),\\\\ 1 1+x &=1-x+x^2-x^3+o(x^3),\\\\ (1+x)&=x- x^2 2 + x^3 3 +o(x^3),\\\\ x&=x- x^3 6 + x^5 120 +o(x^5),\\\\ x&=1- x^2 2 + x^4 24 +o(x^4),\\\\ (1+x)^a&=1+ax+ a(a-1) 2 x^2+ a(a-1)(a-2) 6 x^3+o(x^3). aligned 补充几个常用三阶式： x=x+ x^3 3 +o(x^3), x=x+ x^3 6 +o(x^3), x=x- x^3 3 +o(x^3), 1+x =1+ x 2 - x^2 8 +o(x^2), \\!≤ft(x+ 1+x^2 )=x- x^3 6 +o(x^3). 通用公式（x 0=0 时即麦克劳林公式）： f(x)= k=0 ^ n f^ (k) (x 0) k! (x-x 0)^k+R n(x). 求等价无穷小时用佩亚诺余项 R n(x)=o((x-x 0)^n)；需要估计误差时可用拉格朗日余项 R n(x)= f^ (n+1) ( ) (n+1)! (x-x 0)^ n+1 。不要在和差中只替换最低阶等价式，先看前几项是否抵消。 七类未定式、洛必达法则与幂指函数极限 00、 ：先化简、等价替换或洛必达；洛必达前必须确认型别和条件。 0 ：改写成商。 - ：通分、有理化或提取主项。 1^ 、0^0、 ^0：设原式为 y，先求 y，最后取指数。 分子分母相减严重时，展开到第一个不抵消的项；不必把所有因子展开到同一阶。 洛必达法则 当 fg 为 00 型或 型，并满足相应可导条件，且导数之比的极限存在或为无穷时： f(x) g(x) = f'(x) g'(x) . 洛必达后若仍是相同未定式可以继续使用；每次都要重新检查型别。等价无穷小只能直接替换乘积或商中的因子，和差中的替换必须保证不会丢掉抵消后的首个非零项。 幂指型极限统一公式： f(x)^ g(x) = \\!≤ft( g(x) f(x) ) (f(x) 0). 特别地，若 u(x) 0、v(x) 、u(x)v(x) A，则 [1+u(x)]^ v(x) e^A. 两个重要极限、数列极限、黎曼和与递推数列 两个重要极限： x 0 x x =1, x 0 (1+x)^ 1x =e, 以及等价形式 n ≤ft(1+ 1n )^n=e, x ≤ft(1+ ax )^x=e^a. n a^ 1n =1 (a 0), n n^ 1n =1. 若 a 1, ,a m 0，则 n [n] a 1^n+a 2^n+ +a m^n = \\ a 1,a 2, ,a m\\ . 若 a 0b 0≠0，则 x a 0x^n+a 1x^ n-1 + +a n b 0x^m+b 1x^ m-1 + +b m = cases 0,&n<m,\\\\ a 0 b 0 ,&n=m,\\\\ 或 - ,&n m, cases 最后一种情形的符号由最高次项决定。 n 1n k=1 ^n f\\!≤ft( k n )= 0^1 f(x)\\,dx. 一般区间 [a,b] 的和要整理成“函数值乘小区间宽度”。乘积先取对数化为和。递推数列先证单调有界，再令极限为 L 代回递推式；代数方程有多个根时，用数列范围筛选。 夹逼准则：若在去心邻域内 g(x)≤ f(x)≤ h(x)，且 g,h A，则 f A。单调有界数列一定收敛；递增数列的极限是其上确界，递减数列的极限是其下确界。 极限存在、左右极限、局部有界性、保号性与保序性 x x 0 f(x)=A x x 0^- f(x)= x x 0^+ f(x)=A. 有限极限存在时，函数在该点的某个去心邻域内有界；若 A 0，则该邻域内 f(x) 0。若附近恒有 f(x)≤ g(x)，且两边极限都存在，则 f(x)≤ g(x). 夹逼准则、无穷小乘有界量与递推数列压缩估计 g(x)≤ f(x)≤ h(x), g(x),h(x) A ⇒ f(x) A. (x) 0, (x) 有界 ⇒ (x) (x) 0. 若递推数列在一个不变区间内满足 a n+1 -A ≤ q a n-A , 0<q<1, 则 a n-A ≤ q^ n-1 a 1-A 0. 数列乘积、无限乘积与对数化 各因子为正时，乘积先取对数： u n= k=1 ^n a k ⇒ u n= k=1 ^n a k. 常用望远镜乘积： (1-x)(1+x)(1+x^2) (1+x^ 2^n )=1-x^ 2^ n+1 . 无穷小阶数、等价判据与积分等价 若 (x) (x) = cases 0,& 比 高阶,\\\\ c≠0,& 与 同阶,\\\\ 1,& ,\\\\ ,& 比 低阶. cases “无界”不等于“趋于无穷大”；趋于无穷大一定无界，反过来不成立。 若 f(x) g(x)、二者在去心邻域内同号且积分存在，则在相应端点附近 x 0 ^ x f(t)\\,dt x 0 ^ x g(t)\\,dt. 若 f(t) c t^m\\ (t 0^+)、 (x) d x^n\\ (x 0^+)，其中 c≠0、d 0、m,n 为非负整数，则 0^ (x) f(t)\\,dt c m+1 [ (x)]^ m+1 cd^ m+1 m+1 x^ n(m+1) . 含参数极限、导数定义型极限与三类渐近线 x=x 0:\\ x x 0 f(x)= , y=b:\\ x f(x)=b, y=kx+b:\\ k= x f(x) x, b= x [f(x)-kx]. 含参数极限存在时，先让左右极限相等，再排除分母为零或表达式无意义的参数。极限中出现 f(x)-f(x 0) x-x 0 时，直接按导数定义识别。",
        "summary": "极限运算法则、等价无穷小与高阶无穷小公式 极限运算法则 若 f=A, g=B，则 (af+bg)=aA+bB, (fg)=AB, fg= AB (B≠0). 若 (x) u 0，且 f 在 u 0 连续，则 f( (x))=f(u 0). 当 x 0 时：…",
        "anchors": [
          {
            "id": "anchor-w8b1zu",
            "legacyId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式",
            "searchText": "极限运算法则、等价无穷小与高阶无穷小公式 极限运算法则 若 f=A, g=B，则 (af+bg)=aA+bB, (fg)=AB, fg= AB (B≠0). 若 (x) u 0，且 f 在 u 0 连续，则 f( (x))=f(u 0). 当 x 0 时： x x, x x, x x, x x, e^x-1 x, (1+x) x, (1+x)^a-1 ax, 1- x x^2 2 , a^x-1 x a. 高阶常用等价式： x- x x^3 6 , x-x x^3 3 , x-x x^3 6 , x- x x^3 3 . x- (1+x) x^2 2 , \\!≤ft(x+ 1+x^2 )-x - x^3 6 . 等价无穷小的等价判据： - =o( ) - =o( ). 若 u(x) 0，则可把上式中的 x 换成 u(x)。更一般地，若 u 0、uv 0，则 (1+u)^v-1 uv.",
            "summary": "极限运算法则 若 f=A, g=B，则 (af+bg)=aA+bB, (fg)=AB, fg= AB (B≠0). 若 (x) u 0，且 f 在 u 0 连续，则 f( (x))=f(u 0). 当 x 0 时： x x, x x, x x, x x, …"
          },
          {
            "id": "anchor-t8lpq4",
            "legacyId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）",
            "searchText": "常用泰勒展开式（集中速查） 指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x 0 时，只记到做题所需的阶数： aligned e^x&=1+x+ x^2 2 + x^3 6 +o(x^3),\\\\ 1 1-x &=1+x+x^2+x^3+o(x^3),\\\\ 1 1+x &=1-x+x^2-x^3+o(x^3),\\\\ (1+x)&=x- x^2 2 + x^3 3 +o(x^3),\\\\ x&=x- x^3 6 + x^5 120 +o(x^5),\\\\ x&=1- x^2 2 + x^4 24 +o(x^4),\\\\ (1+x)^a&=1+ax+ a(a-1) 2 x^2+ a(a-1)(a-2) 6 x^3+o(x^3). aligned 补充几个常用三阶式： x=x+ x^3 3 +o(x^3), x=x+ x^3 6 +o(x^3), x=x- x^3 3 +o(x^3), 1+x =1+ x 2 - x^2 8 +o(x^2), \\!≤ft(x+ 1+x^2 )=x- x^3 6 +o(x^3). 通用公式（x 0=0 时即麦克劳林公式）： f(x)= k=0 ^ n f^ (k) (x 0) k! (x-x 0)^k+R n(x). 求等价无穷小时用佩亚诺余项 R n(x)=o((x-x 0)^n)；需要估计误差时可用拉格朗日余项 R n(x)= f^ (n+1) ( ) (n+1)! (x-x 0)^ n+1 。不要在和差中只替换最低阶等价式，先看前几项是否抵消。",
            "summary": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x 0 时，只记到做题所需的阶数： aligned e^x&=1+x+ x^2 2 + x^3 6 +o(x^3),\\\\ 1 1-x &=1+x+x^2+x^3+o(x^3…"
          },
          {
            "id": "anchor-5x1cm7",
            "legacyId": "calculus-01-002-anchor-003",
            "title": "七类未定式、洛必达法则与幂指函数极限",
            "searchText": "七类未定式、洛必达法则与幂指函数极限 00、 ：先化简、等价替换或洛必达；洛必达前必须确认型别和条件。 0 ：改写成商。 - ：通分、有理化或提取主项。 1^ 、0^0、 ^0：设原式为 y，先求 y，最后取指数。 分子分母相减严重时，展开到第一个不抵消的项；不必把所有因子展开到同一阶。 洛必达法则 当 fg 为 00 型或 型，并满足相应可导条件，且导数之比的极限存在或为无穷时： f(x) g(x) = f'(x) g'(x) . 洛必达后若仍是相同未定式可以继续使用；每次都要重新检查型别。等价无穷小只能直接替换乘积或商中的因子，和差中的替换必须保证不会丢掉抵消后的首个非零项。 幂指型极限统一公式： f(x)^ g(x) = \\!≤ft( g(x) f(x) ) (f(x) 0). 特别地，若 u(x) 0、v(x) 、u(x)v(x) A，则 [1+u(x)]^ v(x) e^A.",
            "summary": "00、 ：先化简、等价替换或洛必达；洛必达前必须确认型别和条件。 0 ：改写成商。 - ：通分、有理化或提取主项。 1^ 、0^0、 ^0：设原式为 y，先求 y，最后取指数。 分子分母相减严重时，展开到第一个不抵消的项；不必把所有因子展开到同一阶。 洛必…"
          },
          {
            "id": "anchor-wcsi6k",
            "legacyId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列",
            "searchText": "两个重要极限、数列极限、黎曼和与递推数列 两个重要极限： x 0 x x =1, x 0 (1+x)^ 1x =e, 以及等价形式 n ≤ft(1+ 1n )^n=e, x ≤ft(1+ ax )^x=e^a. n a^ 1n =1 (a 0), n n^ 1n =1. 若 a 1, ,a m 0，则 n [n] a 1^n+a 2^n+ +a m^n = \\ a 1,a 2, ,a m\\ . 若 a 0b 0≠0，则 x a 0x^n+a 1x^ n-1 + +a n b 0x^m+b 1x^ m-1 + +b m = cases 0,&n<m,\\\\ a 0 b 0 ,&n=m,\\\\ 或 - ,&n m, cases 最后一种情形的符号由最高次项决定。 n 1n k=1 ^n f\\!≤ft( k n )= 0^1 f(x)\\,dx. 一般区间 [a,b] 的和要整理成“函数值乘小区间宽度”。乘积先取对数化为和。递推数列先证单调有界，再令极限为 L 代回递推式；代数方程有多个根时，用数列范围筛选。 夹逼准则：若在去心邻域内 g(x)≤ f(x)≤ h(x)，且 g,h A，则 f A。单调有界数列一定收敛；递增数列的极限是其上确界，递减数列的极限是其下确界。",
            "summary": "两个重要极限： x 0 x x =1, x 0 (1+x)^ 1x =e, 以及等价形式 n ≤ft(1+ 1n )^n=e, x ≤ft(1+ ax )^x=e^a. n a^ 1n =1 (a 0), n n^ 1n =1. 若 a 1, ,a m 0…"
          },
          {
            "id": "anchor-1lndnrm",
            "legacyId": "calculus-01-002-anchor-005",
            "title": "极限存在、左右极限、局部有界性、保号性与保序性",
            "searchText": "极限存在、左右极限、局部有界性、保号性与保序性 x x 0 f(x)=A x x 0^- f(x)= x x 0^+ f(x)=A. 有限极限存在时，函数在该点的某个去心邻域内有界；若 A 0，则该邻域内 f(x) 0。若附近恒有 f(x)≤ g(x)，且两边极限都存在，则 f(x)≤ g(x).",
            "summary": "x x 0 f(x)=A x x 0^- f(x)= x x 0^+ f(x)=A. 有限极限存在时，函数在该点的某个去心邻域内有界；若 A 0，则该邻域内 f(x) 0。若附近恒有 f(x)≤ g(x)，且两边极限都存在，则 f(x)≤ g(x)."
          },
          {
            "id": "anchor-128640p",
            "legacyId": "calculus-01-002-anchor-006",
            "title": "夹逼准则、无穷小乘有界量与递推数列压缩估计",
            "searchText": "夹逼准则、无穷小乘有界量与递推数列压缩估计 g(x)≤ f(x)≤ h(x), g(x),h(x) A ⇒ f(x) A. (x) 0, (x) 有界 ⇒ (x) (x) 0. 若递推数列在一个不变区间内满足 a n+1 -A ≤ q a n-A , 0<q<1, 则 a n-A ≤ q^ n-1 a 1-A 0.",
            "summary": "g(x)≤ f(x)≤ h(x), g(x),h(x) A ⇒ f(x) A. (x) 0, (x) 有界 ⇒ (x) (x) 0. 若递推数列在一个不变区间内满足 a n+1 -A ≤ q a n-A , 0<q<1, 则 a n-A ≤ q^ n-1 …"
          },
          {
            "id": "anchor-15sbt8p",
            "legacyId": "calculus-01-002-anchor-007",
            "title": "数列乘积、无限乘积与对数化",
            "searchText": "数列乘积、无限乘积与对数化 各因子为正时，乘积先取对数： u n= k=1 ^n a k ⇒ u n= k=1 ^n a k. 常用望远镜乘积： (1-x)(1+x)(1+x^2) (1+x^ 2^n )=1-x^ 2^ n+1 .",
            "summary": "各因子为正时，乘积先取对数： u n= k=1 ^n a k ⇒ u n= k=1 ^n a k. 常用望远镜乘积： (1-x)(1+x)(1+x^2) (1+x^ 2^n )=1-x^ 2^ n+1 ."
          },
          {
            "id": "anchor-bvlpa4",
            "legacyId": "calculus-01-002-anchor-008",
            "title": "无穷小阶数、等价判据与积分等价",
            "searchText": "无穷小阶数、等价判据与积分等价 若 (x) (x) = cases 0,& 比 高阶,\\\\ c≠0,& 与 同阶,\\\\ 1,& ,\\\\ ,& 比 低阶. cases “无界”不等于“趋于无穷大”；趋于无穷大一定无界，反过来不成立。 若 f(x) g(x)、二者在去心邻域内同号且积分存在，则在相应端点附近 x 0 ^ x f(t)\\,dt x 0 ^ x g(t)\\,dt. 若 f(t) c t^m\\ (t 0^+)、 (x) d x^n\\ (x 0^+)，其中 c≠0、d 0、m,n 为非负整数，则 0^ (x) f(t)\\,dt c m+1 [ (x)]^ m+1 cd^ m+1 m+1 x^ n(m+1) .",
            "summary": "若 (x) (x) = cases 0,& 比 高阶,\\\\ c≠0,& 与 同阶,\\\\ 1,& ,\\\\ ,& 比 低阶. cases “无界”不等于“趋于无穷大”；趋于无穷大一定无界，反过来不成立。 若 f(x) g(x)、二者在去心邻域内同号且积分存在，…"
          },
          {
            "id": "anchor-1ohmc4u",
            "legacyId": "calculus-01-002-anchor-009",
            "title": "含参数极限、导数定义型极限与三类渐近线",
            "searchText": "含参数极限、导数定义型极限与三类渐近线 x=x 0:\\ x x 0 f(x)= , y=b:\\ x f(x)=b, y=kx+b:\\ k= x f(x) x, b= x [f(x)-kx]. 含参数极限存在时，先让左右极限相等，再排除分母为零或表达式无意义的参数。极限中出现 f(x)-f(x 0) x-x 0 时，直接按导数定义识别。",
            "summary": "x=x 0:\\ x x 0 f(x)= , y=b:\\ x f(x)=b, y=kx+b:\\ k= x f(x) x, b= x [f(x)-kx]. 含参数极限存在时，先让左右极限相等，再排除分母为零或表达式无意义的参数。极限中出现 f(x)-f(x 0…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-1mvw3nb-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：lim(af+bg)",
            "latex": "\\lim(af+bg)=aA+bB",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "极限运算法则　若 \\lim f=A,\\lim g=B，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 0
          },
          {
            "id": "calculus-1mvw3nb-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：lim(fg)",
            "latex": "\\lim(fg)=AB",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "极限运算法则　若 \\lim f=A,\\lim g=B，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 1
          },
          {
            "id": "calculus-1mvw3nb-3",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：limfrac fg",
            "latex": "\\lim\\frac fg=\\frac AB\\quad (B\\ne0)",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "极限运算法则　若 \\lim f=A,\\lim g=B，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 2
          },
          {
            "id": "calculus-8wjxb",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：lim f(φ(x))",
            "latex": "\\lim f(\\varphi(x))=f(u_0).",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "若 \\(\\varphi(x)\\to u_0\\)，且 f 在 u_0 连续，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 3
          },
          {
            "id": "calculus-1yof5kw-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：sin x",
            "latex": "\\sin x\\sim x",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "当 x\\to0 时：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 4
          },
          {
            "id": "calculus-1yof5kw-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：tan x",
            "latex": "\\tan x\\sim x",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "当 x\\to0 时：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 5
          },
          {
            "id": "calculus-1yof5kw-3",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：arcsin x",
            "latex": "\\arcsin x\\sim x",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "当 x\\to0 时：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 6
          },
          {
            "id": "calculus-1yof5kw-4",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：arctan x",
            "latex": "\\arctan x\\sim x",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "当 x\\to0 时：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 7
          },
          {
            "id": "calculus-en5lzh-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：e^x-1",
            "latex": "e^x-1\\sim x",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 8
          },
          {
            "id": "calculus-en5lzh-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：ln(1+x)",
            "latex": "\\ln(1+x)\\sim x",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 9
          },
          {
            "id": "calculus-en5lzh-3",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：(1+x)^a-1",
            "latex": "(1+x)^a-1\\sim ax",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 10
          },
          {
            "id": "calculus-15hshia-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：1-cos x",
            "latex": "1-\\cos x\\sim \\frac{x^2}{2}",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 11
          },
          {
            "id": "calculus-15hshia-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：a^x-1",
            "latex": "a^x-1\\sim x\\ln a",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 12
          },
          {
            "id": "calculus-fem39z-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：x-sin x",
            "latex": "x-\\sin x\\sim\\frac{x^3}{6}",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "高阶常用等价式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 13
          },
          {
            "id": "calculus-fem39z-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：tan x-x",
            "latex": "\\tan x-x\\sim\\frac{x^3}{3}",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "高阶常用等价式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 14
          },
          {
            "id": "calculus-4t1nrh-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：arcsin x-x",
            "latex": "\\arcsin x-x\\sim\\frac{x^3}{6}",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 15
          },
          {
            "id": "calculus-4t1nrh-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：x-arctan x",
            "latex": "x-\\arctan x\\sim\\frac{x^3}{3}",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 16
          },
          {
            "id": "calculus-1058a1k-1",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：x-ln(1+x)",
            "latex": "x-\\ln(1+x)\\sim\\frac{x^2}{2}",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 17
          },
          {
            "id": "calculus-1058a1k-2",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：ln",
            "latex": "\\ln\\!\\left(x+\\sqrt{1+x^2}\\right)-x\\sim-\\frac{x^3}{6}",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：极限运算法则、等价无穷小与高阶无穷小公式。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 18
          },
          {
            "id": "calculus-18r0zly",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：α",
            "latex": "\\alpha\\sim\\beta\n\\Longleftrightarrow \\alpha-\\beta=o(\\alpha)\n\\Longleftrightarrow \\alpha-\\beta=o(\\beta).",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "等价无穷小的等价判据：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 19
          },
          {
            "id": "calculus-ndli7f",
            "parentAnchorId": "anchor-w8b1zu",
            "legacyParentAnchorId": "calculus-01-002-anchor-001",
            "title": "极限运算法则、等价无穷小与高阶无穷小公式：(1+u)^v-1",
            "latex": "(1+u)^v-1\\sim uv.",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "若 \\(u(x)\\to0\\)，则可把上式中的 x 换成 \\(u(x)\\)。更一般地，若 u\\to0、uv\\to0，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 20
          },
          {
            "id": "calculus-1hq160m-1",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：e^x",
            "latex": "e^x=1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+o(x^3)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 21
          },
          {
            "id": "calculus-1hq160m-2",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：frac11-x",
            "latex": "\\frac1{1-x}=1+x+x^2+x^3+o(x^3)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 22
          },
          {
            "id": "calculus-1hq160m-3",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：frac11+x",
            "latex": "\\frac1{1+x}=1-x+x^2-x^3+o(x^3)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 23
          },
          {
            "id": "calculus-1hq160m-4",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：ln(1+x)",
            "latex": "\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+o(x^3)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 24
          },
          {
            "id": "calculus-1hq160m-5",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：sin x",
            "latex": "\\sin x=x-\\frac{x^3}{6}+\\frac{x^5}{120}+o(x^5)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 25
          },
          {
            "id": "calculus-1hq160m-6",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：cos x",
            "latex": "\\cos x=1-\\frac{x^2}{2}+\\frac{x^4}{24}+o(x^4)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 26
          },
          {
            "id": "calculus-1hq160m-7",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：(1+x)^a",
            "latex": "(1+x)^a=1+ax+\\frac{a(a-1)}{2}x^2+\\frac{a(a-1)(a-2)}{6}x^3+o(x^3)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "指数、几何级数、对数、正弦、余弦、二项式、正切和反三角函数的泰勒展开都放在这里。在 x\\to0 时，只记到做题所需的阶数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 27
          },
          {
            "id": "calculus-1knzfju-1",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：tan x",
            "latex": "\\tan x=x+\\frac{x^3}{3}+o(x^3)",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "补充几个常用三阶式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 28
          },
          {
            "id": "calculus-1knzfju-2",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：arcsin x",
            "latex": "\\arcsin x=x+\\frac{x^3}{6}+o(x^3)",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "补充几个常用三阶式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 29
          },
          {
            "id": "calculus-1knzfju-3",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：arctan x",
            "latex": "\\arctan x=x-\\frac{x^3}{3}+o(x^3)",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "补充几个常用三阶式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 30
          },
          {
            "id": "calculus-1nfa9d9-1",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：sqrt1+x",
            "latex": "\\sqrt{1+x}=1+\\frac{x}{2}-\\frac{x^2}{8}+o(x^2)",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "所属知识点：常用泰勒展开式（集中速查）。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 31
          },
          {
            "id": "calculus-1nfa9d9-2",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：ln",
            "latex": "\\ln\\!\\left(x+\\sqrt{1+x^2}\\right)=x-\\frac{x^3}{6}+o(x^3)",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "所属知识点：常用泰勒展开式（集中速查）。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 32
          },
          {
            "id": "calculus-1cqcqda",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "常用泰勒展开式（集中速查）：f(x)",
            "latex": "f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+R_n(x).",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "通用公式（x_0=0 时即麦克劳林公式）：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 33
          },
          {
            "id": "calculus-taylor-peano-remainder",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "泰勒公式的佩亚诺余项",
            "latex": "R_n(x)=o((x-x_0)^n)",
            "sourceBlockIndex": 26,
            "searchAliases": [
              "佩亚诺余项",
              "小o余项"
            ],
            "context": "用于局部等价与阶数比较；x 趋于 x₀。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 34
          },
          {
            "id": "calculus-taylor-lagrange-remainder",
            "parentAnchorId": "anchor-t8lpq4",
            "legacyParentAnchorId": "calculus-01-002-anchor-002",
            "title": "泰勒公式的拉格朗日余项",
            "latex": "R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}",
            "sourceBlockIndex": 27,
            "searchAliases": [
              "拉格朗日余项",
              "泰勒误差估计"
            ],
            "context": "f 在相关区间上具有 n+1 阶导数，ξ 位于 x 与 x₀ 之间。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 35
          },
          {
            "id": "calculus-83v85p",
            "parentAnchorId": "anchor-5x1cm7",
            "legacyParentAnchorId": "calculus-01-002-anchor-003",
            "title": "七类未定式、洛必达法则与幂指函数极限：lim(f(x))/(g(x))",
            "latex": "\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}.",
            "sourceBlockIndex": 40,
            "searchAliases": [],
            "context": "分子分母相减严重时，展开到第一个不抵消的项；不必把所有因子展开到同一阶。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 36
          },
          {
            "id": "calculus-l7xpfv-1",
            "parentAnchorId": "anchor-5x1cm7",
            "legacyParentAnchorId": "calculus-01-002-anchor-003",
            "title": "七类未定式、洛必达法则与幂指函数极限：lim f(x)^g(x)",
            "latex": "\\lim f(x)^{g(x)}\n=\\exp\\!\\left(\\lim g(x)\\ln f(x)\\right)\\qquad(f(x)>0).",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "幂指型极限统一公式：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 37
          },
          {
            "id": "calculus-1c5ti32",
            "parentAnchorId": "anchor-5x1cm7",
            "legacyParentAnchorId": "calculus-01-002-anchor-003",
            "title": "七类未定式、洛必达法则与幂指函数极限：[1+u(x)]^v(x)to e^A",
            "latex": "[1+u(x)]^{v(x)}\\to e^A.",
            "sourceBlockIndex": 45,
            "searchAliases": [],
            "context": "特别地，若 \\(u(x)\\to0\\)、\\(v(x)\\to\\infty\\)、\\(u(x)v(x)\\to A\\)，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 38
          },
          {
            "id": "calculus-8xvs7x-1",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_xto0(sin x)/(x)",
            "latex": "\\lim_{x\\to0}\\frac{\\sin x}{x}=1",
            "sourceBlockIndex": 46,
            "searchAliases": [],
            "context": "两个重要极限：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 39
          },
          {
            "id": "calculus-8xvs7x-2",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_xto0(1+x)^frac1x",
            "latex": "\\lim_{x\\to0}(1+x)^{\\frac1x}=e",
            "sourceBlockIndex": 46,
            "searchAliases": [],
            "context": "两个重要极限：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 40
          },
          {
            "id": "calculus-3qrfxs-1",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_nto∞",
            "latex": "\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n=e",
            "sourceBlockIndex": 47,
            "searchAliases": [],
            "context": "以及等价形式",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 41
          },
          {
            "id": "calculus-3qrfxs-2",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_xto∞",
            "latex": "\\lim_{x\\to\\infty}\\left(1+\\frac ax\\right)^x=e^a",
            "sourceBlockIndex": 47,
            "searchAliases": [],
            "context": "以及等价形式",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 42
          },
          {
            "id": "calculus-102nllp",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_nto∞a^frac1n",
            "latex": "\\lim_{n\\to\\infty}a^{\\frac1n}=1\\quad(a>0),\\qquad\n\\lim_{n\\to\\infty}n^{\\frac1n}=1.",
            "sourceBlockIndex": 48,
            "searchAliases": [],
            "context": "所属知识点：两个重要极限、数列极限、黎曼和与递推数列。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 43
          },
          {
            "id": "calculus-1lfos2w",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "有限个正数的 n 次根极限取最大值",
            "latex": "\\lim_{n\\to\\infty}\\sqrt[n]{a_1^n+a_2^n+\\cdots+a_m^n}\n=\\max\\{a_1,a_2,\\ldots,a_m\\}.",
            "sourceBlockIndex": 50,
            "searchAliases": [],
            "context": "若 a_1,\\ldots,a_m>0，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 44
          },
          {
            "id": "calculus-79gyl1",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_xto∞",
            "latex": "\\lim_{x\\to\\infty}\n\\frac{a_0x^n+a_1x^{n-1}+\\cdots+a_n}\n{b_0x^m+b_1x^{m-1}+\\cdots+b_m}\n=\n\\begin{cases}\n0,&n<m,\\\\\n\\dfrac{a_0}{b_0},&n=m,\\\\\n\\infty\\text{ 或 }-\\infty,&n>m,\n\\end{cases}",
            "sourceBlockIndex": 52,
            "searchAliases": [],
            "context": "若 a_0b_0\\ne0，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 45
          },
          {
            "id": "calculus-v7iqrw",
            "parentAnchorId": "anchor-wcsi6k",
            "legacyParentAnchorId": "calculus-01-002-anchor-004",
            "title": "两个重要极限、数列极限、黎曼和与递推数列：lim_nto∞frac1nΣ_k",
            "latex": "\\lim_{n\\to\\infty}\\frac1n\\sum_{k=1}^n f\\!\\left(\\frac{k}{n}\\right)=\\int_0^1 f(x)\\,dx.",
            "sourceBlockIndex": 53,
            "searchAliases": [],
            "context": "最后一种情形的符号由最高次项决定。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 46
          },
          {
            "id": "calculus-1i1evgc",
            "parentAnchorId": "anchor-1lndnrm",
            "legacyParentAnchorId": "calculus-01-002-anchor-005",
            "title": "极限存在、左右极限、局部有界性、保号性与保序性：lim_xto x_0f(x)",
            "latex": "\\lim_{x\\to x_0}f(x)=A\n\\Longleftrightarrow\n\\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=A.",
            "sourceBlockIndex": 59,
            "searchAliases": [],
            "context": "所属知识点：极限存在、左右极限、局部有界性、保号性与保序性。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 47
          },
          {
            "id": "calculus-173gpr9",
            "parentAnchorId": "anchor-1lndnrm",
            "legacyParentAnchorId": "calculus-01-002-anchor-005",
            "title": "极限存在、左右极限、局部有界性、保号性与保序性：lim f(x)",
            "latex": "\\lim f(x)\\le\\lim g(x).",
            "sourceBlockIndex": 63,
            "searchAliases": [],
            "context": "有限极限存在时，函数在该点的某个去心邻域内有界；若 A>0，则该邻域内 \\(f(x)>0\\)。若附近恒有 \\(f(x)\\le g(x)\\)，且两边极限都存在，则",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 48
          },
          {
            "id": "calculus-t5e1pl",
            "parentAnchorId": "anchor-128640p",
            "legacyParentAnchorId": "calculus-01-002-anchor-006",
            "title": "夹逼准则、无穷小乘有界量与递推数列压缩估计：g(x)",
            "latex": "g(x)\\le f(x)\\le h(x),\\qquad g(x),h(x)\\to A\n\\Longrightarrow f(x)\\to A.",
            "sourceBlockIndex": 64,
            "searchAliases": [],
            "context": "所属知识点：夹逼准则、无穷小乘有界量与递推数列压缩估计。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 49
          },
          {
            "id": "calculus-6qws51",
            "parentAnchorId": "anchor-128640p",
            "legacyParentAnchorId": "calculus-01-002-anchor-006",
            "title": "夹逼准则、无穷小乘有界量与递推数列压缩估计：α(x)to0, β(x) 有界",
            "latex": "\\alpha(x)\\to0,\\qquad \\beta(x)\\text{ 有界}\n\\Longrightarrow \\alpha(x)\\beta(x)\\to0.",
            "sourceBlockIndex": 65,
            "searchAliases": [],
            "context": "所属知识点：夹逼准则、无穷小乘有界量与递推数列压缩估计。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 50
          },
          {
            "id": "calculus-1qr3ruk-1",
            "parentAnchorId": "anchor-128640p",
            "legacyParentAnchorId": "calculus-01-002-anchor-006",
            "title": "夹逼准则、无穷小乘有界量与递推数列压缩估计：|a_n+1-A|",
            "latex": "|a_{n+1}-A|\\le q|a_n-A|,\\qquad 0<q<1,",
            "sourceBlockIndex": 66,
            "searchAliases": [],
            "context": "若递推数列在一个不变区间内满足",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 51
          },
          {
            "id": "calculus-u3z71g",
            "parentAnchorId": "anchor-128640p",
            "legacyParentAnchorId": "calculus-01-002-anchor-006",
            "title": "夹逼准则、无穷小乘有界量与递推数列压缩估计：|a_n-A|",
            "latex": "|a_n-A|\\le q^{n-1}|a_1-A|\\to0.",
            "sourceBlockIndex": 67,
            "searchAliases": [],
            "context": "所属知识点：夹逼准则、无穷小乘有界量与递推数列压缩估计。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 52
          },
          {
            "id": "calculus-9esrln",
            "parentAnchorId": "anchor-15sbt8p",
            "legacyParentAnchorId": "calculus-01-002-anchor-007",
            "title": "数列乘积、无限乘积与对数化：u_n",
            "latex": "u_n=\\prod_{k=1}^n a_k\n\\Longrightarrow\n\\ln u_n=\\sum_{k=1}^n\\ln a_k.",
            "sourceBlockIndex": 68,
            "searchAliases": [],
            "context": "各因子为正时，乘积先取对数：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 53
          },
          {
            "id": "calculus-1lhjtmk",
            "parentAnchorId": "anchor-15sbt8p",
            "legacyParentAnchorId": "calculus-01-002-anchor-007",
            "title": "数列乘积、无限乘积与对数化：(1-x)(1+x)(1+x^2)cdots(1+x^2^n)",
            "latex": "(1-x)(1+x)(1+x^2)\\cdots(1+x^{2^n})=1-x^{2^{n+1}}.",
            "sourceBlockIndex": 69,
            "searchAliases": [],
            "context": "常用望远镜乘积：",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 54
          },
          {
            "id": "calculus-137lxxy",
            "parentAnchorId": "anchor-bvlpa4",
            "legacyParentAnchorId": "calculus-01-002-anchor-008",
            "title": "无穷小阶数、等价判据与积分等价：lim(α(x))/(β(x))",
            "latex": "\\lim\\frac{\\alpha(x)}{\\beta(x)}=\n\\begin{cases}\n0,&\\alpha\\text{ 比 }\\beta\\text{ 高阶},\\\\\nc\\ne0,&\\alpha\\text{ 与 }\\beta\\text{ 同阶},\\\\\n1,&\\alpha\\sim\\beta,\\\\\n\\infty,&\\alpha\\text{ 比 }\\beta\\text{ 低阶}.\n\\end{cases}",
            "sourceBlockIndex": 70,
            "searchAliases": [],
            "context": "所属知识点：无穷小阶数、等价判据与积分等价。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 55
          },
          {
            "id": "calculus-o00lnb",
            "parentAnchorId": "anchor-bvlpa4",
            "legacyParentAnchorId": "calculus-01-002-anchor-008",
            "title": "无穷小阶数、等价判据与积分等价：∫_x_0^xf(t) dt",
            "latex": "\\int_{x_0}^{x}f(t)\\,dt\\sim\\int_{x_0}^{x}g(t)\\,dt.",
            "sourceBlockIndex": 72,
            "searchAliases": [],
            "context": "若 \\(f(x)\\sim g(x)\\)、二者在去心邻域内同号且积分存在，则在相应端点附近",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 56
          },
          {
            "id": "calculus-1po8to",
            "parentAnchorId": "anchor-bvlpa4",
            "legacyParentAnchorId": "calculus-01-002-anchor-008",
            "title": "无穷小阶数、等价判据与积分等价：∫_0^φ(x)f(t) dt",
            "latex": "\\int_0^{\\varphi(x)}f(t)\\,dt\n\\sim\\frac{c}{m+1}[\\varphi(x)]^{m+1}\n\\sim\\frac{cd^{m+1}}{m+1}x^{n(m+1)}.",
            "sourceBlockIndex": 78,
            "searchAliases": [],
            "context": "若 \\(f(t)\\sim c t^m\\ (t\\to0^+)\\)、\\(\\varphi(x)\\sim d x^n\\ (x\\to0^+)\\)，其中",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 57
          },
          {
            "id": "calculus-4w22q8",
            "parentAnchorId": "anchor-1ohmc4u",
            "legacyParentAnchorId": "calculus-01-002-anchor-009",
            "title": "含参数极限、导数定义型极限与三类渐近线：x",
            "latex": "x=x_0:\\ \\lim_{x\\to x_0}f(x)=\\infty,",
            "sourceBlockIndex": 79,
            "searchAliases": [],
            "context": "所属知识点：含参数极限、导数定义型极限与三类渐近线。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 58
          },
          {
            "id": "calculus-18wudsw",
            "parentAnchorId": "anchor-1ohmc4u",
            "legacyParentAnchorId": "calculus-01-002-anchor-009",
            "title": "含参数极限、导数定义型极限与三类渐近线：y",
            "latex": "y=b:\\ \\lim_{x\\to\\pm\\infty}f(x)=b,",
            "sourceBlockIndex": 80,
            "searchAliases": [],
            "context": "所属知识点：含参数极限、导数定义型极限与三类渐近线。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 59
          },
          {
            "id": "calculus-1443xil-1",
            "parentAnchorId": "anchor-1ohmc4u",
            "legacyParentAnchorId": "calculus-01-002-anchor-009",
            "title": "含参数极限、导数定义型极限与三类渐近线：y",
            "latex": "y=kx+b:\\ k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}x",
            "sourceBlockIndex": 81,
            "searchAliases": [],
            "context": "所属知识点：含参数极限、导数定义型极限与三类渐近线。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 60
          },
          {
            "id": "calculus-1443xil-2",
            "parentAnchorId": "anchor-1ohmc4u",
            "legacyParentAnchorId": "calculus-01-002-anchor-009",
            "title": "含参数极限、导数定义型极限与三类渐近线：b",
            "latex": "b=\\lim_{x\\to\\pm\\infty}[f(x)-kx]",
            "sourceBlockIndex": 81,
            "searchAliases": [],
            "context": "所属知识点：含参数极限、导数定义型极限与三类渐近线。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 61
          },
          {
            "id": "calculus-m3ictv",
            "parentAnchorId": "anchor-1ohmc4u",
            "legacyParentAnchorId": "calculus-01-002-anchor-009",
            "title": "含参数极限、导数定义型极限与三类渐近线：(f(x)-f(x_0))/(x-x_0)",
            "latex": "\\frac{f(x)-f(x_0)}{x-x_0}",
            "sourceBlockIndex": 82,
            "searchAliases": [],
            "context": "含参数极限存在时，先让左右极限相等，再排除分母为零或表达式无意义的参数。极限中出现",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-002",
            "order": 62
          }
        ]
      },
      {
        "id": "calculus-01-003",
        "title": "连续",
        "body": "##### 函数连续判定、闭区间连续函数性质与零点定理\n\n<!-- formula {\"id\":\"calculus-1005oit\",\"title\":\"函数连续判定、闭区间连续函数性质与零点定理：f 在 x_0 连续\",\"aliases\":[],\"context\":\"所属知识点：函数连续判定、闭区间连续函数性质与零点定理。\"} -->\n\\[\nf\\text{ 在 }x_0\\text{ 连续}\n\\Longleftrightarrow\n\\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=f(x_0).\n\\]\n\n连续函数的四则运算和复合仍连续；初等函数在其定义区间内连续。因此在连续点可直接把极限号换成函数值。\n\n闭区间上的连续函数同时满足：有界性、最大最小值定理、介值定理。特别地，若\n\n<!-- formula {\"id\":\"calculus-xoc31v\",\"title\":\"函数连续判定、闭区间连续函数性质与零点定理：fin C[a,b], f(a)f(b)\",\"aliases\":[],\"context\":\"闭区间上的连续函数同时满足：有界性、最大最小值定理、介值定理。特别地，若\"} -->\n\\[\nf\\in C[a,b],\\qquad f(a)f(b)<0,\n\\]\n\n则至少存在一个 \\(\\xi\\in(a,b)\\)，使 \\(f(\\xi)=0\\)。\n\n##### 第一类与第二类间断点分类\n\n- 左右极限存在且相等，但不等于函数值：可去间断点。\n- 左右极限存在但不相等：跳跃间断点。\n- 至少一个单侧极限为无穷：无穷间断点。\n- 至少一个单侧极限不存在且不是无穷：振荡间断点。\n\n分段函数定参数，固定顺序是“左极限＝右极限＝函数值”。",
        "searchText": "连续 连续 连续 函数连续判定、闭区间连续函数性质与零点定理 f 在 x 0 连续 x x 0^- f(x)= x x 0^+ f(x)=f(x 0). 连续函数的四则运算和复合仍连续；初等函数在其定义区间内连续。因此在连续点可直接把极限号换成函数值。 闭区间上的连续函数同时满足：有界性、最大最小值定理、介值定理。特别地，若 f C[a,b], f(a)f(b)<0, 则至少存在一个 (a,b)，使 f( )=0。 第一类与第二类间断点分类 左右极限存在且相等，但不等于函数值：可去间断点。 左右极限存在但不相等：跳跃间断点。 至少一个单侧极限为无穷：无穷间断点。 至少一个单侧极限不存在且不是无穷：振荡间断点。 分段函数定参数，固定顺序是“左极限＝右极限＝函数值”。",
        "summary": "函数连续判定、闭区间连续函数性质与零点定理 f 在 x 0 连续 x x 0^- f(x)= x x 0^+ f(x)=f(x 0). 连续函数的四则运算和复合仍连续；初等函数在其定义区间内连续。因此在连续点可直接把极限号换成函数值。 闭区间上的连续函数同…",
        "anchors": [
          {
            "id": "anchor-wg2dg",
            "legacyId": "calculus-01-003-anchor-001",
            "title": "函数连续判定、闭区间连续函数性质与零点定理",
            "searchText": "函数连续判定、闭区间连续函数性质与零点定理 f 在 x 0 连续 x x 0^- f(x)= x x 0^+ f(x)=f(x 0). 连续函数的四则运算和复合仍连续；初等函数在其定义区间内连续。因此在连续点可直接把极限号换成函数值。 闭区间上的连续函数同时满足：有界性、最大最小值定理、介值定理。特别地，若 f C[a,b], f(a)f(b)<0, 则至少存在一个 (a,b)，使 f( )=0。",
            "summary": "f 在 x 0 连续 x x 0^- f(x)= x x 0^+ f(x)=f(x 0). 连续函数的四则运算和复合仍连续；初等函数在其定义区间内连续。因此在连续点可直接把极限号换成函数值。 闭区间上的连续函数同时满足：有界性、最大最小值定理、介值定理。特…"
          },
          {
            "id": "anchor-1hhdk3",
            "legacyId": "calculus-01-003-anchor-002",
            "title": "第一类与第二类间断点分类",
            "searchText": "第一类与第二类间断点分类 左右极限存在且相等，但不等于函数值：可去间断点。 左右极限存在但不相等：跳跃间断点。 至少一个单侧极限为无穷：无穷间断点。 至少一个单侧极限不存在且不是无穷：振荡间断点。 分段函数定参数，固定顺序是“左极限＝右极限＝函数值”。",
            "summary": "左右极限存在且相等，但不等于函数值：可去间断点。 左右极限存在但不相等：跳跃间断点。 至少一个单侧极限为无穷：无穷间断点。 至少一个单侧极限不存在且不是无穷：振荡间断点。 分段函数定参数，固定顺序是“左极限＝右极限＝函数值”。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-1005oit",
            "parentAnchorId": "anchor-wg2dg",
            "legacyParentAnchorId": "calculus-01-003-anchor-001",
            "title": "函数连续判定、闭区间连续函数性质与零点定理：f 在 x_0 连续",
            "latex": "f\\text{ 在 }x_0\\text{ 连续}\n\\Longleftrightarrow\n\\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=f(x_0).",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：函数连续判定、闭区间连续函数性质与零点定理。",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-003",
            "order": 0
          },
          {
            "id": "calculus-xoc31v",
            "parentAnchorId": "anchor-wg2dg",
            "legacyParentAnchorId": "calculus-01-003-anchor-001",
            "title": "函数连续判定、闭区间连续函数性质与零点定理：fin C[a,b], f(a)f(b)",
            "latex": "f\\in C[a,b],\\qquad f(a)f(b)<0,",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "闭区间上的连续函数同时满足：有界性、最大最小值定理、介值定理。特别地，若",
            "chapterId": "calculus-01",
            "topicId": "calculus-01-003",
            "order": 1
          }
        ]
      }
    ]
  },
  {
    "id": "calculus-02",
    "partId": "calculus",
    "partTitle": "高等数学",
    "title": "第二章　一元微分",
    "topics": [
      {
        "id": "calculus-02-001",
        "title": "导数概念",
        "body": "##### 可导、连续、可微与左右导数的关系\n\n<!-- formula {\"id\":\"calculus-3oqxyc\",\"title\":\"可导必连续\",\"aliases\":[],\"context\":\"所属知识点：可导、连续、可微与左右导数的关系。\"} -->\n\\[\nf\\text{ 在 }x_0\\text{ 可导}\\Longrightarrow f\\text{ 在 }x_0\\text{ 连续},\n\\]\n\n反过来一般不成立。可微与可导在一元函数中等价，且\n\n<!-- formula {\"id\":\"calculus-1bxl2d9\",\"title\":\"可导、连续、可微与左右导数的关系：dy\",\"aliases\":[],\"context\":\"反过来一般不成立。可微与可导在一元函数中等价，且\"} -->\n\\[\ndy=f'(x)\\,dx.\n\\]\n\n微分运算法则与导数运算法则一致：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-q2pgi9-1\",\"title\":\"可导、连续、可微与左右导数的关系：d(u± v)\",\"aliases\":[],\"context\":\"微分运算法则与导数运算法则一致：\",\"latex\":\"d(u\\\\pm v)=du\\\\pm dv\"},{\"id\":\"calculus-q2pgi9-2\",\"title\":\"可导、连续、可微与左右导数的关系：d(uv)\",\"aliases\":[],\"context\":\"微分运算法则与导数运算法则一致：\",\"latex\":\"d(uv)=u\\\\,dv+v\\\\,du\"},{\"id\":\"calculus-q2pgi9-3\",\"title\":\"可导、连续、可微与左右导数的关系：d\",\"aliases\":[],\"context\":\"微分运算法则与导数运算法则一致：\",\"latex\":\"d\\\\!\\\\left(\\\\frac uv\\\\right)=\\\\frac{v\\\\,du-u\\\\,dv}{v^2}\"}]} -->\n\\[\nd(u\\pm v)=du\\pm dv,\\quad d(uv)=u\\,dv+v\\,du,\\quad\nd\\!\\left(\\frac uv\\right)=\\frac{v\\,du-u\\,dv}{v^2}.\n\\]\n\n函数在一点可导的必要条件是左右导数都存在且相等：\n\n<!-- formula {\"id\":\"calculus-1fkrzwo\",\"title\":\"可导、连续、可微与左右导数的关系：f'_-(x_0)\",\"aliases\":[],\"context\":\"函数在一点可导的必要条件是左右导数都存在且相等：\"} -->\n\\[\nf'_-(x_0)=f'_+(x_0)=f'(x_0).\n\\]\n\n##### 导数定义型极限、单侧导数与绝对值函数可导判定\n\n<!-- formula {\"id\":\"calculus-1br8aox\",\"title\":\"导数定义型极限、单侧导数与绝对值函数可导判定：f'(x_0)\",\"aliases\":[],\"context\":\"所属知识点：导数定义型极限、单侧导数与绝对值函数可导判定。\"} -->\n\\[\nf'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}h.\n\\]\n\n分段点或绝对值点必须分别算左导数、右导数；二者存在且相等才可导。若 \\(f(x_0)=0\\)，则 \\(|f(x)|\\) 在 \\(x_0\\) 可导的常用判定是 <!-- formula {\"id\":\"calculus-absolute-value-differentiability-zero\",\"title\":\"绝对值复合函数在零点的可导判定\",\"aliases\":[\"绝对值可导\",\"零点可导\"],\"context\":\"f 在 x₀ 可导且 f(x₀)=0 时，|f(x)| 在 x₀ 可导当且仅当 f′(x₀)=0。\"} -->\\(f'(x_0)=0\\)。\n\n##### 含绝对值函数的最高可导阶数\n\n判断含 \\(|x-x_0|^a\\) 的最高可导阶数时，先分别写出两侧表达式，再逐阶比较左右导数。不能只看形式上的幂次。\n\n##### 振荡型分段函数连续、可导与导函数连续\n\n设 \\(\\alpha,\\beta\\) 为正整数，\n\n<!-- formula {\"id\":\"calculus-lqkho2\",\"title\":\"振荡型分段函数连续、可导与导函数连续：f(x)\",\"aliases\":[],\"context\":\"设 \\\\alpha,\\\\beta 为正整数，\"} -->\n\\[\nf(x)=\n\\begin{cases}\nx^\\alpha\\sin\\dfrac1{x^\\beta},&x\\ne0,\\\\\n0,&x=0.\n\\end{cases}\n\\]\n\n则在 \\(x=0\\) 处：\\(\\alpha>0\\) 时连续；\\(\\alpha>1\\) 时可导；\\(\\alpha>\\beta+1\\) 时导函数连续。\n\n若 \\(\\varphi\\) 在 \\(x=a\\) 连续，则\n\n<!-- formula {\"id\":\"calculus-1ufsels\",\"title\":\"振荡型分段函数连续、可导与导函数连续：φ(x)|x-a| 在 x\",\"aliases\":[],\"context\":\"若 \\\\varphi 在 x=a 连续，则\"} -->\n\\[\n\\varphi(x)|x-a|\\text{ 在 }x=a\\text{ 可导}\n\\Longleftrightarrow \\varphi(a)=0.\n\\]\n\n##### 相关变化率与链式法则\n\n若变量都随时间 \\(t\\) 变化，先写约束 \\(F(x,y)=0\\)，再对 \\(t\\) 求导：\n\n<!-- formula {\"id\":\"calculus-12qck0q\",\"title\":\"相关变化率与链式法则：F_x(dx)/(dt)+F_y(dy)/(dt)\",\"aliases\":[],\"context\":\"若变量都随时间 t 变化，先写约束 \\\\(F(x,y)=0\\\\)，再对 t 求导：\"} -->\n\\[\nF_x\\frac{dx}{dt}+F_y\\frac{dy}{dt}=0.\n\\]\n\n若 \\(y=f(x)\\)、\\(x=x(t)\\)，则\n\n<!-- formula {\"id\":\"calculus-d0qvfa\",\"title\":\"相关变化率与链式法则：(dy)/(dt)\",\"aliases\":[],\"context\":\"若 \\\\(y=f(x)\\\\)、\\\\(x=x(t)\\\\)，则\"} -->\n\\[\n\\frac{dy}{dt}=f'(x)\\frac{dx}{dt}.\n\\]\n\n##### 导函数介值性与达布定理\n\n导函数不一定连续，但具有介值性：若 \\(f\\) 在 \\([a,b]\\) 上可导，\\(f'(a)<\\mu<f'(b)\\) 或 \\(f'(b)<\\mu<f'(a)\\)，则存在 \\(\\xi\\in(a,b)\\)，使\n\n<!-- formula {\"id\":\"calculus-1knhr1z\",\"title\":\"导函数介值性与达布定理：f'(xi)\",\"aliases\":[],\"context\":\"导函数不一定连续，但具有介值性：若 f 在 [a,b] 上可导，\\\\(f'(a)<\\\\mu<f'(b)\\\\) 或 \\\\(f'(b)<\\\\mu<f'(a)\\\\)，则存在 \\\\(\\\\xi\\\\in(a,b)\\\\)，使\"} -->\n\\[\nf'(\\xi)=\\mu.\n\\]\n\n因此导函数不能发生跳跃间断。",
        "searchText": "导数概念 导数概念 导数概念 可导、连续、可微与左右导数的关系 f 在 x 0 可导 ⇒ f 在 x 0 连续, 反过来一般不成立。可微与可导在一元函数中等价，且 dy=f'(x)\\,dx. 微分运算法则与导数运算法则一致： d(u v)=du dv, d(uv)=u\\,dv+v\\,du, d\\!≤ft( uv )= v\\,du-u\\,dv v^2 . 函数在一点可导的必要条件是左右导数都存在且相等： f' -(x 0)=f' +(x 0)=f'(x 0). 导数定义型极限、单侧导数与绝对值函数可导判定 f'(x 0)= h 0 f(x 0+h)-f(x 0) h. 分段点或绝对值点必须分别算左导数、右导数；二者存在且相等才可导。若 f(x 0)=0，则 f(x) 在 x 0 可导的常用判定是 f'(x 0)=0。 含绝对值函数的最高可导阶数 判断含 x-x 0 ^a 的最高可导阶数时，先分别写出两侧表达式，再逐阶比较左右导数。不能只看形式上的幂次。 振荡型分段函数连续、可导与导函数连续 设 , 为正整数， f(x)= cases x^ 1 x^ ,&x≠0,\\\\ 0,&x=0. cases 则在 x=0 处： 0 时连续； 1 时可导； +1 时导函数连续。 若 在 x=a 连续，则 (x) x-a 在 x=a 可导 (a)=0. 相关变化率与链式法则 若变量都随时间 t 变化，先写约束 F(x,y)=0，再对 t 求导： F x dx dt +F y dy dt =0. 若 y=f(x)、x=x(t)，则 dy dt =f'(x) dx dt . 导函数介值性与达布定理 导函数不一定连续，但具有介值性：若 f 在 [a,b] 上可导，f'(a)< <f'(b) 或 f'(b)< <f'(a)，则存在 (a,b)，使 f'( )= . 因此导函数不能发生跳跃间断。",
        "summary": "可导、连续、可微与左右导数的关系 f 在 x 0 可导 ⇒ f 在 x 0 连续, 反过来一般不成立。可微与可导在一元函数中等价，且 dy=f'(x)\\,dx. 微分运算法则与导数运算法则一致： d(u v)=du dv, d(uv)=u\\,dv+v\\,d…",
        "anchors": [
          {
            "id": "anchor-1reuj12",
            "legacyId": "calculus-02-001-anchor-001",
            "title": "可导、连续、可微与左右导数的关系",
            "searchText": "可导、连续、可微与左右导数的关系 f 在 x 0 可导 ⇒ f 在 x 0 连续, 反过来一般不成立。可微与可导在一元函数中等价，且 dy=f'(x)\\,dx. 微分运算法则与导数运算法则一致： d(u v)=du dv, d(uv)=u\\,dv+v\\,du, d\\!≤ft( uv )= v\\,du-u\\,dv v^2 . 函数在一点可导的必要条件是左右导数都存在且相等： f' -(x 0)=f' +(x 0)=f'(x 0).",
            "summary": "f 在 x 0 可导 ⇒ f 在 x 0 连续, 反过来一般不成立。可微与可导在一元函数中等价，且 dy=f'(x)\\,dx. 微分运算法则与导数运算法则一致： d(u v)=du dv, d(uv)=u\\,dv+v\\,du, d\\!≤ft( uv )= …"
          },
          {
            "id": "anchor-11rqxyq",
            "legacyId": "calculus-02-001-anchor-002",
            "title": "导数定义型极限、单侧导数与绝对值函数可导判定",
            "searchText": "导数定义型极限、单侧导数与绝对值函数可导判定 f'(x 0)= h 0 f(x 0+h)-f(x 0) h. 分段点或绝对值点必须分别算左导数、右导数；二者存在且相等才可导。若 f(x 0)=0，则 f(x) 在 x 0 可导的常用判定是 f'(x 0)=0。",
            "summary": "f'(x 0)= h 0 f(x 0+h)-f(x 0) h. 分段点或绝对值点必须分别算左导数、右导数；二者存在且相等才可导。若 f(x 0)=0，则 f(x) 在 x 0 可导的常用判定是 f'(x 0)=0。"
          },
          {
            "id": "anchor-8c1dh1",
            "legacyId": "calculus-02-001-anchor-003",
            "title": "含绝对值函数的最高可导阶数",
            "searchText": "含绝对值函数的最高可导阶数 判断含 x-x 0 ^a 的最高可导阶数时，先分别写出两侧表达式，再逐阶比较左右导数。不能只看形式上的幂次。",
            "summary": "判断含 x-x 0 ^a 的最高可导阶数时，先分别写出两侧表达式，再逐阶比较左右导数。不能只看形式上的幂次。"
          },
          {
            "id": "anchor-115q6i",
            "legacyId": "calculus-02-001-anchor-004",
            "title": "振荡型分段函数连续、可导与导函数连续",
            "searchText": "振荡型分段函数连续、可导与导函数连续 设 , 为正整数， f(x)= cases x^ 1 x^ ,&x≠0,\\\\ 0,&x=0. cases 则在 x=0 处： 0 时连续； 1 时可导； +1 时导函数连续。 若 在 x=a 连续，则 (x) x-a 在 x=a 可导 (a)=0.",
            "summary": "设 , 为正整数， f(x)= cases x^ 1 x^ ,&x≠0,\\\\ 0,&x=0. cases 则在 x=0 处： 0 时连续； 1 时可导； +1 时导函数连续。 若 在 x=a 连续，则 (x) x-a 在 x=a 可导 (a)=0."
          },
          {
            "id": "anchor-15hqnun",
            "legacyId": "calculus-02-001-anchor-005",
            "title": "相关变化率与链式法则",
            "searchText": "相关变化率与链式法则 若变量都随时间 t 变化，先写约束 F(x,y)=0，再对 t 求导： F x dx dt +F y dy dt =0. 若 y=f(x)、x=x(t)，则 dy dt =f'(x) dx dt .",
            "summary": "若变量都随时间 t 变化，先写约束 F(x,y)=0，再对 t 求导： F x dx dt +F y dy dt =0. 若 y=f(x)、x=x(t)，则 dy dt =f'(x) dx dt ."
          },
          {
            "id": "anchor-17lpmco",
            "legacyId": "calculus-02-001-anchor-006",
            "title": "导函数介值性与达布定理",
            "searchText": "导函数介值性与达布定理 导函数不一定连续，但具有介值性：若 f 在 [a,b] 上可导，f'(a)< <f'(b) 或 f'(b)< <f'(a)，则存在 (a,b)，使 f'( )= . 因此导函数不能发生跳跃间断。",
            "summary": "导函数不一定连续，但具有介值性：若 f 在 [a,b] 上可导，f'(a)< <f'(b) 或 f'(b)< <f'(a)，则存在 (a,b)，使 f'( )= . 因此导函数不能发生跳跃间断。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-3oqxyc",
            "parentAnchorId": "anchor-1reuj12",
            "legacyParentAnchorId": "calculus-02-001-anchor-001",
            "title": "可导必连续",
            "latex": "f\\text{ 在 }x_0\\text{ 可导}\\Longrightarrow f\\text{ 在 }x_0\\text{ 连续},",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：可导、连续、可微与左右导数的关系。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 0
          },
          {
            "id": "calculus-1bxl2d9",
            "parentAnchorId": "anchor-1reuj12",
            "legacyParentAnchorId": "calculus-02-001-anchor-001",
            "title": "可导、连续、可微与左右导数的关系：dy",
            "latex": "dy=f'(x)\\,dx.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "反过来一般不成立。可微与可导在一元函数中等价，且",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 1
          },
          {
            "id": "calculus-q2pgi9-1",
            "parentAnchorId": "anchor-1reuj12",
            "legacyParentAnchorId": "calculus-02-001-anchor-001",
            "title": "可导、连续、可微与左右导数的关系：d(u± v)",
            "latex": "d(u\\pm v)=du\\pm dv",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "微分运算法则与导数运算法则一致：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 2
          },
          {
            "id": "calculus-q2pgi9-2",
            "parentAnchorId": "anchor-1reuj12",
            "legacyParentAnchorId": "calculus-02-001-anchor-001",
            "title": "可导、连续、可微与左右导数的关系：d(uv)",
            "latex": "d(uv)=u\\,dv+v\\,du",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "微分运算法则与导数运算法则一致：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 3
          },
          {
            "id": "calculus-q2pgi9-3",
            "parentAnchorId": "anchor-1reuj12",
            "legacyParentAnchorId": "calculus-02-001-anchor-001",
            "title": "可导、连续、可微与左右导数的关系：d",
            "latex": "d\\!\\left(\\frac uv\\right)=\\frac{v\\,du-u\\,dv}{v^2}",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "微分运算法则与导数运算法则一致：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 4
          },
          {
            "id": "calculus-1fkrzwo",
            "parentAnchorId": "anchor-1reuj12",
            "legacyParentAnchorId": "calculus-02-001-anchor-001",
            "title": "可导、连续、可微与左右导数的关系：f'_-(x_0)",
            "latex": "f'_-(x_0)=f'_+(x_0)=f'(x_0).",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "函数在一点可导的必要条件是左右导数都存在且相等：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 5
          },
          {
            "id": "calculus-1br8aox",
            "parentAnchorId": "anchor-11rqxyq",
            "legacyParentAnchorId": "calculus-02-001-anchor-002",
            "title": "导数定义型极限、单侧导数与绝对值函数可导判定：f'(x_0)",
            "latex": "f'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}h.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：导数定义型极限、单侧导数与绝对值函数可导判定。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 6
          },
          {
            "id": "calculus-absolute-value-differentiability-zero",
            "parentAnchorId": "anchor-11rqxyq",
            "legacyParentAnchorId": "calculus-02-001-anchor-002",
            "title": "绝对值复合函数在零点的可导判定",
            "latex": "f'(x_0)=0",
            "sourceBlockIndex": 8,
            "searchAliases": [
              "绝对值可导",
              "零点可导"
            ],
            "context": "f 在 x₀ 可导且 f(x₀)=0 时，|f(x)| 在 x₀ 可导当且仅当 f′(x₀)=0。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 7
          },
          {
            "id": "calculus-lqkho2",
            "parentAnchorId": "anchor-115q6i",
            "legacyParentAnchorId": "calculus-02-001-anchor-004",
            "title": "振荡型分段函数连续、可导与导函数连续：f(x)",
            "latex": "f(x)=\n\\begin{cases}\nx^\\alpha\\sin\\dfrac1{x^\\beta},&x\\ne0,\\\\\n0,&x=0.\n\\end{cases}",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "设 \\alpha,\\beta 为正整数，",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 8
          },
          {
            "id": "calculus-1ufsels",
            "parentAnchorId": "anchor-115q6i",
            "legacyParentAnchorId": "calculus-02-001-anchor-004",
            "title": "振荡型分段函数连续、可导与导函数连续：φ(x)|x-a| 在 x",
            "latex": "\\varphi(x)|x-a|\\text{ 在 }x=a\\text{ 可导}\n\\Longleftrightarrow \\varphi(a)=0.",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "若 \\varphi 在 x=a 连续，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 9
          },
          {
            "id": "calculus-12qck0q",
            "parentAnchorId": "anchor-15hqnun",
            "legacyParentAnchorId": "calculus-02-001-anchor-005",
            "title": "相关变化率与链式法则：F_x(dx)/(dt)+F_y(dy)/(dt)",
            "latex": "F_x\\frac{dx}{dt}+F_y\\frac{dy}{dt}=0.",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "若变量都随时间 t 变化，先写约束 \\(F(x,y)=0\\)，再对 t 求导：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 10
          },
          {
            "id": "calculus-d0qvfa",
            "parentAnchorId": "anchor-15hqnun",
            "legacyParentAnchorId": "calculus-02-001-anchor-005",
            "title": "相关变化率与链式法则：(dy)/(dt)",
            "latex": "\\frac{dy}{dt}=f'(x)\\frac{dx}{dt}.",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "若 \\(y=f(x)\\)、\\(x=x(t)\\)，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 11
          },
          {
            "id": "calculus-1knhr1z",
            "parentAnchorId": "anchor-17lpmco",
            "legacyParentAnchorId": "calculus-02-001-anchor-006",
            "title": "导函数介值性与达布定理：f'(xi)",
            "latex": "f'(\\xi)=\\mu.",
            "sourceBlockIndex": 31,
            "searchAliases": [],
            "context": "导函数不一定连续，但具有介值性：若 f 在 [a,b] 上可导，\\(f'(a)<\\mu<f'(b)\\) 或 \\(f'(b)<\\mu<f'(a)\\)，则存在 \\(\\xi\\in(a,b)\\)，使",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-001",
            "order": 12
          }
        ]
      },
      {
        "id": "calculus-02-002",
        "title": "导数计算",
        "body": "##### 导数公式（集中速查）\n\n<!-- formula {\"items\":[{\"id\":\"calculus-12isv29-1\",\"title\":\"导数公式（集中速查）：(x^a)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(x^a)'=ax^{a-1}\"},{\"id\":\"calculus-12isv29-2\",\"title\":\"导数公式（集中速查）：(e^x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(e^x)'=e^x\"},{\"id\":\"calculus-12isv29-3\",\"title\":\"导数公式（集中速查）：(a^x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(a^x)'=a^x\\\\ln a\"}]} -->\n\\[\n(x^a)'=ax^{a-1},\\quad (e^x)'=e^x,\\quad (a^x)'=a^x\\ln a,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1e3ytdn-1\",\"title\":\"导数公式（集中速查）：(ln x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\ln x)'=\\\\frac1x\"},{\"id\":\"calculus-1e3ytdn-2\",\"title\":\"导数公式（集中速查）：(sin x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\sin x)'=\\\\cos x\"},{\"id\":\"calculus-1e3ytdn-3\",\"title\":\"导数公式（集中速查）：(cos x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\cos x)'=-\\\\sin x\"}]} -->\n\\[\n(\\ln x)'=\\frac1x,\\quad (\\sin x)'=\\cos x,\\quad (\\cos x)'=-\\sin x,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-x5ar19-1\",\"title\":\"导数公式（集中速查）：(tan x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\tan x)'=\\\\sec^2x\"},{\"id\":\"calculus-x5ar19-2\",\"title\":\"导数公式（集中速查）：(cot x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\cot x)'=-\\\\csc^2x\"}]} -->\n\\[\n(\\tan x)'=\\sec^2x,\\quad (\\cot x)'=-\\csc^2x,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-iaaigw-1\",\"title\":\"导数公式（集中速查）：(arcsin x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\arcsin x)'=\\\\frac1{\\\\sqrt{1-x^2}}\"},{\"id\":\"calculus-iaaigw-2\",\"title\":\"导数公式（集中速查）：(arccos x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\arccos x)'=-\\\\frac1{\\\\sqrt{1-x^2}}\"},{\"id\":\"calculus-iaaigw-3\",\"title\":\"导数公式（集中速查）：(arctan x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\arctan x)'=\\\\frac1{1+x^2}\"},{\"id\":\"calculus-iaaigw-4\",\"title\":\"导数公式（集中速查）：(arccotx)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\operatorname{arccot}x)'=-\\\\frac1{1+x^2}\"}]} -->\n\\[\n(\\arcsin x)'=\\frac1{\\sqrt{1-x^2}},\\quad\n(\\arccos x)'=-\\frac1{\\sqrt{1-x^2}},\\quad\n(\\arctan x)'=\\frac1{1+x^2},\\quad\n(\\operatorname{arccot}x)'=-\\frac1{1+x^2}.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1tj2rh6-1\",\"title\":\"导数公式（集中速查）：(sec x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\sec x)'=\\\\sec x\\\\tan x\"},{\"id\":\"calculus-1tj2rh6-2\",\"title\":\"导数公式（集中速查）：(csc x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(\\\\csc x)'=-\\\\csc x\\\\cot x\"}]} -->\n\\[\n(\\sec x)'=\\sec x\\tan x,\\qquad\n(\\csc x)'=-\\csc x\\cot x.\n\\]\n\n<!-- formula {\"id\":\"calculus-1kib2tx\",\"title\":\"导数公式（集中速查）：(log_a x)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n(\\log_a x)'=\\frac1{x\\ln a}\\quad(a>0,a\\ne1).\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1qzsugn-1\",\"title\":\"导数公式（集中速查）：(uv)'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"(uv)'=u'v+uv'\"},{\"id\":\"calculus-1qzsugn-2\",\"title\":\"商的求导法则\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"\\\\left(\\\\frac uv\\\\right)'=\\\\frac{u'v-uv'}{v^2}\"},{\"id\":\"calculus-1qzsugn-3\",\"title\":\"导数公式（集中速查）：[f(g(x))]'\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\",\"latex\":\"[f(g(x))]'=f'(g(x))g'(x)\"}]} -->\n\\[\n(uv)'=u'v+uv',\\qquad\n\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2},\\qquad\n[f(g(x))]'=f'(g(x))g'(x).\n\\]\n\n**隐函数求导**\n\n若 \\(F(x,y)=0\\)，则\n\n<!-- formula {\"id\":\"calculus-apc5ru-1\",\"title\":\"导数公式（集中速查）：y'\",\"aliases\":[],\"context\":\"若 \\\\(F(x,y)=0\\\\)，则\"} -->\n\\[\ny'=-\\frac{F_x}{F_y}\\quad(F_y\\ne0).\n\\]\n\n二阶导数为\n\n<!-- formula {\"id\":\"calculus-3qqfuh-1\",\"title\":\"导数公式（集中速查）：y''\",\"aliases\":[],\"context\":\"二阶导数为\"} -->\n\\[\ny''=-\\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}\\quad(F_y\\ne0).\n\\]\n\n**参数方程求导**\n\n若 \\(x=x(t),y=y(t)\\)，则\n\n<!-- formula {\"id\":\"calculus-llc65g-1\",\"title\":\"导数公式（集中速查）：(dy)/(dx)\",\"aliases\":[],\"context\":\"若 \\\\(x=x(t),y=y(t)\\\\)，则\"} -->\n\\[\n\\frac{dy}{dx}=\\frac{y'(t)}{x'(t)}\\quad(x'(t)\\ne0),\n\\]\n\n<!-- formula {\"id\":\"calculus-12ekmo2\",\"title\":\"导数公式（集中速查）：(d^2y)/(dx^2)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n\\frac{d^2y}{dx^2}\n=\\frac{x'(t)y''(t)-y'(t)x''(t)}{[x'(t)]^3}.\n\\]\n\n更高阶导数继续按\n\n<!-- formula {\"id\":\"calculus-dpxpd2\",\"title\":\"导数公式（集中速查）：(d)/(dx)\",\"aliases\":[],\"context\":\"更高阶导数继续按\"} -->\n\\[\n\\frac{d}{dx}=\\frac1{x'(t)}\\frac{d}{dt}\n\\]\n\n逐阶计算，不能直接把 \\(y(t)\\) 对 \\(t\\) 的高阶导数除以 \\(x(t)\\) 对 \\(t\\) 的高阶导数。\n\n**反函数求导**\n\n<!-- formula {\"id\":\"calculus-11k5gtx-1\",\"title\":\"导数公式（集中速查）：(f^-1)'(y_0)\",\"aliases\":[],\"context\":\"反函数求导\"} -->\n\\[\n(f^{-1})'(y_0)=\\frac1{f'(x_0)},\\qquad y_0=f(x_0).\n\\]\n\n<!-- formula {\"id\":\"calculus-o3i4h9-1\",\"title\":\"导数公式（集中速查）：(d^2x)/(dy^2)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n\\frac{d^2x}{dy^2}=-\\frac{f''(x)}{[f'(x)]^3}\\qquad(f'(x)\\ne0).\n\\]\n\n**幂指函数求导**\n\n幂指函数 \\(y=u(x)^{v(x)}\\) 先取对数：\n\n<!-- formula {\"id\":\"calculus-eakcvu\",\"title\":\"导数公式（集中速查）：fracy'y\",\"aliases\":[],\"context\":\"幂指函数求导\"} -->\n\\[\n\\frac{y'}y=v'\\ln u+v\\frac{u'}u.\n\\]\n\n**极坐标曲线求导**\n\n若曲线由 \\(r=r(\\theta)\\) 给出，即\n\n<!-- formula {\"items\":[{\"id\":\"calculus-hypq8-1\",\"title\":\"导数公式（集中速查）：x\",\"aliases\":[],\"context\":\"若曲线由 \\\\(r=r(\\\\theta)\\\\) 给出，即\",\"latex\":\"x=r(\\\\theta)\\\\cos\\\\theta\"},{\"id\":\"calculus-hypq8-2\",\"title\":\"导数公式（集中速查）：y\",\"aliases\":[],\"context\":\"若曲线由 \\\\(r=r(\\\\theta)\\\\) 给出，即\",\"latex\":\"y=r(\\\\theta)\\\\sin\\\\theta\"}]} -->\n\\[\nx=r(\\theta)\\cos\\theta,\\qquad y=r(\\theta)\\sin\\theta,\n\\]\n\n则\n\n<!-- formula {\"id\":\"calculus-462tma\",\"title\":\"导数公式（集中速查）：(dy)/(dx)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n\\frac{dy}{dx}\n=\\frac{r'(\\theta)\\sin\\theta+r(\\theta)\\cos\\theta}\n{r'(\\theta)\\cos\\theta-r(\\theta)\\sin\\theta},\n\\]\n\n<!-- formula {\"id\":\"calculus-1jfdgh8\",\"title\":\"导数公式（集中速查）：(d^2y)/(dx^2)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n\\frac{d^2y}{dx^2}\n=\\frac{\\displaystyle\\frac{d}{d\\theta}\\!\\left(\\frac{dy}{dx}\\right)}\n{r'(\\theta)\\cos\\theta-r(\\theta)\\sin\\theta}.\n\\]\n\n**高阶导数**\n\n<!-- formula {\"id\":\"calculus-9umh0k\",\"title\":\"导数公式（集中速查）：(uv)^(n)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n(uv)^{(n)}=\\sum_{k=0}^n\\binom nk u^{(k)}v^{(n-k)}.\n\\]\n\n**常用高阶导数公式一览**\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1le32nr-1\",\"title\":\"导数公式（集中速查）：(e^ax+b)^(n)\",\"aliases\":[],\"context\":\"常用高阶导数公式一览\",\"latex\":\"(e^{ax+b})^{(n)}=a^ne^{ax+b}\"},{\"id\":\"calculus-1le32nr-2\",\"title\":\"导数公式（集中速查）：(c^x)^(n)\",\"aliases\":[],\"context\":\"常用高阶导数公式一览\",\"latex\":\"(c^x)^{(n)}=c^x(\\\\ln c)^n\"}]} -->\n\\[\n(e^{ax+b})^{(n)}=a^ne^{ax+b},\\qquad\n(c^x)^{(n)}=c^x(\\ln c)^n,\n\\]\n\n<!-- formula {\"id\":\"calculus-19vks9f\",\"title\":\"导数公式（集中速查）：(xe^x)^(n)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n(xe^x)^{(n)}=(x+n)e^x.\n\\]\n\n<!-- formula {\"id\":\"calculus-je0wpj\",\"title\":\"导数公式（集中速查）：[sin(ax+b)]^(n)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n[\\sin(ax+b)]^{(n)}=a^n\\sin\\!\\left(ax+b+\\frac{n\\pi}{2}\\right),\n\\]\n\n<!-- formula {\"id\":\"calculus-128z7ol\",\"title\":\"导数公式（集中速查）：[cos(ax+b)]^(n)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n[\\cos(ax+b)]^{(n)}=a^n\\cos\\!\\left(ax+b+\\frac{n\\pi}{2}\\right),\n\\]\n\n<!-- formula {\"id\":\"calculus-1c3ic29\",\"title\":\"一次函数倒数的 n 阶导数\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n\\left(\\frac1{ax+b}\\right)^{(n)}=\n\\frac{(-1)^n n!a^n}{(ax+b)^{n+1}},\n\\]\n\n<!-- formula {\"id\":\"calculus-1sqcsqp-1\",\"title\":\"导数公式（集中速查）：[ln(ax+b)]^(n)\",\"aliases\":[],\"context\":\"所属知识点：导数公式（集中速查）。\"} -->\n\\[\n[\\ln(ax+b)]^{(n)}=\n\\frac{(-1)^{n-1}(n-1)!a^n}{(ax+b)^n}\\quad(n\\ge1).\n\\]\n\n对正整数 \\(m\\)：\n\n<!-- formula {\"id\":\"calculus-1d9qm9g\",\"title\":\"导数公式（集中速查）：(x^m)^(n)\",\"aliases\":[],\"context\":\"对正整数 m：\"} -->\n\\[\n(x^m)^{(n)}=\n\\begin{cases}\n\\dfrac{m!}{(m-n)!}x^{m-n},&0\\le n\\le m,\\\\[2mm]\n0,&n>m.\n\\end{cases}\n\\]\n\n有理函数优先拆成简单分式；周期型导数找四阶循环；在一点求高阶导数，可用麦克劳林展开读取系数：若 \\(f(x)=\\sum a_nx^n\\)，则 <!-- formula {\"id\":\"calculus-maclaurin-coefficient-derivative\",\"title\":\"麦克劳林系数求高阶导数\",\"aliases\":[\"泰勒系数\",\"高阶导数读取系数\"],\"context\":\"f(x) 在原点具有麦克劳林展开，a_n 是 x^n 的系数。\"} -->\\(f^{(n)}(0)=n!a_n\\)。",
        "searchText": "导数计算 导数计算 导数计算 导数公式（集中速查） (x^a)'=ax^ a-1 , (e^x)'=e^x, (a^x)'=a^x a, ( x)'= 1x, ( x)'= x, ( x)'=- x, ( x)'= ^2x, ( x)'=- ^2x, ( x)'= 1 1-x^2 , ( x)'=- 1 1-x^2 , ( x)'= 1 1+x^2 , ( arccot x)'=- 1 1+x^2 . ( x)'= x x, ( x)'=- x x. ( a x)'= 1 x a (a 0,a≠1). (uv)'=u'v+uv', ≤ft( uv )'= u'v-uv' v^2 , [f(g(x))]'=f'(g(x))g'(x). 隐函数求导 若 F(x,y)=0，则 y'=- F x F y (F y≠0). 二阶导数为 y''=- F xx +2F xy y'+F yy (y')^2 F y (F y≠0). 参数方程求导 若 x=x(t),y=y(t)，则 dy dx = y'(t) x'(t) (x'(t)≠0), d^2y dx^2 = x'(t)y''(t)-y'(t)x''(t) [x'(t)]^3 . 更高阶导数继续按 d dx = 1 x'(t) d dt 逐阶计算，不能直接把 y(t) 对 t 的高阶导数除以 x(t) 对 t 的高阶导数。 反函数求导 (f^ -1 )'(y 0)= 1 f'(x 0) , y 0=f(x 0). d^2x dy^2 =- f''(x) [f'(x)]^3 (f'(x)≠0). 幂指函数求导 幂指函数 y=u(x)^ v(x) 先取对数： y' y=v' u+v u' u. 极坐标曲线求导 若曲线由 r=r( ) 给出，即 x=r( ) , y=r( ) , 则 dy dx = r'( ) +r( ) r'( ) -r( ) , d^2y dx^2 = d d \\!≤ft( dy dx ) r'( ) -r( ) . 高阶导数 (uv)^ (n) = k=0 ^n nk u^ (k) v^ (n-k) . 常用高阶导数公式一览 (e^ ax+b )^ (n) =a^ne^ ax+b , (c^x)^ (n) =c^x( c)^n, (xe^x)^ (n) =(x+n)e^x. [ (ax+b)]^ (n) =a^n \\!≤ft(ax+b+ n 2 ), [ (ax+b)]^ (n) =a^n \\!≤ft(ax+b+ n 2 ), ≤ft( 1 ax+b )^ (n) = (-1)^n n!a^n (ax+b)^ n+1 , [ (ax+b)]^ (n) = (-1)^ n-1 (n-1)!a^n (ax+b)^n (n≥1). 对正整数 m： (x^m)^ (n) = cases m! (m-n)! x^ m-n ,&0≤ n≤ m,\\\\[2mm] 0,&n m. cases 有理函数优先拆成简单分式；周期型导数找四阶循环；在一点求高阶导数，可用麦克劳林展开读取系数：若 f(x)= a nx^n，则 f^ (n) (0)=n!a n。",
        "summary": "导数公式（集中速查） (x^a)'=ax^ a-1 , (e^x)'=e^x, (a^x)'=a^x a, ( x)'= 1x, ( x)'= x, ( x)'=- x, ( x)'= ^2x, ( x)'=- ^2x, ( x)'= 1 1-x^2 , …",
        "anchors": [
          {
            "id": "anchor-fz2y9u",
            "legacyId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）",
            "searchText": "导数公式（集中速查） (x^a)'=ax^ a-1 , (e^x)'=e^x, (a^x)'=a^x a, ( x)'= 1x, ( x)'= x, ( x)'=- x, ( x)'= ^2x, ( x)'=- ^2x, ( x)'= 1 1-x^2 , ( x)'=- 1 1-x^2 , ( x)'= 1 1+x^2 , ( arccot x)'=- 1 1+x^2 . ( x)'= x x, ( x)'=- x x. ( a x)'= 1 x a (a 0,a≠1). (uv)'=u'v+uv', ≤ft( uv )'= u'v-uv' v^2 , [f(g(x))]'=f'(g(x))g'(x). 隐函数求导 若 F(x,y)=0，则 y'=- F x F y (F y≠0). 二阶导数为 y''=- F xx +2F xy y'+F yy (y')^2 F y (F y≠0). 参数方程求导 若 x=x(t),y=y(t)，则 dy dx = y'(t) x'(t) (x'(t)≠0), d^2y dx^2 = x'(t)y''(t)-y'(t)x''(t) [x'(t)]^3 . 更高阶导数继续按 d dx = 1 x'(t) d dt 逐阶计算，不能直接把 y(t) 对 t 的高阶导数除以 x(t) 对 t 的高阶导数。 反函数求导 (f^ -1 )'(y 0)= 1 f'(x 0) , y 0=f(x 0). d^2x dy^2 =- f''(x) [f'(x)]^3 (f'(x)≠0). 幂指函数求导 幂指函数 y=u(x)^ v(x) 先取对数： y' y=v' u+v u' u. 极坐标曲线求导 若曲线由 r=r( ) 给出，即 x=r( ) , y=r( ) , 则 dy dx = r'( ) +r( ) r'( ) -r( ) , d^2y dx^2 = d d \\!≤ft( dy dx ) r'( ) -r( ) . 高阶导数 (uv)^ (n) = k=0 ^n nk u^ (k) v^ (n-k) . 常用高阶导数公式一览 (e^ ax+b )^ (n) =a^ne^ ax+b , (c^x)^ (n) =c^x( c)^n, (xe^x)^ (n) =(x+n)e^x. [ (ax+b)]^ (n) =a^n \\!≤ft(ax+b+ n 2 ), [ (ax+b)]^ (n) =a^n \\!≤ft(ax+b+ n 2 ), ≤ft( 1 ax+b )^ (n) = (-1)^n n!a^n (ax+b)^ n+1 , [ (ax+b)]^ (n) = (-1)^ n-1 (n-1)!a^n (ax+b)^n (n≥1). 对正整数 m： (x^m)^ (n) = cases m! (m-n)! x^ m-n ,&0≤ n≤ m,\\\\[2mm] 0,&n m. cases 有理函数优先拆成简单分式；周期型导数找四阶循环；在一点求高阶导数，可用麦克劳林展开读取系数：若 f(x)= a nx^n，则 f^ (n) (0)=n!a n。",
            "summary": "(x^a)'=ax^ a-1 , (e^x)'=e^x, (a^x)'=a^x a, ( x)'= 1x, ( x)'= x, ( x)'=- x, ( x)'= ^2x, ( x)'=- ^2x, ( x)'= 1 1-x^2 , ( x)'=- 1 1…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-12isv29-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(x^a)'",
            "latex": "(x^a)'=ax^{a-1}",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 0
          },
          {
            "id": "calculus-12isv29-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(e^x)'",
            "latex": "(e^x)'=e^x",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 1
          },
          {
            "id": "calculus-12isv29-3",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(a^x)'",
            "latex": "(a^x)'=a^x\\ln a",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 2
          },
          {
            "id": "calculus-1e3ytdn-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(ln x)'",
            "latex": "(\\ln x)'=\\frac1x",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 3
          },
          {
            "id": "calculus-1e3ytdn-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(sin x)'",
            "latex": "(\\sin x)'=\\cos x",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 4
          },
          {
            "id": "calculus-1e3ytdn-3",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(cos x)'",
            "latex": "(\\cos x)'=-\\sin x",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 5
          },
          {
            "id": "calculus-x5ar19-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(tan x)'",
            "latex": "(\\tan x)'=\\sec^2x",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 6
          },
          {
            "id": "calculus-x5ar19-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(cot x)'",
            "latex": "(\\cot x)'=-\\csc^2x",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 7
          },
          {
            "id": "calculus-iaaigw-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(arcsin x)'",
            "latex": "(\\arcsin x)'=\\frac1{\\sqrt{1-x^2}}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 8
          },
          {
            "id": "calculus-iaaigw-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(arccos x)'",
            "latex": "(\\arccos x)'=-\\frac1{\\sqrt{1-x^2}}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 9
          },
          {
            "id": "calculus-iaaigw-3",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(arctan x)'",
            "latex": "(\\arctan x)'=\\frac1{1+x^2}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 10
          },
          {
            "id": "calculus-iaaigw-4",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(arccotx)'",
            "latex": "(\\operatorname{arccot}x)'=-\\frac1{1+x^2}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 11
          },
          {
            "id": "calculus-1tj2rh6-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(sec x)'",
            "latex": "(\\sec x)'=\\sec x\\tan x",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 12
          },
          {
            "id": "calculus-1tj2rh6-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(csc x)'",
            "latex": "(\\csc x)'=-\\csc x\\cot x",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 13
          },
          {
            "id": "calculus-1kib2tx",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(log_a x)'",
            "latex": "(\\log_a x)'=\\frac1{x\\ln a}\\quad(a>0,a\\ne1).",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 14
          },
          {
            "id": "calculus-1qzsugn-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(uv)'",
            "latex": "(uv)'=u'v+uv'",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 15
          },
          {
            "id": "calculus-1qzsugn-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "商的求导法则",
            "latex": "\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 16
          },
          {
            "id": "calculus-1qzsugn-3",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：[f(g(x))]'",
            "latex": "[f(g(x))]'=f'(g(x))g'(x)",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 17
          },
          {
            "id": "calculus-apc5ru-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：y'",
            "latex": "y'=-\\frac{F_x}{F_y}\\quad(F_y\\ne0).",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "若 \\(F(x,y)=0\\)，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 18
          },
          {
            "id": "calculus-3qqfuh-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：y''",
            "latex": "y''=-\\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}\\quad(F_y\\ne0).",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "二阶导数为",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 19
          },
          {
            "id": "calculus-llc65g-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(dy)/(dx)",
            "latex": "\\frac{dy}{dx}=\\frac{y'(t)}{x'(t)}\\quad(x'(t)\\ne0),",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "若 \\(x=x(t),y=y(t)\\)，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 20
          },
          {
            "id": "calculus-12ekmo2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(d^2y)/(dx^2)",
            "latex": "\\frac{d^2y}{dx^2}\n=\\frac{x'(t)y''(t)-y'(t)x''(t)}{[x'(t)]^3}.",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 21
          },
          {
            "id": "calculus-dpxpd2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(d)/(dx)",
            "latex": "\\frac{d}{dx}=\\frac1{x'(t)}\\frac{d}{dt}",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "更高阶导数继续按",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 22
          },
          {
            "id": "calculus-11k5gtx-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(f^-1)'(y_0)",
            "latex": "(f^{-1})'(y_0)=\\frac1{f'(x_0)},\\qquad y_0=f(x_0).",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "反函数求导",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 23
          },
          {
            "id": "calculus-o3i4h9-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(d^2x)/(dy^2)",
            "latex": "\\frac{d^2x}{dy^2}=-\\frac{f''(x)}{[f'(x)]^3}\\qquad(f'(x)\\ne0).",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 24
          },
          {
            "id": "calculus-eakcvu",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：fracy'y",
            "latex": "\\frac{y'}y=v'\\ln u+v\\frac{u'}u.",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "幂指函数求导",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 25
          },
          {
            "id": "calculus-hypq8-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：x",
            "latex": "x=r(\\theta)\\cos\\theta",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "若曲线由 \\(r=r(\\theta)\\) 给出，即",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 26
          },
          {
            "id": "calculus-hypq8-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：y",
            "latex": "y=r(\\theta)\\sin\\theta",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "若曲线由 \\(r=r(\\theta)\\) 给出，即",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 27
          },
          {
            "id": "calculus-462tma",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(dy)/(dx)",
            "latex": "\\frac{dy}{dx}\n=\\frac{r'(\\theta)\\sin\\theta+r(\\theta)\\cos\\theta}\n{r'(\\theta)\\cos\\theta-r(\\theta)\\sin\\theta},",
            "sourceBlockIndex": 24,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 28
          },
          {
            "id": "calculus-1jfdgh8",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(d^2y)/(dx^2)",
            "latex": "\\frac{d^2y}{dx^2}\n=\\frac{\\displaystyle\\frac{d}{d\\theta}\\!\\left(\\frac{dy}{dx}\\right)}\n{r'(\\theta)\\cos\\theta-r(\\theta)\\sin\\theta}.",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 29
          },
          {
            "id": "calculus-9umh0k",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(uv)^(n)",
            "latex": "(uv)^{(n)}=\\sum_{k=0}^n\\binom nk u^{(k)}v^{(n-k)}.",
            "sourceBlockIndex": 26,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 30
          },
          {
            "id": "calculus-1le32nr-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(e^ax+b)^(n)",
            "latex": "(e^{ax+b})^{(n)}=a^ne^{ax+b}",
            "sourceBlockIndex": 27,
            "searchAliases": [],
            "context": "常用高阶导数公式一览",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 31
          },
          {
            "id": "calculus-1le32nr-2",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(c^x)^(n)",
            "latex": "(c^x)^{(n)}=c^x(\\ln c)^n",
            "sourceBlockIndex": 27,
            "searchAliases": [],
            "context": "常用高阶导数公式一览",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 32
          },
          {
            "id": "calculus-19vks9f",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(xe^x)^(n)",
            "latex": "(xe^x)^{(n)}=(x+n)e^x.",
            "sourceBlockIndex": 28,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 33
          },
          {
            "id": "calculus-je0wpj",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：[sin(ax+b)]^(n)",
            "latex": "[\\sin(ax+b)]^{(n)}=a^n\\sin\\!\\left(ax+b+\\frac{n\\pi}{2}\\right),",
            "sourceBlockIndex": 29,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 34
          },
          {
            "id": "calculus-128z7ol",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：[cos(ax+b)]^(n)",
            "latex": "[\\cos(ax+b)]^{(n)}=a^n\\cos\\!\\left(ax+b+\\frac{n\\pi}{2}\\right),",
            "sourceBlockIndex": 30,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 35
          },
          {
            "id": "calculus-1c3ic29",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "一次函数倒数的 n 阶导数",
            "latex": "\\left(\\frac1{ax+b}\\right)^{(n)}=\n\\frac{(-1)^n n!a^n}{(ax+b)^{n+1}},",
            "sourceBlockIndex": 31,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 36
          },
          {
            "id": "calculus-1sqcsqp-1",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：[ln(ax+b)]^(n)",
            "latex": "[\\ln(ax+b)]^{(n)}=\n\\frac{(-1)^{n-1}(n-1)!a^n}{(ax+b)^n}\\quad(n\\ge1).",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "所属知识点：导数公式（集中速查）。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 37
          },
          {
            "id": "calculus-1d9qm9g",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "导数公式（集中速查）：(x^m)^(n)",
            "latex": "(x^m)^{(n)}=\n\\begin{cases}\n\\dfrac{m!}{(m-n)!}x^{m-n},&0\\le n\\le m,\\\\[2mm]\n0,&n>m.\n\\end{cases}",
            "sourceBlockIndex": 34,
            "searchAliases": [],
            "context": "对正整数 m：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 38
          },
          {
            "id": "calculus-maclaurin-coefficient-derivative",
            "parentAnchorId": "anchor-fz2y9u",
            "legacyParentAnchorId": "calculus-02-002-anchor-001",
            "title": "麦克劳林系数求高阶导数",
            "latex": "f^{(n)}(0)=n!a_n",
            "sourceBlockIndex": 36,
            "searchAliases": [
              "泰勒系数",
              "高阶导数读取系数"
            ],
            "context": "f(x) 在原点具有麦克劳林展开，a_n 是 x^n 的系数。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-002",
            "order": 39
          }
        ]
      },
      {
        "id": "calculus-02-003",
        "title": "导数应用",
        "body": "##### 切线、法线、竖直切线与渐近线\n\n曲线 \\(y=f(x)\\) 在 \\((x_0,y_0)\\) 的切线：\n\n<!-- formula {\"id\":\"calculus-mjfx56\",\"title\":\"切线、法线、竖直切线与渐近线：y-y_0\",\"aliases\":[],\"context\":\"曲线 \\\\(y=f(x)\\\\) 在 \\\\((x_0,y_0)\\\\) 的切线：\"} -->\n\\[\ny-y_0=f'(x_0)(x-x_0).\n\\]\n\n当 \\(f'(x_0)\\ne0\\) 时，法线斜率为 \\(-\\frac1{f'(x_0)}\\)。渐近线公式见极限章；参数方程先把 \\(t\\to t_0\\) 对应成 \\(x\\to\\pm\\infty\\) 或有限点。\n\n若\n\n<!-- formula {\"id\":\"calculus-1hif4v8\",\"title\":\"切线、法线、竖直切线与渐近线：lim_xto x_0|f'(x)|\",\"aliases\":[],\"context\":\"所属知识点：切线、法线、竖直切线与渐近线。\"} -->\n\\[\n\\lim_{x\\to x_0}|f'(x)|=+\\infty,\n\\]\n\n且曲线经过 \\((x_0,f(x_0))\\)，则 \\(x=x_0\\) 是竖直切线。参数曲线在 \\(t=t_0\\) 处若 \\(x'(t_0)=0\\)、\\(y'(t_0)\\ne0\\)，通常也是竖直切线候选。\n\n##### 两曲线相切与水平切线的法线\n\n两条可写成 \\(y=f(x)\\)、\\(y=g(x)\\) 且在同一点可导的曲线，在 \\(x=x_0\\) 处相切要同时满足 \\(f(x_0)=g(x_0)\\) 和 \\(f'(x_0)=g'(x_0)\\)；不能只比较斜率。若 \\(f'(x_0)=0\\)，则切线为 \\(y=f(x_0)\\)，法线为 \\(x=x_0\\)。\n\n##### 函数单调性判定公式与结论\n\n设 \\(f\\) 在区间 \\(I\\) 内可导：\n\n<!-- formula {\"id\":\"calculus-1nrxrts\",\"title\":\"函数单调性判定公式与结论：f'(x)\",\"aliases\":[],\"context\":\"设 f 在区间 I 内可导：\"} -->\n\\[\nf'(x)>0\\Longrightarrow f(x)\\text{ 在 }I\\text{ 内严格递增},\n\\]\n\n<!-- formula {\"id\":\"calculus-xwphy7\",\"title\":\"函数单调性判定公式与结论：f'(x)\",\"aliases\":[],\"context\":\"所属知识点：函数单调性判定公式与结论。\"} -->\n\\[\nf'(x)<0\\Longrightarrow f(x)\\text{ 在 }I\\text{ 内严格递减}.\n\\]\n\n若 \\(f'(x)\\ge0\\)，则 \\(f\\) 单调不减；若 \\(f'(x)\\le0\\)，则 \\(f\\) 单调不增。进一步地，若 \\(f'(x)\\ge0\\)，且 \\(f'\\) 在任意小区间内都不恒为零，则 \\(f\\) 严格递增；递减情形同理。\n\n反过来，若 \\(f\\) 在 \\(I\\) 内可导且严格递增，只能推出\n\n<!-- formula {\"id\":\"calculus-iu5xml\",\"title\":\"函数单调性判定公式与结论：f'(x)\",\"aliases\":[],\"context\":\"反过来，若 f 在 I 内可导且严格递增，只能推出\"} -->\n\\[\nf'(x)\\ge0,\n\\]\n\n不能推出处处 \\(f'(x)>0\\)。严格递减时只能推出 \\(f'(x)\\le0\\)。\n\n用导数划分单调区间时，把 \\(f'(x)=0\\) 的点和 \\(f'\\) 不存在的点共同作为分界点，再判断每个区间内 \\(f'\\) 的符号。\n\n##### 极值点、驻点与不可导点\n\n若存在 \\(x_0\\) 的一个邻域，使邻域内恒有\n\n<!-- formula {\"id\":\"calculus-fxg9oj\",\"title\":\"极值点、驻点与不可导点：f(x)\",\"aliases\":[],\"context\":\"若存在 x_0 的一个邻域，使邻域内恒有\"} -->\n\\[\nf(x)\\le f(x_0),\n\\]\n\n则 \\(x_0\\) 为极大值点；把不等号反向即为极小值点。\n\n满足 \\(f'(x_0)=0\\) 的点叫驻点。极值可能出现在驻点，也可能出现在不可导点；驻点不一定是极值点。\n\n**费马定理**　若 \\(x_0\\) 是定义域内部的极值点，且 \\(f\\) 在 \\(x_0\\) 可导，则\n\n<!-- formula {\"id\":\"calculus-10idxlx\",\"title\":\"极值点、驻点与不可导点：f'(x_0)\",\"aliases\":[],\"context\":\"费马定理　若 x_0 是定义域内部的极值点，且 f 在 x_0 可导，则\"} -->\n\\[\nf'(x_0)=0.\n\\]\n\n这是极值的必要条件，不是充分条件。\n\n##### 极值的第一充分条件\n\n设 \\(f\\) 在 \\(x_0\\) 连续，并在 \\(x_0\\) 的左右邻域内可导：\n\n- \\(f'\\) 由正变负：\\(x_0\\) 为极大值点；\n- \\(f'\\) 由负变正：\\(x_0\\) 为极小值点；\n- \\(f'\\) 左右不变号：\\(x_0\\) 不是极值点。\n\n这个判别既能检查驻点，也能检查导数不存在的点。\n\n##### 极值的第二充分条件\n\n若 \\(f'(x_0)=0\\)，且 \\(f''(x_0)\\ne0\\)，则\n\n<!-- formula {\"id\":\"calculus-1pyb29e\",\"title\":\"极值的第二充分条件：f''(x_0)\",\"aliases\":[],\"context\":\"若 \\\\(f'(x_0)=0\\\\)，且 \\\\(f''(x_0)\\\\ne0\\\\)，则\"} -->\n\\[\nf''(x_0)>0\\Longrightarrow x_0\\text{ 为极小值点},\n\\]\n\n<!-- formula {\"id\":\"calculus-2nsizu\",\"title\":\"极值的第二充分条件：f''(x_0)\",\"aliases\":[],\"context\":\"所属知识点：极值的第二充分条件。\"} -->\n\\[\nf''(x_0)<0\\Longrightarrow x_0\\text{ 为极大值点}.\n\\]\n\n当 \\(f''(x_0)=0\\) 或不存在时，第二充分条件失效，不能据此判定没有极值，应改查 \\(f'\\) 的变号情况或使用高阶导数。\n\n##### 极值的高阶导数判别\n\n若 \\(f\\) 在 \\(x_0\\) 附近具有足够阶导数，且\n\n<!-- formula {\"id\":\"calculus-skru0u-1\",\"title\":\"极值的高阶导数判别：f'(x_0)\",\"aliases\":[],\"context\":\"若 f 在 x_0 附近具有足够阶导数，且\"} -->\n\\[\nf'(x_0)=f''(x_0)=\\cdots=f^{(n-1)}(x_0)=0,\n\\qquad f^{(n)}(x_0)\\ne0,\n\\]\n\n则：\n\n- \\(n\\) 为偶数且 \\(f^{(n)}(x_0)>0\\)：极小值；\n- \\(n\\) 为偶数且 \\(f^{(n)}(x_0)<0\\)：极大值；\n- \\(n\\) 为奇数：不是极值点。\n\n##### 闭区间最值判定\n\n连续函数在闭区间 \\([a,b]\\) 上一定能取得最大值和最小值。依次计算并比较：\n\n1. 区间内部所有驻点的函数值；\n2. 区间内部所有不可导点的函数值；\n3. 两个端点 \\(f(a),f(b)\\)。\n\n其中最大者为最大值，最小者为最小值。端点参与最值比较，但费马定理只适用于定义域内部的可导极值点。\n\n若 \\(f'(x)>0\\) 在 \\((a,b)\\) 内恒成立，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1lduaky-1\",\"title\":\"闭区间最值判定：min_[a,b]f(x)\",\"aliases\":[],\"context\":\"若 \\\\(f'(x)>0\\\\) 在 \\\\((a,b)\\\\) 内恒成立，则\",\"latex\":\"\\\\min_{[a,b]}f(x)=f(a)\"},{\"id\":\"calculus-1lduaky-2\",\"title\":\"闭区间最值判定：max_[a,b]f(x)\",\"aliases\":[],\"context\":\"若 \\\\(f'(x)>0\\\\) 在 \\\\((a,b)\\\\) 内恒成立，则\",\"latex\":\"\\\\max_{[a,b]}f(x)=f(b)\"}]} -->\n\\[\n\\min_{[a,b]}f(x)=f(a),\\qquad \\max_{[a,b]}f(x)=f(b);\n\\]\n\n若 \\(f'(x)<0\\)，两端点结论交换。\n\n##### 端点最值与单侧导数必要条件\n\n若 \\(f\\) 在 \\([a,b]\\) 上连续且相应单侧导数存在，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-10g1p8j-1\",\"title\":\"端点最值与单侧导数必要条件：f(a) 为局部最大值Longrightarrow f'_+(a)\",\"aliases\":[],\"context\":\"若 f 在 [a,b] 上连续且相应单侧导数存在，则\",\"latex\":\"f(a)\\\\text{ 为局部最大值}\\\\Longrightarrow f'_+(a)\\\\le0\"},{\"id\":\"calculus-10g1p8j-2\",\"title\":\"端点最值与单侧导数必要条件：f(a) 为局部最小值Longrightarrow f'_+(a)\",\"aliases\":[],\"context\":\"若 f 在 [a,b] 上连续且相应单侧导数存在，则\",\"latex\":\"f(a)\\\\text{ 为局部最小值}\\\\Longrightarrow f'_+(a)\\\\ge0\"}]} -->\n\\[\nf(a)\\text{ 为局部最大值}\\Longrightarrow f'_+(a)\\le0,\n\\qquad\nf(a)\\text{ 为局部最小值}\\Longrightarrow f'_+(a)\\ge0,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-4ls1fp-1\",\"title\":\"端点最值与单侧导数必要条件：f(b) 为局部最大值Longrightarrow f'_-(b)\",\"aliases\":[],\"context\":\"所属知识点：端点最值与单侧导数必要条件。\",\"latex\":\"f(b)\\\\text{ 为局部最大值}\\\\Longrightarrow f'_-(b)\\\\ge0\"},{\"id\":\"calculus-4ls1fp-2\",\"title\":\"端点最值与单侧导数必要条件：f(b) 为局部最小值Longrightarrow f'_-(b)\",\"aliases\":[],\"context\":\"所属知识点：端点最值与单侧导数必要条件。\",\"latex\":\"f(b)\\\\text{ 为局部最小值}\\\\Longrightarrow f'_-(b)\\\\le0\"}]} -->\n\\[\nf(b)\\text{ 为局部最大值}\\Longrightarrow f'_-(b)\\ge0,\n\\qquad\nf(b)\\text{ 为局部最小值}\\Longrightarrow f'_-(b)\\le0.\n\\]\n\n##### 函数凹凸性判定与切线弦线结论\n\n设 \\(f\\) 在区间 \\(I\\) 内二阶可导：\n\n<!-- formula {\"id\":\"calculus-convex-up\",\"title\":\"二阶导数大于零：图形向上弯\",\"aliases\":[\"凹凸性\",\"二阶导数大于零\",\"f''(x)>0\",\"凸函数\",\"图形向上弯\"],\"context\":\"在区间内二阶可导且二阶导数大于零时，导函数递增，图形向上弯。\"} -->\n\\[\nf''(x)>0\\Longrightarrow f'(x)\\text{ 递增，图形向上弯},\n\\]\n\n<!-- formula {\"id\":\"calculus-convex-down\",\"title\":\"二阶导数小于零：图形向下弯\",\"aliases\":[\"凹凸性\",\"二阶导数小于零\",\"f''(x)<0\",\"凹函数\",\"图形向下弯\"],\"context\":\"在区间内二阶可导且二阶导数小于零时，导函数递减，图形向下弯。\"} -->\n\\[\nf''(x)<0\\Longrightarrow f'(x)\\text{ 递减，图形向下弯}.\n\\]\n\n图形向上弯时，图形在任一点切线的上方、任意两点弦线的下方：\n\n<!-- formula {\"id\":\"calculus-convex-tangent\",\"title\":\"凸函数的切线不等式\",\"aliases\":[\"凹凸性\",\"切线在图像下方\",\"图像在切线上方\",\"切线弦线\",\"切线不等式\"],\"context\":\"图形向上弯时，函数图像在任一点切线的上方。\"} -->\n\\[\nf(x)\\ge f(x_0)+f'(x_0)(x-x_0),\n\\]\n\n<!-- formula {\"id\":\"calculus-convex-chord\",\"title\":\"凸函数的弦线不等式\",\"aliases\":[\"凹凸性\",\"弦线在图像上方\",\"图像在弦线下方\",\"弦线不等式\"],\"context\":\"图形向上弯时，函数图像在任意两点之间弦线的下方。\"} -->\n\\[\nf(\\lambda x_1+(1-\\lambda)x_2)\n\\le \\lambda f(x_1)+(1-\\lambda)f(x_2),\\qquad 0\\le\\lambda\\le1.\n\\]\n\n图形向下弯时，上述两个不等号全部反向。若只知道 \\(f''\\ge0\\) 或 \\(f''\\le0\\)，相应结论仍成立，但不一定严格。\n\n##### 拐点判定公式与结论\n\n拐点是曲线上凹凸方向发生改变的点，写作曲线上的点 \\((x_0,f(x_0))\\)，不能只写横坐标 \\(x_0\\)。候选点包括：\n\n- \\(f''(x_0)=0\\) 的点；\n- \\(f''(x_0)\\) 不存在但 \\(f(x_0)\\) 有定义且曲线连续的点。\n\n候选点只有在左右两侧 \\(f''\\) 异号，即凹凸方向确实改变时，才是拐点。仅有 \\(f''(x_0)=0\\) 不能直接判为拐点。\n\n若\n\n<!-- formula {\"id\":\"calculus-14eoqzk-1\",\"title\":\"拐点判定公式与结论：f''(x_0)\",\"aliases\":[],\"context\":\"候选点只有在左右两侧 f'' 异号，即凹凸方向确实改变时，才是拐点。仅有 \\\\(f''(x_0)=0\\\\) 不能直接判为拐点。\"} -->\n\\[\nf''(x_0)=f'''(x_0)=\\cdots=f^{(n-1)}(x_0)=0,\n\\qquad f^{(n)}(x_0)\\ne0\\quad(n\\ge3),\n\\]\n\n则 \\(n\\) 为奇数时 \\((x_0,f(x_0))\\) 是拐点，\\(n\\) 为偶数时不是拐点。\n\n参数方程、隐函数给出的曲线，先求 \\(\\frac{d^2y}{dx^2}\\)，再按其左右符号判断；不能直接使用 \\(\\frac{d^2y}{dt^2}\\) 的符号。\n\n##### 奇偶函数与周期函数的导数结论\n\n若可导函数为奇函数，则其导函数为偶函数；若可导函数为偶函数，则其导函数为奇函数。若 \\(f\\) 可导且以 \\(T\\) 为周期，则\n\n<!-- formula {\"id\":\"calculus-1jooq66\",\"title\":\"奇偶函数与周期函数的导数结论：f'(x+T)\",\"aliases\":[],\"context\":\"若可导函数为奇函数，则其导函数为偶函数；若可导函数为偶函数，则其导函数为奇函数。若 f 可导且以 T 为周期，则\"} -->\n\\[\nf'(x+T)=f'(x),\n\\]\n\n因此 \\(T\\) 也是 \\(f'\\) 的周期，但未必是 \\(f'\\) 的最小正周期。\n\n##### 曲率\n\n<!-- formula {\"items\":[{\"id\":\"calculus-sbm3mh-1\",\"title\":\"曲率：K\",\"aliases\":[],\"context\":\"所属知识点：曲率。\",\"latex\":\"K=\\\\frac{|y''|}{[1+(y')^2]^{\\\\frac32}}\"},{\"id\":\"calculus-sbm3mh-2\",\"title\":\"曲率：rho\",\"aliases\":[],\"context\":\"所属知识点：曲率。\",\"latex\":\"\\\\rho=\\\\frac1K\"}]} -->\n\\[\nK=\\frac{|y''|}{[1+(y')^2]^{\\frac32}},\\qquad \\rho=\\frac1K.\n\\]\n\n参数方程：\n\n<!-- formula {\"id\":\"calculus-zgez16\",\"title\":\"曲率：K\",\"aliases\":[],\"context\":\"参数方程：\"} -->\n\\[\nK=\\frac{|x'y''-y'x''|}{[(x')^2+(y')^2]^{\\frac32}}.\n\\]\n\n曲线 \\(y=f(x)\\) 在 \\(y''\\ne0\\) 处的曲率圆圆心为\n\n<!-- formula {\"items\":[{\"id\":\"calculus-hemipr-1\",\"title\":\"曲率：X\",\"aliases\":[],\"context\":\"曲线 \\\\(y=f(x)\\\\) 在 y''\\\\ne0 处的曲率圆圆心为\",\"latex\":\"X=x-\\\\frac{y'(1+y'^2)}{y''}\"},{\"id\":\"calculus-hemipr-2\",\"title\":\"曲率：Y\",\"aliases\":[],\"context\":\"曲线 \\\\(y=f(x)\\\\) 在 y''\\\\ne0 处的曲率圆圆心为\",\"latex\":\"Y=y+\\\\frac{1+y'^2}{y''}\"}]} -->\n\\[\nX=x-\\frac{y'(1+y'^2)}{y''},\n\\qquad\nY=y+\\frac{1+y'^2}{y''}.\n\\]\n\n##### 利用导数证明不等式与判断方程根的个数\n\n根的个数先把方程改写成 \\(F(x)=0\\)，再用单调区间、极值和端点符号确定。证明 \\(f(x)\\ge0\\) 常设差函数，找最小值；证明两边大小也可比较导数并结合一个已知点。",
        "searchText": "导数应用 导数应用 导数应用 切线、法线、竖直切线与渐近线 曲线 y=f(x) 在 (x 0,y 0) 的切线： y-y 0=f'(x 0)(x-x 0). 当 f'(x 0)≠0 时，法线斜率为 - 1 f'(x 0) 。渐近线公式见极限章；参数方程先把 t t 0 对应成 x 或有限点。 若 x x 0 f'(x) =+ , 且曲线经过 (x 0,f(x 0))，则 x=x 0 是竖直切线。参数曲线在 t=t 0 处若 x'(t 0)=0、y'(t 0)≠0，通常也是竖直切线候选。 两曲线相切与水平切线的法线 两条可写成 y=f(x)、y=g(x) 且在同一点可导的曲线，在 x=x 0 处相切要同时满足 f(x 0)=g(x 0) 和 f'(x 0)=g'(x 0)；不能只比较斜率。若 f'(x 0)=0，则切线为 y=f(x 0)，法线为 x=x 0。 函数单调性判定公式与结论 设 f 在区间 I 内可导： f'(x) 0 ⇒ f(x) 在 I 内严格递增, f'(x)<0 ⇒ f(x) 在 I 内严格递减. 若 f'(x)≥0，则 f 单调不减；若 f'(x)≤0，则 f 单调不增。进一步地，若 f'(x)≥0，且 f' 在任意小区间内都不恒为零，则 f 严格递增；递减情形同理。 反过来，若 f 在 I 内可导且严格递增，只能推出 f'(x)≥0, 不能推出处处 f'(x) 0。严格递减时只能推出 f'(x)≤0。 用导数划分单调区间时，把 f'(x)=0 的点和 f' 不存在的点共同作为分界点，再判断每个区间内 f' 的符号。 极值点、驻点与不可导点 若存在 x 0 的一个邻域，使邻域内恒有 f(x)≤ f(x 0), 则 x 0 为极大值点；把不等号反向即为极小值点。 满足 f'(x 0)=0 的点叫驻点。极值可能出现在驻点，也可能出现在不可导点；驻点不一定是极值点。 费马定理 若 x 0 是定义域内部的极值点，且 f 在 x 0 可导，则 f'(x 0)=0. 这是极值的必要条件，不是充分条件。 极值的第一充分条件 设 f 在 x 0 连续，并在 x 0 的左右邻域内可导： f' 由正变负：x 0 为极大值点； f' 由负变正：x 0 为极小值点； f' 左右不变号：x 0 不是极值点。 这个判别既能检查驻点，也能检查导数不存在的点。 极值的第二充分条件 若 f'(x 0)=0，且 f''(x 0)≠0，则 f''(x 0) 0 ⇒ x 0 为极小值点, f''(x 0)<0 ⇒ x 0 为极大值点. 当 f''(x 0)=0 或不存在时，第二充分条件失效，不能据此判定没有极值，应改查 f' 的变号情况或使用高阶导数。 极值的高阶导数判别 若 f 在 x 0 附近具有足够阶导数，且 f'(x 0)=f''(x 0)= =f^ (n-1) (x 0)=0, f^ (n) (x 0)≠0, 则： n 为偶数且 f^ (n) (x 0) 0：极小值； n 为偶数且 f^ (n) (x 0)<0：极大值； n 为奇数：不是极值点。 闭区间最值判定 连续函数在闭区间 [a,b] 上一定能取得最大值和最小值。依次计算并比较： 区间内部所有驻点的函数值； 区间内部所有不可导点的函数值； 两个端点 f(a),f(b)。 其中最大者为最大值，最小者为最小值。端点参与最值比较，但费马定理只适用于定义域内部的可导极值点。 若 f'(x) 0 在 (a,b) 内恒成立，则 [a,b] f(x)=f(a), [a,b] f(x)=f(b); 若 f'(x)<0，两端点结论交换。 端点最值与单侧导数必要条件 若 f 在 [a,b] 上连续且相应单侧导数存在，则 f(a) 为局部最大值 ⇒ f' +(a)≤0, f(a) 为局部最小值 ⇒ f' +(a)≥0, f(b) 为局部最大值 ⇒ f' -(b)≥0, f(b) 为局部最小值 ⇒ f' -(b)≤0. 函数凹凸性判定与切线弦线结论 设 f 在区间 I 内二阶可导： f''(x) 0 ⇒ f'(x) 递增，图形向上弯, f''(x)<0 ⇒ f'(x) 递减，图形向下弯. 图形向上弯时，图形在任一点切线的上方、任意两点弦线的下方： f(x)≥ f(x 0)+f'(x 0)(x-x 0), f( x 1+(1- )x 2) ≤ f(x 1)+(1- )f(x 2), 0≤ ≤1. 图形向下弯时，上述两个不等号全部反向。若只知道 f''≥0 或 f''≤0，相应结论仍成立，但不一定严格。 拐点判定公式与结论 拐点是曲线上凹凸方向发生改变的点，写作曲线上的点 (x 0,f(x 0))，不能只写横坐标 x 0。候选点包括： f''(x 0)=0 的点； f''(x 0) 不存在但 f(x 0) 有定义且曲线连续的点。 候选点只有在左右两侧 f'' 异号，即凹凸方向确实改变时，才是拐点。仅有 f''(x 0)=0 不能直接判为拐点。 若 f''(x 0)=f'''(x 0)= =f^ (n-1) (x 0)=0, f^ (n) (x 0)≠0 (n≥3), 则 n 为奇数时 (x 0,f(x 0)) 是拐点，n 为偶数时不是拐点。 参数方程、隐函数给出的曲线，先求 d^2y dx^2 ，再按其左右符号判断；不能直接使用 d^2y dt^2 的符号。 奇偶函数与周期函数的导数结论 若可导函数为奇函数，则其导函数为偶函数；若可导函数为偶函数，则其导函数为奇函数。若 f 可导且以 T 为周期，则 f'(x+T)=f'(x), 因此 T 也是 f' 的周期，但未必是 f' 的最小正周期。 曲率 K= y'' [1+(y')^2]^ 32 , = 1K. 参数方程： K= x'y''-y'x'' [(x')^2+(y')^2]^ 32 . 曲线 y=f(x) 在 y''≠0 处的曲率圆圆心为 X=x- y'(1+y'^2) y'' , Y=y+ 1+y'^2 y'' . 利用导数证明不等式与判断方程根的个数 根的个数先把方程改写成 F(x)=0，再用单调区间、极值和端点符号确定。证明 f(x)≥0 常设差函数，找最小值；证明两边大小也可比较导数并结合一个已知点。",
        "summary": "切线、法线、竖直切线与渐近线 曲线 y=f(x) 在 (x 0,y 0) 的切线： y-y 0=f'(x 0)(x-x 0). 当 f'(x 0)≠0 时，法线斜率为 - 1 f'(x 0) 。渐近线公式见极限章；参数方程先把 t t 0 对应成 x 或有…",
        "anchors": [
          {
            "id": "anchor-1ewqz1p",
            "legacyId": "calculus-02-003-anchor-001",
            "title": "切线、法线、竖直切线与渐近线",
            "searchText": "切线、法线、竖直切线与渐近线 曲线 y=f(x) 在 (x 0,y 0) 的切线： y-y 0=f'(x 0)(x-x 0). 当 f'(x 0)≠0 时，法线斜率为 - 1 f'(x 0) 。渐近线公式见极限章；参数方程先把 t t 0 对应成 x 或有限点。 若 x x 0 f'(x) =+ , 且曲线经过 (x 0,f(x 0))，则 x=x 0 是竖直切线。参数曲线在 t=t 0 处若 x'(t 0)=0、y'(t 0)≠0，通常也是竖直切线候选。",
            "summary": "曲线 y=f(x) 在 (x 0,y 0) 的切线： y-y 0=f'(x 0)(x-x 0). 当 f'(x 0)≠0 时，法线斜率为 - 1 f'(x 0) 。渐近线公式见极限章；参数方程先把 t t 0 对应成 x 或有限点。 若 x x 0 f'(…"
          },
          {
            "id": "anchor-kv1rg4",
            "legacyId": "calculus-02-003-anchor-002",
            "title": "两曲线相切与水平切线的法线",
            "searchText": "两曲线相切与水平切线的法线 两条可写成 y=f(x)、y=g(x) 且在同一点可导的曲线，在 x=x 0 处相切要同时满足 f(x 0)=g(x 0) 和 f'(x 0)=g'(x 0)；不能只比较斜率。若 f'(x 0)=0，则切线为 y=f(x 0)，法线为 x=x 0。",
            "summary": "两条可写成 y=f(x)、y=g(x) 且在同一点可导的曲线，在 x=x 0 处相切要同时满足 f(x 0)=g(x 0) 和 f'(x 0)=g'(x 0)；不能只比较斜率。若 f'(x 0)=0，则切线为 y=f(x 0)，法线为 x=x 0。"
          },
          {
            "id": "anchor-6zol1r",
            "legacyId": "calculus-02-003-anchor-003",
            "title": "函数单调性判定公式与结论",
            "searchText": "函数单调性判定公式与结论 设 f 在区间 I 内可导： f'(x) 0 ⇒ f(x) 在 I 内严格递增, f'(x)<0 ⇒ f(x) 在 I 内严格递减. 若 f'(x)≥0，则 f 单调不减；若 f'(x)≤0，则 f 单调不增。进一步地，若 f'(x)≥0，且 f' 在任意小区间内都不恒为零，则 f 严格递增；递减情形同理。 反过来，若 f 在 I 内可导且严格递增，只能推出 f'(x)≥0, 不能推出处处 f'(x) 0。严格递减时只能推出 f'(x)≤0。 用导数划分单调区间时，把 f'(x)=0 的点和 f' 不存在的点共同作为分界点，再判断每个区间内 f' 的符号。",
            "summary": "设 f 在区间 I 内可导： f'(x) 0 ⇒ f(x) 在 I 内严格递增, f'(x)<0 ⇒ f(x) 在 I 内严格递减. 若 f'(x)≥0，则 f 单调不减；若 f'(x)≤0，则 f 单调不增。进一步地，若 f'(x)≥0，且 f' 在任意…"
          },
          {
            "id": "anchor-1neg0u9",
            "legacyId": "calculus-02-003-anchor-004",
            "title": "极值点、驻点与不可导点",
            "searchText": "极值点、驻点与不可导点 若存在 x 0 的一个邻域，使邻域内恒有 f(x)≤ f(x 0), 则 x 0 为极大值点；把不等号反向即为极小值点。 满足 f'(x 0)=0 的点叫驻点。极值可能出现在驻点，也可能出现在不可导点；驻点不一定是极值点。 费马定理 若 x 0 是定义域内部的极值点，且 f 在 x 0 可导，则 f'(x 0)=0. 这是极值的必要条件，不是充分条件。",
            "summary": "若存在 x 0 的一个邻域，使邻域内恒有 f(x)≤ f(x 0), 则 x 0 为极大值点；把不等号反向即为极小值点。 满足 f'(x 0)=0 的点叫驻点。极值可能出现在驻点，也可能出现在不可导点；驻点不一定是极值点。 费马定理 若 x 0 是定义域内…"
          },
          {
            "id": "anchor-h2faya",
            "legacyId": "calculus-02-003-anchor-005",
            "title": "极值的第一充分条件",
            "searchText": "极值的第一充分条件 设 f 在 x 0 连续，并在 x 0 的左右邻域内可导： f' 由正变负：x 0 为极大值点； f' 由负变正：x 0 为极小值点； f' 左右不变号：x 0 不是极值点。 这个判别既能检查驻点，也能检查导数不存在的点。",
            "summary": "设 f 在 x 0 连续，并在 x 0 的左右邻域内可导： f' 由正变负：x 0 为极大值点； f' 由负变正：x 0 为极小值点； f' 左右不变号：x 0 不是极值点。 这个判别既能检查驻点，也能检查导数不存在的点。"
          },
          {
            "id": "anchor-u4g2km",
            "legacyId": "calculus-02-003-anchor-006",
            "title": "极值的第二充分条件",
            "searchText": "极值的第二充分条件 若 f'(x 0)=0，且 f''(x 0)≠0，则 f''(x 0) 0 ⇒ x 0 为极小值点, f''(x 0)<0 ⇒ x 0 为极大值点. 当 f''(x 0)=0 或不存在时，第二充分条件失效，不能据此判定没有极值，应改查 f' 的变号情况或使用高阶导数。",
            "summary": "若 f'(x 0)=0，且 f''(x 0)≠0，则 f''(x 0) 0 ⇒ x 0 为极小值点, f''(x 0)<0 ⇒ x 0 为极大值点. 当 f''(x 0)=0 或不存在时，第二充分条件失效，不能据此判定没有极值，应改查 f' 的变号情况或使…"
          },
          {
            "id": "anchor-1wkdjbx",
            "legacyId": "calculus-02-003-anchor-007",
            "title": "极值的高阶导数判别",
            "searchText": "极值的高阶导数判别 若 f 在 x 0 附近具有足够阶导数，且 f'(x 0)=f''(x 0)= =f^ (n-1) (x 0)=0, f^ (n) (x 0)≠0, 则： n 为偶数且 f^ (n) (x 0) 0：极小值； n 为偶数且 f^ (n) (x 0)<0：极大值； n 为奇数：不是极值点。",
            "summary": "若 f 在 x 0 附近具有足够阶导数，且 f'(x 0)=f''(x 0)= =f^ (n-1) (x 0)=0, f^ (n) (x 0)≠0, 则： n 为偶数且 f^ (n) (x 0) 0：极小值； n 为偶数且 f^ (n) (x 0)<0：极…"
          },
          {
            "id": "anchor-1yxg28i",
            "legacyId": "calculus-02-003-anchor-008",
            "title": "闭区间最值判定",
            "searchText": "闭区间最值判定 连续函数在闭区间 [a,b] 上一定能取得最大值和最小值。依次计算并比较： 区间内部所有驻点的函数值； 区间内部所有不可导点的函数值； 两个端点 f(a),f(b)。 其中最大者为最大值，最小者为最小值。端点参与最值比较，但费马定理只适用于定义域内部的可导极值点。 若 f'(x) 0 在 (a,b) 内恒成立，则 [a,b] f(x)=f(a), [a,b] f(x)=f(b); 若 f'(x)<0，两端点结论交换。",
            "summary": "连续函数在闭区间 [a,b] 上一定能取得最大值和最小值。依次计算并比较： 区间内部所有驻点的函数值； 区间内部所有不可导点的函数值； 两个端点 f(a),f(b)。 其中最大者为最大值，最小者为最小值。端点参与最值比较，但费马定理只适用于定义域内部的可导…"
          },
          {
            "id": "anchor-rvnhse",
            "legacyId": "calculus-02-003-anchor-009",
            "title": "端点最值与单侧导数必要条件",
            "searchText": "端点最值与单侧导数必要条件 若 f 在 [a,b] 上连续且相应单侧导数存在，则 f(a) 为局部最大值 ⇒ f' +(a)≤0, f(a) 为局部最小值 ⇒ f' +(a)≥0, f(b) 为局部最大值 ⇒ f' -(b)≥0, f(b) 为局部最小值 ⇒ f' -(b)≤0.",
            "summary": "若 f 在 [a,b] 上连续且相应单侧导数存在，则 f(a) 为局部最大值 ⇒ f' +(a)≤0, f(a) 为局部最小值 ⇒ f' +(a)≥0, f(b) 为局部最大值 ⇒ f' -(b)≥0, f(b) 为局部最小值 ⇒ f' -(b)≤0."
          },
          {
            "id": "anchor-1vf3xuc",
            "legacyId": "calculus-02-003-anchor-010",
            "title": "函数凹凸性判定与切线弦线结论",
            "searchText": "函数凹凸性判定与切线弦线结论 设 f 在区间 I 内二阶可导： f''(x) 0 ⇒ f'(x) 递增，图形向上弯, f''(x)<0 ⇒ f'(x) 递减，图形向下弯. 图形向上弯时，图形在任一点切线的上方、任意两点弦线的下方： f(x)≥ f(x 0)+f'(x 0)(x-x 0), f( x 1+(1- )x 2) ≤ f(x 1)+(1- )f(x 2), 0≤ ≤1. 图形向下弯时，上述两个不等号全部反向。若只知道 f''≥0 或 f''≤0，相应结论仍成立，但不一定严格。",
            "summary": "设 f 在区间 I 内二阶可导： f''(x) 0 ⇒ f'(x) 递增，图形向上弯, f''(x)<0 ⇒ f'(x) 递减，图形向下弯. 图形向上弯时，图形在任一点切线的上方、任意两点弦线的下方： f(x)≥ f(x 0)+f'(x 0)(x-x 0)…"
          },
          {
            "id": "anchor-soth9i",
            "legacyId": "calculus-02-003-anchor-011",
            "title": "拐点判定公式与结论",
            "searchText": "拐点判定公式与结论 拐点是曲线上凹凸方向发生改变的点，写作曲线上的点 (x 0,f(x 0))，不能只写横坐标 x 0。候选点包括： f''(x 0)=0 的点； f''(x 0) 不存在但 f(x 0) 有定义且曲线连续的点。 候选点只有在左右两侧 f'' 异号，即凹凸方向确实改变时，才是拐点。仅有 f''(x 0)=0 不能直接判为拐点。 若 f''(x 0)=f'''(x 0)= =f^ (n-1) (x 0)=0, f^ (n) (x 0)≠0 (n≥3), 则 n 为奇数时 (x 0,f(x 0)) 是拐点，n 为偶数时不是拐点。 参数方程、隐函数给出的曲线，先求 d^2y dx^2 ，再按其左右符号判断；不能直接使用 d^2y dt^2 的符号。",
            "summary": "拐点是曲线上凹凸方向发生改变的点，写作曲线上的点 (x 0,f(x 0))，不能只写横坐标 x 0。候选点包括： f''(x 0)=0 的点； f''(x 0) 不存在但 f(x 0) 有定义且曲线连续的点。 候选点只有在左右两侧 f'' 异号，即凹凸方向…"
          },
          {
            "id": "anchor-1hr3ies",
            "legacyId": "calculus-02-003-anchor-012",
            "title": "奇偶函数与周期函数的导数结论",
            "searchText": "奇偶函数与周期函数的导数结论 若可导函数为奇函数，则其导函数为偶函数；若可导函数为偶函数，则其导函数为奇函数。若 f 可导且以 T 为周期，则 f'(x+T)=f'(x), 因此 T 也是 f' 的周期，但未必是 f' 的最小正周期。",
            "summary": "若可导函数为奇函数，则其导函数为偶函数；若可导函数为偶函数，则其导函数为奇函数。若 f 可导且以 T 为周期，则 f'(x+T)=f'(x), 因此 T 也是 f' 的周期，但未必是 f' 的最小正周期。"
          },
          {
            "id": "anchor-1rznfp0",
            "legacyId": "calculus-02-003-anchor-013",
            "title": "曲率",
            "searchText": "曲率 K= y'' [1+(y')^2]^ 32 , = 1K. 参数方程： K= x'y''-y'x'' [(x')^2+(y')^2]^ 32 . 曲线 y=f(x) 在 y''≠0 处的曲率圆圆心为 X=x- y'(1+y'^2) y'' , Y=y+ 1+y'^2 y'' .",
            "summary": "K= y'' [1+(y')^2]^ 32 , = 1K. 参数方程： K= x'y''-y'x'' [(x')^2+(y')^2]^ 32 . 曲线 y=f(x) 在 y''≠0 处的曲率圆圆心为 X=x- y'(1+y'^2) y'' , Y=y+ 1…"
          },
          {
            "id": "anchor-bbkl7e",
            "legacyId": "calculus-02-003-anchor-014",
            "title": "利用导数证明不等式与判断方程根的个数",
            "searchText": "利用导数证明不等式与判断方程根的个数 根的个数先把方程改写成 F(x)=0，再用单调区间、极值和端点符号确定。证明 f(x)≥0 常设差函数，找最小值；证明两边大小也可比较导数并结合一个已知点。",
            "summary": "根的个数先把方程改写成 F(x)=0，再用单调区间、极值和端点符号确定。证明 f(x)≥0 常设差函数，找最小值；证明两边大小也可比较导数并结合一个已知点。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-mjfx56",
            "parentAnchorId": "anchor-1ewqz1p",
            "legacyParentAnchorId": "calculus-02-003-anchor-001",
            "title": "切线、法线、竖直切线与渐近线：y-y_0",
            "latex": "y-y_0=f'(x_0)(x-x_0).",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "曲线 \\(y=f(x)\\) 在 \\((x_0,y_0)\\) 的切线：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 0
          },
          {
            "id": "calculus-1hif4v8",
            "parentAnchorId": "anchor-1ewqz1p",
            "legacyParentAnchorId": "calculus-02-003-anchor-001",
            "title": "切线、法线、竖直切线与渐近线：lim_xto x_0|f'(x)|",
            "latex": "\\lim_{x\\to x_0}|f'(x)|=+\\infty,",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：切线、法线、竖直切线与渐近线。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 1
          },
          {
            "id": "calculus-1nrxrts",
            "parentAnchorId": "anchor-6zol1r",
            "legacyParentAnchorId": "calculus-02-003-anchor-003",
            "title": "函数单调性判定公式与结论：f'(x)",
            "latex": "f'(x)>0\\Longrightarrow f(x)\\text{ 在 }I\\text{ 内严格递增},",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "设 f 在区间 I 内可导：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 2
          },
          {
            "id": "calculus-xwphy7",
            "parentAnchorId": "anchor-6zol1r",
            "legacyParentAnchorId": "calculus-02-003-anchor-003",
            "title": "函数单调性判定公式与结论：f'(x)",
            "latex": "f'(x)<0\\Longrightarrow f(x)\\text{ 在 }I\\text{ 内严格递减}.",
            "sourceBlockIndex": 24,
            "searchAliases": [],
            "context": "所属知识点：函数单调性判定公式与结论。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 3
          },
          {
            "id": "calculus-iu5xml",
            "parentAnchorId": "anchor-6zol1r",
            "legacyParentAnchorId": "calculus-02-003-anchor-003",
            "title": "函数单调性判定公式与结论：f'(x)",
            "latex": "f'(x)\\ge0,",
            "sourceBlockIndex": 34,
            "searchAliases": [],
            "context": "反过来，若 f 在 I 内可导且严格递增，只能推出",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 4
          },
          {
            "id": "calculus-fxg9oj",
            "parentAnchorId": "anchor-1neg0u9",
            "legacyParentAnchorId": "calculus-02-003-anchor-004",
            "title": "极值点、驻点与不可导点：f(x)",
            "latex": "f(x)\\le f(x_0),",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "若存在 x_0 的一个邻域，使邻域内恒有",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 5
          },
          {
            "id": "calculus-10idxlx",
            "parentAnchorId": "anchor-1neg0u9",
            "legacyParentAnchorId": "calculus-02-003-anchor-004",
            "title": "极值点、驻点与不可导点：f'(x_0)",
            "latex": "f'(x_0)=0.",
            "sourceBlockIndex": 47,
            "searchAliases": [],
            "context": "费马定理　若 x_0 是定义域内部的极值点，且 f 在 x_0 可导，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 6
          },
          {
            "id": "calculus-1pyb29e",
            "parentAnchorId": "anchor-u4g2km",
            "legacyParentAnchorId": "calculus-02-003-anchor-006",
            "title": "极值的第二充分条件：f''(x_0)",
            "latex": "f''(x_0)>0\\Longrightarrow x_0\\text{ 为极小值点},",
            "sourceBlockIndex": 59,
            "searchAliases": [],
            "context": "若 \\(f'(x_0)=0\\)，且 \\(f''(x_0)\\ne0\\)，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 7
          },
          {
            "id": "calculus-2nsizu",
            "parentAnchorId": "anchor-u4g2km",
            "legacyParentAnchorId": "calculus-02-003-anchor-006",
            "title": "极值的第二充分条件：f''(x_0)",
            "latex": "f''(x_0)<0\\Longrightarrow x_0\\text{ 为极大值点}.",
            "sourceBlockIndex": 60,
            "searchAliases": [],
            "context": "所属知识点：极值的第二充分条件。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 8
          },
          {
            "id": "calculus-skru0u-1",
            "parentAnchorId": "anchor-1wkdjbx",
            "legacyParentAnchorId": "calculus-02-003-anchor-007",
            "title": "极值的高阶导数判别：f'(x_0)",
            "latex": "f'(x_0)=f''(x_0)=\\cdots=f^{(n-1)}(x_0)=0,\n\\qquad f^{(n)}(x_0)\\ne0,",
            "sourceBlockIndex": 65,
            "searchAliases": [],
            "context": "若 f 在 x_0 附近具有足够阶导数，且",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 9
          },
          {
            "id": "calculus-1lduaky-1",
            "parentAnchorId": "anchor-1yxg28i",
            "legacyParentAnchorId": "calculus-02-003-anchor-008",
            "title": "闭区间最值判定：min_[a,b]f(x)",
            "latex": "\\min_{[a,b]}f(x)=f(a)",
            "sourceBlockIndex": 75,
            "searchAliases": [],
            "context": "若 \\(f'(x)>0\\) 在 \\((a,b)\\) 内恒成立，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 10
          },
          {
            "id": "calculus-1lduaky-2",
            "parentAnchorId": "anchor-1yxg28i",
            "legacyParentAnchorId": "calculus-02-003-anchor-008",
            "title": "闭区间最值判定：max_[a,b]f(x)",
            "latex": "\\max_{[a,b]}f(x)=f(b)",
            "sourceBlockIndex": 75,
            "searchAliases": [],
            "context": "若 \\(f'(x)>0\\) 在 \\((a,b)\\) 内恒成立，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 11
          },
          {
            "id": "calculus-10g1p8j-1",
            "parentAnchorId": "anchor-rvnhse",
            "legacyParentAnchorId": "calculus-02-003-anchor-009",
            "title": "端点最值与单侧导数必要条件：f(a) 为局部最大值Longrightarrow f'_+(a)",
            "latex": "f(a)\\text{ 为局部最大值}\\Longrightarrow f'_+(a)\\le0",
            "sourceBlockIndex": 79,
            "searchAliases": [],
            "context": "若 f 在 [a,b] 上连续且相应单侧导数存在，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 12
          },
          {
            "id": "calculus-10g1p8j-2",
            "parentAnchorId": "anchor-rvnhse",
            "legacyParentAnchorId": "calculus-02-003-anchor-009",
            "title": "端点最值与单侧导数必要条件：f(a) 为局部最小值Longrightarrow f'_+(a)",
            "latex": "f(a)\\text{ 为局部最小值}\\Longrightarrow f'_+(a)\\ge0",
            "sourceBlockIndex": 79,
            "searchAliases": [],
            "context": "若 f 在 [a,b] 上连续且相应单侧导数存在，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 13
          },
          {
            "id": "calculus-4ls1fp-1",
            "parentAnchorId": "anchor-rvnhse",
            "legacyParentAnchorId": "calculus-02-003-anchor-009",
            "title": "端点最值与单侧导数必要条件：f(b) 为局部最大值Longrightarrow f'_-(b)",
            "latex": "f(b)\\text{ 为局部最大值}\\Longrightarrow f'_-(b)\\ge0",
            "sourceBlockIndex": 80,
            "searchAliases": [],
            "context": "所属知识点：端点最值与单侧导数必要条件。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 14
          },
          {
            "id": "calculus-4ls1fp-2",
            "parentAnchorId": "anchor-rvnhse",
            "legacyParentAnchorId": "calculus-02-003-anchor-009",
            "title": "端点最值与单侧导数必要条件：f(b) 为局部最小值Longrightarrow f'_-(b)",
            "latex": "f(b)\\text{ 为局部最小值}\\Longrightarrow f'_-(b)\\le0",
            "sourceBlockIndex": 80,
            "searchAliases": [],
            "context": "所属知识点：端点最值与单侧导数必要条件。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 15
          },
          {
            "id": "calculus-convex-up",
            "parentAnchorId": "anchor-1vf3xuc",
            "legacyParentAnchorId": "calculus-02-003-anchor-010",
            "title": "二阶导数大于零：图形向上弯",
            "latex": "f''(x)>0\\Longrightarrow f'(x)\\text{ 递增，图形向上弯},",
            "sourceBlockIndex": 83,
            "searchAliases": [
              "凹凸性",
              "二阶导数大于零",
              "f''(x)>0",
              "凸函数",
              "图形向上弯"
            ],
            "context": "在区间内二阶可导且二阶导数大于零时，导函数递增，图形向上弯。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 16
          },
          {
            "id": "calculus-convex-down",
            "parentAnchorId": "anchor-1vf3xuc",
            "legacyParentAnchorId": "calculus-02-003-anchor-010",
            "title": "二阶导数小于零：图形向下弯",
            "latex": "f''(x)<0\\Longrightarrow f'(x)\\text{ 递减，图形向下弯}.",
            "sourceBlockIndex": 84,
            "searchAliases": [
              "凹凸性",
              "二阶导数小于零",
              "f''(x)<0",
              "凹函数",
              "图形向下弯"
            ],
            "context": "在区间内二阶可导且二阶导数小于零时，导函数递减，图形向下弯。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 17
          },
          {
            "id": "calculus-convex-tangent",
            "parentAnchorId": "anchor-1vf3xuc",
            "legacyParentAnchorId": "calculus-02-003-anchor-010",
            "title": "凸函数的切线不等式",
            "latex": "f(x)\\ge f(x_0)+f'(x_0)(x-x_0),",
            "sourceBlockIndex": 85,
            "searchAliases": [
              "凹凸性",
              "切线在图像下方",
              "图像在切线上方",
              "切线弦线",
              "切线不等式"
            ],
            "context": "图形向上弯时，函数图像在任一点切线的上方。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 18
          },
          {
            "id": "calculus-convex-chord",
            "parentAnchorId": "anchor-1vf3xuc",
            "legacyParentAnchorId": "calculus-02-003-anchor-010",
            "title": "凸函数的弦线不等式",
            "latex": "f(\\lambda x_1+(1-\\lambda)x_2)\n\\le \\lambda f(x_1)+(1-\\lambda)f(x_2),\\qquad 0\\le\\lambda\\le1.",
            "sourceBlockIndex": 86,
            "searchAliases": [
              "凹凸性",
              "弦线在图像上方",
              "图像在弦线下方",
              "弦线不等式"
            ],
            "context": "图形向上弯时，函数图像在任意两点之间弦线的下方。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 19
          },
          {
            "id": "calculus-14eoqzk-1",
            "parentAnchorId": "anchor-soth9i",
            "legacyParentAnchorId": "calculus-02-003-anchor-011",
            "title": "拐点判定公式与结论：f''(x_0)",
            "latex": "f''(x_0)=f'''(x_0)=\\cdots=f^{(n-1)}(x_0)=0,\n\\qquad f^{(n)}(x_0)\\ne0\\quad(n\\ge3),",
            "sourceBlockIndex": 96,
            "searchAliases": [],
            "context": "候选点只有在左右两侧 f'' 异号，即凹凸方向确实改变时，才是拐点。仅有 \\(f''(x_0)=0\\) 不能直接判为拐点。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 20
          },
          {
            "id": "calculus-1jooq66",
            "parentAnchorId": "anchor-1hr3ies",
            "legacyParentAnchorId": "calculus-02-003-anchor-012",
            "title": "奇偶函数与周期函数的导数结论：f'(x+T)",
            "latex": "f'(x+T)=f'(x),",
            "sourceBlockIndex": 104,
            "searchAliases": [],
            "context": "若可导函数为奇函数，则其导函数为偶函数；若可导函数为偶函数，则其导函数为奇函数。若 f 可导且以 T 为周期，则",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 21
          },
          {
            "id": "calculus-sbm3mh-1",
            "parentAnchorId": "anchor-1rznfp0",
            "legacyParentAnchorId": "calculus-02-003-anchor-013",
            "title": "曲率：K",
            "latex": "K=\\frac{|y''|}{[1+(y')^2]^{\\frac32}}",
            "sourceBlockIndex": 108,
            "searchAliases": [],
            "context": "所属知识点：曲率。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 22
          },
          {
            "id": "calculus-sbm3mh-2",
            "parentAnchorId": "anchor-1rznfp0",
            "legacyParentAnchorId": "calculus-02-003-anchor-013",
            "title": "曲率：rho",
            "latex": "\\rho=\\frac1K",
            "sourceBlockIndex": 108,
            "searchAliases": [],
            "context": "所属知识点：曲率。",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 23
          },
          {
            "id": "calculus-zgez16",
            "parentAnchorId": "anchor-1rznfp0",
            "legacyParentAnchorId": "calculus-02-003-anchor-013",
            "title": "曲率：K",
            "latex": "K=\\frac{|x'y''-y'x''|}{[(x')^2+(y')^2]^{\\frac32}}.",
            "sourceBlockIndex": 109,
            "searchAliases": [],
            "context": "参数方程：",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 24
          },
          {
            "id": "calculus-hemipr-1",
            "parentAnchorId": "anchor-1rznfp0",
            "legacyParentAnchorId": "calculus-02-003-anchor-013",
            "title": "曲率：X",
            "latex": "X=x-\\frac{y'(1+y'^2)}{y''}",
            "sourceBlockIndex": 112,
            "searchAliases": [],
            "context": "曲线 \\(y=f(x)\\) 在 y''\\ne0 处的曲率圆圆心为",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 25
          },
          {
            "id": "calculus-hemipr-2",
            "parentAnchorId": "anchor-1rznfp0",
            "legacyParentAnchorId": "calculus-02-003-anchor-013",
            "title": "曲率：Y",
            "latex": "Y=y+\\frac{1+y'^2}{y''}",
            "sourceBlockIndex": 112,
            "searchAliases": [],
            "context": "曲线 \\(y=f(x)\\) 在 y''\\ne0 处的曲率圆圆心为",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-003",
            "order": 26
          }
        ]
      },
      {
        "id": "calculus-02-004",
        "title": "微分中值定理",
        "body": "##### 费马、罗尔、拉格朗日与柯西中值定理\n\n费马定理：若 \\(x_0\\) 是定义域内部的极值点，且 \\(f\\) 在 \\(x_0\\) 可导，则 \\(f'(x_0)=0\\)。\n\n罗尔定理：连续于 \\([a,b]\\)、可导于 \\((a,b)\\)、且 \\(f(a)=f(b)\\)，则存在 \\(\\xi\\in(a,b)\\)，使 \\(f'(\\xi)=0\\)。\n\n拉格朗日中值定理：若 \\(f\\) 在 \\([a,b]\\) 上连续、在 \\((a,b)\\) 内可导，则存在 \\(\\xi\\in(a,b)\\)，使\n\n<!-- formula {\"id\":\"calculus-1d9s5j8\",\"title\":\"费马、罗尔、拉格朗日与柯西中值定理：f(b)-f(a)\",\"aliases\":[],\"context\":\"拉格朗日中值定理：若 f 在 [a,b] 上连续、在 \\\\((a,b)\\\\) 内可导，则存在 \\\\(\\\\xi\\\\in(a,b)\\\\)，使\"} -->\n\\[\nf(b)-f(a)=f'(\\xi)(b-a).\n\\]\n\n柯西中值定理：若 \\(f,g\\) 在 \\([a,b]\\) 上连续、在 \\((a,b)\\) 内可导，且 \\(g'(x)\\ne0\\)，则存在 \\(\\xi\\in(a,b)\\)，使\n\n<!-- formula {\"id\":\"calculus-rhsdgr\",\"title\":\"费马、罗尔、拉格朗日与柯西中值定理：(f(b)-f(a))/(g(b)-g(a))\",\"aliases\":[],\"context\":\"柯西中值定理：若 f,g 在 [a,b] 上连续、在 \\\\((a,b)\\\\) 内可导，且 \\\\(g'(x)\\\\ne0\\\\)，则存在 \\\\(\\\\xi\\\\in(a,b)\\\\)，使\"} -->\n\\[\n\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}.\n\\]\n\n泰勒公式和常用展开式统一见第一章“常用泰勒展开式（集中速查）”。证明题出现两个不同点的函数值时优先考虑中值定理；要求含高阶导数、精确阶数或不等式估计时优先考虑泰勒公式。",
        "searchText": "微分中值定理 微分中值定理 微分中值定理 费马、罗尔、拉格朗日与柯西中值定理 费马定理：若 x 0 是定义域内部的极值点，且 f 在 x 0 可导，则 f'(x 0)=0。 罗尔定理：连续于 [a,b]、可导于 (a,b)、且 f(a)=f(b)，则存在 (a,b)，使 f'( )=0。 拉格朗日中值定理：若 f 在 [a,b] 上连续、在 (a,b) 内可导，则存在 (a,b)，使 f(b)-f(a)=f'( )(b-a). 柯西中值定理：若 f,g 在 [a,b] 上连续、在 (a,b) 内可导，且 g'(x)≠0，则存在 (a,b)，使 f(b)-f(a) g(b)-g(a) = f'( ) g'( ) . 泰勒公式和常用展开式统一见第一章“常用泰勒展开式（集中速查）”。证明题出现两个不同点的函数值时优先考虑中值定理；要求含高阶导数、精确阶数或不等式估计时优先考虑泰勒公式。",
        "summary": "费马、罗尔、拉格朗日与柯西中值定理 费马定理：若 x 0 是定义域内部的极值点，且 f 在 x 0 可导，则 f'(x 0)=0。 罗尔定理：连续于 [a,b]、可导于 (a,b)、且 f(a)=f(b)，则存在 (a,b)，使 f'( )=0。 拉格朗日…",
        "anchors": [
          {
            "id": "anchor-1ynitiw",
            "legacyId": "calculus-02-004-anchor-001",
            "title": "费马、罗尔、拉格朗日与柯西中值定理",
            "searchText": "费马、罗尔、拉格朗日与柯西中值定理 费马定理：若 x 0 是定义域内部的极值点，且 f 在 x 0 可导，则 f'(x 0)=0。 罗尔定理：连续于 [a,b]、可导于 (a,b)、且 f(a)=f(b)，则存在 (a,b)，使 f'( )=0。 拉格朗日中值定理：若 f 在 [a,b] 上连续、在 (a,b) 内可导，则存在 (a,b)，使 f(b)-f(a)=f'( )(b-a). 柯西中值定理：若 f,g 在 [a,b] 上连续、在 (a,b) 内可导，且 g'(x)≠0，则存在 (a,b)，使 f(b)-f(a) g(b)-g(a) = f'( ) g'( ) . 泰勒公式和常用展开式统一见第一章“常用泰勒展开式（集中速查）”。证明题出现两个不同点的函数值时优先考虑中值定理；要求含高阶导数、精确阶数或不等式估计时优先考虑泰勒公式。",
            "summary": "费马定理：若 x 0 是定义域内部的极值点，且 f 在 x 0 可导，则 f'(x 0)=0。 罗尔定理：连续于 [a,b]、可导于 (a,b)、且 f(a)=f(b)，则存在 (a,b)，使 f'( )=0。 拉格朗日中值定理：若 f 在 [a,b] 上…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-1d9s5j8",
            "parentAnchorId": "anchor-1ynitiw",
            "legacyParentAnchorId": "calculus-02-004-anchor-001",
            "title": "费马、罗尔、拉格朗日与柯西中值定理：f(b)-f(a)",
            "latex": "f(b)-f(a)=f'(\\xi)(b-a).",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "拉格朗日中值定理：若 f 在 [a,b] 上连续、在 \\((a,b)\\) 内可导，则存在 \\(\\xi\\in(a,b)\\)，使",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-004",
            "order": 0
          },
          {
            "id": "calculus-rhsdgr",
            "parentAnchorId": "anchor-1ynitiw",
            "legacyParentAnchorId": "calculus-02-004-anchor-001",
            "title": "费马、罗尔、拉格朗日与柯西中值定理：(f(b)-f(a))/(g(b)-g(a))",
            "latex": "\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}.",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "柯西中值定理：若 f,g 在 [a,b] 上连续、在 \\((a,b)\\) 内可导，且 \\(g'(x)\\ne0\\)，则存在 \\(\\xi\\in(a,b)\\)，使",
            "chapterId": "calculus-02",
            "topicId": "calculus-02-004",
            "order": 1
          }
        ]
      }
    ]
  },
  {
    "id": "calculus-03",
    "partId": "calculus",
    "partTitle": "高等数学",
    "title": "第三章　一元积分",
    "topics": [
      {
        "id": "calculus-03-001",
        "title": "积分计算",
        "body": "##### 积分公式与计算方法（集中速查）\n\n<!-- formula {\"items\":[{\"id\":\"calculus-h7svnj-1\",\"title\":\"积分公式与计算方法（集中速查）：∫ x^a dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int x^a\\\\,dx=\\\\frac{x^{a+1}}{a+1}+C\\\\ (a\\\\ne-1)\"},{\"id\":\"calculus-h7svnj-2\",\"title\":\"积分公式与计算方法（集中速查）：∫(dx)/(x)\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\frac{dx}{x}=\\\\ln|x|+C\"}]} -->\n\\[\n\\int x^a\\,dx=\\frac{x^{a+1}}{a+1}+C\\ (a\\ne-1),\\qquad\n\\int\\frac{dx}{x}=\\ln|x|+C,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-11ojzh0-1\",\"title\":\"积分公式与计算方法（集中速查）：∫ e^x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int e^x\\\\,dx=e^x+C\"},{\"id\":\"calculus-11ojzh0-2\",\"title\":\"积分公式与计算方法（集中速查）：∫ a^x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int a^x\\\\,dx=\\\\frac{a^x}{\\\\ln a}+C\"}]} -->\n\\[\n\\int e^x\\,dx=e^x+C,\\qquad\n\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-nadlj1-1\",\"title\":\"积分公式与计算方法（集中速查）：∫sin x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\sin x\\\\,dx=-\\\\cos x+C\"},{\"id\":\"calculus-nadlj1-2\",\"title\":\"积分公式与计算方法（集中速查）：∫cos x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\cos x\\\\,dx=\\\\sin x+C\"}]} -->\n\\[\n\\int\\sin x\\,dx=-\\cos x+C,\n\\quad\\int\\cos x\\,dx=\\sin x+C,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-14wr4xh-1\",\"title\":\"积分公式与计算方法（集中速查）：∫(dx)/(1+x^2)\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\frac{dx}{1+x^2}=\\\\arctan x+C\"},{\"id\":\"calculus-14wr4xh-2\",\"title\":\"积分公式与计算方法（集中速查）：∫fracdxsqrt1-x^2\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\frac{dx}{\\\\sqrt{1-x^2}}=\\\\arcsin x+C\"}]} -->\n\\[\n\\int\\frac{dx}{1+x^2}=\\arctan x+C,\n\\quad\\int\\frac{dx}{\\sqrt{1-x^2}}=\\arcsin x+C.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1mvjjxa-1\",\"title\":\"积分公式与计算方法（集中速查）：∫sec^2x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\sec^2x\\\\,dx=\\\\tan x+C\"},{\"id\":\"calculus-1mvjjxa-2\",\"title\":\"积分公式与计算方法（集中速查）：∫csc^2x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\csc^2x\\\\,dx=-\\\\cot x+C\"}]} -->\n\\[\n\\int\\sec^2x\\,dx=\\tan x+C,\n\\quad\n\\int\\csc^2x\\,dx=-\\cot x+C,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-frre8m-1\",\"title\":\"积分公式与计算方法（集中速查）：∫sec xtan x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\sec x\\\\tan x\\\\,dx=\\\\sec x+C\"},{\"id\":\"calculus-frre8m-2\",\"title\":\"积分公式与计算方法（集中速查）：∫csc xcot x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\csc x\\\\cot x\\\\,dx=-\\\\csc x+C\"}]} -->\n\\[\n\\int\\sec x\\tan x\\,dx=\\sec x+C,\n\\quad\n\\int\\csc x\\cot x\\,dx=-\\csc x+C.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-14nlaio-1\",\"title\":\"积分公式与计算方法（集中速查）：∫tan^2x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\tan^2x\\\\,dx=\\\\tan x-x+C\"},{\"id\":\"calculus-14nlaio-2\",\"title\":\"积分公式与计算方法（集中速查）：∫cot^2x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\cot^2x\\\\,dx=-\\\\cot x-x+C\"}]} -->\n\\[\n\\int\\tan^2x\\,dx=\\tan x-x+C,\\qquad\n\\int\\cot^2x\\,dx=-\\cot x-x+C,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-n6sy06-1\",\"title\":\"积分公式与计算方法（集中速查）：∫sin^2x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\sin^2x\\\\,dx=\\\\frac x2-\\\\frac{\\\\sin2x}{4}+C\"},{\"id\":\"calculus-n6sy06-2\",\"title\":\"积分公式与计算方法（集中速查）：∫cos^2x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\cos^2x\\\\,dx=\\\\frac x2+\\\\frac{\\\\sin2x}{4}+C\"}]} -->\n\\[\n\\int\\sin^2x\\,dx=\\frac x2-\\frac{\\sin2x}{4}+C,\\qquad\n\\int\\cos^2x\\,dx=\\frac x2+\\frac{\\sin2x}{4}+C.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-8897zo-1\",\"title\":\"积分公式与计算方法（集中速查）：∫tan x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\tan x\\\\,dx=-\\\\ln|\\\\cos x|+C\"},{\"id\":\"calculus-8897zo-2\",\"title\":\"积分公式与计算方法（集中速查）：∫cot x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\cot x\\\\,dx=\\\\ln|\\\\sin x|+C\"}]} -->\n\\[\n\\int\\tan x\\,dx=-\\ln|\\cos x|+C,\\qquad\n\\int\\cot x\\,dx=\\ln|\\sin x|+C,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-k7kqo8-1\",\"title\":\"积分公式与计算方法（集中速查）：∫sec x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\sec x\\\\,dx=\\\\ln|\\\\sec x+\\\\tan x|+C\"},{\"id\":\"calculus-k7kqo8-2\",\"title\":\"积分公式与计算方法（集中速查）：∫csc x dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int\\\\csc x\\\\,dx=\\\\ln|\\\\csc x-\\\\cot x|+C\"}]} -->\n\\[\n\\int\\sec x\\,dx=\\ln|\\sec x+\\tan x|+C,\\qquad\n\\int\\csc x\\,dx=\\ln|\\csc x-\\cot x|+C.\n\\]\n\n<!-- formula {\"id\":\"calculus-svkfyb\",\"title\":\"积分公式与计算方法（集中速查）：∫(dx)/(a^2+x^2)\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\frac{dx}{a^2+x^2}=\\frac1a\\arctan\\frac xa+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-ezgmia\",\"title\":\"积分公式与计算方法（集中速查）：∫fracdxsqrta^2-x^2\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac xa+C.\n\\]\n\n<!-- formula {\"id\":\"calculus-194ar5m\",\"title\":\"积分公式与计算方法（集中速查）：∫(dx)/(x^2-a^2)\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\frac{dx}{x^2-a^2}=\\frac1{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-126rrke\",\"title\":\"积分公式与计算方法（集中速查）：∫(dx)/(a^2-x^2)\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\frac{dx}{a^2-x^2}=\\frac1{2a}\\ln\\left|\\frac{a+x}{a-x}\\right|+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-3igu6p\",\"title\":\"积分公式与计算方法（集中速查）：∫fracdxsqrtx^2+a^2\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-7tzohv\",\"title\":\"积分公式与计算方法（集中速查）：∫fracdxsqrtx^2-a^2\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\frac{dx}{\\sqrt{x^2-a^2}}=\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+C.\n\\]\n\n<!-- formula {\"id\":\"calculus-yt9rnc\",\"title\":\"积分公式与计算方法（集中速查）：∫sqrta^2-x^2 dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\sqrt{a^2-x^2}\\,dx=\n\\frac{x}{2}\\sqrt{a^2-x^2}+\\frac{a^2}{2}\\arcsin\\frac xa+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-mevh6n\",\"title\":\"积分公式与计算方法（集中速查）：∫sqrtx^2+a^2 dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\sqrt{x^2+a^2}\\,dx=\n\\frac{x}{2}\\sqrt{x^2+a^2}+\\frac{a^2}{2}\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-1dw7zk5\",\"title\":\"积分公式与计算方法（集中速查）：∫sqrtx^2-a^2 dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int\\sqrt{x^2-a^2}\\,dx=\n\\frac{x}{2}\\sqrt{x^2-a^2}-\\frac{a^2}{2}\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+C.\n\\]\n\n指数函数与三角函数乘积：\n\n<!-- formula {\"id\":\"calculus-532281\",\"title\":\"积分公式与计算方法（集中速查）：∫ e^axsin bx dx\",\"aliases\":[],\"context\":\"指数函数与三角函数乘积：\"} -->\n\\[\n\\int e^{ax}\\sin bx\\,dx=\n\\frac{e^{ax}}{a^2+b^2}(a\\sin bx-b\\cos bx)+C,\n\\]\n\n<!-- formula {\"id\":\"calculus-1whawh0\",\"title\":\"积分公式与计算方法（集中速查）：∫ e^axcos bx dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int e^{ax}\\cos bx\\,dx=\n\\frac{e^{ax}}{a^2+b^2}(a\\cos bx+b\\sin bx)+C.\n\\]\n\n**换元与分部积分**\n\n第一类换元：看见“里面函数的导数”就凑微分。\n\n<!-- formula {\"id\":\"calculus-1edfzwr\",\"title\":\"积分公式与计算方法（集中速查）：∫ f(g(x))g'(x) dx\",\"aliases\":[],\"context\":\"第一类换元：看见“里面函数的导数”就凑微分。\"} -->\n\\[\n\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du.\n\\]\n\n定积分换元公式：若 \\(x=\\varphi(t)\\)，\\(\\varphi(\\alpha)=a,\\varphi(\\beta)=b\\)，则\n\n<!-- formula {\"id\":\"calculus-11y7i1w\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b f(x) dx\",\"aliases\":[],\"context\":\"定积分换元公式：若 \\\\(x=\\\\varphi(t)\\\\)，\\\\(\\\\varphi(\\\\alpha)=a,\\\\varphi(\\\\beta)=b\\\\)，则\"} -->\n\\[\n\\int_a^b f(x)\\,dx\n=\\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\,dt.\n\\]\n\n第二类换元常用：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-14ob7th-1\",\"title\":\"积分公式与计算方法（集中速查）：sqrta^2-x^2:x\",\"aliases\":[],\"context\":\"第二类换元常用：\",\"latex\":\"\\\\sqrt{a^2-x^2}:x=a\\\\sin t\"},{\"id\":\"calculus-14ob7th-2\",\"title\":\"积分公式与计算方法（集中速查）：sqrta^2+x^2:x\",\"aliases\":[],\"context\":\"第二类换元常用：\",\"latex\":\"\\\\sqrt{a^2+x^2}:x=a\\\\tan t\"},{\"id\":\"calculus-14ob7th-3\",\"title\":\"积分公式与计算方法（集中速查）：sqrtx^2-a^2:x\",\"aliases\":[],\"context\":\"第二类换元常用：\",\"latex\":\"\\\\sqrt{x^2-a^2}:x=a\\\\sec t\"}]} -->\n\\[\n\\sqrt{a^2-x^2}:x=a\\sin t,\\quad\n\\sqrt{a^2+x^2}:x=a\\tan t,\\quad\n\\sqrt{x^2-a^2}:x=a\\sec t.\n\\]\n\n分部积分：\n\n<!-- formula {\"id\":\"calculus-wqqyn8\",\"title\":\"积分公式与计算方法（集中速查）：∫ u dv\",\"aliases\":[],\"context\":\"分部积分：\"} -->\n\\[\n\\int u\\,dv=uv-\\int v\\,du.\n\\]\n\n定积分分部公式：\n\n<!-- formula {\"id\":\"calculus-vjq57g\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b u(x)v'(x) dx\",\"aliases\":[],\"context\":\"定积分分部公式：\"} -->\n\\[\n\\int_a^b u(x)v'(x)\\,dx\n=\\bigl[u(x)v(x)\\bigr]_a^b-\\int_a^b u'(x)v(x)\\,dx.\n\\]\n\n反三角、对数、幂函数与指数或三角相乘时，通常优先把反三角或对数取作 \\(u\\)。\n\n**有理式、根式与三角式**\n\n- 有理式先做多项式除法，再把分母因式分解成一次因式和不可约二次因式，作部分分式。\n- 根式优先观察共轭有理化、令整块根式为新变量，或用三角代换。\n- \\(\\sin^m x\\cos^n x\\)：有奇次时留一个因子凑微分；全为偶次时用降幂公式。\n- 分段函数的原函数不仅每段要积分，还要用连续性确定各段常数之间的关系。\n\n**三角函数有理式的万能代换**\n\n对 \\(R(\\sin x,\\cos x)\\)，简单凑微分和降幂不方便时可令 \\(t=\\tan\\frac x2\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-n577oh-1\",\"title\":\"积分公式与计算方法（集中速查）：sin x\",\"aliases\":[],\"context\":\"对 \\\\(R(\\\\sin x,\\\\cos x)\\\\)，简单凑微分和降幂不方便时可令 t=\\\\tan\\\\frac x2，则\",\"latex\":\"\\\\sin x=\\\\frac{2t}{1+t^2}\"},{\"id\":\"calculus-n577oh-2\",\"title\":\"积分公式与计算方法（集中速查）：cos x\",\"aliases\":[],\"context\":\"对 \\\\(R(\\\\sin x,\\\\cos x)\\\\)，简单凑微分和降幂不方便时可令 t=\\\\tan\\\\frac x2，则\",\"latex\":\"\\\\cos x=\\\\frac{1-t^2}{1+t^2}\"},{\"id\":\"calculus-n577oh-3\",\"title\":\"积分公式与计算方法（集中速查）：dx\",\"aliases\":[],\"context\":\"对 \\\\(R(\\\\sin x,\\\\cos x)\\\\)，简单凑微分和降幂不方便时可令 t=\\\\tan\\\\frac x2，则\",\"latex\":\"dx=\\\\frac{2\\\\,dt}{1+t^2}\"}]} -->\n\\[\n\\sin x=\\frac{2t}{1+t^2},\\qquad\n\\cos x=\\frac{1-t^2}{1+t^2},\\qquad\ndx=\\frac{2\\,dt}{1+t^2}.\n\\]\n\n在 \\(t\\) 有定义的区间内使用；定积分还要同时换积分限。\n\n**部分分式分解**\n\n若 \\(\\deg P\\ge\\deg Q\\)，先作多项式除法。对重一次因子与不可约二次因子分别设\n\n<!-- formula {\"id\":\"calculus-1eaibgs\",\"title\":\"重一次因子的部分分式模板\",\"aliases\":[],\"context\":\"若 \\\\deg P\\\\ge\\\\deg Q，先作多项式除法。对重一次因子与不可约二次因子分别设\"} -->\n\\[\n\\frac{A_1}{x-a}+\\frac{A_2}{(x-a)^2}+\\cdots+\\frac{A_m}{(x-a)^m},\n\\]\n\n<!-- formula {\"id\":\"calculus-b1ozsx\",\"title\":\"积分公式与计算方法（集中速查）：(B_1x+C_1)/(x^2+px+q)\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\frac{B_1x+C_1}{x^2+px+q}\n+\\frac{B_2x+C_2}{(x^2+px+q)^2}+\\cdots.\n\\]\n\n重因子的每个幂次都不能漏；不可约二次因子的分子必须比它低一次。\n\n**定积分性质、对称性与华里士公式**\n\n定积分的线性、区间可加性与换向公式：\n\n<!-- formula {\"id\":\"calculus-g67dk2\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b(α f+β g) dx\",\"aliases\":[],\"context\":\"定积分的线性、区间可加性与换向公式：\"} -->\n\\[\n\\int_a^b(\\alpha f+\\beta g)\\,dx\n=\\alpha\\int_a^b f\\,dx+\\beta\\int_a^b g\\,dx,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1l0p2w3-1\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b f dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int_a^b f\\\\,dx=\\\\int_a^c f\\\\,dx+\\\\int_c^b f\\\\,dx\"},{\"id\":\"calculus-1l0p2w3-2\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b f dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"\\\\int_a^b f\\\\,dx=-\\\\int_b^a f\\\\,dx\"}]} -->\n\\[\n\\int_a^b f\\,dx=\\int_a^c f\\,dx+\\int_c^b f\\,dx,\\qquad\n\\int_a^b f\\,dx=-\\int_b^a f\\,dx.\n\\]\n\n<!-- formula {\"id\":\"calculus-1o30v8f\",\"title\":\"积分公式与计算方法（集中速查）：∫_-a^af(x) dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int_{-a}^{a}f(x)\\,dx=\n\\begin{cases}\n2\\int_0^a f(x)\\,dx,&f\\text{ 为偶函数},\\\\\n0,&f\\text{ 为奇函数},\n\\end{cases}\n\\]\n\n<!-- formula {\"id\":\"calculus-1cbq9hz\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b f(x) dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int_a^b f(x)\\,dx=\\int_a^b f(a+b-x)\\,dx.\n\\]\n\n因此\n\n<!-- formula {\"id\":\"calculus-18zkt1w\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^b f(x) dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int_a^b f(x)\\,dx=\\frac12\\int_a^b[f(x)+f(a+b-x)]\\,dx.\n\\]\n\n周期函数在整周期上的积分：若 \\(f(x+T)=f(x)\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1ac17wl-1\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^a+Tf(x) dx\",\"aliases\":[],\"context\":\"周期函数在整周期上的积分：若 \\\\(f(x+T)=f(x)\\\\)，则\",\"latex\":\"\\\\int_a^{a+T}f(x)\\\\,dx=\\\\int_0^T f(x)\\\\,dx\"},{\"id\":\"calculus-1ac17wl-2\",\"title\":\"积分公式与计算方法（集中速查）：∫_a^a+nTf(x) dx\",\"aliases\":[],\"context\":\"周期函数在整周期上的积分：若 \\\\(f(x+T)=f(x)\\\\)，则\",\"latex\":\"\\\\int_a^{a+nT}f(x)\\\\,dx=n\\\\int_0^T f(x)\\\\,dx\"}]} -->\n\\[\n\\int_a^{a+T}f(x)\\,dx=\\int_0^T f(x)\\,dx,\\qquad\n\\int_a^{a+nT}f(x)\\,dx=n\\int_0^T f(x)\\,dx.\n\\]\n\n华里士公式。令\n\n<!-- formula {\"id\":\"calculus-os4dwo\",\"title\":\"积分公式与计算方法（集中速查）：I_n\",\"aliases\":[],\"context\":\"华里士公式。令\"} -->\n\\[\nI_n=\\int_0^{\\frac{\\pi}{2}}\\sin^n x\\,dx\n=\\int_0^{\\frac{\\pi}{2}}\\cos^n x\\,dx,\n\\]\n\n则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-19oadjt-1\",\"title\":\"积分公式与计算方法（集中速查）：I_n\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"I_n=\\\\frac{n-1}{n}I_{n-2}\"},{\"id\":\"calculus-19oadjt-2\",\"title\":\"积分公式与计算方法（集中速查）：I_0\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"I_0=\\\\frac\\\\pi2\"},{\"id\":\"calculus-19oadjt-3\",\"title\":\"积分公式与计算方法（集中速查）：I_1\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"I_1=1\"}]} -->\n\\[\nI_n=\\frac{n-1}{n}I_{n-2},\\qquad I_0=\\frac\\pi2,\\quad I_1=1.\n\\]\n\n即\n\n<!-- formula {\"items\":[{\"id\":\"calculus-f6ncwi-1\",\"title\":\"积分公式与计算方法（集中速查）：I_2m\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"I_{2m}=\\\\frac{(2m-1)!!}{(2m)!!}\\\\frac\\\\pi2\"},{\"id\":\"calculus-f6ncwi-2\",\"title\":\"积分公式与计算方法（集中速查）：I_2m+1\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\",\"latex\":\"I_{2m+1}=\\\\frac{(2m)!!}{(2m+1)!!}\"}]} -->\n\\[\nI_{2m}=\\frac{(2m-1)!!}{(2m)!!}\\frac\\pi2,\\qquad\nI_{2m+1}=\\frac{(2m)!!}{(2m+1)!!}.\n\\]\n\n若 \\(f\\) 连续，则\n\n<!-- formula {\"id\":\"calculus-7xahx2\",\"title\":\"积分公式与计算方法（集中速查）：∫_0^π f(sin x) dx\",\"aliases\":[],\"context\":\"若 f 连续，则\"} -->\n\\[\n\\int_0^\\pi f(\\sin x)\\,dx\n=2\\int_0^{\\frac{\\pi}{2}}f(\\sin x)\\,dx,\n\\]\n\n<!-- formula {\"id\":\"calculus-xh6qfn\",\"title\":\"积分公式与计算方法（集中速查）：∫_0^π x f(sin x) dx\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\int_0^\\pi x f(\\sin x)\\,dx\n=\\frac\\pi2\\int_0^\\pi f(\\sin x)\\,dx.\n\\]\n\n变上限积分：\n\n<!-- formula {\"id\":\"calculus-1l6t86r\",\"title\":\"积分公式与计算方法（集中速查）：frac ddx∫_u(x)^v(x)f(t) dt\",\"aliases\":[],\"context\":\"变上限积分：\"} -->\n\\[\n\\frac d{dx}\\int_{u(x)}^{v(x)}f(t)\\,dt=f(v(x))v'(x)-f(u(x))u'(x).\n\\]\n\n若 \\(f\\) 在 \\([a,b]\\) 上可积，\\(m\\le f(x)\\le M\\)，则\n\n<!-- formula {\"id\":\"calculus-1qd18rd\",\"title\":\"积分公式与计算方法（集中速查）：m(b-a)\",\"aliases\":[],\"context\":\"若 f 在 [a,b] 上可积，\\\\(m\\\\le f(x)\\\\le M\\\\)，则\"} -->\n\\[\nm(b-a)\\le\\int_a^b f(x)\\,dx\\le M(b-a),\n\\]\n\n<!-- formula {\"id\":\"calculus-1gg9iwx\",\"title\":\"定积分绝对值不等式\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\left|\\int_a^b f(x)\\,dx\\right|\\le\\int_a^b|f(x)|\\,dx,\n\\]\n\n<!-- formula {\"id\":\"calculus-14acetd\",\"title\":\"积分形式的柯西—施瓦茨不等式\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\left(\\int_a^b f(x)g(x)\\,dx\\right)^2\n\\le\\left(\\int_a^b f(x)^2\\,dx\\right)\n\\left(\\int_a^b g(x)^2\\,dx\\right).\n\\]\n\n若连续函数 \\(f\\ge0\\) 且不恒为零，则 \\(\\int_a^b f(x)\\,dx>0\\)。\n\n**定义型极限与黎曼和**\n\n若 \\(f\\) 在 \\([a,b]\\) 上可积，则\n\n<!-- formula {\"id\":\"calculus-1wb97qs\",\"title\":\"积分公式与计算方法（集中速查）：lim_nto∞(b-a)/(n)\",\"aliases\":[],\"context\":\"若 f 在 [a,b] 上可积，则\"} -->\n\\[\n\\lim_{n\\to\\infty}\\frac{b-a}{n}\n\\sum_{k=1}^n\nf\\!\\left(a+\\frac{k(b-a)}n\\right)\n=\\int_a^b f(x)\\,dx.\n\\]\n\n**绝对值、最大最小值与分段积分**\n\n先求使表达式改变的分界点或分界曲线，再分段。常用恒等式：\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1wcbrpz-1\",\"title\":\"积分公式与计算方法（集中速查）：|u|\",\"aliases\":[],\"context\":\"先求使表达式改变的分界点或分界曲线，再分段。常用恒等式：\",\"latex\":\"|u|=\\\\begin{cases}u,&u\\\\ge0,\\\\\\\\-u,&u<0,\\\\end{cases}\"},{\"id\":\"calculus-1wcbrpz-2\",\"title\":\"积分公式与计算方法（集中速查）：maxu,v\",\"aliases\":[],\"context\":\"先求使表达式改变的分界点或分界曲线，再分段。常用恒等式：\",\"latex\":\"\\\\max\\\\{u,v\\\\}=\\\\frac{u+v+|u-v|}{2}\"}]} -->\n\\[\n|u|=\\begin{cases}u,&u\\ge0,\\\\-u,&u<0,\\end{cases}\n\\qquad\n\\max\\{u,v\\}=\\frac{u+v+|u-v|}{2},\n\\]\n\n<!-- formula {\"id\":\"calculus-6utoog\",\"title\":\"积分公式与计算方法（集中速查）：minu,v\",\"aliases\":[],\"context\":\"所属知识点：积分公式与计算方法（集中速查）。\"} -->\n\\[\n\\min\\{u,v\\}=\\frac{u+v-|u-v|}{2}.\n\\]",
        "searchText": "积分计算 积分计算 积分计算 积分公式与计算方法（集中速查） x^a\\,dx= x^ a+1 a+1 +C\\ (a≠-1), dx x = x +C, e^x\\,dx=e^x+C, a^x\\,dx= a^x a +C, x\\,dx=- x+C, x\\,dx= x+C, dx 1+x^2 = x+C, dx 1-x^2 = x+C. ^2x\\,dx= x+C, ^2x\\,dx=- x+C, x x\\,dx= x+C, x x\\,dx=- x+C. ^2x\\,dx= x-x+C, ^2x\\,dx=- x-x+C, ^2x\\,dx= x2- 2x 4 +C, ^2x\\,dx= x2+ 2x 4 +C. x\\,dx=- x +C, x\\,dx= x +C, x\\,dx= x+ x +C, x\\,dx= x- x +C. dx a^2+x^2 = 1a xa+C, dx a^2-x^2 = xa+C. dx x^2-a^2 = 1 2a ≤ft x-a x+a +C, dx a^2-x^2 = 1 2a ≤ft a+x a-x +C, dx x^2+a^2 = ≤ft x+ x^2+a^2 +C, dx x^2-a^2 = ≤ft x+ x^2-a^2 +C. a^2-x^2 \\,dx= x 2 a^2-x^2 + a^2 2 xa+C, x^2+a^2 \\,dx= x 2 x^2+a^2 + a^2 2 ≤ft x+ x^2+a^2 +C, x^2-a^2 \\,dx= x 2 x^2-a^2 - a^2 2 ≤ft x+ x^2-a^2 +C. 指数函数与三角函数乘积： e^ ax bx\\,dx= e^ ax a^2+b^2 (a bx-b bx)+C, e^ ax bx\\,dx= e^ ax a^2+b^2 (a bx+b bx)+C. 换元与分部积分 第一类换元：看见“里面函数的导数”就凑微分。 f(g(x))g'(x)\\,dx= f(u)\\,du. 定积分换元公式：若 x= (t)， ( )=a, ( )=b，则 a^b f(x)\\,dx = ^ f( (t)) '(t)\\,dt. 第二类换元常用： a^2-x^2 :x=a t, a^2+x^2 :x=a t, x^2-a^2 :x=a t. 分部积分： u\\,dv=uv- v\\,du. 定积分分部公式： a^b u(x)v'(x)\\,dx = [u(x)v(x) ] a^b- a^b u'(x)v(x)\\,dx. 反三角、对数、幂函数与指数或三角相乘时，通常优先把反三角或对数取作 u。 有理式、根式与三角式 有理式先做多项式除法，再把分母因式分解成一次因式和不可约二次因式，作部分分式。 根式优先观察共轭有理化、令整块根式为新变量，或用三角代换。 ^m x ^n x：有奇次时留一个因子凑微分；全为偶次时用降幂公式。 分段函数的原函数不仅每段要积分，还要用连续性确定各段常数之间的关系。 三角函数有理式的万能代换 对 R( x, x)，简单凑微分和降幂不方便时可令 t= x2，则 x= 2t 1+t^2 , x= 1-t^2 1+t^2 , dx= 2\\,dt 1+t^2 . 在 t 有定义的区间内使用；定积分还要同时换积分限。 部分分式分解 若 P≥ Q，先作多项式除法。对重一次因子与不可约二次因子分别设 A 1 x-a + A 2 (x-a)^2 + + A m (x-a)^m , B 1x+C 1 x^2+px+q + B 2x+C 2 (x^2+px+q)^2 + . 重因子的每个幂次都不能漏；不可约二次因子的分子必须比它低一次。 定积分性质、对称性与华里士公式 定积分的线性、区间可加性与换向公式： a^b( f+ g)\\,dx = a^b f\\,dx+ a^b g\\,dx, a^b f\\,dx= a^c f\\,dx+ c^b f\\,dx, a^b f\\,dx=- b^a f\\,dx. -a ^ a f(x)\\,dx= cases 2 0^a f(x)\\,dx,&f 为偶函数,\\\\ 0,&f 为奇函数, cases a^b f(x)\\,dx= a^b f(a+b-x)\\,dx. 因此 a^b f(x)\\,dx= 12 a^b[f(x)+f(a+b-x)]\\,dx. 周期函数在整周期上的积分：若 f(x+T)=f(x)，则 a^ a+T f(x)\\,dx= 0^T f(x)\\,dx, a^ a+nT f(x)\\,dx=n 0^T f(x)\\,dx. 华里士公式。令 I n= 0^ 2 ^n x\\,dx = 0^ 2 ^n x\\,dx, 则 I n= n-1 n I n-2 , I 0= 2, I 1=1. 即 I 2m = (2m-1)!! (2m)!! 2, I 2m+1 = (2m)!! (2m+1)!! . 若 f 连续，则 0^ f( x)\\,dx =2 0^ 2 f( x)\\,dx, 0^ x f( x)\\,dx = 2 0^ f( x)\\,dx. 变上限积分： d dx u(x) ^ v(x) f(t)\\,dt=f(v(x))v'(x)-f(u(x))u'(x). 若 f 在 [a,b] 上可积，m≤ f(x)≤ M，则 m(b-a)≤ a^b f(x)\\,dx≤ M(b-a), ≤ft a^b f(x)\\,dx ≤ a^b f(x) \\,dx, ≤ft( a^b f(x)g(x)\\,dx )^2 ≤≤ft( a^b f(x)^2\\,dx ) ≤ft( a^b g(x)^2\\,dx ). 若连续函数 f≥0 且不恒为零，则 a^b f(x)\\,dx 0。 定义型极限与黎曼和 若 f 在 [a,b] 上可积，则 n b-a n k=1 ^n f\\!≤ft(a+ k(b-a) n ) = a^b f(x)\\,dx. 绝对值、最大最小值与分段积分 先求使表达式改变的分界点或分界曲线，再分段。常用恒等式： u = cases u,&u≥0,\\\\-u,&u<0, cases \\ u,v\\ = u+v+ u-v 2 , \\ u,v\\ = u+v- u-v 2 .",
        "summary": "积分公式与计算方法（集中速查） x^a\\,dx= x^ a+1 a+1 +C\\ (a≠-1), dx x = x +C, e^x\\,dx=e^x+C, a^x\\,dx= a^x a +C, x\\,dx=- x+C, x\\,dx= x+C, dx 1+x^2…",
        "anchors": [
          {
            "id": "anchor-cisdw4",
            "legacyId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）",
            "searchText": "积分公式与计算方法（集中速查） x^a\\,dx= x^ a+1 a+1 +C\\ (a≠-1), dx x = x +C, e^x\\,dx=e^x+C, a^x\\,dx= a^x a +C, x\\,dx=- x+C, x\\,dx= x+C, dx 1+x^2 = x+C, dx 1-x^2 = x+C. ^2x\\,dx= x+C, ^2x\\,dx=- x+C, x x\\,dx= x+C, x x\\,dx=- x+C. ^2x\\,dx= x-x+C, ^2x\\,dx=- x-x+C, ^2x\\,dx= x2- 2x 4 +C, ^2x\\,dx= x2+ 2x 4 +C. x\\,dx=- x +C, x\\,dx= x +C, x\\,dx= x+ x +C, x\\,dx= x- x +C. dx a^2+x^2 = 1a xa+C, dx a^2-x^2 = xa+C. dx x^2-a^2 = 1 2a ≤ft x-a x+a +C, dx a^2-x^2 = 1 2a ≤ft a+x a-x +C, dx x^2+a^2 = ≤ft x+ x^2+a^2 +C, dx x^2-a^2 = ≤ft x+ x^2-a^2 +C. a^2-x^2 \\,dx= x 2 a^2-x^2 + a^2 2 xa+C, x^2+a^2 \\,dx= x 2 x^2+a^2 + a^2 2 ≤ft x+ x^2+a^2 +C, x^2-a^2 \\,dx= x 2 x^2-a^2 - a^2 2 ≤ft x+ x^2-a^2 +C. 指数函数与三角函数乘积： e^ ax bx\\,dx= e^ ax a^2+b^2 (a bx-b bx)+C, e^ ax bx\\,dx= e^ ax a^2+b^2 (a bx+b bx)+C. 换元与分部积分 第一类换元：看见“里面函数的导数”就凑微分。 f(g(x))g'(x)\\,dx= f(u)\\,du. 定积分换元公式：若 x= (t)， ( )=a, ( )=b，则 a^b f(x)\\,dx = ^ f( (t)) '(t)\\,dt. 第二类换元常用： a^2-x^2 :x=a t, a^2+x^2 :x=a t, x^2-a^2 :x=a t. 分部积分： u\\,dv=uv- v\\,du. 定积分分部公式： a^b u(x)v'(x)\\,dx = [u(x)v(x) ] a^b- a^b u'(x)v(x)\\,dx. 反三角、对数、幂函数与指数或三角相乘时，通常优先把反三角或对数取作 u。 有理式、根式与三角式 有理式先做多项式除法，再把分母因式分解成一次因式和不可约二次因式，作部分分式。 根式优先观察共轭有理化、令整块根式为新变量，或用三角代换。 ^m x ^n x：有奇次时留一个因子凑微分；全为偶次时用降幂公式。 分段函数的原函数不仅每段要积分，还要用连续性确定各段常数之间的关系。 三角函数有理式的万能代换 对 R( x, x)，简单凑微分和降幂不方便时可令 t= x2，则 x= 2t 1+t^2 , x= 1-t^2 1+t^2 , dx= 2\\,dt 1+t^2 . 在 t 有定义的区间内使用；定积分还要同时换积分限。 部分分式分解 若 P≥ Q，先作多项式除法。对重一次因子与不可约二次因子分别设 A 1 x-a + A 2 (x-a)^2 + + A m (x-a)^m , B 1x+C 1 x^2+px+q + B 2x+C 2 (x^2+px+q)^2 + . 重因子的每个幂次都不能漏；不可约二次因子的分子必须比它低一次。 定积分性质、对称性与华里士公式 定积分的线性、区间可加性与换向公式： a^b( f+ g)\\,dx = a^b f\\,dx+ a^b g\\,dx, a^b f\\,dx= a^c f\\,dx+ c^b f\\,dx, a^b f\\,dx=- b^a f\\,dx. -a ^ a f(x)\\,dx= cases 2 0^a f(x)\\,dx,&f 为偶函数,\\\\ 0,&f 为奇函数, cases a^b f(x)\\,dx= a^b f(a+b-x)\\,dx. 因此 a^b f(x)\\,dx= 12 a^b[f(x)+f(a+b-x)]\\,dx. 周期函数在整周期上的积分：若 f(x+T)=f(x)，则 a^ a+T f(x)\\,dx= 0^T f(x)\\,dx, a^ a+nT f(x)\\,dx=n 0^T f(x)\\,dx. 华里士公式。令 I n= 0^ 2 ^n x\\,dx = 0^ 2 ^n x\\,dx, 则 I n= n-1 n I n-2 , I 0= 2, I 1=1. 即 I 2m = (2m-1)!! (2m)!! 2, I 2m+1 = (2m)!! (2m+1)!! . 若 f 连续，则 0^ f( x)\\,dx =2 0^ 2 f( x)\\,dx, 0^ x f( x)\\,dx = 2 0^ f( x)\\,dx. 变上限积分： d dx u(x) ^ v(x) f(t)\\,dt=f(v(x))v'(x)-f(u(x))u'(x). 若 f 在 [a,b] 上可积，m≤ f(x)≤ M，则 m(b-a)≤ a^b f(x)\\,dx≤ M(b-a), ≤ft a^b f(x)\\,dx ≤ a^b f(x) \\,dx, ≤ft( a^b f(x)g(x)\\,dx )^2 ≤≤ft( a^b f(x)^2\\,dx ) ≤ft( a^b g(x)^2\\,dx ). 若连续函数 f≥0 且不恒为零，则 a^b f(x)\\,dx 0。 定义型极限与黎曼和 若 f 在 [a,b] 上可积，则 n b-a n k=1 ^n f\\!≤ft(a+ k(b-a) n ) = a^b f(x)\\,dx. 绝对值、最大最小值与分段积分 先求使表达式改变的分界点或分界曲线，再分段。常用恒等式： u = cases u,&u≥0,\\\\-u,&u<0, cases \\ u,v\\ = u+v+ u-v 2 , \\ u,v\\ = u+v- u-v 2 .",
            "summary": "x^a\\,dx= x^ a+1 a+1 +C\\ (a≠-1), dx x = x +C, e^x\\,dx=e^x+C, a^x\\,dx= a^x a +C, x\\,dx=- x+C, x\\,dx= x+C, dx 1+x^2 = x+C, dx 1-x^2…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-h7svnj-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ x^a dx",
            "latex": "\\int x^a\\,dx=\\frac{x^{a+1}}{a+1}+C\\ (a\\ne-1)",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 0
          },
          {
            "id": "calculus-h7svnj-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫(dx)/(x)",
            "latex": "\\int\\frac{dx}{x}=\\ln|x|+C",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 1
          },
          {
            "id": "calculus-11ojzh0-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ e^x dx",
            "latex": "\\int e^x\\,dx=e^x+C",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 2
          },
          {
            "id": "calculus-11ojzh0-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ a^x dx",
            "latex": "\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 3
          },
          {
            "id": "calculus-nadlj1-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sin x dx",
            "latex": "\\int\\sin x\\,dx=-\\cos x+C",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 4
          },
          {
            "id": "calculus-nadlj1-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫cos x dx",
            "latex": "\\int\\cos x\\,dx=\\sin x+C",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 5
          },
          {
            "id": "calculus-14wr4xh-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫(dx)/(1+x^2)",
            "latex": "\\int\\frac{dx}{1+x^2}=\\arctan x+C",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 6
          },
          {
            "id": "calculus-14wr4xh-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫fracdxsqrt1-x^2",
            "latex": "\\int\\frac{dx}{\\sqrt{1-x^2}}=\\arcsin x+C",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 7
          },
          {
            "id": "calculus-1mvjjxa-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sec^2x dx",
            "latex": "\\int\\sec^2x\\,dx=\\tan x+C",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 8
          },
          {
            "id": "calculus-1mvjjxa-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫csc^2x dx",
            "latex": "\\int\\csc^2x\\,dx=-\\cot x+C",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 9
          },
          {
            "id": "calculus-frre8m-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sec xtan x dx",
            "latex": "\\int\\sec x\\tan x\\,dx=\\sec x+C",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 10
          },
          {
            "id": "calculus-frre8m-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫csc xcot x dx",
            "latex": "\\int\\csc x\\cot x\\,dx=-\\csc x+C",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 11
          },
          {
            "id": "calculus-14nlaio-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫tan^2x dx",
            "latex": "\\int\\tan^2x\\,dx=\\tan x-x+C",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 12
          },
          {
            "id": "calculus-14nlaio-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫cot^2x dx",
            "latex": "\\int\\cot^2x\\,dx=-\\cot x-x+C",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 13
          },
          {
            "id": "calculus-n6sy06-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sin^2x dx",
            "latex": "\\int\\sin^2x\\,dx=\\frac x2-\\frac{\\sin2x}{4}+C",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 14
          },
          {
            "id": "calculus-n6sy06-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫cos^2x dx",
            "latex": "\\int\\cos^2x\\,dx=\\frac x2+\\frac{\\sin2x}{4}+C",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 15
          },
          {
            "id": "calculus-8897zo-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫tan x dx",
            "latex": "\\int\\tan x\\,dx=-\\ln|\\cos x|+C",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 16
          },
          {
            "id": "calculus-8897zo-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫cot x dx",
            "latex": "\\int\\cot x\\,dx=\\ln|\\sin x|+C",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 17
          },
          {
            "id": "calculus-k7kqo8-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sec x dx",
            "latex": "\\int\\sec x\\,dx=\\ln|\\sec x+\\tan x|+C",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 18
          },
          {
            "id": "calculus-k7kqo8-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫csc x dx",
            "latex": "\\int\\csc x\\,dx=\\ln|\\csc x-\\cot x|+C",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 19
          },
          {
            "id": "calculus-svkfyb",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫(dx)/(a^2+x^2)",
            "latex": "\\int\\frac{dx}{a^2+x^2}=\\frac1a\\arctan\\frac xa+C,",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 20
          },
          {
            "id": "calculus-ezgmia",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫fracdxsqrta^2-x^2",
            "latex": "\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac xa+C.",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 21
          },
          {
            "id": "calculus-194ar5m",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫(dx)/(x^2-a^2)",
            "latex": "\\int\\frac{dx}{x^2-a^2}=\\frac1{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C,",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 22
          },
          {
            "id": "calculus-126rrke",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫(dx)/(a^2-x^2)",
            "latex": "\\int\\frac{dx}{a^2-x^2}=\\frac1{2a}\\ln\\left|\\frac{a+x}{a-x}\\right|+C,",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 23
          },
          {
            "id": "calculus-3igu6p",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫fracdxsqrtx^2+a^2",
            "latex": "\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+C,",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 24
          },
          {
            "id": "calculus-7tzohv",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫fracdxsqrtx^2-a^2",
            "latex": "\\int\\frac{dx}{\\sqrt{x^2-a^2}}=\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+C.",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 25
          },
          {
            "id": "calculus-yt9rnc",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sqrta^2-x^2 dx",
            "latex": "\\int\\sqrt{a^2-x^2}\\,dx=\n\\frac{x}{2}\\sqrt{a^2-x^2}+\\frac{a^2}{2}\\arcsin\\frac xa+C,",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 26
          },
          {
            "id": "calculus-mevh6n",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sqrtx^2+a^2 dx",
            "latex": "\\int\\sqrt{x^2+a^2}\\,dx=\n\\frac{x}{2}\\sqrt{x^2+a^2}+\\frac{a^2}{2}\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+C,",
            "sourceBlockIndex": 17,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 27
          },
          {
            "id": "calculus-1dw7zk5",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫sqrtx^2-a^2 dx",
            "latex": "\\int\\sqrt{x^2-a^2}\\,dx=\n\\frac{x}{2}\\sqrt{x^2-a^2}-\\frac{a^2}{2}\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+C.",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 28
          },
          {
            "id": "calculus-532281",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ e^axsin bx dx",
            "latex": "\\int e^{ax}\\sin bx\\,dx=\n\\frac{e^{ax}}{a^2+b^2}(a\\sin bx-b\\cos bx)+C,",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "指数函数与三角函数乘积：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 29
          },
          {
            "id": "calculus-1whawh0",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ e^axcos bx dx",
            "latex": "\\int e^{ax}\\cos bx\\,dx=\n\\frac{e^{ax}}{a^2+b^2}(a\\cos bx+b\\sin bx)+C.",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 30
          },
          {
            "id": "calculus-1edfzwr",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ f(g(x))g'(x) dx",
            "latex": "\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du.",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "第一类换元：看见“里面函数的导数”就凑微分。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 31
          },
          {
            "id": "calculus-11y7i1w",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b f(x) dx",
            "latex": "\\int_a^b f(x)\\,dx\n=\\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\,dt.",
            "sourceBlockIndex": 24,
            "searchAliases": [],
            "context": "定积分换元公式：若 \\(x=\\varphi(t)\\)，\\(\\varphi(\\alpha)=a,\\varphi(\\beta)=b\\)，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 32
          },
          {
            "id": "calculus-14ob7th-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：sqrta^2-x^2:x",
            "latex": "\\sqrt{a^2-x^2}:x=a\\sin t",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "第二类换元常用：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 33
          },
          {
            "id": "calculus-14ob7th-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：sqrta^2+x^2:x",
            "latex": "\\sqrt{a^2+x^2}:x=a\\tan t",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "第二类换元常用：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 34
          },
          {
            "id": "calculus-14ob7th-3",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：sqrtx^2-a^2:x",
            "latex": "\\sqrt{x^2-a^2}:x=a\\sec t",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "第二类换元常用：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 35
          },
          {
            "id": "calculus-wqqyn8",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫ u dv",
            "latex": "\\int u\\,dv=uv-\\int v\\,du.",
            "sourceBlockIndex": 26,
            "searchAliases": [],
            "context": "分部积分：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 36
          },
          {
            "id": "calculus-vjq57g",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b u(x)v'(x) dx",
            "latex": "\\int_a^b u(x)v'(x)\\,dx\n=\\bigl[u(x)v(x)\\bigr]_a^b-\\int_a^b u'(x)v(x)\\,dx.",
            "sourceBlockIndex": 27,
            "searchAliases": [],
            "context": "定积分分部公式：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 37
          },
          {
            "id": "calculus-n577oh-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：sin x",
            "latex": "\\sin x=\\frac{2t}{1+t^2}",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "对 \\(R(\\sin x,\\cos x)\\)，简单凑微分和降幂不方便时可令 t=\\tan\\frac x2，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 38
          },
          {
            "id": "calculus-n577oh-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：cos x",
            "latex": "\\cos x=\\frac{1-t^2}{1+t^2}",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "对 \\(R(\\sin x,\\cos x)\\)，简单凑微分和降幂不方便时可令 t=\\tan\\frac x2，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 39
          },
          {
            "id": "calculus-n577oh-3",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：dx",
            "latex": "dx=\\frac{2\\,dt}{1+t^2}",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "对 \\(R(\\sin x,\\cos x)\\)，简单凑微分和降幂不方便时可令 t=\\tan\\frac x2，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 40
          },
          {
            "id": "calculus-1eaibgs",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "重一次因子的部分分式模板",
            "latex": "\\frac{A_1}{x-a}+\\frac{A_2}{(x-a)^2}+\\cdots+\\frac{A_m}{(x-a)^m},",
            "sourceBlockIndex": 35,
            "searchAliases": [],
            "context": "若 \\deg P\\ge\\deg Q，先作多项式除法。对重一次因子与不可约二次因子分别设",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 41
          },
          {
            "id": "calculus-b1ozsx",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：(B_1x+C_1)/(x^2+px+q)",
            "latex": "\\frac{B_1x+C_1}{x^2+px+q}\n+\\frac{B_2x+C_2}{(x^2+px+q)^2}+\\cdots.",
            "sourceBlockIndex": 36,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 42
          },
          {
            "id": "calculus-g67dk2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b(α f+β g) dx",
            "latex": "\\int_a^b(\\alpha f+\\beta g)\\,dx\n=\\alpha\\int_a^b f\\,dx+\\beta\\int_a^b g\\,dx,",
            "sourceBlockIndex": 37,
            "searchAliases": [],
            "context": "定积分的线性、区间可加性与换向公式：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 43
          },
          {
            "id": "calculus-1l0p2w3-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b f dx",
            "latex": "\\int_a^b f\\,dx=\\int_a^c f\\,dx+\\int_c^b f\\,dx",
            "sourceBlockIndex": 38,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 44
          },
          {
            "id": "calculus-1l0p2w3-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b f dx",
            "latex": "\\int_a^b f\\,dx=-\\int_b^a f\\,dx",
            "sourceBlockIndex": 38,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 45
          },
          {
            "id": "calculus-1o30v8f",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_-a^af(x) dx",
            "latex": "\\int_{-a}^{a}f(x)\\,dx=\n\\begin{cases}\n2\\int_0^a f(x)\\,dx,&f\\text{ 为偶函数},\\\\\n0,&f\\text{ 为奇函数},\n\\end{cases}",
            "sourceBlockIndex": 39,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 46
          },
          {
            "id": "calculus-1cbq9hz",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b f(x) dx",
            "latex": "\\int_a^b f(x)\\,dx=\\int_a^b f(a+b-x)\\,dx.",
            "sourceBlockIndex": 40,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 47
          },
          {
            "id": "calculus-18zkt1w",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^b f(x) dx",
            "latex": "\\int_a^b f(x)\\,dx=\\frac12\\int_a^b[f(x)+f(a+b-x)]\\,dx.",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 48
          },
          {
            "id": "calculus-1ac17wl-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^a+Tf(x) dx",
            "latex": "\\int_a^{a+T}f(x)\\,dx=\\int_0^T f(x)\\,dx",
            "sourceBlockIndex": 43,
            "searchAliases": [],
            "context": "周期函数在整周期上的积分：若 \\(f(x+T)=f(x)\\)，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 49
          },
          {
            "id": "calculus-1ac17wl-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_a^a+nTf(x) dx",
            "latex": "\\int_a^{a+nT}f(x)\\,dx=n\\int_0^T f(x)\\,dx",
            "sourceBlockIndex": 43,
            "searchAliases": [],
            "context": "周期函数在整周期上的积分：若 \\(f(x+T)=f(x)\\)，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 50
          },
          {
            "id": "calculus-os4dwo",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：I_n",
            "latex": "I_n=\\int_0^{\\frac{\\pi}{2}}\\sin^n x\\,dx\n=\\int_0^{\\frac{\\pi}{2}}\\cos^n x\\,dx,",
            "sourceBlockIndex": 44,
            "searchAliases": [],
            "context": "华里士公式。令",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 51
          },
          {
            "id": "calculus-19oadjt-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：I_n",
            "latex": "I_n=\\frac{n-1}{n}I_{n-2}",
            "sourceBlockIndex": 45,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 52
          },
          {
            "id": "calculus-19oadjt-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：I_0",
            "latex": "I_0=\\frac\\pi2",
            "sourceBlockIndex": 45,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 53
          },
          {
            "id": "calculus-19oadjt-3",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：I_1",
            "latex": "I_1=1",
            "sourceBlockIndex": 45,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 54
          },
          {
            "id": "calculus-f6ncwi-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：I_2m",
            "latex": "I_{2m}=\\frac{(2m-1)!!}{(2m)!!}\\frac\\pi2",
            "sourceBlockIndex": 46,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 55
          },
          {
            "id": "calculus-f6ncwi-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：I_2m+1",
            "latex": "I_{2m+1}=\\frac{(2m)!!}{(2m+1)!!}",
            "sourceBlockIndex": 46,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 56
          },
          {
            "id": "calculus-7xahx2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_0^π f(sin x) dx",
            "latex": "\\int_0^\\pi f(\\sin x)\\,dx\n=2\\int_0^{\\frac{\\pi}{2}}f(\\sin x)\\,dx,",
            "sourceBlockIndex": 48,
            "searchAliases": [],
            "context": "若 f 连续，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 57
          },
          {
            "id": "calculus-xh6qfn",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：∫_0^π x f(sin x) dx",
            "latex": "\\int_0^\\pi x f(\\sin x)\\,dx\n=\\frac\\pi2\\int_0^\\pi f(\\sin x)\\,dx.",
            "sourceBlockIndex": 49,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 58
          },
          {
            "id": "calculus-1l6t86r",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：frac ddx∫_u(x)^v(x)f(t) dt",
            "latex": "\\frac d{dx}\\int_{u(x)}^{v(x)}f(t)\\,dt=f(v(x))v'(x)-f(u(x))u'(x).",
            "sourceBlockIndex": 50,
            "searchAliases": [],
            "context": "变上限积分：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 59
          },
          {
            "id": "calculus-1qd18rd",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：m(b-a)",
            "latex": "m(b-a)\\le\\int_a^b f(x)\\,dx\\le M(b-a),",
            "sourceBlockIndex": 54,
            "searchAliases": [],
            "context": "若 f 在 [a,b] 上可积，\\(m\\le f(x)\\le M\\)，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 60
          },
          {
            "id": "calculus-1gg9iwx",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "定积分绝对值不等式",
            "latex": "\\left|\\int_a^b f(x)\\,dx\\right|\\le\\int_a^b|f(x)|\\,dx,",
            "sourceBlockIndex": 55,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 61
          },
          {
            "id": "calculus-14acetd",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分形式的柯西—施瓦茨不等式",
            "latex": "\\left(\\int_a^b f(x)g(x)\\,dx\\right)^2\n\\le\\left(\\int_a^b f(x)^2\\,dx\\right)\n\\left(\\int_a^b g(x)^2\\,dx\\right).",
            "sourceBlockIndex": 56,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 62
          },
          {
            "id": "calculus-1wb97qs",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：lim_nto∞(b-a)/(n)",
            "latex": "\\lim_{n\\to\\infty}\\frac{b-a}{n}\n\\sum_{k=1}^n\nf\\!\\left(a+\\frac{k(b-a)}n\\right)\n=\\int_a^b f(x)\\,dx.",
            "sourceBlockIndex": 61,
            "searchAliases": [],
            "context": "若 f 在 [a,b] 上可积，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 63
          },
          {
            "id": "calculus-1wcbrpz-1",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：|u|",
            "latex": "|u|=\\begin{cases}u,&u\\ge0,\\\\-u,&u<0,\\end{cases}",
            "sourceBlockIndex": 62,
            "searchAliases": [],
            "context": "先求使表达式改变的分界点或分界曲线，再分段。常用恒等式：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 64
          },
          {
            "id": "calculus-1wcbrpz-2",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：maxu,v",
            "latex": "\\max\\{u,v\\}=\\frac{u+v+|u-v|}{2}",
            "sourceBlockIndex": 62,
            "searchAliases": [],
            "context": "先求使表达式改变的分界点或分界曲线，再分段。常用恒等式：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 65
          },
          {
            "id": "calculus-6utoog",
            "parentAnchorId": "anchor-cisdw4",
            "legacyParentAnchorId": "calculus-03-001-anchor-001",
            "title": "积分公式与计算方法（集中速查）：minu,v",
            "latex": "\\min\\{u,v\\}=\\frac{u+v-|u-v|}{2}.",
            "sourceBlockIndex": 63,
            "searchAliases": [],
            "context": "所属知识点：积分公式与计算方法（集中速查）。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-001",
            "order": 66
          }
        ]
      },
      {
        "id": "calculus-03-002",
        "title": "定积分的几何应用与物理应用（数学二）",
        "body": "##### 定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积\n\n<!-- formula {\"id\":\"calculus-sw6s3k\",\"title\":\"定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：f_平均\",\"aliases\":[],\"context\":\"所属知识点：定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积。\"} -->\n\\[\nf_{\\text{平均}}=\\frac1{b-a}\\int_a^b f(x)\\,dx.\n\\]\n\n直角坐标面积：\n\n<!-- formula {\"id\":\"calculus-ahovol\",\"title\":\"定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：S\",\"aliases\":[],\"context\":\"直角坐标面积：\"} -->\n\\[\nS=\\int_a^b|f(x)-g(x)|\\,dx.\n\\]\n\n参数方程 \\(x=x(t),y=y(t)\\) 下：\n\n<!-- formula {\"id\":\"calculus-y5sqhn\",\"title\":\"定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：S\",\"aliases\":[],\"context\":\"参数方程 \\\\(x=x(t),y=y(t)\\\\) 下：\"} -->\n\\[\nS=\\left|\\int_\\alpha^\\beta y(t)x'(t)\\,dt\\right|.\n\\]\n\n极坐标面积：\n\n<!-- formula {\"id\":\"calculus-bexb9q\",\"title\":\"定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：S\",\"aliases\":[],\"context\":\"极坐标面积：\"} -->\n\\[\nS=\\frac12\\int_\\alpha^\\beta r(\\theta)^2\\,d\\theta.\n\\]\n\n##### 定积分的几何应用（数学二）：旋转体体积\n\n普通方程 \\(y=f(x)\\)，\\(a\\le x\\le b\\)：\n\n<!-- formula {\"id\":\"calculus-z39dkc\",\"title\":\"定积分的几何应用（数学二）：旋转体体积：绕 x 轴：\",\"aliases\":[],\"context\":\"普通方程 \\\\(y=f(x)\\\\)，a\\\\le x\\\\le b：\"} -->\n\\[\n\\text{绕 }x\\text{ 轴：}\\qquad\nV_x=\\pi\\int_a^b[f(x)]^2\\,dx.\n\\]\n\n<!-- formula {\"id\":\"calculus-cm6pdc\",\"title\":\"定积分的几何应用（数学二）：旋转体体积：绕 y 轴：\",\"aliases\":[],\"context\":\"所属知识点：定积分的几何应用（数学二）：旋转体体积。\"} -->\n\\[\n\\text{绕 }y\\text{ 轴：}\\qquad\nV_y=2\\pi\\int_a^b x f(x)\\,dx.\n\\]\n\n参数方程 \\(x=x(t),\\ y=y(t)\\)，\\(\\alpha\\le t\\le\\beta\\)：\n\n<!-- formula {\"id\":\"calculus-lwnh02\",\"title\":\"定积分的几何应用（数学二）：旋转体体积：绕 x 轴：\",\"aliases\":[],\"context\":\"参数方程 \\\\(x=x(t),\\\\ y=y(t)\\\\)，\\\\alpha\\\\le t\\\\le\\\\beta：\"} -->\n\\[\n\\text{绕 }x\\text{ 轴：}\\qquad\nV_x=\\pi\\int_\\alpha^\\beta y(t)^2\\,|x'(t)|\\,dt.\n\\]\n\n<!-- formula {\"id\":\"calculus-1jv6qab\",\"title\":\"定积分的几何应用（数学二）：旋转体体积：绕 y 轴：\",\"aliases\":[],\"context\":\"所属知识点：定积分的几何应用（数学二）：旋转体体积。\"} -->\n\\[\n\\text{绕 }y\\text{ 轴：}\\qquad\nV_y=2\\pi\\int_\\alpha^\\beta |x(t)y(t)x'(t)|\\,dt.\n\\]\n\n以上按图形在第一象限书写；不在第一象限时，旋转半径和图形高度均取正值。\n\n已知截面积 \\(A(x)\\)：\n\n<!-- formula {\"id\":\"calculus-q5h278\",\"title\":\"定积分的几何应用（数学二）：旋转体体积：V\",\"aliases\":[],\"context\":\"已知截面积 \\\\(A(x)\\\\)：\"} -->\n\\[\nV=\\int_a^b A(x)\\,dx.\n\\]\n\n##### 常见平面图形面积公式（含椭圆面积）\n\n| 图形 | 面积 \\(S\\) | 字母含义 |\n| --- | --- | --- |\n| 正方形 | <!-- formula {\"id\":\"calculus-7ste7u\",\"title\":\"正方形面积\",\"aliases\":[\"正方形面积\",\"正方形\"],\"context\":\"a 为边长\"} -->\\(S=a^2\\) | \\(a\\) 为边长 |\n| 长方形 | <!-- formula {\"id\":\"calculus-ji6nz8\",\"title\":\"长方形面积\",\"aliases\":[\"长方形面积\",\"长方形\"],\"context\":\"a,b 为长、宽\"} -->\\(S=ab\\) | \\(a,b\\) 为长、宽 |\n| 三角形 | <!-- formula {\"id\":\"calculus-7p29ob\",\"title\":\"三角形面积\",\"aliases\":[\"三角形面积\",\"三角形\"],\"context\":\"b 为底，h 为对应高\"} -->\\(S=\\frac12 bh\\) | \\(b\\) 为底，\\(h\\) 为对应高 |\n| 平行四边形 | <!-- formula {\"id\":\"calculus-1fykoay\",\"title\":\"平行四边形面积\",\"aliases\":[\"平行四边形面积\",\"平行四边形\"],\"context\":\"b 为底，h 为对应高\"} -->\\(S=bh\\) | \\(b\\) 为底，\\(h\\) 为对应高 |\n| 梯形 | <!-- formula {\"id\":\"calculus-jy87cs\",\"title\":\"梯形面积\",\"aliases\":[\"梯形面积\",\"梯形\"],\"context\":\"a,b 为两条平行边，h 为高\"} -->\\(S=\\frac{a+b}{2}h\\) | \\(a,b\\) 为两条平行边，\\(h\\) 为高 |\n| 菱形 | <!-- formula {\"id\":\"calculus-b8rf2a\",\"title\":\"菱形面积\",\"aliases\":[\"菱形面积\",\"菱形\"],\"context\":\"d_1,d_2 为两条对角线\"} -->\\(S=\\frac12 d_1d_2\\) | \\(d_1,d_2\\) 为两条对角线 |\n| 圆 | <!-- formula {\"id\":\"calculus-1kt2ocg\",\"title\":\"圆面积\",\"aliases\":[\"圆面积\",\"圆\"],\"context\":\"r 为半径\"} -->\\(S=\\pi r^2\\) | \\(r\\) 为半径 |\n| 圆环 | <!-- formula {\"id\":\"calculus-1qhyzxj\",\"title\":\"圆环面积\",\"aliases\":[\"圆环面积\",\"圆环\"],\"context\":\"R,r 为外、内半径\"} -->\\(S=\\pi(R^2-r^2)\\) | \\(R,r\\) 为外、内半径 |\n| 扇形 | <!-- formula {\"id\":\"calculus-1iudwsp\",\"title\":\"扇形面积\",\"aliases\":[\"扇形面积\",\"扇形\"],\"context\":\"r 为半径，\\\\theta 用弧度\"} -->\\(S=\\frac12 r^2\\theta\\) | \\(r\\) 为半径，\\(\\theta\\) 用弧度 |\n| 椭圆 | <!-- formula {\"id\":\"calculus-5ysdno\",\"title\":\"椭圆面积\",\"aliases\":[\"椭圆面积\",\"椭圆\"],\"context\":\"a,b 为长、短半轴，均不是整条轴长\"} -->\\(S=\\pi ab\\) | \\(a,b\\) 为长、短半轴，均不是整条轴长 |\n\n##### 常见立体体积公式\n\n| 立体 | 体积 \\(V\\) | 字母含义 |\n| --- | --- | --- |\n| 正方体 | <!-- formula {\"id\":\"calculus-1we3gj5\",\"title\":\"正方体体积\",\"aliases\":[\"正方体体积\",\"正方体\"],\"context\":\"a 为棱长\"} -->\\(V=a^3\\) | \\(a\\) 为棱长 |\n| 长方体 | <!-- formula {\"id\":\"calculus-zf7aa1\",\"title\":\"长方体体积\",\"aliases\":[\"长方体体积\",\"长方体\"],\"context\":\"a,b,c 为长、宽、高\"} -->\\(V=abc\\) | \\(a,b,c\\) 为长、宽、高 |\n| 直棱柱 | <!-- formula {\"id\":\"calculus-1ki5a0p\",\"title\":\"直棱柱体积\",\"aliases\":[\"直棱柱体积\",\"直棱柱\"],\"context\":\"S 为底面积，h 为高\"} -->\\(V=Sh\\) | \\(S\\) 为底面积，\\(h\\) 为高 |\n| 圆柱 | <!-- formula {\"id\":\"calculus-1xtldo2\",\"title\":\"圆柱体积\",\"aliases\":[\"圆柱体积\",\"圆柱\"],\"context\":\"r 为底面半径，h 为高\"} -->\\(V=\\pi r^2h\\) | \\(r\\) 为底面半径，\\(h\\) 为高 |\n| 棱锥 | <!-- formula {\"id\":\"calculus-15k9kxz\",\"title\":\"棱锥体积\",\"aliases\":[\"棱锥体积\",\"棱锥\"],\"context\":\"S 为底面积，h 为高\"} -->\\(V=\\frac13 Sh\\) | \\(S\\) 为底面积，\\(h\\) 为高 |\n| 圆锥 | <!-- formula {\"id\":\"calculus-1evivv0\",\"title\":\"圆锥体积\",\"aliases\":[\"圆锥体积\",\"圆锥\"],\"context\":\"r 为底面半径，h 为高\"} -->\\(V=\\frac13\\pi r^2h\\) | \\(r\\) 为底面半径，\\(h\\) 为高 |\n| 圆台 | <!-- formula {\"id\":\"calculus-smojum\",\"title\":\"圆台体积\",\"aliases\":[\"圆台体积\",\"圆台\"],\"context\":\"R,r 为下、上底半径，h 为高\"} -->\\(V=\\frac13\\pi h(R^2+Rr+r^2)\\) | \\(R,r\\) 为下、上底半径，\\(h\\) 为高 |\n| 球 | <!-- formula {\"id\":\"calculus-5xsnz2\",\"title\":\"球体积\",\"aliases\":[\"球体积\",\"球\"],\"context\":\"r 为半径\"} -->\\(V=\\frac43\\pi r^3\\) | \\(r\\) 为半径 |\n| 半球 | <!-- formula {\"id\":\"calculus-upkarc\",\"title\":\"半球体积\",\"aliases\":[\"半球体积\",\"半球\"],\"context\":\"r 为半径\"} -->\\(V=\\frac23\\pi r^3\\) | \\(r\\) 为半径 |\n\n##### 常见立体表面积公式\n\n下面的表面积都计入底面；如果题目只求侧面积，就不计底面。\n\n| 立体 | 表面积 \\(A\\) | 字母含义 |\n| --- | --- | --- |\n| 正方体 | <!-- formula {\"id\":\"calculus-q55hv6\",\"title\":\"正方体表面积\",\"aliases\":[\"正方体表面积\",\"正方体\"],\"context\":\"a 为棱长\"} -->\\(A=6a^2\\) | \\(a\\) 为棱长 |\n| 长方体 | <!-- formula {\"id\":\"calculus-11wxr4c\",\"title\":\"长方体表面积\",\"aliases\":[\"长方体表面积\",\"长方体\"],\"context\":\"a,b,c 为长、宽、高\"} -->\\(A=2(ab+bc+ca)\\) | \\(a,b,c\\) 为长、宽、高 |\n| 直棱柱 | <!-- formula {\"id\":\"calculus-1qm0lcm\",\"title\":\"直棱柱表面积\",\"aliases\":[\"直棱柱表面积\",\"直棱柱\"],\"context\":\"S 为底面积，p 为底面周长，h 为高\"} -->\\(A=2S+ph\\) | \\(S\\) 为底面积，\\(p\\) 为底面周长，\\(h\\) 为高 |\n| 圆柱 | <!-- formula {\"id\":\"calculus-rayytu\",\"title\":\"圆柱表面积\",\"aliases\":[\"圆柱表面积\",\"圆柱\"],\"context\":\"r 为底面半径，h 为高\"} -->\\(A=2\\pi r^2+2\\pi rh\\) | \\(r\\) 为底面半径，\\(h\\) 为高 |\n| 圆锥 | <!-- formula {\"id\":\"calculus-7gu099\",\"title\":\"圆锥表面积\",\"aliases\":[\"圆锥表面积\",\"圆锥\"],\"context\":\"底面积加侧面积；母线长是半径与高组成的直角三角形斜边。\"} -->\\(A=\\pi r^2+\\pi r\\ell\\) | \\(\\ell=\\sqrt{r^2+h^2}\\) 为母线长（斜高） |\n| 圆台 | <!-- formula {\"id\":\"calculus-175oave\",\"title\":\"圆台表面积\",\"aliases\":[\"圆台表面积\",\"圆台\"],\"context\":\"上下底面积加侧面积；母线长由高和两底半径之差求得。\"} -->\\(A=\\pi(R^2+r^2)+\\pi(R+r)\\ell\\) | \\(\\ell=\\sqrt{h^2+(R-r)^2}\\) 为母线长 |\n| 球 | <!-- formula {\"id\":\"calculus-sse8ka\",\"title\":\"球表面积\",\"aliases\":[\"球表面积\",\"球\"],\"context\":\"球面即全部外表面\"} -->\\(A=4\\pi r^2\\) | 球面即全部外表面 |\n| 半球 | <!-- formula {\"id\":\"calculus-rb88j3\",\"title\":\"半球表面积\",\"aliases\":[\"半球表面积\",\"半球\"],\"context\":\"这里包含圆形底面；只算曲面时为球表面积的一半。\"} -->\\(A=3\\pi r^2\\) | 包含圆形底面；只算曲面为 \\(2\\pi r^2\\) |\n\n##### 定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积\n\n<!-- formula {\"id\":\"calculus-1kl2j3v\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：L\",\"aliases\":[],\"context\":\"所属知识点：定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积。\"} -->\n\\[\nL=\\int_a^b\\sqrt{1+[y'(x)]^2}\\,dx.\n\\]\n\n参数方程：\n\n<!-- formula {\"id\":\"calculus-1pg2gjx\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：L\",\"aliases\":[],\"context\":\"参数方程：\"} -->\n\\[\nL=\\int_\\alpha^\\beta\\sqrt{[x'(t)]^2+[y'(t)]^2}\\,dt.\n\\]\n\n极坐标：\n\n<!-- formula {\"id\":\"calculus-mq017y\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：L\",\"aliases\":[],\"context\":\"所属知识点：定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积。\"} -->\n\\[\nL=\\int_\\alpha^\\beta\\sqrt{r^2+(r')^2}\\,d\\theta.\n\\]\n\n绕 \\(x\\) 轴的曲面面积：\n\n<!-- formula {\"id\":\"calculus-1weaz1e\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S\",\"aliases\":[],\"context\":\"绕 x 轴的曲面面积：\"} -->\n\\[\nS=2\\pi\\int_a^b |y|\\sqrt{1+(y')^2}\\,dx.\n\\]\n\n绕 \\(y\\) 轴的曲面面积：\n\n<!-- formula {\"id\":\"calculus-p2ehz\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S\",\"aliases\":[],\"context\":\"绕 y 轴的曲面面积：\"} -->\n\\[\nS=2\\pi\\int_a^b |x|\\sqrt{1+(y')^2}\\,dx.\n\\]\n\n参数方程 \\(x=x(t),y=y(t)\\) 绕 \\(x\\) 轴旋转：\n\n<!-- formula {\"id\":\"calculus-ascs8v\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S\",\"aliases\":[],\"context\":\"参数方程 \\\\(x=x(t),y=y(t)\\\\) 绕 x 轴旋转：\"} -->\n\\[\nS=2\\pi\\int_\\alpha^\\beta |y(t)|\n\\sqrt{[x'(t)]^2+[y'(t)]^2}\\,dt.\n\\]\n\n极坐标曲线绕极轴旋转：\n\n<!-- formula {\"id\":\"calculus-1qzk0u8\",\"title\":\"定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S\",\"aliases\":[],\"context\":\"极坐标曲线绕极轴旋转：\"} -->\n\\[\nS=2\\pi\\int_\\alpha^\\beta |r(\\theta)\\sin\\theta|\n\\sqrt{r(\\theta)^2+[r'(\\theta)]^2}\\,d\\theta.\n\\]\n\n##### 定积分的物理应用（数学二）：基础物理公式、运动与质量\n\n先分清物理量本身的公式，再确定积分微元。下表中 \\(\\rho\\) 是质量密度，\\(g\\) 是重力加速度，\\(h\\) 是液面以下的深度。\n\n| 物理量 | 基础公式 | 适用条件 |\n| --- | --- | --- |\n| 质量 | <!-- formula {\"id\":\"calculus-3rax7w\",\"title\":\"质量基础公式\",\"aliases\":[\"质量基础公式\",\"质量\"],\"context\":\"前式要求密度均匀\"} -->\\(m=\\rho V\\)；密度不均匀时 <!-- formula {\"id\":\"calculus-1et9sns\",\"title\":\"质量积分形式\",\"aliases\":[\"质量积分形式\",\"质量\"],\"context\":\"前式要求密度均匀\"} -->\\(m=\\int_V\\rho\\,dV\\) | 前式要求密度均匀 |\n| 重力 | <!-- formula {\"id\":\"calculus-16igip8\",\"title\":\"重力基础公式\",\"aliases\":[\"重力基础公式\",\"重力\"],\"context\":\"G 表示重力大小\"} -->\\(G=mg\\) | \\(G\\) 表示重力大小 |\n| 速度、加速度 | <!-- formula {\"id\":\"calculus-1ql6fav\",\"title\":\"速度公式\",\"aliases\":[\"速度公式\",\"速度、加速度\"],\"context\":\"s(t) 是带方向的位移坐标\"} -->\\(v=s'(t)\\)，<!-- formula {\"id\":\"calculus-12s3un5\",\"title\":\"加速度公式\",\"aliases\":[\"加速度公式\",\"速度、加速度\"],\"context\":\"s(t) 是带方向的位移坐标\"} -->\\(a=v'(t)\\) | \\(s(t)\\) 是带方向的位移坐标 |\n| 力与加速度 | <!-- formula {\"id\":\"calculus-53nl7h\",\"title\":\"力与加速度基础公式\",\"aliases\":[\"力与加速度基础公式\",\"力与加速度\"],\"context\":\"质量 m 不变时\"} -->\\(F=ma\\) | 质量 \\(m\\) 不变时 |\n| 功 | <!-- formula {\"id\":\"calculus-1en8igw\",\"title\":\"功基础公式\",\"aliases\":[\"功基础公式\",\"功\"],\"context\":\"前式要求恒力且同向；F_{\\\\parallel} 是沿位移方向的分力\"} -->\\(W=Fs\\)；变力时 <!-- formula {\"id\":\"calculus-o6jzxz\",\"title\":\"功积分形式\",\"aliases\":[\"功积分形式\",\"功\"],\"context\":\"前式要求恒力且同向；F_{\\\\parallel} 是沿位移方向的分力\"} -->\\(W=\\int F_{\\parallel}(x)\\,dx\\) | 前式要求恒力且同向；\\(F_{\\parallel}\\) 是沿位移方向的分力 |\n| 液体压强 | <!-- formula {\"id\":\"calculus-v69n9t\",\"title\":\"液体压强基础公式\",\"aliases\":[\"液体压强基础公式\",\"液体压强\"],\"context\":\"静止液体，p 是相对液面的压强\"} -->\\(p=\\rho gh\\) | 静止液体，\\(p\\) 是相对液面的压强 |\n| 压力 | <!-- formula {\"id\":\"calculus-qk81bq\",\"title\":\"压力基础公式\",\"aliases\":[\"压力基础公式\",\"压力\"],\"context\":\"受压面为平面、各处压力同向；前式还要求压强均匀\"} -->\\(F=pS\\)；压强不均匀时 <!-- formula {\"id\":\"calculus-dkvkr9\",\"title\":\"压力积分形式\",\"aliases\":[\"压力积分形式\",\"压力\"],\"context\":\"受压面为平面、各处压力同向；前式还要求压强均匀\"} -->\\(F=\\int_S p\\,dS\\) | 受压面为平面、各处压力同向；前式还要求压强均匀 |\n| 弹簧弹力 | <!-- formula {\"id\":\"calculus-rw1hbs\",\"title\":\"弹簧弹力基础公式\",\"aliases\":[\"弹簧弹力基础公式\",\"弹簧弹力\"],\"context\":\"x 是相对原长的伸长量；弹簧恢复力方向相反，为 -kx\"} -->\\(F_{\\text{大小}}=kx\\) | \\(x\\) 是相对原长的伸长量；弹簧恢复力方向相反，为 \\(-kx\\) |\n\n具体到变密度直杆，线密度为 \\(\\lambda(x)\\) 时，质量是 <!-- formula {\"id\":\"calculus-variable-density-rod-mass\",\"title\":\"变密度细杆的质量\",\"aliases\":[\"线密度求质量\",\"积分求质量\"],\"context\":\"细杆位于 x∈[a,b]，λ(x) 是线密度。\"} -->\\(m=\\int_a^b\\lambda(x)\\,dx\\)。\n\n若速度为 \\(v(t)\\)，\\([t_1,t_2]\\) 内的**位移**与**路程**分别为\n\n<!-- formula {\"items\":[{\"id\":\"calculus-wtpptr-1\",\"title\":\"定积分的物理应用（数学二）：基础物理公式、运动与质量：Delta s\",\"aliases\":[],\"context\":\"若速度为 \\\\(v(t)\\\\)，[t_1,t_2] 内的位移与路程分别为\",\"latex\":\"\\\\Delta s=\\\\int_{t_1}^{t_2}v(t)\\\\,dt\"},{\"id\":\"calculus-wtpptr-2\",\"title\":\"定积分的物理应用（数学二）：基础物理公式、运动与质量：L\",\"aliases\":[],\"context\":\"若速度为 \\\\(v(t)\\\\)，[t_1,t_2] 内的位移与路程分别为\",\"latex\":\"L=\\\\int_{t_1}^{t_2}|v(t)|\\\\,dt\"}]} -->\n\\[\n\\Delta s=\\int_{t_1}^{t_2}v(t)\\,dt,\n\\qquad\nL=\\int_{t_1}^{t_2}|v(t)|\\,dt.\n\\]\n\n速度变号时，两式不能混用；加速度始终为 \\(a(t)=v'(t)\\)。\n\n##### 定积分的物理应用（数学二）：变力、弹簧与抽水做功\n\n沿直线从 \\(a\\) 移到 \\(b\\)，若 \\(F(x)\\) 是力沿位移方向的**带符号分量**，变力做功为\n\n<!-- formula {\"id\":\"calculus-1depk2\",\"title\":\"定积分的物理应用（数学二）：变力、弹簧与抽水做功：W\",\"aliases\":[],\"context\":\"沿直线从 a 移到 b，若 \\\\(F(x)\\\\) 是力沿位移方向的带符号分量，变力做功为\"} -->\n\\[\nW=\\int_a^b F(x)\\,dx.\n\\]\n\n从伸长量 \\(a\\) 拉到 \\(b\\)（\\(0\\le a<b\\)）时，克服弹簧恢复力所做的功为\n\n<!-- formula {\"id\":\"calculus-39sc7s\",\"title\":\"定积分的物理应用（数学二）：变力、弹簧与抽水做功：W_外力\",\"aliases\":[],\"context\":\"从伸长量 a 拉到 b（0\\\\le a<b）时，克服弹簧恢复力所做的功为\"} -->\n\\[\nW_{\\text{外力}}=\\int_a^b kx\\,dx=\\frac{k}{2}(b^2-a^2).\n\\]\n\n抽水时沿竖直方向取厚度为 \\(dy\\) 的水层。若该层横截面积为 \\(A(y)\\)，需提升的距离为 \\(L(y)\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-4qs95x-1\",\"title\":\"定积分的物理应用（数学二）：变力、弹簧与抽水做功：dW\",\"aliases\":[],\"context\":\"抽水时沿竖直方向取厚度为 dy 的水层。若该层横截面积为 \\\\(A(y)\\\\)，需提升的距离为 \\\\(L(y)\\\\)，则\",\"latex\":\"dW=\\\\rho g A(y)L(y)\\\\,dy\"},{\"id\":\"calculus-4qs95x-2\",\"title\":\"定积分的物理应用（数学二）：变力、弹簧与抽水做功：W\",\"aliases\":[],\"context\":\"抽水时沿竖直方向取厚度为 dy 的水层。若该层横截面积为 \\\\(A(y)\\\\)，需提升的距离为 \\\\(L(y)\\\\)，则\",\"latex\":\"W=\\\\rho g\\\\int_a^b A(y)L(y)\\\\,dy\"}]} -->\n\\[\ndW=\\rho g A(y)L(y)\\,dy,\n\\qquad\nW=\\rho g\\int_a^b A(y)L(y)\\,dy.\n\\]\n\n即“每层水的重力 × 该层的提升距离”，其中 \\(\\rho\\) 为水的质量密度。\n\n##### 定积分的物理应用（数学二）：液体静压力\n\n在深度为 \\(h(y)\\) 的位置，液体压强为 \\(p(y)=\\rho g h(y)\\)。沿竖直方向取宽为 \\(w(y)\\)、厚为 \\(dy\\) 的水平横条，则它受到的压力大小为\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1djpxhg-1\",\"title\":\"定积分的物理应用（数学二）：液体静压力：dF\",\"aliases\":[],\"context\":\"在深度为 \\\\(h(y)\\\\) 的位置，液体压强为 \\\\(p(y)=\\\\rho g h(y)\\\\)。沿竖直方向取宽为 \\\\(w(y)\\\\)、厚为 dy 的水平横条，则它受到的压力大小为\",\"latex\":\"dF=p(y)w(y)\\\\,dy=\\\\rho g h(y)w(y)\\\\,dy\"},{\"id\":\"calculus-1djpxhg-2\",\"title\":\"定积分的物理应用（数学二）：液体静压力：F\",\"aliases\":[],\"context\":\"在深度为 \\\\(h(y)\\\\) 的位置，液体压强为 \\\\(p(y)=\\\\rho g h(y)\\\\)。沿竖直方向取宽为 \\\\(w(y)\\\\)、厚为 dy 的水平横条，则它受到的压力大小为\",\"latex\":\"F=\\\\int_a^b\\\\rho g h(y)w(y)\\\\,dy\"}]} -->\n\\[\ndF=p(y)w(y)\\,dy=\\rho g h(y)w(y)\\,dy,\n\\qquad\nF=\\int_a^b\\rho g h(y)w(y)\\,dy.\n\\]\n\n若 \\(y\\) 本身从液面向下计深度，便有 \\(h(y)=y\\)；积分区间 \\([a,b]\\) 必须覆盖实际受压部分。\n\n##### 定积分的物理应用（数学二）：万有引力与引力做功\n\n相距 \\(r\\) 的两个质点，质量分别为 \\(M,m\\)，万有引力大小为 <!-- formula {\"id\":\"calculus-newton-gravitation-force\",\"title\":\"万有引力大小公式\",\"aliases\":[\"引力公式\",\"万有引力定律\"],\"context\":\"两质点质量为 M、m，距离为 r；G_N 是万有引力常量。\"} -->\\(F(r)=\\frac{G_{\\mathrm N}Mm}{r^2}\\)，其中 \\(G_{\\mathrm N}\\) 是万有引力常量，与上文表示重力的 \\(G\\) 不同。将质量 \\(m\\) 从距离 \\(a\\) 处缓慢移到更远的 \\(b\\) 处（\\(0<a<b\\)），克服引力所做的功为\n\n<!-- formula {\"id\":\"calculus-c0dsak\",\"title\":\"定积分的物理应用（数学二）：万有引力与引力做功：W_外力\",\"aliases\":[],\"context\":\"所属知识点：定积分的物理应用（数学二）：万有引力与引力做功。\"} -->\n\\[\nW_{\\text{外力}}=\\int_a^b\\frac{G_{\\mathrm N}Mm}{r^2}\\,dr\n=G_{\\mathrm N}Mm\\left(\\frac1a-\\frac1b\\right).\n\\]\n\n引力方向与这段向外的位移相反，因此**引力本身做的功**是 \\(-W_{\\text{外力}}\\)。若对象是一根线密度为 \\(\\lambda(x)\\) 的细杆，可先对杆的质量微元求引力；在各微元引力同向的情况下，大小为\n\n<!-- formula {\"id\":\"calculus-1g1jyz6\",\"title\":\"定积分的物理应用（数学二）：万有引力与引力做功：F\",\"aliases\":[],\"context\":\"所属知识点：定积分的物理应用（数学二）：万有引力与引力做功。\"} -->\n\\[\nF=G_{\\mathrm N}M\\int_a^b\\frac{\\lambda(x)}{r(x)^2}\\,dx.\n\\]\n\n##### 定积分的几何应用（数学二）：形心与质心\n\n设均匀薄片由 \\(a\\le x\\le b\\)、\\(0\\le y\\le f(x)\\) 围成，其中 \\(f(x)\\ge0\\)，面积 \\(S>0\\)。此时形心就是质心，只需记住\n\n<!-- formula {\"items\":[{\"id\":\"calculus-2z1adl-1\",\"title\":\"定积分的几何应用（数学二）：形心与质心：S\",\"aliases\":[],\"context\":\"设均匀薄片由 a\\\\le x\\\\le b、\\\\(0\\\\le y\\\\le f(x)\\\\) 围成，其中 \\\\(f(x)\\\\ge0\\\\)，面积 S>0。此时形心就是质心，只需记住\",\"latex\":\"S=\\\\int_a^b f(x)\\\\,dx\"},{\"id\":\"calculus-2z1adl-2\",\"title\":\"定积分的几何应用（数学二）：形心与质心：bar x\",\"aliases\":[],\"context\":\"设均匀薄片由 a\\\\le x\\\\le b、\\\\(0\\\\le y\\\\le f(x)\\\\) 围成，其中 \\\\(f(x)\\\\ge0\\\\)，面积 S>0。此时形心就是质心，只需记住\",\"latex\":\"\\\\bar x=\\\\frac{\\\\int_a^b x f(x)\\\\,dx}{\\\\int_a^b f(x)\\\\,dx}\"},{\"id\":\"calculus-2z1adl-3\",\"title\":\"定积分的几何应用（数学二）：形心与质心：bar y\",\"aliases\":[],\"context\":\"设均匀薄片由 a\\\\le x\\\\le b、\\\\(0\\\\le y\\\\le f(x)\\\\) 围成，其中 \\\\(f(x)\\\\ge0\\\\)，面积 S>0。此时形心就是质心，只需记住\",\"latex\":\"\\\\bar y=\\\\frac{\\\\int_a^b [f(x)]^2\\\\,dx}{2\\\\int_a^b f(x)\\\\,dx}\"}]} -->\n\\[\nS=\\int_a^b f(x)\\,dx,\\qquad\n\\bar x=\\frac{\\int_a^b x f(x)\\,dx}{\\int_a^b f(x)\\,dx},\\qquad\n\\bar y=\\frac{\\int_a^b [f(x)]^2\\,dx}{2\\int_a^b f(x)\\,dx}.\n\\]",
        "searchText": "定积分的几何应用与物理应用（数学二） 定积分的几何应用与物理应用（数学二） 定积分的几何应用与物理应用（数学二） 定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积 f 平均 = 1 b-a a^b f(x)\\,dx. 直角坐标面积： S= a^b f(x)-g(x) \\,dx. 参数方程 x=x(t),y=y(t) 下： S=≤ft ^ y(t)x'(t)\\,dt . 极坐标面积： S= 12 ^ r( )^2\\,d . 定积分的几何应用（数学二）：旋转体体积 普通方程 y=f(x)，a≤ x≤ b： 绕 x 轴： V x= a^b[f(x)]^2\\,dx. 绕 y 轴： V y=2 a^b x f(x)\\,dx. 参数方程 x=x(t),\\ y=y(t)， ≤ t≤ ： 绕 x 轴： V x= ^ y(t)^2\\, x'(t) \\,dt. 绕 y 轴： V y=2 ^ x(t)y(t)x'(t) \\,dt. 以上按图形在第一象限书写；不在第一象限时，旋转半径和图形高度均取正值。 已知截面积 A(x)： V= a^b A(x)\\,dx. 常见平面图形面积公式（含椭圆面积） 图形 面积 S 字母含义 --- --- --- 正方形 S=a^2 a 为边长 长方形 S=ab a,b 为长、宽 三角形 S= 12 bh b 为底，h 为对应高 平行四边形 S=bh b 为底，h 为对应高 梯形 S= a+b 2 h a,b 为两条平行边，h 为高 菱形 S= 12 d 1d 2 d 1,d 2 为两条对角线 圆 S= r^2 r 为半径 圆环 S= (R^2-r^2) R,r 为外、内半径 扇形 S= 12 r^2 r 为半径， 用弧度 椭圆 S= ab a,b 为长、短半轴，均不是整条轴长 常见立体体积公式 立体 体积 V 字母含义 --- --- --- 正方体 V=a^3 a 为棱长 长方体 V=abc a,b,c 为长、宽、高 直棱柱 V=Sh S 为底面积，h 为高 圆柱 V= r^2h r 为底面半径，h 为高 棱锥 V= 13 Sh S 为底面积，h 为高 圆锥 V= 13 r^2h r 为底面半径，h 为高 圆台 V= 13 h(R^2+Rr+r^2) R,r 为下、上底半径，h 为高 球 V= 43 r^3 r 为半径 半球 V= 23 r^3 r 为半径 常见立体表面积公式 下面的表面积都计入底面；如果题目只求侧面积，就不计底面。 立体 表面积 A 字母含义 --- --- --- 正方体 A=6a^2 a 为棱长 长方体 A=2(ab+bc+ca) a,b,c 为长、宽、高 直棱柱 A=2S+ph S 为底面积，p 为底面周长，h 为高 圆柱 A=2 r^2+2 rh r 为底面半径，h 为高 圆锥 A= r^2+ r = r^2+h^2 为母线长（斜高） 圆台 A= (R^2+r^2)+ (R+r) = h^2+(R-r)^2 为母线长 球 A=4 r^2 球面即全部外表面 半球 A=3 r^2 包含圆形底面；只算曲面为 2 r^2 定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积 L= a^b 1+[y'(x)]^2 \\,dx. 参数方程： L= ^ [x'(t)]^2+[y'(t)]^2 \\,dt. 极坐标： L= ^ r^2+(r')^2 \\,d . 绕 x 轴的曲面面积： S=2 a^b y 1+(y')^2 \\,dx. 绕 y 轴的曲面面积： S=2 a^b x 1+(y')^2 \\,dx. 参数方程 x=x(t),y=y(t) 绕 x 轴旋转： S=2 ^ y(t) [x'(t)]^2+[y'(t)]^2 \\,dt. 极坐标曲线绕极轴旋转： S=2 ^ r( ) r( )^2+[r'( )]^2 \\,d . 定积分的物理应用（数学二）：基础物理公式、运动与质量 先分清物理量本身的公式，再确定积分微元。下表中 是质量密度，g 是重力加速度，h 是液面以下的深度。 物理量 基础公式 适用条件 --- --- --- 质量 m= V；密度不均匀时 m= V \\,dV 前式要求密度均匀 重力 G=mg G 表示重力大小 速度、加速度 v=s'(t)， a=v'(t) s(t) 是带方向的位移坐标 力与加速度 F=ma 质量 m 不变时 功 W=Fs；变力时 W= F (x)\\,dx 前式要求恒力且同向；F 是沿位移方向的分力 液体压强 p= gh 静止液体，p 是相对液面的压强 压力 F=pS；压强不均匀时 F= S p\\,dS 受压面为平面、各处压力同向；前式还要求压强均匀 弹簧弹力 F 大小 =kx x 是相对原长的伸长量；弹簧恢复力方向相反，为 -kx 具体到变密度直杆，线密度为 (x) 时，质量是 m= a^b (x)\\,dx。 若速度为 v(t)，[t 1,t 2] 内的 位移 与 路程 分别为 s= t 1 ^ t 2 v(t)\\,dt, L= t 1 ^ t 2 v(t) \\,dt. 速度变号时，两式不能混用；加速度始终为 a(t)=v'(t)。 定积分的物理应用（数学二）：变力、弹簧与抽水做功 沿直线从 a 移到 b，若 F(x) 是力沿位移方向的 带符号分量 ，变力做功为 W= a^b F(x)\\,dx. 从伸长量 a 拉到 b（0≤ a<b）时，克服弹簧恢复力所做的功为 W 外力 = a^b kx\\,dx= k 2 (b^2-a^2). 抽水时沿竖直方向取厚度为 dy 的水层。若该层横截面积为 A(y)，需提升的距离为 L(y)，则 dW= g A(y)L(y)\\,dy, W= g a^b A(y)L(y)\\,dy. 即“每层水的重力 × 该层的提升距离”，其中 为水的质量密度。 定积分的物理应用（数学二）：液体静压力 在深度为 h(y) 的位置，液体压强为 p(y)= g h(y)。沿竖直方向取宽为 w(y)、厚为 dy 的水平横条，则它受到的压力大小为 dF=p(y)w(y)\\,dy= g h(y)w(y)\\,dy, F= a^b g h(y)w(y)\\,dy. 若 y 本身从液面向下计深度，便有 h(y)=y；积分区间 [a,b] 必须覆盖实际受压部分。 定积分的物理应用（数学二）：万有引力与引力做功 相距 r 的两个质点，质量分别为 M,m，万有引力大小为 F(r)= G N Mm r^2 ，其中 G N 是万有引力常量，与上文表示重力的 G 不同。将质量 m 从距离 a 处缓慢移到更远的 b 处（0<a<b），克服引力所做的功为 W 外力 = a^b G N Mm r^2 \\,dr =G N Mm≤ft( 1a- 1b ). 引力方向与这段向外的位移相反，因此 引力本身做的功 是 -W 外力 。若对象是一根线密度为 (x) 的细杆，可先对杆的质量微元求引力；在各微元引力同向的情况下，大小为 F=G N M a^b (x) r(x)^2 \\,dx. 定积分的几何应用（数学二）：形心与质心 设均匀薄片由 a≤ x≤ b、0≤ y≤ f(x) 围成，其中 f(x)≥0，面积 S 0。此时形心就是质心，只需记住 S= a^b f(x)\\,dx, x= a^b x f(x)\\,dx a^b f(x)\\,dx , y= a^b [f(x)]^2\\,dx 2 a^b f(x)\\,dx .",
        "summary": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积 f 平均 = 1 b-a a^b f(x)\\,dx. 直角坐标面积： S= a^b f(x)-g(x) \\,dx. 参数方程 x=x(t),y=y(t) 下： S=≤ft ^ y(t)x'(t…",
        "anchors": [
          {
            "id": "anchor-175zj2c",
            "legacyId": "calculus-03-002-anchor-001",
            "title": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积",
            "searchText": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积 f 平均 = 1 b-a a^b f(x)\\,dx. 直角坐标面积： S= a^b f(x)-g(x) \\,dx. 参数方程 x=x(t),y=y(t) 下： S=≤ft ^ y(t)x'(t)\\,dt . 极坐标面积： S= 12 ^ r( )^2\\,d .",
            "summary": "f 平均 = 1 b-a a^b f(x)\\,dx. 直角坐标面积： S= a^b f(x)-g(x) \\,dx. 参数方程 x=x(t),y=y(t) 下： S=≤ft ^ y(t)x'(t)\\,dt . 极坐标面积： S= 12 ^ r( )^2\\,d…"
          },
          {
            "id": "anchor-1x4bzwi",
            "legacyId": "calculus-03-002-anchor-002",
            "title": "定积分的几何应用（数学二）：旋转体体积",
            "searchText": "定积分的几何应用（数学二）：旋转体体积 普通方程 y=f(x)，a≤ x≤ b： 绕 x 轴： V x= a^b[f(x)]^2\\,dx. 绕 y 轴： V y=2 a^b x f(x)\\,dx. 参数方程 x=x(t),\\ y=y(t)， ≤ t≤ ： 绕 x 轴： V x= ^ y(t)^2\\, x'(t) \\,dt. 绕 y 轴： V y=2 ^ x(t)y(t)x'(t) \\,dt. 以上按图形在第一象限书写；不在第一象限时，旋转半径和图形高度均取正值。 已知截面积 A(x)： V= a^b A(x)\\,dx.",
            "summary": "普通方程 y=f(x)，a≤ x≤ b： 绕 x 轴： V x= a^b[f(x)]^2\\,dx. 绕 y 轴： V y=2 a^b x f(x)\\,dx. 参数方程 x=x(t),\\ y=y(t)， ≤ t≤ ： 绕 x 轴： V x= ^ y(t)^2…"
          },
          {
            "id": "anchor-77fovp",
            "legacyId": "calculus-03-002-anchor-003",
            "title": "常见平面图形面积公式（含椭圆面积）",
            "searchText": "常见平面图形面积公式（含椭圆面积） 图形 面积 S 字母含义 --- --- --- 正方形 S=a^2 a 为边长 长方形 S=ab a,b 为长、宽 三角形 S= 12 bh b 为底，h 为对应高 平行四边形 S=bh b 为底，h 为对应高 梯形 S= a+b 2 h a,b 为两条平行边，h 为高 菱形 S= 12 d 1d 2 d 1,d 2 为两条对角线 圆 S= r^2 r 为半径 圆环 S= (R^2-r^2) R,r 为外、内半径 扇形 S= 12 r^2 r 为半径， 用弧度 椭圆 S= ab a,b 为长、短半轴，均不是整条轴长",
            "summary": "图形 面积 S 字母含义 --- --- --- 正方形 S=a^2 a 为边长 长方形 S=ab a,b 为长、宽 三角形 S= 12 bh b 为底，h 为对应高 平行四边形 S=bh b 为底，h 为对应高 梯形 S= a+b 2 h a,b 为两条…"
          },
          {
            "id": "anchor-jby4bt",
            "legacyId": "calculus-03-002-anchor-004",
            "title": "常见立体体积公式",
            "searchText": "常见立体体积公式 立体 体积 V 字母含义 --- --- --- 正方体 V=a^3 a 为棱长 长方体 V=abc a,b,c 为长、宽、高 直棱柱 V=Sh S 为底面积，h 为高 圆柱 V= r^2h r 为底面半径，h 为高 棱锥 V= 13 Sh S 为底面积，h 为高 圆锥 V= 13 r^2h r 为底面半径，h 为高 圆台 V= 13 h(R^2+Rr+r^2) R,r 为下、上底半径，h 为高 球 V= 43 r^3 r 为半径 半球 V= 23 r^3 r 为半径",
            "summary": "立体 体积 V 字母含义 --- --- --- 正方体 V=a^3 a 为棱长 长方体 V=abc a,b,c 为长、宽、高 直棱柱 V=Sh S 为底面积，h 为高 圆柱 V= r^2h r 为底面半径，h 为高 棱锥 V= 13 Sh S 为底面积，…"
          },
          {
            "id": "anchor-1ygnrh0",
            "legacyId": "calculus-03-002-anchor-005",
            "title": "常见立体表面积公式",
            "searchText": "常见立体表面积公式 下面的表面积都计入底面；如果题目只求侧面积，就不计底面。 立体 表面积 A 字母含义 --- --- --- 正方体 A=6a^2 a 为棱长 长方体 A=2(ab+bc+ca) a,b,c 为长、宽、高 直棱柱 A=2S+ph S 为底面积，p 为底面周长，h 为高 圆柱 A=2 r^2+2 rh r 为底面半径，h 为高 圆锥 A= r^2+ r = r^2+h^2 为母线长（斜高） 圆台 A= (R^2+r^2)+ (R+r) = h^2+(R-r)^2 为母线长 球 A=4 r^2 球面即全部外表面 半球 A=3 r^2 包含圆形底面；只算曲面为 2 r^2",
            "summary": "下面的表面积都计入底面；如果题目只求侧面积，就不计底面。 立体 表面积 A 字母含义 --- --- --- 正方体 A=6a^2 a 为棱长 长方体 A=2(ab+bc+ca) a,b,c 为长、宽、高 直棱柱 A=2S+ph S 为底面积，p 为底面周…"
          },
          {
            "id": "anchor-t2ts4i",
            "legacyId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积",
            "searchText": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积 L= a^b 1+[y'(x)]^2 \\,dx. 参数方程： L= ^ [x'(t)]^2+[y'(t)]^2 \\,dt. 极坐标： L= ^ r^2+(r')^2 \\,d . 绕 x 轴的曲面面积： S=2 a^b y 1+(y')^2 \\,dx. 绕 y 轴的曲面面积： S=2 a^b x 1+(y')^2 \\,dx. 参数方程 x=x(t),y=y(t) 绕 x 轴旋转： S=2 ^ y(t) [x'(t)]^2+[y'(t)]^2 \\,dt. 极坐标曲线绕极轴旋转： S=2 ^ r( ) r( )^2+[r'( )]^2 \\,d .",
            "summary": "L= a^b 1+[y'(x)]^2 \\,dx. 参数方程： L= ^ [x'(t)]^2+[y'(t)]^2 \\,dt. 极坐标： L= ^ r^2+(r')^2 \\,d . 绕 x 轴的曲面面积： S=2 a^b y 1+(y')^2 \\,dx. 绕 …"
          },
          {
            "id": "anchor-6k9zg2",
            "legacyId": "calculus-03-002-anchor-007",
            "title": "定积分的物理应用（数学二）：基础物理公式、运动与质量",
            "searchText": "定积分的物理应用（数学二）：基础物理公式、运动与质量 先分清物理量本身的公式，再确定积分微元。下表中 是质量密度，g 是重力加速度，h 是液面以下的深度。 物理量 基础公式 适用条件 --- --- --- 质量 m= V；密度不均匀时 m= V \\,dV 前式要求密度均匀 重力 G=mg G 表示重力大小 速度、加速度 v=s'(t)， a=v'(t) s(t) 是带方向的位移坐标 力与加速度 F=ma 质量 m 不变时 功 W=Fs；变力时 W= F (x)\\,dx 前式要求恒力且同向；F 是沿位移方向的分力 液体压强 p= gh 静止液体，p 是相对液面的压强 压力 F=pS；压强不均匀时 F= S p\\,dS 受压面为平面、各处压力同向；前式还要求压强均匀 弹簧弹力 F 大小 =kx x 是相对原长的伸长量；弹簧恢复力方向相反，为 -kx 具体到变密度直杆，线密度为 (x) 时，质量是 m= a^b (x)\\,dx。 若速度为 v(t)，[t 1,t 2] 内的 位移 与 路程 分别为 s= t 1 ^ t 2 v(t)\\,dt, L= t 1 ^ t 2 v(t) \\,dt. 速度变号时，两式不能混用；加速度始终为 a(t)=v'(t)。",
            "summary": "先分清物理量本身的公式，再确定积分微元。下表中 是质量密度，g 是重力加速度，h 是液面以下的深度。 物理量 基础公式 适用条件 --- --- --- 质量 m= V；密度不均匀时 m= V \\,dV 前式要求密度均匀 重力 G=mg G 表示重力大小 …"
          },
          {
            "id": "anchor-1qa371k",
            "legacyId": "calculus-03-002-anchor-008",
            "title": "定积分的物理应用（数学二）：变力、弹簧与抽水做功",
            "searchText": "定积分的物理应用（数学二）：变力、弹簧与抽水做功 沿直线从 a 移到 b，若 F(x) 是力沿位移方向的 带符号分量 ，变力做功为 W= a^b F(x)\\,dx. 从伸长量 a 拉到 b（0≤ a<b）时，克服弹簧恢复力所做的功为 W 外力 = a^b kx\\,dx= k 2 (b^2-a^2). 抽水时沿竖直方向取厚度为 dy 的水层。若该层横截面积为 A(y)，需提升的距离为 L(y)，则 dW= g A(y)L(y)\\,dy, W= g a^b A(y)L(y)\\,dy. 即“每层水的重力 × 该层的提升距离”，其中 为水的质量密度。",
            "summary": "沿直线从 a 移到 b，若 F(x) 是力沿位移方向的 带符号分量 ，变力做功为 W= a^b F(x)\\,dx. 从伸长量 a 拉到 b（0≤ a<b）时，克服弹簧恢复力所做的功为 W 外力 = a^b kx\\,dx= k 2 (b^2-a^2). 抽水…"
          },
          {
            "id": "anchor-1n801g8",
            "legacyId": "calculus-03-002-anchor-009",
            "title": "定积分的物理应用（数学二）：液体静压力",
            "searchText": "定积分的物理应用（数学二）：液体静压力 在深度为 h(y) 的位置，液体压强为 p(y)= g h(y)。沿竖直方向取宽为 w(y)、厚为 dy 的水平横条，则它受到的压力大小为 dF=p(y)w(y)\\,dy= g h(y)w(y)\\,dy, F= a^b g h(y)w(y)\\,dy. 若 y 本身从液面向下计深度，便有 h(y)=y；积分区间 [a,b] 必须覆盖实际受压部分。",
            "summary": "在深度为 h(y) 的位置，液体压强为 p(y)= g h(y)。沿竖直方向取宽为 w(y)、厚为 dy 的水平横条，则它受到的压力大小为 dF=p(y)w(y)\\,dy= g h(y)w(y)\\,dy, F= a^b g h(y)w(y)\\,dy. 若 …"
          },
          {
            "id": "anchor-c6zvhx",
            "legacyId": "calculus-03-002-anchor-010",
            "title": "定积分的物理应用（数学二）：万有引力与引力做功",
            "searchText": "定积分的物理应用（数学二）：万有引力与引力做功 相距 r 的两个质点，质量分别为 M,m，万有引力大小为 F(r)= G N Mm r^2 ，其中 G N 是万有引力常量，与上文表示重力的 G 不同。将质量 m 从距离 a 处缓慢移到更远的 b 处（0<a<b），克服引力所做的功为 W 外力 = a^b G N Mm r^2 \\,dr =G N Mm≤ft( 1a- 1b ). 引力方向与这段向外的位移相反，因此 引力本身做的功 是 -W 外力 。若对象是一根线密度为 (x) 的细杆，可先对杆的质量微元求引力；在各微元引力同向的情况下，大小为 F=G N M a^b (x) r(x)^2 \\,dx.",
            "summary": "相距 r 的两个质点，质量分别为 M,m，万有引力大小为 F(r)= G N Mm r^2 ，其中 G N 是万有引力常量，与上文表示重力的 G 不同。将质量 m 从距离 a 处缓慢移到更远的 b 处（0<a<b），克服引力所做的功为 W 外力 = a^b…"
          },
          {
            "id": "anchor-1vm6c8a",
            "legacyId": "calculus-03-002-anchor-011",
            "title": "定积分的几何应用（数学二）：形心与质心",
            "searchText": "定积分的几何应用（数学二）：形心与质心 设均匀薄片由 a≤ x≤ b、0≤ y≤ f(x) 围成，其中 f(x)≥0，面积 S 0。此时形心就是质心，只需记住 S= a^b f(x)\\,dx, x= a^b x f(x)\\,dx a^b f(x)\\,dx , y= a^b [f(x)]^2\\,dx 2 a^b f(x)\\,dx .",
            "summary": "设均匀薄片由 a≤ x≤ b、0≤ y≤ f(x) 围成，其中 f(x)≥0，面积 S 0。此时形心就是质心，只需记住 S= a^b f(x)\\,dx, x= a^b x f(x)\\,dx a^b f(x)\\,dx , y= a^b [f(x)]^2\\,d…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-sw6s3k",
            "parentAnchorId": "anchor-175zj2c",
            "legacyParentAnchorId": "calculus-03-002-anchor-001",
            "title": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：f_平均",
            "latex": "f_{\\text{平均}}=\\frac1{b-a}\\int_a^b f(x)\\,dx.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 0
          },
          {
            "id": "calculus-ahovol",
            "parentAnchorId": "anchor-175zj2c",
            "legacyParentAnchorId": "calculus-03-002-anchor-001",
            "title": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：S",
            "latex": "S=\\int_a^b|f(x)-g(x)|\\,dx.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "直角坐标面积：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 1
          },
          {
            "id": "calculus-y5sqhn",
            "parentAnchorId": "anchor-175zj2c",
            "legacyParentAnchorId": "calculus-03-002-anchor-001",
            "title": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：S",
            "latex": "S=\\left|\\int_\\alpha^\\beta y(t)x'(t)\\,dt\\right|.",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "参数方程 \\(x=x(t),y=y(t)\\) 下：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 2
          },
          {
            "id": "calculus-bexb9q",
            "parentAnchorId": "anchor-175zj2c",
            "legacyParentAnchorId": "calculus-03-002-anchor-001",
            "title": "定积分的几何应用（数学二）：函数平均值、平面图形面积与立体体积：S",
            "latex": "S=\\frac12\\int_\\alpha^\\beta r(\\theta)^2\\,d\\theta.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "极坐标面积：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 3
          },
          {
            "id": "calculus-z39dkc",
            "parentAnchorId": "anchor-1x4bzwi",
            "legacyParentAnchorId": "calculus-03-002-anchor-002",
            "title": "定积分的几何应用（数学二）：旋转体体积：绕 x 轴：",
            "latex": "\\text{绕 }x\\text{ 轴：}\\qquad\nV_x=\\pi\\int_a^b[f(x)]^2\\,dx.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "普通方程 \\(y=f(x)\\)，a\\le x\\le b：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 4
          },
          {
            "id": "calculus-cm6pdc",
            "parentAnchorId": "anchor-1x4bzwi",
            "legacyParentAnchorId": "calculus-03-002-anchor-002",
            "title": "定积分的几何应用（数学二）：旋转体体积：绕 y 轴：",
            "latex": "\\text{绕 }y\\text{ 轴：}\\qquad\nV_y=2\\pi\\int_a^b x f(x)\\,dx.",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：定积分的几何应用（数学二）：旋转体体积。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 5
          },
          {
            "id": "calculus-lwnh02",
            "parentAnchorId": "anchor-1x4bzwi",
            "legacyParentAnchorId": "calculus-03-002-anchor-002",
            "title": "定积分的几何应用（数学二）：旋转体体积：绕 x 轴：",
            "latex": "\\text{绕 }x\\text{ 轴：}\\qquad\nV_x=\\pi\\int_\\alpha^\\beta y(t)^2\\,|x'(t)|\\,dt.",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "参数方程 \\(x=x(t),\\ y=y(t)\\)，\\alpha\\le t\\le\\beta：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 6
          },
          {
            "id": "calculus-1jv6qab",
            "parentAnchorId": "anchor-1x4bzwi",
            "legacyParentAnchorId": "calculus-03-002-anchor-002",
            "title": "定积分的几何应用（数学二）：旋转体体积：绕 y 轴：",
            "latex": "\\text{绕 }y\\text{ 轴：}\\qquad\nV_y=2\\pi\\int_\\alpha^\\beta |x(t)y(t)x'(t)|\\,dt.",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：定积分的几何应用（数学二）：旋转体体积。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 7
          },
          {
            "id": "calculus-q5h278",
            "parentAnchorId": "anchor-1x4bzwi",
            "legacyParentAnchorId": "calculus-03-002-anchor-002",
            "title": "定积分的几何应用（数学二）：旋转体体积：V",
            "latex": "V=\\int_a^b A(x)\\,dx.",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "已知截面积 \\(A(x)\\)：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 8
          },
          {
            "id": "calculus-7ste7u",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "正方形面积",
            "latex": "S=a^2",
            "sourceBlockIndex": 16,
            "searchAliases": [
              "正方形面积",
              "正方形"
            ],
            "context": "a 为边长",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 9
          },
          {
            "id": "calculus-ji6nz8",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "长方形面积",
            "latex": "S=ab",
            "sourceBlockIndex": 18,
            "searchAliases": [
              "长方形面积",
              "长方形"
            ],
            "context": "a,b 为长、宽",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 10
          },
          {
            "id": "calculus-7p29ob",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "三角形面积",
            "latex": "S=\\frac12 bh",
            "sourceBlockIndex": 20,
            "searchAliases": [
              "三角形面积",
              "三角形"
            ],
            "context": "b 为底，h 为对应高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 11
          },
          {
            "id": "calculus-1fykoay",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "平行四边形面积",
            "latex": "S=bh",
            "sourceBlockIndex": 23,
            "searchAliases": [
              "平行四边形面积",
              "平行四边形"
            ],
            "context": "b 为底，h 为对应高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 12
          },
          {
            "id": "calculus-jy87cs",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "梯形面积",
            "latex": "S=\\frac{a+b}{2}h",
            "sourceBlockIndex": 26,
            "searchAliases": [
              "梯形面积",
              "梯形"
            ],
            "context": "a,b 为两条平行边，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 13
          },
          {
            "id": "calculus-b8rf2a",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "菱形面积",
            "latex": "S=\\frac12 d_1d_2",
            "sourceBlockIndex": 29,
            "searchAliases": [
              "菱形面积",
              "菱形"
            ],
            "context": "d_1,d_2 为两条对角线",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 14
          },
          {
            "id": "calculus-1kt2ocg",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "圆面积",
            "latex": "S=\\pi r^2",
            "sourceBlockIndex": 31,
            "searchAliases": [
              "圆面积",
              "圆"
            ],
            "context": "r 为半径",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 15
          },
          {
            "id": "calculus-1qhyzxj",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "圆环面积",
            "latex": "S=\\pi(R^2-r^2)",
            "sourceBlockIndex": 33,
            "searchAliases": [
              "圆环面积",
              "圆环"
            ],
            "context": "R,r 为外、内半径",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 16
          },
          {
            "id": "calculus-1iudwsp",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "扇形面积",
            "latex": "S=\\frac12 r^2\\theta",
            "sourceBlockIndex": 35,
            "searchAliases": [
              "扇形面积",
              "扇形"
            ],
            "context": "r 为半径，\\theta 用弧度",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 17
          },
          {
            "id": "calculus-5ysdno",
            "parentAnchorId": "anchor-77fovp",
            "legacyParentAnchorId": "calculus-03-002-anchor-003",
            "title": "椭圆面积",
            "latex": "S=\\pi ab",
            "sourceBlockIndex": 38,
            "searchAliases": [
              "椭圆面积",
              "椭圆"
            ],
            "context": "a,b 为长、短半轴，均不是整条轴长",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 18
          },
          {
            "id": "calculus-1we3gj5",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "正方体体积",
            "latex": "V=a^3",
            "sourceBlockIndex": 41,
            "searchAliases": [
              "正方体体积",
              "正方体"
            ],
            "context": "a 为棱长",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 19
          },
          {
            "id": "calculus-zf7aa1",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "长方体体积",
            "latex": "V=abc",
            "sourceBlockIndex": 43,
            "searchAliases": [
              "长方体体积",
              "长方体"
            ],
            "context": "a,b,c 为长、宽、高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 20
          },
          {
            "id": "calculus-1ki5a0p",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "直棱柱体积",
            "latex": "V=Sh",
            "sourceBlockIndex": 45,
            "searchAliases": [
              "直棱柱体积",
              "直棱柱"
            ],
            "context": "S 为底面积，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 21
          },
          {
            "id": "calculus-1xtldo2",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "圆柱体积",
            "latex": "V=\\pi r^2h",
            "sourceBlockIndex": 48,
            "searchAliases": [
              "圆柱体积",
              "圆柱"
            ],
            "context": "r 为底面半径，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 22
          },
          {
            "id": "calculus-15k9kxz",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "棱锥体积",
            "latex": "V=\\frac13 Sh",
            "sourceBlockIndex": 51,
            "searchAliases": [
              "棱锥体积",
              "棱锥"
            ],
            "context": "S 为底面积，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 23
          },
          {
            "id": "calculus-1evivv0",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "圆锥体积",
            "latex": "V=\\frac13\\pi r^2h",
            "sourceBlockIndex": 54,
            "searchAliases": [
              "圆锥体积",
              "圆锥"
            ],
            "context": "r 为底面半径，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 24
          },
          {
            "id": "calculus-smojum",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "圆台体积",
            "latex": "V=\\frac13\\pi h(R^2+Rr+r^2)",
            "sourceBlockIndex": 57,
            "searchAliases": [
              "圆台体积",
              "圆台"
            ],
            "context": "R,r 为下、上底半径，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 25
          },
          {
            "id": "calculus-5xsnz2",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "球体积",
            "latex": "V=\\frac43\\pi r^3",
            "sourceBlockIndex": 60,
            "searchAliases": [
              "球体积",
              "球"
            ],
            "context": "r 为半径",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 26
          },
          {
            "id": "calculus-upkarc",
            "parentAnchorId": "anchor-jby4bt",
            "legacyParentAnchorId": "calculus-03-002-anchor-004",
            "title": "半球体积",
            "latex": "V=\\frac23\\pi r^3",
            "sourceBlockIndex": 62,
            "searchAliases": [
              "半球体积",
              "半球"
            ],
            "context": "r 为半径",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 27
          },
          {
            "id": "calculus-q55hv6",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "正方体表面积",
            "latex": "A=6a^2",
            "sourceBlockIndex": 65,
            "searchAliases": [
              "正方体表面积",
              "正方体"
            ],
            "context": "a 为棱长",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 28
          },
          {
            "id": "calculus-11wxr4c",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "长方体表面积",
            "latex": "A=2(ab+bc+ca)",
            "sourceBlockIndex": 67,
            "searchAliases": [
              "长方体表面积",
              "长方体"
            ],
            "context": "a,b,c 为长、宽、高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 29
          },
          {
            "id": "calculus-1qm0lcm",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "直棱柱表面积",
            "latex": "A=2S+ph",
            "sourceBlockIndex": 69,
            "searchAliases": [
              "直棱柱表面积",
              "直棱柱"
            ],
            "context": "S 为底面积，p 为底面周长，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 30
          },
          {
            "id": "calculus-rayytu",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "圆柱表面积",
            "latex": "A=2\\pi r^2+2\\pi rh",
            "sourceBlockIndex": 73,
            "searchAliases": [
              "圆柱表面积",
              "圆柱"
            ],
            "context": "r 为底面半径，h 为高",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 31
          },
          {
            "id": "calculus-7gu099",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "圆锥表面积",
            "latex": "A=\\pi r^2+\\pi r\\ell",
            "sourceBlockIndex": 76,
            "searchAliases": [
              "圆锥表面积",
              "圆锥"
            ],
            "context": "底面积加侧面积；母线长是半径与高组成的直角三角形斜边。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 32
          },
          {
            "id": "calculus-175oave",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "圆台表面积",
            "latex": "A=\\pi(R^2+r^2)+\\pi(R+r)\\ell",
            "sourceBlockIndex": 78,
            "searchAliases": [
              "圆台表面积",
              "圆台"
            ],
            "context": "上下底面积加侧面积；母线长由高和两底半径之差求得。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 33
          },
          {
            "id": "calculus-sse8ka",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "球表面积",
            "latex": "A=4\\pi r^2",
            "sourceBlockIndex": 80,
            "searchAliases": [
              "球表面积",
              "球"
            ],
            "context": "球面即全部外表面",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 34
          },
          {
            "id": "calculus-rb88j3",
            "parentAnchorId": "anchor-1ygnrh0",
            "legacyParentAnchorId": "calculus-03-002-anchor-005",
            "title": "半球表面积",
            "latex": "A=3\\pi r^2",
            "sourceBlockIndex": 81,
            "searchAliases": [
              "半球表面积",
              "半球"
            ],
            "context": "这里包含圆形底面；只算曲面时为球表面积的一半。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 35
          },
          {
            "id": "calculus-1kl2j3v",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：L",
            "latex": "L=\\int_a^b\\sqrt{1+[y'(x)]^2}\\,dx.",
            "sourceBlockIndex": 83,
            "searchAliases": [],
            "context": "所属知识点：定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 36
          },
          {
            "id": "calculus-1pg2gjx",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：L",
            "latex": "L=\\int_\\alpha^\\beta\\sqrt{[x'(t)]^2+[y'(t)]^2}\\,dt.",
            "sourceBlockIndex": 84,
            "searchAliases": [],
            "context": "参数方程：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 37
          },
          {
            "id": "calculus-mq017y",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：L",
            "latex": "L=\\int_\\alpha^\\beta\\sqrt{r^2+(r')^2}\\,d\\theta.",
            "sourceBlockIndex": 85,
            "searchAliases": [],
            "context": "所属知识点：定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 38
          },
          {
            "id": "calculus-1weaz1e",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S",
            "latex": "S=2\\pi\\int_a^b |y|\\sqrt{1+(y')^2}\\,dx.",
            "sourceBlockIndex": 87,
            "searchAliases": [],
            "context": "绕 x 轴的曲面面积：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 39
          },
          {
            "id": "calculus-p2ehz",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S",
            "latex": "S=2\\pi\\int_a^b |x|\\sqrt{1+(y')^2}\\,dx.",
            "sourceBlockIndex": 89,
            "searchAliases": [],
            "context": "绕 y 轴的曲面面积：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 40
          },
          {
            "id": "calculus-ascs8v",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S",
            "latex": "S=2\\pi\\int_\\alpha^\\beta |y(t)|\n\\sqrt{[x'(t)]^2+[y'(t)]^2}\\,dt.",
            "sourceBlockIndex": 92,
            "searchAliases": [],
            "context": "参数方程 \\(x=x(t),y=y(t)\\) 绕 x 轴旋转：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 41
          },
          {
            "id": "calculus-1qzk0u8",
            "parentAnchorId": "anchor-t2ts4i",
            "legacyParentAnchorId": "calculus-03-002-anchor-006",
            "title": "定积分的几何应用（数学二）：平面曲线弧长与旋转曲面面积：S",
            "latex": "S=2\\pi\\int_\\alpha^\\beta |r(\\theta)\\sin\\theta|\n\\sqrt{r(\\theta)^2+[r'(\\theta)]^2}\\,d\\theta.",
            "sourceBlockIndex": 93,
            "searchAliases": [],
            "context": "极坐标曲线绕极轴旋转：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 42
          },
          {
            "id": "calculus-3rax7w",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "质量基础公式",
            "latex": "m=\\rho V",
            "sourceBlockIndex": 97,
            "searchAliases": [
              "质量基础公式",
              "质量"
            ],
            "context": "前式要求密度均匀",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 43
          },
          {
            "id": "calculus-1et9sns",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "质量积分形式",
            "latex": "m=\\int_V\\rho\\,dV",
            "sourceBlockIndex": 98,
            "searchAliases": [
              "质量积分形式",
              "质量"
            ],
            "context": "前式要求密度均匀",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 44
          },
          {
            "id": "calculus-16igip8",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "重力基础公式",
            "latex": "G=mg",
            "sourceBlockIndex": 99,
            "searchAliases": [
              "重力基础公式",
              "重力"
            ],
            "context": "G 表示重力大小",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 45
          },
          {
            "id": "calculus-1ql6fav",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "速度公式",
            "latex": "v=s'(t)",
            "sourceBlockIndex": 101,
            "searchAliases": [
              "速度公式",
              "速度、加速度"
            ],
            "context": "s(t) 是带方向的位移坐标",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 46
          },
          {
            "id": "calculus-12s3un5",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "加速度公式",
            "latex": "a=v'(t)",
            "sourceBlockIndex": 102,
            "searchAliases": [
              "加速度公式",
              "速度、加速度"
            ],
            "context": "s(t) 是带方向的位移坐标",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 47
          },
          {
            "id": "calculus-53nl7h",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "力与加速度基础公式",
            "latex": "F=ma",
            "sourceBlockIndex": 104,
            "searchAliases": [
              "力与加速度基础公式",
              "力与加速度"
            ],
            "context": "质量 m 不变时",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 48
          },
          {
            "id": "calculus-1en8igw",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "功基础公式",
            "latex": "W=Fs",
            "sourceBlockIndex": 106,
            "searchAliases": [
              "功基础公式",
              "功"
            ],
            "context": "前式要求恒力且同向；F_{\\parallel} 是沿位移方向的分力",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 49
          },
          {
            "id": "calculus-o6jzxz",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "功积分形式",
            "latex": "W=\\int F_{\\parallel}(x)\\,dx",
            "sourceBlockIndex": 107,
            "searchAliases": [
              "功积分形式",
              "功"
            ],
            "context": "前式要求恒力且同向；F_{\\parallel} 是沿位移方向的分力",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 50
          },
          {
            "id": "calculus-v69n9t",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "液体压强基础公式",
            "latex": "p=\\rho gh",
            "sourceBlockIndex": 109,
            "searchAliases": [
              "液体压强基础公式",
              "液体压强"
            ],
            "context": "静止液体，p 是相对液面的压强",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 51
          },
          {
            "id": "calculus-qk81bq",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "压力基础公式",
            "latex": "F=pS",
            "sourceBlockIndex": 111,
            "searchAliases": [
              "压力基础公式",
              "压力"
            ],
            "context": "受压面为平面、各处压力同向；前式还要求压强均匀",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 52
          },
          {
            "id": "calculus-dkvkr9",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "压力积分形式",
            "latex": "F=\\int_S p\\,dS",
            "sourceBlockIndex": 112,
            "searchAliases": [
              "压力积分形式",
              "压力"
            ],
            "context": "受压面为平面、各处压力同向；前式还要求压强均匀",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 53
          },
          {
            "id": "calculus-rw1hbs",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "弹簧弹力基础公式",
            "latex": "F_{\\text{大小}}=kx",
            "sourceBlockIndex": 113,
            "searchAliases": [
              "弹簧弹力基础公式",
              "弹簧弹力"
            ],
            "context": "x 是相对原长的伸长量；弹簧恢复力方向相反，为 -kx",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 54
          },
          {
            "id": "calculus-variable-density-rod-mass",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "变密度细杆的质量",
            "latex": "m=\\int_a^b\\lambda(x)\\,dx",
            "sourceBlockIndex": 117,
            "searchAliases": [
              "线密度求质量",
              "积分求质量"
            ],
            "context": "细杆位于 x∈[a,b]，λ(x) 是线密度。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 55
          },
          {
            "id": "calculus-wtpptr-1",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "定积分的物理应用（数学二）：基础物理公式、运动与质量：Delta s",
            "latex": "\\Delta s=\\int_{t_1}^{t_2}v(t)\\,dt",
            "sourceBlockIndex": 120,
            "searchAliases": [],
            "context": "若速度为 \\(v(t)\\)，[t_1,t_2] 内的位移与路程分别为",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 56
          },
          {
            "id": "calculus-wtpptr-2",
            "parentAnchorId": "anchor-6k9zg2",
            "legacyParentAnchorId": "calculus-03-002-anchor-007",
            "title": "定积分的物理应用（数学二）：基础物理公式、运动与质量：L",
            "latex": "L=\\int_{t_1}^{t_2}|v(t)|\\,dt",
            "sourceBlockIndex": 120,
            "searchAliases": [],
            "context": "若速度为 \\(v(t)\\)，[t_1,t_2] 内的位移与路程分别为",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 57
          },
          {
            "id": "calculus-1depk2",
            "parentAnchorId": "anchor-1qa371k",
            "legacyParentAnchorId": "calculus-03-002-anchor-008",
            "title": "定积分的物理应用（数学二）：变力、弹簧与抽水做功：W",
            "latex": "W=\\int_a^b F(x)\\,dx.",
            "sourceBlockIndex": 125,
            "searchAliases": [],
            "context": "沿直线从 a 移到 b，若 \\(F(x)\\) 是力沿位移方向的带符号分量，变力做功为",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 58
          },
          {
            "id": "calculus-39sc7s",
            "parentAnchorId": "anchor-1qa371k",
            "legacyParentAnchorId": "calculus-03-002-anchor-008",
            "title": "定积分的物理应用（数学二）：变力、弹簧与抽水做功：W_外力",
            "latex": "W_{\\text{外力}}=\\int_a^b kx\\,dx=\\frac{k}{2}(b^2-a^2).",
            "sourceBlockIndex": 129,
            "searchAliases": [],
            "context": "从伸长量 a 拉到 b（0\\le a<b）时，克服弹簧恢复力所做的功为",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 59
          },
          {
            "id": "calculus-4qs95x-1",
            "parentAnchorId": "anchor-1qa371k",
            "legacyParentAnchorId": "calculus-03-002-anchor-008",
            "title": "定积分的物理应用（数学二）：变力、弹簧与抽水做功：dW",
            "latex": "dW=\\rho g A(y)L(y)\\,dy",
            "sourceBlockIndex": 133,
            "searchAliases": [],
            "context": "抽水时沿竖直方向取厚度为 dy 的水层。若该层横截面积为 \\(A(y)\\)，需提升的距离为 \\(L(y)\\)，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 60
          },
          {
            "id": "calculus-4qs95x-2",
            "parentAnchorId": "anchor-1qa371k",
            "legacyParentAnchorId": "calculus-03-002-anchor-008",
            "title": "定积分的物理应用（数学二）：变力、弹簧与抽水做功：W",
            "latex": "W=\\rho g\\int_a^b A(y)L(y)\\,dy",
            "sourceBlockIndex": 133,
            "searchAliases": [],
            "context": "抽水时沿竖直方向取厚度为 dy 的水层。若该层横截面积为 \\(A(y)\\)，需提升的距离为 \\(L(y)\\)，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 61
          },
          {
            "id": "calculus-1djpxhg-1",
            "parentAnchorId": "anchor-1n801g8",
            "legacyParentAnchorId": "calculus-03-002-anchor-009",
            "title": "定积分的物理应用（数学二）：液体静压力：dF",
            "latex": "dF=p(y)w(y)\\,dy=\\rho g h(y)w(y)\\,dy",
            "sourceBlockIndex": 139,
            "searchAliases": [],
            "context": "在深度为 \\(h(y)\\) 的位置，液体压强为 \\(p(y)=\\rho g h(y)\\)。沿竖直方向取宽为 \\(w(y)\\)、厚为 dy 的水平横条，则它受到的压力大小为",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 62
          },
          {
            "id": "calculus-1djpxhg-2",
            "parentAnchorId": "anchor-1n801g8",
            "legacyParentAnchorId": "calculus-03-002-anchor-009",
            "title": "定积分的物理应用（数学二）：液体静压力：F",
            "latex": "F=\\int_a^b\\rho g h(y)w(y)\\,dy",
            "sourceBlockIndex": 139,
            "searchAliases": [],
            "context": "在深度为 \\(h(y)\\) 的位置，液体压强为 \\(p(y)=\\rho g h(y)\\)。沿竖直方向取宽为 \\(w(y)\\)、厚为 dy 的水平横条，则它受到的压力大小为",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 63
          },
          {
            "id": "calculus-newton-gravitation-force",
            "parentAnchorId": "anchor-c6zvhx",
            "legacyParentAnchorId": "calculus-03-002-anchor-010",
            "title": "万有引力大小公式",
            "latex": "F(r)=\\frac{G_{\\mathrm N}Mm}{r^2}",
            "sourceBlockIndex": 145,
            "searchAliases": [
              "引力公式",
              "万有引力定律"
            ],
            "context": "两质点质量为 M、m，距离为 r；G_N 是万有引力常量。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 64
          },
          {
            "id": "calculus-c0dsak",
            "parentAnchorId": "anchor-c6zvhx",
            "legacyParentAnchorId": "calculus-03-002-anchor-010",
            "title": "定积分的物理应用（数学二）：万有引力与引力做功：W_外力",
            "latex": "W_{\\text{外力}}=\\int_a^b\\frac{G_{\\mathrm N}Mm}{r^2}\\,dr\n=G_{\\mathrm N}Mm\\left(\\frac1a-\\frac1b\\right).",
            "sourceBlockIndex": 152,
            "searchAliases": [],
            "context": "所属知识点：定积分的物理应用（数学二）：万有引力与引力做功。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 65
          },
          {
            "id": "calculus-1g1jyz6",
            "parentAnchorId": "anchor-c6zvhx",
            "legacyParentAnchorId": "calculus-03-002-anchor-010",
            "title": "定积分的物理应用（数学二）：万有引力与引力做功：F",
            "latex": "F=G_{\\mathrm N}M\\int_a^b\\frac{\\lambda(x)}{r(x)^2}\\,dx.",
            "sourceBlockIndex": 155,
            "searchAliases": [],
            "context": "所属知识点：定积分的物理应用（数学二）：万有引力与引力做功。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 66
          },
          {
            "id": "calculus-2z1adl-1",
            "parentAnchorId": "anchor-1vm6c8a",
            "legacyParentAnchorId": "calculus-03-002-anchor-011",
            "title": "定积分的几何应用（数学二）：形心与质心：S",
            "latex": "S=\\int_a^b f(x)\\,dx",
            "sourceBlockIndex": 160,
            "searchAliases": [],
            "context": "设均匀薄片由 a\\le x\\le b、\\(0\\le y\\le f(x)\\) 围成，其中 \\(f(x)\\ge0\\)，面积 S>0。此时形心就是质心，只需记住",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 67
          },
          {
            "id": "calculus-2z1adl-2",
            "parentAnchorId": "anchor-1vm6c8a",
            "legacyParentAnchorId": "calculus-03-002-anchor-011",
            "title": "定积分的几何应用（数学二）：形心与质心：bar x",
            "latex": "\\bar x=\\frac{\\int_a^b x f(x)\\,dx}{\\int_a^b f(x)\\,dx}",
            "sourceBlockIndex": 160,
            "searchAliases": [],
            "context": "设均匀薄片由 a\\le x\\le b、\\(0\\le y\\le f(x)\\) 围成，其中 \\(f(x)\\ge0\\)，面积 S>0。此时形心就是质心，只需记住",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 68
          },
          {
            "id": "calculus-2z1adl-3",
            "parentAnchorId": "anchor-1vm6c8a",
            "legacyParentAnchorId": "calculus-03-002-anchor-011",
            "title": "定积分的几何应用（数学二）：形心与质心：bar y",
            "latex": "\\bar y=\\frac{\\int_a^b [f(x)]^2\\,dx}{2\\int_a^b f(x)\\,dx}",
            "sourceBlockIndex": 160,
            "searchAliases": [],
            "context": "设均匀薄片由 a\\le x\\le b、\\(0\\le y\\le f(x)\\) 围成，其中 \\(f(x)\\ge0\\)，面积 S>0。此时形心就是质心，只需记住",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-002",
            "order": 69
          }
        ]
      },
      {
        "id": "calculus-03-003",
        "title": "反常积分",
        "body": "##### 无穷积分、瑕积分、比较判别与参数范围\n\n无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象：\n\n<!-- formula {\"id\":\"calculus-4ddaqh\",\"title\":\"无穷积分、瑕积分、比较判别与参数范围：∫_1^∞(dx)/(x^p)\",\"aliases\":[],\"context\":\"无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象：\"} -->\n\\[\n\\int_1^{\\infty}\\frac{dx}{x^p}\n\\begin{cases}\n\\text{收敛},&p>1,\\\\\n\\text{发散},&p\\le1,\n\\end{cases}\n\\]\n\n<!-- formula {\"id\":\"calculus-1w723j4\",\"title\":\"无穷积分、瑕积分、比较判别与参数范围：∫_0^1(dx)/(x^p)\",\"aliases\":[],\"context\":\"所属知识点：无穷积分、瑕积分、比较判别与参数范围。\"} -->\n\\[\n\\int_0^1\\frac{dx}{x^p}\n\\begin{cases}\n\\text{收敛},&p<1,\\\\\n\\text{发散},&p\\ge1.\n\\end{cases}\n\\]\n\n若 \\(f,g\\ge0\\) 且 \\(\\frac fg\\to c\\in(0,\\infty)\\)，二者同敛散。含对数时常用\n\n<!-- formula {\"id\":\"calculus-1r7ghdn\",\"title\":\"无穷积分、瑕积分、比较判别与参数范围：∫^∞(dx)/(x(ln x)^q)\",\"aliases\":[],\"context\":\"若 f,g\\\\ge0 且 \\\\(\\\\frac fg\\\\to c\\\\in(0,\\\\infty)\\\\)，二者同敛散。含对数时常用\"} -->\n\\[\n\\int^{\\infty}\\frac{dx}{x(\\ln x)^q}\n\\]\n\n在 \\(q>1\\) 时收敛。存在多个问题点时必须分别判断，全部收敛才收敛。\n\n更完整的对数判别式：\n\n<!-- formula {\"id\":\"calculus-mnvhm3\",\"title\":\"无穷积分、瑕积分、比较判别与参数范围：∫_e^∞(dx)/(x^p(ln x)^q)\",\"aliases\":[],\"context\":\"更完整的对数判别式：\"} -->\n\\[\n\\int_e^\\infty\\frac{dx}{x^p(\\ln x)^q}\n\\begin{cases}\n\\text{收敛},&p>1,\\text{ 或 }p=1,q>1,\\\\\n\\text{发散},&p<1,\\text{ 或 }p=1,q\\le1,\n\\end{cases}\n\\]\n\n<!-- formula {\"id\":\"calculus-17ywwi3\",\"title\":\"无穷积分、瑕积分、比较判别与参数范围：∫_0^frac1e(dx)/(x^p|ln x|^q)\",\"aliases\":[],\"context\":\"所属知识点：无穷积分、瑕积分、比较判别与参数范围。\"} -->\n\\[\n\\int_0^{\\frac1e}\\frac{dx}{x^p|\\ln x|^q}\n\\begin{cases}\n\\text{收敛},&p<1,\\text{ 或 }p=1,q>1,\\\\\n\\text{发散},&p>1,\\text{ 或 }p=1,q\\le1.\n\\end{cases}\n\\]\n\n##### 反常积分绝对收敛与极限比较判别\n\n若 \\(\\int |f(x)|\\,dx\\) 收敛，则 \\(\\int f(x)\\,dx\\) 收敛。对非负函数，若\n\n<!-- formula {\"id\":\"calculus-z3e4cx-1\",\"title\":\"反常积分绝对收敛与极限比较判别：lim_xto a(f(x))/(g(x))\",\"aliases\":[],\"context\":\"若 \\\\(\\\\int |f(x)|\\\\,dx\\\\) 收敛，则 \\\\(\\\\int f(x)\\\\,dx\\\\) 收敛。对非负函数，若\"} -->\n\\[\n\\lim_{x\\to a}\\frac{f(x)}{g(x)}=c,\n\\qquad 0<c<+\\infty,\n\\]\n\n则 \\(f,g\\) 在 \\(a\\) 附近的反常积分同敛散。若极限为 \\(0\\) 且 \\(\\int g\\) 收敛，则 \\(\\int f\\) 收敛；若极限为 \\(+\\infty\\) 且 \\(\\int g\\) 发散，则 \\(\\int f\\) 发散。",
        "searchText": "反常积分 反常积分 反常积分 无穷积分、瑕积分、比较判别与参数范围 无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象： 1^ dx x^p cases 收敛,&p 1,\\\\ 发散,&p≤1, cases 0^1 dx x^p cases 收敛,&p<1,\\\\ 发散,&p≥1. cases 若 f,g≥0 且 fg c (0, )，二者同敛散。含对数时常用 ^ dx x( x)^q 在 q 1 时收敛。存在多个问题点时必须分别判断，全部收敛才收敛。 更完整的对数判别式： e^ dx x^p( x)^q cases 收敛,&p 1, 或 p=1,q 1,\\\\ 发散,&p<1, 或 p=1,q≤1, cases 0^ 1e dx x^p x ^q cases 收敛,&p<1, 或 p=1,q 1,\\\\ 发散,&p 1, 或 p=1,q≤1. cases 反常积分绝对收敛与极限比较判别 若 f(x) \\,dx 收敛，则 f(x)\\,dx 收敛。对非负函数，若 x a f(x) g(x) =c, 0<c<+ , 则 f,g 在 a 附近的反常积分同敛散。若极限为 0 且 g 收敛，则 f 收敛；若极限为 + 且 g 发散，则 f 发散。",
        "summary": "无穷积分、瑕积分、比较判别与参数范围 无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象： 1^ dx x^p cases 收敛,&p 1,\\\\ 发散,&p≤1, cases 0^1 dx x^p cases 收敛,&p<1,\\\\ 发散,&p≥1.…",
        "anchors": [
          {
            "id": "anchor-10742oa",
            "legacyId": "calculus-03-003-anchor-001",
            "title": "无穷积分、瑕积分、比较判别与参数范围",
            "searchText": "无穷积分、瑕积分、比较判别与参数范围 无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象： 1^ dx x^p cases 收敛,&p 1,\\\\ 发散,&p≤1, cases 0^1 dx x^p cases 收敛,&p<1,\\\\ 发散,&p≥1. cases 若 f,g≥0 且 fg c (0, )，二者同敛散。含对数时常用 ^ dx x( x)^q 在 q 1 时收敛。存在多个问题点时必须分别判断，全部收敛才收敛。 更完整的对数判别式： e^ dx x^p( x)^q cases 收敛,&p 1, 或 p=1,q 1,\\\\ 发散,&p<1, 或 p=1,q≤1, cases 0^ 1e dx x^p x ^q cases 收敛,&p<1, 或 p=1,q 1,\\\\ 发散,&p 1, 或 p=1,q≤1. cases",
            "summary": "无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象： 1^ dx x^p cases 收敛,&p 1,\\\\ 发散,&p≤1, cases 0^1 dx x^p cases 收敛,&p<1,\\\\ 发散,&p≥1. cases 若 f,g≥0 且 fg…"
          },
          {
            "id": "anchor-11l6bhp",
            "legacyId": "calculus-03-003-anchor-002",
            "title": "反常积分绝对收敛与极限比较判别",
            "searchText": "反常积分绝对收敛与极限比较判别 若 f(x) \\,dx 收敛，则 f(x)\\,dx 收敛。对非负函数，若 x a f(x) g(x) =c, 0<c<+ , 则 f,g 在 a 附近的反常积分同敛散。若极限为 0 且 g 收敛，则 f 收敛；若极限为 + 且 g 发散，则 f 发散。",
            "summary": "若 f(x) \\,dx 收敛，则 f(x)\\,dx 收敛。对非负函数，若 x a f(x) g(x) =c, 0<c<+ , 则 f,g 在 a 附近的反常积分同敛散。若极限为 0 且 g 收敛，则 f 收敛；若极限为 + 且 g 发散，则 f 发散。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-4ddaqh",
            "parentAnchorId": "anchor-10742oa",
            "legacyParentAnchorId": "calculus-03-003-anchor-001",
            "title": "无穷积分、瑕积分、比较判别与参数范围：∫_1^∞(dx)/(x^p)",
            "latex": "\\int_1^{\\infty}\\frac{dx}{x^p}\n\\begin{cases}\n\\text{收敛},&p>1,\\\\\n\\text{发散},&p\\le1,\n\\end{cases}",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "无穷区间或被积函数在端点无界时，必须写成极限。基本比较对象：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-003",
            "order": 0
          },
          {
            "id": "calculus-1w723j4",
            "parentAnchorId": "anchor-10742oa",
            "legacyParentAnchorId": "calculus-03-003-anchor-001",
            "title": "无穷积分、瑕积分、比较判别与参数范围：∫_0^1(dx)/(x^p)",
            "latex": "\\int_0^1\\frac{dx}{x^p}\n\\begin{cases}\n\\text{收敛},&p<1,\\\\\n\\text{发散},&p\\ge1.\n\\end{cases}",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：无穷积分、瑕积分、比较判别与参数范围。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-003",
            "order": 1
          },
          {
            "id": "calculus-1r7ghdn",
            "parentAnchorId": "anchor-10742oa",
            "legacyParentAnchorId": "calculus-03-003-anchor-001",
            "title": "无穷积分、瑕积分、比较判别与参数范围：∫^∞(dx)/(x(ln x)^q)",
            "latex": "\\int^{\\infty}\\frac{dx}{x(\\ln x)^q}",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "若 f,g\\ge0 且 \\(\\frac fg\\to c\\in(0,\\infty)\\)，二者同敛散。含对数时常用",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-003",
            "order": 2
          },
          {
            "id": "calculus-mnvhm3",
            "parentAnchorId": "anchor-10742oa",
            "legacyParentAnchorId": "calculus-03-003-anchor-001",
            "title": "无穷积分、瑕积分、比较判别与参数范围：∫_e^∞(dx)/(x^p(ln x)^q)",
            "latex": "\\int_e^\\infty\\frac{dx}{x^p(\\ln x)^q}\n\\begin{cases}\n\\text{收敛},&p>1,\\text{ 或 }p=1,q>1,\\\\\n\\text{发散},&p<1,\\text{ 或 }p=1,q\\le1,\n\\end{cases}",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "更完整的对数判别式：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-003",
            "order": 3
          },
          {
            "id": "calculus-17ywwi3",
            "parentAnchorId": "anchor-10742oa",
            "legacyParentAnchorId": "calculus-03-003-anchor-001",
            "title": "无穷积分、瑕积分、比较判别与参数范围：∫_0^frac1e(dx)/(x^p|ln x|^q)",
            "latex": "\\int_0^{\\frac1e}\\frac{dx}{x^p|\\ln x|^q}\n\\begin{cases}\n\\text{收敛},&p<1,\\text{ 或 }p=1,q>1,\\\\\n\\text{发散},&p>1,\\text{ 或 }p=1,q\\le1.\n\\end{cases}",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：无穷积分、瑕积分、比较判别与参数范围。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-003",
            "order": 4
          },
          {
            "id": "calculus-z3e4cx-1",
            "parentAnchorId": "anchor-11l6bhp",
            "legacyParentAnchorId": "calculus-03-003-anchor-002",
            "title": "反常积分绝对收敛与极限比较判别：lim_xto a(f(x))/(g(x))",
            "latex": "\\lim_{x\\to a}\\frac{f(x)}{g(x)}=c,\n\\qquad 0<c<+\\infty,",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "若 \\(\\int |f(x)|\\,dx\\) 收敛，则 \\(\\int f(x)\\,dx\\) 收敛。对非负函数，若",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-003",
            "order": 5
          }
        ]
      },
      {
        "id": "calculus-03-004",
        "title": "其他积分题型",
        "body": "##### 积分中值定理、变上限积分与牛顿—莱布尼茨公式\n\n积分中值定理：连续函数在 \\([a,b]\\) 上满足\n\n<!-- formula {\"id\":\"calculus-sx9q78\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：∫_a^b f(x) dx\",\"aliases\":[],\"context\":\"积分中值定理：连续函数在 [a,b] 上满足\"} -->\n\\[\n\\int_a^b f(x)\\,dx=f(\\xi)(b-a).\n\\]\n\n加权积分中值定理：若 \\(f\\) 连续，\\(g\\) 可积且不变号，则存在 \\(\\xi\\in[a,b]\\)，使\n\n<!-- formula {\"id\":\"calculus-zbrhd0\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：∫_a^b f(x)g(x) dx\",\"aliases\":[],\"context\":\"加权积分中值定理：若 f 连续，g 可积且不变号，则存在 \\\\xi\\\\in[a,b]，使\"} -->\n\\[\n\\int_a^b f(x)g(x)\\,dx=f(\\xi)\\int_a^b g(x)\\,dx.\n\\]\n\n变上限积分求导：\n\n<!-- formula {\"id\":\"calculus-d7l12l\",\"title\":\"变上限积分求导公式\",\"aliases\":[],\"context\":\"变上限积分求导：\"} -->\n\\[\n\\left(\\int_a^x f(t)\\,dt\\right)'=f(x).\n\\]\n\n牛顿—莱布尼茨公式：\n\n<!-- formula {\"id\":\"calculus-1dh4te7-1\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：∫_a^b f(x) dx\",\"aliases\":[],\"context\":\"牛顿—莱布尼茨公式：\"} -->\n\\[\n\\int_a^b f(x)\\,dx=F(b)-F(a),\\qquad F'=f.\n\\]\n\n若 \\(f\\) 在 \\([a,b]\\) 上可积，则\n\n<!-- formula {\"id\":\"calculus-gimft9\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi(x)\",\"aliases\":[],\"context\":\"若 f 在 [a,b] 上可积，则\"} -->\n\\[\n\\Phi(x)=\\int_a^x f(t)\\,dt\n\\]\n\n连续；若 \\(f\\) 在 \\(x_0\\) 连续，则 \\(\\Phi'(x_0)=f(x_0)\\)。连续函数一定有原函数；有跳跃间断点或无穷间断点的函数不可能在包含该点的区间上有原函数。\n\n若 \\(x_0\\) 是 \\(f\\) 的可去间断点，则\n\n<!-- formula {\"id\":\"calculus-f09tsz\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi'(x_0)\",\"aliases\":[],\"context\":\"若 x_0 是 f 的可去间断点，则\"} -->\n\\[\n\\Phi'(x_0)=\\lim_{x\\to x_0}f(x),\n\\]\n\n该值不一定等于 \\(f(x_0)\\)。若 \\(x_0\\) 是跳跃间断点，则 \\(\\Phi\\) 连续但不可导，且\n\n<!-- formula {\"items\":[{\"id\":\"calculus-ujim5a-1\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi'_-(x_0)\",\"aliases\":[],\"context\":\"该值不一定等于 \\\\(f(x_0)\\\\)。若 x_0 是跳跃间断点，则 \\\\Phi 连续但不可导，且\",\"latex\":\"\\\\Phi'_-(x_0)=f(x_0-0)\"},{\"id\":\"calculus-ujim5a-2\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi'_+(x_0)\",\"aliases\":[],\"context\":\"该值不一定等于 \\\\(f(x_0)\\\\)。若 x_0 是跳跃间断点，则 \\\\Phi 连续但不可导，且\",\"latex\":\"\\\\Phi'_+(x_0)=f(x_0+0)\"}]} -->\n\\[\n\\Phi'_-(x_0)=f(x_0-0),\\qquad\n\\Phi'_+(x_0)=f(x_0+0).\n\\]\n\n若 \\(f\\) 有 \\(k\\) 阶连续导数，则 \\(\\Phi\\) 有 \\(k+1\\) 阶连续导数。\n\n奇偶性与原函数：连续奇函数的任意原函数都是偶函数加常数；连续偶函数恰有一个取值满足 \\(F(0)=0\\) 的奇原函数。若 \\(f\\) 以 \\(T\\) 为周期，则\n\n<!-- formula {\"id\":\"calculus-15bqf3b\",\"title\":\"积分中值定理、变上限积分与牛顿—莱布尼茨公式：F(x)\",\"aliases\":[],\"context\":\"奇偶性与原函数：连续奇函数的任意原函数都是偶函数加常数；连续偶函数恰有一个取值满足 \\\\(F(0)=0\\\\) 的奇原函数。若 f 以 T 为周期，则\"} -->\n\\[\nF(x)=\\int_0^x f(t)\\,dt\n\\]\n\n也以 \\(T\\) 为周期，当且仅当 <!-- formula {\"id\":\"calculus-periodic-antiderivative-zero-mean\",\"title\":\"周期函数的原函数仍周期的判定\",\"aliases\":[\"周期原函数\",\"整周期积分为零\"],\"context\":\"连续函数 f 以 T 为周期；其从 0 到 x 的积分也以 T 为周期，当且仅当一个周期内的积分为零。\"} -->\\(\\int_0^T f(x)\\,dx=0\\)。\n\n判断积分正负不能只看被积函数某一点；应比较整个区间，必要时利用对称、换元或把正负区间拆开。\n\n##### 积分方程与由变上限积分定义的函数\n\n出现未知函数与变上限积分同时存在时，先把积分移到一边，再求导降为微分方程。例如\n\n<!-- formula {\"id\":\"calculus-wfggcv\",\"title\":\"积分方程与由变上限积分定义的函数：y(x)\",\"aliases\":[],\"context\":\"出现未知函数与变上限积分同时存在时，先把积分移到一边，再求导降为微分方程。例如\"} -->\n\\[\ny(x)=g(x)+\\int_a^x K(t)y(t)\\,dt\n\\]\n\n可得\n\n<!-- formula {\"id\":\"calculus-1dv2ym3\",\"title\":\"积分方程与由变上限积分定义的函数：y'(x)\",\"aliases\":[],\"context\":\"所属知识点：积分方程与由变上限积分定义的函数。\"} -->\n\\[\ny'(x)=g'(x)+K(x)y(x),qquad y(a)=g(a).\n\\]\n\n求导后必须保留由原积分方程给出的初始条件。",
        "searchText": "其他积分题型 其他积分题型 其他积分题型 积分中值定理、变上限积分与牛顿—莱布尼茨公式 积分中值定理：连续函数在 [a,b] 上满足 a^b f(x)\\,dx=f( )(b-a). 加权积分中值定理：若 f 连续，g 可积且不变号，则存在 [a,b]，使 a^b f(x)g(x)\\,dx=f( ) a^b g(x)\\,dx. 变上限积分求导： ≤ft( a^x f(t)\\,dt )'=f(x). 牛顿—莱布尼茨公式： a^b f(x)\\,dx=F(b)-F(a), F'=f. 若 f 在 [a,b] 上可积，则 (x)= a^x f(t)\\,dt 连续；若 f 在 x 0 连续，则 '(x 0)=f(x 0)。连续函数一定有原函数；有跳跃间断点或无穷间断点的函数不可能在包含该点的区间上有原函数。 若 x 0 是 f 的可去间断点，则 '(x 0)= x x 0 f(x), 该值不一定等于 f(x 0)。若 x 0 是跳跃间断点，则 连续但不可导，且 ' -(x 0)=f(x 0-0), ' +(x 0)=f(x 0+0). 若 f 有 k 阶连续导数，则 有 k+1 阶连续导数。 奇偶性与原函数：连续奇函数的任意原函数都是偶函数加常数；连续偶函数恰有一个取值满足 F(0)=0 的奇原函数。若 f 以 T 为周期，则 F(x)= 0^x f(t)\\,dt 也以 T 为周期，当且仅当 0^T f(x)\\,dx=0。 判断积分正负不能只看被积函数某一点；应比较整个区间，必要时利用对称、换元或把正负区间拆开。 积分方程与由变上限积分定义的函数 出现未知函数与变上限积分同时存在时，先把积分移到一边，再求导降为微分方程。例如 y(x)=g(x)+ a^x K(t)y(t)\\,dt 可得 y'(x)=g'(x)+K(x)y(x),qquad y(a)=g(a). 求导后必须保留由原积分方程给出的初始条件。",
        "summary": "积分中值定理、变上限积分与牛顿—莱布尼茨公式 积分中值定理：连续函数在 [a,b] 上满足 a^b f(x)\\,dx=f( )(b-a). 加权积分中值定理：若 f 连续，g 可积且不变号，则存在 [a,b]，使 a^b f(x)g(x)\\,dx=f( )…",
        "anchors": [
          {
            "id": "anchor-rayly0",
            "legacyId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式",
            "searchText": "积分中值定理、变上限积分与牛顿—莱布尼茨公式 积分中值定理：连续函数在 [a,b] 上满足 a^b f(x)\\,dx=f( )(b-a). 加权积分中值定理：若 f 连续，g 可积且不变号，则存在 [a,b]，使 a^b f(x)g(x)\\,dx=f( ) a^b g(x)\\,dx. 变上限积分求导： ≤ft( a^x f(t)\\,dt )'=f(x). 牛顿—莱布尼茨公式： a^b f(x)\\,dx=F(b)-F(a), F'=f. 若 f 在 [a,b] 上可积，则 (x)= a^x f(t)\\,dt 连续；若 f 在 x 0 连续，则 '(x 0)=f(x 0)。连续函数一定有原函数；有跳跃间断点或无穷间断点的函数不可能在包含该点的区间上有原函数。 若 x 0 是 f 的可去间断点，则 '(x 0)= x x 0 f(x), 该值不一定等于 f(x 0)。若 x 0 是跳跃间断点，则 连续但不可导，且 ' -(x 0)=f(x 0-0), ' +(x 0)=f(x 0+0). 若 f 有 k 阶连续导数，则 有 k+1 阶连续导数。 奇偶性与原函数：连续奇函数的任意原函数都是偶函数加常数；连续偶函数恰有一个取值满足 F(0)=0 的奇原函数。若 f 以 T 为周期，则 F(x)= 0^x f(t)\\,dt 也以 T 为周期，当且仅当 0^T f(x)\\,dx=0。 判断积分正负不能只看被积函数某一点；应比较整个区间，必要时利用对称、换元或把正负区间拆开。",
            "summary": "积分中值定理：连续函数在 [a,b] 上满足 a^b f(x)\\,dx=f( )(b-a). 加权积分中值定理：若 f 连续，g 可积且不变号，则存在 [a,b]，使 a^b f(x)g(x)\\,dx=f( ) a^b g(x)\\,dx. 变上限积分求导：…"
          },
          {
            "id": "anchor-1w6iuac",
            "legacyId": "calculus-03-004-anchor-002",
            "title": "积分方程与由变上限积分定义的函数",
            "searchText": "积分方程与由变上限积分定义的函数 出现未知函数与变上限积分同时存在时，先把积分移到一边，再求导降为微分方程。例如 y(x)=g(x)+ a^x K(t)y(t)\\,dt 可得 y'(x)=g'(x)+K(x)y(x),qquad y(a)=g(a). 求导后必须保留由原积分方程给出的初始条件。",
            "summary": "出现未知函数与变上限积分同时存在时，先把积分移到一边，再求导降为微分方程。例如 y(x)=g(x)+ a^x K(t)y(t)\\,dt 可得 y'(x)=g'(x)+K(x)y(x),qquad y(a)=g(a). 求导后必须保留由原积分方程给出的初始条…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-sx9q78",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：∫_a^b f(x) dx",
            "latex": "\\int_a^b f(x)\\,dx=f(\\xi)(b-a).",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "积分中值定理：连续函数在 [a,b] 上满足",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 0
          },
          {
            "id": "calculus-zbrhd0",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：∫_a^b f(x)g(x) dx",
            "latex": "\\int_a^b f(x)g(x)\\,dx=f(\\xi)\\int_a^b g(x)\\,dx.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "加权积分中值定理：若 f 连续，g 可积且不变号，则存在 \\xi\\in[a,b]，使",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 1
          },
          {
            "id": "calculus-d7l12l",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "变上限积分求导公式",
            "latex": "\\left(\\int_a^x f(t)\\,dt\\right)'=f(x).",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "变上限积分求导：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 2
          },
          {
            "id": "calculus-1dh4te7-1",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：∫_a^b f(x) dx",
            "latex": "\\int_a^b f(x)\\,dx=F(b)-F(a),\\qquad F'=f.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "牛顿—莱布尼茨公式：",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 3
          },
          {
            "id": "calculus-gimft9",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi(x)",
            "latex": "\\Phi(x)=\\int_a^x f(t)\\,dt",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "若 f 在 [a,b] 上可积，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 4
          },
          {
            "id": "calculus-f09tsz",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi'(x_0)",
            "latex": "\\Phi'(x_0)=\\lim_{x\\to x_0}f(x),",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "若 x_0 是 f 的可去间断点，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 5
          },
          {
            "id": "calculus-ujim5a-1",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi'_-(x_0)",
            "latex": "\\Phi'_-(x_0)=f(x_0-0)",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "该值不一定等于 \\(f(x_0)\\)。若 x_0 是跳跃间断点，则 \\Phi 连续但不可导，且",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 6
          },
          {
            "id": "calculus-ujim5a-2",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：Phi'_+(x_0)",
            "latex": "\\Phi'_+(x_0)=f(x_0+0)",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "该值不一定等于 \\(f(x_0)\\)。若 x_0 是跳跃间断点，则 \\Phi 连续但不可导，且",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 7
          },
          {
            "id": "calculus-15bqf3b",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "积分中值定理、变上限积分与牛顿—莱布尼茨公式：F(x)",
            "latex": "F(x)=\\int_0^x f(t)\\,dt",
            "sourceBlockIndex": 28,
            "searchAliases": [],
            "context": "奇偶性与原函数：连续奇函数的任意原函数都是偶函数加常数；连续偶函数恰有一个取值满足 \\(F(0)=0\\) 的奇原函数。若 f 以 T 为周期，则",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 8
          },
          {
            "id": "calculus-periodic-antiderivative-zero-mean",
            "parentAnchorId": "anchor-rayly0",
            "legacyParentAnchorId": "calculus-03-004-anchor-001",
            "title": "周期函数的原函数仍周期的判定",
            "latex": "\\int_0^T f(x)\\,dx=0",
            "sourceBlockIndex": 30,
            "searchAliases": [
              "周期原函数",
              "整周期积分为零"
            ],
            "context": "连续函数 f 以 T 为周期；其从 0 到 x 的积分也以 T 为周期，当且仅当一个周期内的积分为零。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 9
          },
          {
            "id": "calculus-wfggcv",
            "parentAnchorId": "anchor-1w6iuac",
            "legacyParentAnchorId": "calculus-03-004-anchor-002",
            "title": "积分方程与由变上限积分定义的函数：y(x)",
            "latex": "y(x)=g(x)+\\int_a^x K(t)y(t)\\,dt",
            "sourceBlockIndex": 31,
            "searchAliases": [],
            "context": "出现未知函数与变上限积分同时存在时，先把积分移到一边，再求导降为微分方程。例如",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 10
          },
          {
            "id": "calculus-1dv2ym3",
            "parentAnchorId": "anchor-1w6iuac",
            "legacyParentAnchorId": "calculus-03-004-anchor-002",
            "title": "积分方程与由变上限积分定义的函数：y'(x)",
            "latex": "y'(x)=g'(x)+K(x)y(x),qquad y(a)=g(a).",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "所属知识点：积分方程与由变上限积分定义的函数。",
            "chapterId": "calculus-03",
            "topicId": "calculus-03-004",
            "order": 11
          }
        ]
      }
    ]
  },
  {
    "id": "calculus-04",
    "partId": "calculus",
    "partTitle": "高等数学",
    "title": "第四章　微分方程",
    "topics": [
      {
        "id": "calculus-04-001",
        "title": "微分方程解的性质与结构",
        "body": "##### 微分方程阶数、通解、特解、初始条件与边值条件\n\n方程中出现的最高阶导数的阶数叫微分方程的阶。\\(n\\) 阶方程的通解通常含 \\(n\\) 个相互独立的任意常数；由初始条件确定常数后得到特解。初始条件在同一点给出，边值条件在不同点给出。\n\n##### 一阶线性微分方程解的线性组合性质\n\n<!-- formula {\"id\":\"calculus-9nqv3t\",\"title\":\"一阶线性微分方程解的线性组合性质：y'+P(x)y\",\"aliases\":[],\"context\":\"所属知识点：一阶线性微分方程解的线性组合性质。\"} -->\n\\[\ny'+P(x)y=Q(x).\n\\]\n\n两个解之差满足对应齐次方程。若 \\(y_1,y_2\\) 是非齐次方程的解，则 \\(C_1y_1+C_2y_2\\) 仍是该非齐次方程的解，当且仅当 <!-- formula {\"id\":\"calculus-nonhomogeneous-solution-affine-combination\",\"title\":\"非齐次线性方程解的仿射组合条件\",\"aliases\":[\"非齐次解线性组合\",\"系数和为一\"],\"context\":\"y₁、y₂ 均为同一非齐次线性微分方程的解时，组合系数之和须为 1。\"} -->\\(C_1+C_2=1\\)。\n\n##### 高阶线性微分方程通解、特解与朗斯基行列式\n\n齐次方程的解可线性组合；非齐次方程的“通解＝对应齐次方程通解＋一个非齐次特解”。判断若干解能否组成齐次通解，要看它们是否线性无关。\n\n若 \\(y_1,y_2\\) 是二阶齐次线性方程的两个解，则它们线性无关的常用判据是某点处的朗斯基行列式不为零：\n\n<!-- formula {\"id\":\"calculus-1e6tz9m\",\"title\":\"高阶线性微分方程通解、特解与朗斯基行列式：W(y_1,y_2)(x_0)\",\"aliases\":[],\"context\":\"若 y_1,y_2 是二阶齐次线性方程的两个解，则它们线性无关的常用判据是某点处的朗斯基行列式不为零：\"} -->\n\\[\nW(y_1,y_2)(x_0)=\n\\begin{vmatrix}\ny_1(x_0)&y_2(x_0)\\\\\ny_1'(x_0)&y_2'(x_0)\n\\end{vmatrix}\\ne0.\n\\]\n\n若 \\(y_1^*,y_2^*\\) 分别是右端项为 \\(f_1(x),f_2(x)\\) 的特解，则 \\(a y_1^*+b y_2^*\\) 是右端项为 \\(af_1+bf_2\\) 的特解。",
        "searchText": "微分方程解的性质与结构 微分方程解的性质与结构 微分方程解的性质与结构 微分方程阶数、通解、特解、初始条件与边值条件 方程中出现的最高阶导数的阶数叫微分方程的阶。n 阶方程的通解通常含 n 个相互独立的任意常数；由初始条件确定常数后得到特解。初始条件在同一点给出，边值条件在不同点给出。 一阶线性微分方程解的线性组合性质 y'+P(x)y=Q(x). 两个解之差满足对应齐次方程。若 y 1,y 2 是非齐次方程的解，则 C 1y 1+C 2y 2 仍是该非齐次方程的解，当且仅当 C 1+C 2=1。 高阶线性微分方程通解、特解与朗斯基行列式 齐次方程的解可线性组合；非齐次方程的“通解＝对应齐次方程通解＋一个非齐次特解”。判断若干解能否组成齐次通解，要看它们是否线性无关。 若 y 1,y 2 是二阶齐次线性方程的两个解，则它们线性无关的常用判据是某点处的朗斯基行列式不为零： W(y 1,y 2)(x 0)= vmatrix y 1(x 0)&y 2(x 0)\\\\ y 1'(x 0)&y 2'(x 0) vmatrix ≠0. 若 y 1^ ,y 2^ 分别是右端项为 f 1(x),f 2(x) 的特解，则 a y 1^ +b y 2^ 是右端项为 af 1+bf 2 的特解。",
        "summary": "微分方程阶数、通解、特解、初始条件与边值条件 方程中出现的最高阶导数的阶数叫微分方程的阶。n 阶方程的通解通常含 n 个相互独立的任意常数；由初始条件确定常数后得到特解。初始条件在同一点给出，边值条件在不同点给出。 一阶线性微分方程解的线性组合性质 y'+…",
        "anchors": [
          {
            "id": "anchor-nx51k3",
            "legacyId": "calculus-04-001-anchor-001",
            "title": "微分方程阶数、通解、特解、初始条件与边值条件",
            "searchText": "微分方程阶数、通解、特解、初始条件与边值条件 方程中出现的最高阶导数的阶数叫微分方程的阶。n 阶方程的通解通常含 n 个相互独立的任意常数；由初始条件确定常数后得到特解。初始条件在同一点给出，边值条件在不同点给出。",
            "summary": "方程中出现的最高阶导数的阶数叫微分方程的阶。n 阶方程的通解通常含 n 个相互独立的任意常数；由初始条件确定常数后得到特解。初始条件在同一点给出，边值条件在不同点给出。"
          },
          {
            "id": "anchor-1ozvu54",
            "legacyId": "calculus-04-001-anchor-002",
            "title": "一阶线性微分方程解的线性组合性质",
            "searchText": "一阶线性微分方程解的线性组合性质 y'+P(x)y=Q(x). 两个解之差满足对应齐次方程。若 y 1,y 2 是非齐次方程的解，则 C 1y 1+C 2y 2 仍是该非齐次方程的解，当且仅当 C 1+C 2=1。",
            "summary": "y'+P(x)y=Q(x). 两个解之差满足对应齐次方程。若 y 1,y 2 是非齐次方程的解，则 C 1y 1+C 2y 2 仍是该非齐次方程的解，当且仅当 C 1+C 2=1。"
          },
          {
            "id": "anchor-itds84",
            "legacyId": "calculus-04-001-anchor-003",
            "title": "高阶线性微分方程通解、特解与朗斯基行列式",
            "searchText": "高阶线性微分方程通解、特解与朗斯基行列式 齐次方程的解可线性组合；非齐次方程的“通解＝对应齐次方程通解＋一个非齐次特解”。判断若干解能否组成齐次通解，要看它们是否线性无关。 若 y 1,y 2 是二阶齐次线性方程的两个解，则它们线性无关的常用判据是某点处的朗斯基行列式不为零： W(y 1,y 2)(x 0)= vmatrix y 1(x 0)&y 2(x 0)\\\\ y 1'(x 0)&y 2'(x 0) vmatrix ≠0. 若 y 1^ ,y 2^ 分别是右端项为 f 1(x),f 2(x) 的特解，则 a y 1^ +b y 2^ 是右端项为 af 1+bf 2 的特解。",
            "summary": "齐次方程的解可线性组合；非齐次方程的“通解＝对应齐次方程通解＋一个非齐次特解”。判断若干解能否组成齐次通解，要看它们是否线性无关。 若 y 1,y 2 是二阶齐次线性方程的两个解，则它们线性无关的常用判据是某点处的朗斯基行列式不为零： W(y 1,y 2)…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-9nqv3t",
            "parentAnchorId": "anchor-1ozvu54",
            "legacyParentAnchorId": "calculus-04-001-anchor-002",
            "title": "一阶线性微分方程解的线性组合性质：y'+P(x)y",
            "latex": "y'+P(x)y=Q(x).",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：一阶线性微分方程解的线性组合性质。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-001",
            "order": 0
          },
          {
            "id": "calculus-nonhomogeneous-solution-affine-combination",
            "parentAnchorId": "anchor-1ozvu54",
            "legacyParentAnchorId": "calculus-04-001-anchor-002",
            "title": "非齐次线性方程解的仿射组合条件",
            "latex": "C_1+C_2=1",
            "sourceBlockIndex": 5,
            "searchAliases": [
              "非齐次解线性组合",
              "系数和为一"
            ],
            "context": "y₁、y₂ 均为同一非齐次线性微分方程的解时，组合系数之和须为 1。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-001",
            "order": 1
          },
          {
            "id": "calculus-1e6tz9m",
            "parentAnchorId": "anchor-itds84",
            "legacyParentAnchorId": "calculus-04-001-anchor-003",
            "title": "高阶线性微分方程通解、特解与朗斯基行列式：W(y_1,y_2)(x_0)",
            "latex": "W(y_1,y_2)(x_0)=\n\\begin{vmatrix}\ny_1(x_0)&y_2(x_0)\\\\\ny_1'(x_0)&y_2'(x_0)\n\\end{vmatrix}\\ne0.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "若 y_1,y_2 是二阶齐次线性方程的两个解，则它们线性无关的常用判据是某点处的朗斯基行列式不为零：",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-001",
            "order": 2
          }
        ]
      },
      {
        "id": "calculus-04-002",
        "title": "解微分方程",
        "body": "##### 可分离变量、齐次型与一阶线性微分方程\n\n可分离变量：\n\n<!-- formula {\"id\":\"calculus-a7tkid\",\"title\":\"可分离变量、齐次型与一阶线性微分方程：y'\",\"aliases\":[],\"context\":\"可分离变量：\"} -->\n\\[\ny'=f(x)g(y)\\Longrightarrow \\frac{dy}{g(y)}=f(x)\\,dx.\n\\]\n\n分离时要单独检查使 \\(g(y)=0\\) 的常数解。\n\n齐次型：\n\n<!-- formula {\"id\":\"calculus-nh2tgb-1\",\"title\":\"可分离变量、齐次型与一阶线性微分方程：y'\",\"aliases\":[],\"context\":\"分离时要单独检查使 \\\\(g(y)=0\\\\) 的常数解。\"} -->\n\\[\ny'=F\\!\\left(\\frac yx\\right),\\qquad y=ux,\\quad y'=u+xu'.\n\\]\n\n一阶线性方程：\n\n<!-- formula {\"id\":\"calculus-1egdd2l\",\"title\":\"可分离变量、齐次型与一阶线性微分方程：y'+P(x)y\",\"aliases\":[],\"context\":\"一阶线性方程：\"} -->\n\\[\ny'+P(x)y=Q(x),\n\\]\n\n<!-- formula {\"id\":\"calculus-104e2ws\",\"title\":\"可分离变量、齐次型与一阶线性微分方程：y\",\"aliases\":[],\"context\":\"所属知识点：可分离变量、齐次型与一阶线性微分方程。\"} -->\n\\[\ny=e^{-\\int Pdx}\\left(\\int Qe^{\\int Pdx}dx+C\\right).\n\\]\n\n##### 不显含因变量、不显含自变量与直接积分型降阶方程\n\n- 不显含 \\(y\\)：令 \\(p=y'\\)，则 \\(y''=p'\\)。\n- 不显含 \\(x\\)：令 \\(p(y)=y'\\)，则 \\(y''=p\\,\\frac{dp}{dy}\\)。\n- 形如 \\(y^{(n)}=f(x)\\)：连续积分 \\(n\\) 次，每次都保留新的积分常数。\n\n##### 高阶常系数齐次与非齐次线性微分方程\n\n二阶齐次方程\n\n<!-- formula {\"id\":\"calculus-zxqm54\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：y''+py'+qy\",\"aliases\":[],\"context\":\"二阶齐次方程\"} -->\n\\[\ny''+py'+qy=0\n\\]\n\n对应特征方程 \\(r^2+pr+q=0\\)：\n\n- 两个不同实根 \\(r_1,r_2\\)：<!-- formula {\"id\":\"calculus-ode-distinct-real-roots-solution\",\"title\":\"二阶常系数方程：两个不同实根的通解\",\"aliases\":[\"特征方程两个实根\",\"二阶齐次方程通解\"],\"context\":\"特征方程有两个不同实根 r₁、r₂。\"} -->\\(y=C_1e^{r_1x}+C_2e^{r_2x}\\)；\n- 二重根 \\(r\\)：<!-- formula {\"id\":\"calculus-ode-repeated-root-solution\",\"title\":\"二阶常系数方程：二重根的通解\",\"aliases\":[\"特征方程重根\",\"二阶齐次方程通解\"],\"context\":\"特征方程有二重实根 r。\"} -->\\(y=(C_1+C_2x)e^{rx}\\)；\n- 共轭复根 \\(a\\pm bi\\)：<!-- formula {\"id\":\"calculus-ode-complex-roots-solution\",\"title\":\"二阶常系数方程：共轭复根的通解\",\"aliases\":[\"特征方程复根\",\"二阶齐次方程通解\"],\"context\":\"特征方程有共轭复根 a±bi。\"} -->\\(y=e^{ax}(C_1\\cos bx+C_2\\sin bx)\\)。\n\n非齐次项为 \\(e^{ax}P_m(x)\\) 时，特解设为 \\(x^k e^{ax}Q_m(x)\\)，其中 \\(k\\) 是 \\(a\\) 作为特征根的重数；三角项先按正弦、余弦成对设式。\n\n更一般地，\\(n\\) 阶常系数齐次线性方程\n\n<!-- formula {\"id\":\"calculus-lxu6go\",\"title\":\"n 阶常系数齐次线性微分方程\",\"aliases\":[],\"context\":\"更一般地，n 阶常系数齐次线性方程\"} -->\n\\[\na_ny^{(n)}+a_{n-1}y^{(n-1)}+\\cdots+a_1y'+a_0y=0\n\\]\n\n对应特征方程\n\n<!-- formula {\"id\":\"calculus-dv3wux\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：a_nr^n+a_n-1r^n-1+cdots+a_1r+a_0\",\"aliases\":[],\"context\":\"对应特征方程\"} -->\n\\[\na_nr^n+a_{n-1}r^{n-1}+\\cdots+a_1r+a_0=0.\n\\]\n\n实根 \\(r\\) 的重数为 \\(s\\) 时，贡献\n\n<!-- formula {\"id\":\"calculus-1ydysu5\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：e^rx, xe^rx, ldots, x^s-1e^rx\",\"aliases\":[],\"context\":\"实根 r 的重数为 s 时，贡献\"} -->\n\\[\ne^{rx},\\ xe^{rx},\\ \\ldots,\\ x^{s-1}e^{rx};\n\\]\n\n共轭复根 \\(\\alpha\\pm i\\beta\\) 的重数为 \\(s\\) 时，贡献\n\n<!-- formula {\"id\":\"calculus-jh5ls4\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：x^j e^α xcosβ x,\",\"aliases\":[],\"context\":\"共轭复根 \\\\alpha\\\\pm i\\\\beta 的重数为 s 时，贡献\"} -->\n\\[\nx^j e^{\\alpha x}\\cos\\beta x,\\qquad\nx^j e^{\\alpha x}\\sin\\beta x\n\\quad(j=0,1,\\ldots,s-1).\n\\]\n\n**二阶常系数非齐次方程特解设法**\n\n若右端为 \\(e^{ax}P_m(x)\\)，设\n\n<!-- formula {\"id\":\"calculus-f9i4oj\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：y^*\",\"aliases\":[],\"context\":\"二阶常系数非齐次方程特解设法\"} -->\n\\[\ny^*=x^k e^{ax}Q_m(x),\n\\]\n\n其中 \\(Q_m\\) 是待定的 \\(m\\) 次多项式，\\(k\\) 是 \\(a\\) 作为特征根的重数。若右端为\n\n<!-- formula {\"id\":\"calculus-1lly2vs\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：e^ax[P_m(x)cos bx+Q_n(x)sin bx]\",\"aliases\":[],\"context\":\"其中 Q_m 是待定的 m 次多项式，k 是 a 作为特征根的重数。若右端为\"} -->\n\\[\ne^{ax}\\bigl[P_m(x)\\cos bx+Q_n(x)\\sin bx\\bigr],\n\\]\n\n则设\n\n<!-- formula {\"id\":\"calculus-1lx41xh-1\",\"title\":\"高阶常系数齐次与非齐次线性微分方程：y^*\",\"aliases\":[],\"context\":\"所属知识点：高阶常系数齐次与非齐次线性微分方程。\"} -->\n\\[\ny^*=x^k e^{ax}\\bigl[R_l(x)\\cos bx+S_l(x)\\sin bx\\bigr],\n\\quad l=\\max\\{m,n\\},\n\\]\n\n其中 \\(k\\) 是 \\(a+bi\\) 作为特征根的重数，\\(R_l,S_l\\) 为待定多项式。",
        "searchText": "解微分方程 解微分方程 解微分方程 可分离变量、齐次型与一阶线性微分方程 可分离变量： y'=f(x)g(y) ⇒ dy g(y) =f(x)\\,dx. 分离时要单独检查使 g(y)=0 的常数解。 齐次型： y'=F\\!≤ft( yx ), y=ux, y'=u+xu'. 一阶线性方程： y'+P(x)y=Q(x), y=e^ - Pdx ≤ft( Qe^ Pdx dx+C ). 不显含因变量、不显含自变量与直接积分型降阶方程 不显含 y：令 p=y'，则 y''=p'。 不显含 x：令 p(y)=y'，则 y''=p\\, dp dy 。 形如 y^ (n) =f(x)：连续积分 n 次，每次都保留新的积分常数。 高阶常系数齐次与非齐次线性微分方程 二阶齐次方程 y''+py'+qy=0 对应特征方程 r^2+pr+q=0： 两个不同实根 r 1,r 2： y=C 1e^ r 1x +C 2e^ r 2x ； 二重根 r： y=(C 1+C 2x)e^ rx ； 共轭复根 a bi： y=e^ ax (C 1 bx+C 2 bx)。 非齐次项为 e^ ax P m(x) 时，特解设为 x^k e^ ax Q m(x)，其中 k 是 a 作为特征根的重数；三角项先按正弦、余弦成对设式。 更一般地，n 阶常系数齐次线性方程 a ny^ (n) +a n-1 y^ (n-1) + +a 1y'+a 0y=0 对应特征方程 a nr^n+a n-1 r^ n-1 + +a 1r+a 0=0. 实根 r 的重数为 s 时，贡献 e^ rx ,\\ xe^ rx ,\\ ,\\ x^ s-1 e^ rx ; 共轭复根 i 的重数为 s 时，贡献 x^j e^ x x, x^j e^ x x (j=0,1, ,s-1). 二阶常系数非齐次方程特解设法 若右端为 e^ ax P m(x)，设 y^ =x^k e^ ax Q m(x), 其中 Q m 是待定的 m 次多项式，k 是 a 作为特征根的重数。若右端为 e^ ax [P m(x) bx+Q n(x) bx ], 则设 y^ =x^k e^ ax [R l(x) bx+S l(x) bx ], l= \\ m,n\\ , 其中 k 是 a+bi 作为特征根的重数，R l,S l 为待定多项式。",
        "summary": "可分离变量、齐次型与一阶线性微分方程 可分离变量： y'=f(x)g(y) ⇒ dy g(y) =f(x)\\,dx. 分离时要单独检查使 g(y)=0 的常数解。 齐次型： y'=F\\!≤ft( yx ), y=ux, y'=u+xu'. 一阶线性方程： …",
        "anchors": [
          {
            "id": "anchor-1chjnui",
            "legacyId": "calculus-04-002-anchor-001",
            "title": "可分离变量、齐次型与一阶线性微分方程",
            "searchText": "可分离变量、齐次型与一阶线性微分方程 可分离变量： y'=f(x)g(y) ⇒ dy g(y) =f(x)\\,dx. 分离时要单独检查使 g(y)=0 的常数解。 齐次型： y'=F\\!≤ft( yx ), y=ux, y'=u+xu'. 一阶线性方程： y'+P(x)y=Q(x), y=e^ - Pdx ≤ft( Qe^ Pdx dx+C ).",
            "summary": "可分离变量： y'=f(x)g(y) ⇒ dy g(y) =f(x)\\,dx. 分离时要单独检查使 g(y)=0 的常数解。 齐次型： y'=F\\!≤ft( yx ), y=ux, y'=u+xu'. 一阶线性方程： y'+P(x)y=Q(x), y=e^…"
          },
          {
            "id": "anchor-dfmuvv",
            "legacyId": "calculus-04-002-anchor-002",
            "title": "不显含因变量、不显含自变量与直接积分型降阶方程",
            "searchText": "不显含因变量、不显含自变量与直接积分型降阶方程 不显含 y：令 p=y'，则 y''=p'。 不显含 x：令 p(y)=y'，则 y''=p\\, dp dy 。 形如 y^ (n) =f(x)：连续积分 n 次，每次都保留新的积分常数。",
            "summary": "不显含 y：令 p=y'，则 y''=p'。 不显含 x：令 p(y)=y'，则 y''=p\\, dp dy 。 形如 y^ (n) =f(x)：连续积分 n 次，每次都保留新的积分常数。"
          },
          {
            "id": "anchor-198u1h9",
            "legacyId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程",
            "searchText": "高阶常系数齐次与非齐次线性微分方程 二阶齐次方程 y''+py'+qy=0 对应特征方程 r^2+pr+q=0： 两个不同实根 r 1,r 2： y=C 1e^ r 1x +C 2e^ r 2x ； 二重根 r： y=(C 1+C 2x)e^ rx ； 共轭复根 a bi： y=e^ ax (C 1 bx+C 2 bx)。 非齐次项为 e^ ax P m(x) 时，特解设为 x^k e^ ax Q m(x)，其中 k 是 a 作为特征根的重数；三角项先按正弦、余弦成对设式。 更一般地，n 阶常系数齐次线性方程 a ny^ (n) +a n-1 y^ (n-1) + +a 1y'+a 0y=0 对应特征方程 a nr^n+a n-1 r^ n-1 + +a 1r+a 0=0. 实根 r 的重数为 s 时，贡献 e^ rx ,\\ xe^ rx ,\\ ,\\ x^ s-1 e^ rx ; 共轭复根 i 的重数为 s 时，贡献 x^j e^ x x, x^j e^ x x (j=0,1, ,s-1). 二阶常系数非齐次方程特解设法 若右端为 e^ ax P m(x)，设 y^ =x^k e^ ax Q m(x), 其中 Q m 是待定的 m 次多项式，k 是 a 作为特征根的重数。若右端为 e^ ax [P m(x) bx+Q n(x) bx ], 则设 y^ =x^k e^ ax [R l(x) bx+S l(x) bx ], l= \\ m,n\\ , 其中 k 是 a+bi 作为特征根的重数，R l,S l 为待定多项式。",
            "summary": "二阶齐次方程 y''+py'+qy=0 对应特征方程 r^2+pr+q=0： 两个不同实根 r 1,r 2： y=C 1e^ r 1x +C 2e^ r 2x ； 二重根 r： y=(C 1+C 2x)e^ rx ； 共轭复根 a bi： y=e^ ax …"
          }
        ],
        "formulas": [
          {
            "id": "calculus-a7tkid",
            "parentAnchorId": "anchor-1chjnui",
            "legacyParentAnchorId": "calculus-04-002-anchor-001",
            "title": "可分离变量、齐次型与一阶线性微分方程：y'",
            "latex": "y'=f(x)g(y)\\Longrightarrow \\frac{dy}{g(y)}=f(x)\\,dx.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "可分离变量：",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 0
          },
          {
            "id": "calculus-nh2tgb-1",
            "parentAnchorId": "anchor-1chjnui",
            "legacyParentAnchorId": "calculus-04-002-anchor-001",
            "title": "可分离变量、齐次型与一阶线性微分方程：y'",
            "latex": "y'=F\\!\\left(\\frac yx\\right),\\qquad y=ux,\\quad y'=u+xu'.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "分离时要单独检查使 \\(g(y)=0\\) 的常数解。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 1
          },
          {
            "id": "calculus-1egdd2l",
            "parentAnchorId": "anchor-1chjnui",
            "legacyParentAnchorId": "calculus-04-002-anchor-001",
            "title": "可分离变量、齐次型与一阶线性微分方程：y'+P(x)y",
            "latex": "y'+P(x)y=Q(x),",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "一阶线性方程：",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 2
          },
          {
            "id": "calculus-104e2ws",
            "parentAnchorId": "anchor-1chjnui",
            "legacyParentAnchorId": "calculus-04-002-anchor-001",
            "title": "可分离变量、齐次型与一阶线性微分方程：y",
            "latex": "y=e^{-\\int Pdx}\\left(\\int Qe^{\\int Pdx}dx+C\\right).",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：可分离变量、齐次型与一阶线性微分方程。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 3
          },
          {
            "id": "calculus-zxqm54",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：y''+py'+qy",
            "latex": "y''+py'+qy=0",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "二阶齐次方程",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 4
          },
          {
            "id": "calculus-ode-distinct-real-roots-solution",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "二阶常系数方程：两个不同实根的通解",
            "latex": "y=C_1e^{r_1x}+C_2e^{r_2x}",
            "sourceBlockIndex": 16,
            "searchAliases": [
              "特征方程两个实根",
              "二阶齐次方程通解"
            ],
            "context": "特征方程有两个不同实根 r₁、r₂。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 5
          },
          {
            "id": "calculus-ode-repeated-root-solution",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "二阶常系数方程：二重根的通解",
            "latex": "y=(C_1+C_2x)e^{rx}",
            "sourceBlockIndex": 18,
            "searchAliases": [
              "特征方程重根",
              "二阶齐次方程通解"
            ],
            "context": "特征方程有二重实根 r。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 6
          },
          {
            "id": "calculus-ode-complex-roots-solution",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "二阶常系数方程：共轭复根的通解",
            "latex": "y=e^{ax}(C_1\\cos bx+C_2\\sin bx)",
            "sourceBlockIndex": 20,
            "searchAliases": [
              "特征方程复根",
              "二阶齐次方程通解"
            ],
            "context": "特征方程有共轭复根 a±bi。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 7
          },
          {
            "id": "calculus-lxu6go",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "n 阶常系数齐次线性微分方程",
            "latex": "a_ny^{(n)}+a_{n-1}y^{(n-1)}+\\cdots+a_1y'+a_0y=0",
            "sourceBlockIndex": 26,
            "searchAliases": [],
            "context": "更一般地，n 阶常系数齐次线性方程",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 8
          },
          {
            "id": "calculus-dv3wux",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：a_nr^n+a_n-1r^n-1+cdots+a_1r+a_0",
            "latex": "a_nr^n+a_{n-1}r^{n-1}+\\cdots+a_1r+a_0=0.",
            "sourceBlockIndex": 27,
            "searchAliases": [],
            "context": "对应特征方程",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 9
          },
          {
            "id": "calculus-1ydysu5",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：e^rx, xe^rx, ldots, x^s-1e^rx",
            "latex": "e^{rx},\\ xe^{rx},\\ \\ldots,\\ x^{s-1}e^{rx};",
            "sourceBlockIndex": 30,
            "searchAliases": [],
            "context": "实根 r 的重数为 s 时，贡献",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 10
          },
          {
            "id": "calculus-jh5ls4",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：x^j e^α xcosβ x,",
            "latex": "x^j e^{\\alpha x}\\cos\\beta x,\\qquad\nx^j e^{\\alpha x}\\sin\\beta x\n\\quad(j=0,1,\\ldots,s-1).",
            "sourceBlockIndex": 33,
            "searchAliases": [],
            "context": "共轭复根 \\alpha\\pm i\\beta 的重数为 s 时，贡献",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 11
          },
          {
            "id": "calculus-f9i4oj",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：y^*",
            "latex": "y^*=x^k e^{ax}Q_m(x),",
            "sourceBlockIndex": 35,
            "searchAliases": [],
            "context": "二阶常系数非齐次方程特解设法",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 12
          },
          {
            "id": "calculus-1lly2vs",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：e^ax[P_m(x)cos bx+Q_n(x)sin bx]",
            "latex": "e^{ax}\\bigl[P_m(x)\\cos bx+Q_n(x)\\sin bx\\bigr],",
            "sourceBlockIndex": 40,
            "searchAliases": [],
            "context": "其中 Q_m 是待定的 m 次多项式，k 是 a 作为特征根的重数。若右端为",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 13
          },
          {
            "id": "calculus-1lx41xh-1",
            "parentAnchorId": "anchor-198u1h9",
            "legacyParentAnchorId": "calculus-04-002-anchor-003",
            "title": "高阶常系数齐次与非齐次线性微分方程：y^*",
            "latex": "y^*=x^k e^{ax}\\bigl[R_l(x)\\cos bx+S_l(x)\\sin bx\\bigr],\n\\quad l=\\max\\{m,n\\},",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "所属知识点：高阶常系数齐次与非齐次线性微分方程。",
            "chapterId": "calculus-04",
            "topicId": "calculus-04-002",
            "order": 14
          }
        ]
      },
      {
        "id": "calculus-04-003",
        "title": "已知解反求微分方程（逆问题）",
        "body": "一阶解族含一个任意常数，求导一次并消去常数；二阶解族通常含两个任意常数，求导两次并消去。若已知齐次方程的基本解，先由指数、正弦余弦形式反推特征根，再写特征方程。",
        "searchText": "已知解反求微分方程（逆问题） 已知解反求微分方程（逆问题） 已知解反求微分方程（逆问题） 一阶解族含一个任意常数，求导一次并消去常数；二阶解族通常含两个任意常数，求导两次并消去。若已知齐次方程的基本解，先由指数、正弦余弦形式反推特征根，再写特征方程。",
        "summary": "一阶解族含一个任意常数，求导一次并消去常数；二阶解族通常含两个任意常数，求导两次并消去。若已知齐次方程的基本解，先由指数、正弦余弦形式反推特征根，再写特征方程。",
        "anchors": [],
        "formulas": []
      },
      {
        "id": "calculus-04-004",
        "title": "处理微分方程解",
        "body": "不一定要先求出 \\(y(x)\\)。题目问单调、极值、凹凸、切线或极限时，优先从原方程直接解出 \\(y'\\)、\\(y''\\)，再结合初始条件判断符号。只有原方程无法直接提供所需信息时才求通解。",
        "searchText": "处理微分方程解 处理微分方程解 处理微分方程解 不一定要先求出 y(x)。题目问单调、极值、凹凸、切线或极限时，优先从原方程直接解出 y'、y''，再结合初始条件判断符号。只有原方程无法直接提供所需信息时才求通解。",
        "summary": "不一定要先求出 y(x)。题目问单调、极值、凹凸、切线或极限时，优先从原方程直接解出 y'、y''，再结合初始条件判断符号。只有原方程无法直接提供所需信息时才求通解。",
        "anchors": [],
        "formulas": []
      },
      {
        "id": "calculus-04-005",
        "title": "以各种形式给出微分方程",
        "body": "##### 微分方程建模、初值条件与边值条件\n\n1. 选未知函数并写清自变量。\n2. 把题目中的变化率、切线、面积、体积或物理量写成导数、积分。\n3. 消去中间量，得到只含未知函数及其导数的方程。\n4. 把初始位置、初始速度等写成初始条件。\n\n面积函数常满足 \\(S'(x)=\\text{截面或高度}\\)；变上限积分先求导；切线条件用 \\(y'\\)；二重积分给出的函数按变上限求导或先化为累次积分。",
        "searchText": "以各种形式给出微分方程 以各种形式给出微分方程 以各种形式给出微分方程 微分方程建模、初值条件与边值条件 选未知函数并写清自变量。 把题目中的变化率、切线、面积、体积或物理量写成导数、积分。 消去中间量，得到只含未知函数及其导数的方程。 把初始位置、初始速度等写成初始条件。 面积函数常满足 S'(x)=截面或高度；变上限积分先求导；切线条件用 y'；二重积分给出的函数按变上限求导或先化为累次积分。",
        "summary": "微分方程建模、初值条件与边值条件 选未知函数并写清自变量。 把题目中的变化率、切线、面积、体积或物理量写成导数、积分。 消去中间量，得到只含未知函数及其导数的方程。 把初始位置、初始速度等写成初始条件。 面积函数常满足 S'(x)=截面或高度；变上限积分先…",
        "anchors": [
          {
            "id": "anchor-1l1gmdb",
            "legacyId": "calculus-04-005-anchor-001",
            "title": "微分方程建模、初值条件与边值条件",
            "searchText": "微分方程建模、初值条件与边值条件 选未知函数并写清自变量。 把题目中的变化率、切线、面积、体积或物理量写成导数、积分。 消去中间量，得到只含未知函数及其导数的方程。 把初始位置、初始速度等写成初始条件。 面积函数常满足 S'(x)=截面或高度；变上限积分先求导；切线条件用 y'；二重积分给出的函数按变上限求导或先化为累次积分。",
            "summary": "选未知函数并写清自变量。 把题目中的变化率、切线、面积、体积或物理量写成导数、积分。 消去中间量，得到只含未知函数及其导数的方程。 把初始位置、初始速度等写成初始条件。 面积函数常满足 S'(x)=截面或高度；变上限积分先求导；切线条件用 y'；二重积分给…"
          }
        ],
        "formulas": []
      }
    ]
  },
  {
    "id": "calculus-05",
    "partId": "calculus",
    "partTitle": "高等数学",
    "title": "第五章　多元微分",
    "topics": [
      {
        "id": "calculus-05-001",
        "title": "概念题",
        "body": "##### 多元函数定义域、连续、偏导存在与可微的关系\n\n在一点可微一定连续，也一定有各个偏导数；仅有偏导数或偏导数存在不能保证连续、可微。若偏导数在该点附近存在并连续，则函数在该点可微。\n\n判断极限不存在，只要找两条趋近路径得到不同结果；证明极限存在则要给出与路径无关的整体估计。\n\n二元函数极限与连续的定义式：\n\n<!-- formula {\"id\":\"calculus-day16p\",\"title\":\"多元函数定义域、连续、偏导存在与可微的关系：lim_(x,y)to(x_0,y_0)f(x,y)\",\"aliases\":[],\"context\":\"二元函数极限与连续的定义式：\"} -->\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}f(x,y)=A\n\\Longleftrightarrow\n\\forall\\varepsilon>0,\\ \\exists\\delta>0,\n\\]\n\n<!-- formula {\"id\":\"calculus-1he8jrb\",\"title\":\"多元函数定义域、连续、偏导存在与可微的关系：0\",\"aliases\":[],\"context\":\"所属知识点：多元函数定义域、连续、偏导存在与可微的关系。\"} -->\n\\[\n0<\\sqrt{(x-x_0)^2+(y-y_0)^2}<\\delta\n\\Longrightarrow |f(x,y)-A|<\\varepsilon.\n\\]\n\n<!-- formula {\"id\":\"calculus-ab0b18\",\"title\":\"多元函数定义域、连续、偏导存在与可微的关系：f 在 (x_0,y_0) 连续\",\"aliases\":[],\"context\":\"所属知识点：多元函数定义域、连续、偏导存在与可微的关系。\"} -->\n\\[\nf\\text{ 在 }(x_0,y_0)\\text{ 连续}\n\\Longleftrightarrow\n\\lim_{(x,y)\\to(x_0,y_0)}f(x,y)=f(x_0,y_0).\n\\]\n\n可微的定义式：令 \\(\\Delta x=x-x_0,\\Delta y=y-y_0\\)，\\(\\rho=\\sqrt{(\\Delta x)^2+(\\Delta y)^2}\\)，则\n\n<!-- formula {\"id\":\"calculus-4zv5m8\",\"title\":\"多元函数定义域、连续、偏导存在与可微的关系：Delta z\",\"aliases\":[],\"context\":\"所属知识点：多元函数定义域、连续、偏导存在与可微的关系。\"} -->\n\\[\n\\Delta z=A\\Delta x+B\\Delta y+o(\\rho).\n\\]\n\n若可微，则 \\(A=f_x(x_0,y_0),B=f_y(x_0,y_0)\\)。\n\n闭有界区域上的连续函数一定有界，并能取得最大值和最小值；在连通区域内还具有介值性。",
        "searchText": "概念题 概念题 概念题 多元函数定义域、连续、偏导存在与可微的关系 在一点可微一定连续，也一定有各个偏导数；仅有偏导数或偏导数存在不能保证连续、可微。若偏导数在该点附近存在并连续，则函数在该点可微。 判断极限不存在，只要找两条趋近路径得到不同结果；证明极限存在则要给出与路径无关的整体估计。 二元函数极限与连续的定义式： (x,y) (x 0,y 0) f(x,y)=A 0,\\ 0, 0< (x-x 0)^2+(y-y 0)^2 < ⇒ f(x,y)-A < . f 在 (x 0,y 0) 连续 (x,y) (x 0,y 0) f(x,y)=f(x 0,y 0). 可微的定义式：令 x=x-x 0, y=y-y 0， = ( x)^2+( y)^2 ，则 z=A x+B y+o( ). 若可微，则 A=f x(x 0,y 0),B=f y(x 0,y 0)。 闭有界区域上的连续函数一定有界，并能取得最大值和最小值；在连通区域内还具有介值性。",
        "summary": "多元函数定义域、连续、偏导存在与可微的关系 在一点可微一定连续，也一定有各个偏导数；仅有偏导数或偏导数存在不能保证连续、可微。若偏导数在该点附近存在并连续，则函数在该点可微。 判断极限不存在，只要找两条趋近路径得到不同结果；证明极限存在则要给出与路径无关的…",
        "anchors": [
          {
            "id": "anchor-1waukw5",
            "legacyId": "calculus-05-001-anchor-001",
            "title": "多元函数定义域、连续、偏导存在与可微的关系",
            "searchText": "多元函数定义域、连续、偏导存在与可微的关系 在一点可微一定连续，也一定有各个偏导数；仅有偏导数或偏导数存在不能保证连续、可微。若偏导数在该点附近存在并连续，则函数在该点可微。 判断极限不存在，只要找两条趋近路径得到不同结果；证明极限存在则要给出与路径无关的整体估计。 二元函数极限与连续的定义式： (x,y) (x 0,y 0) f(x,y)=A 0,\\ 0, 0< (x-x 0)^2+(y-y 0)^2 < ⇒ f(x,y)-A < . f 在 (x 0,y 0) 连续 (x,y) (x 0,y 0) f(x,y)=f(x 0,y 0). 可微的定义式：令 x=x-x 0, y=y-y 0， = ( x)^2+( y)^2 ，则 z=A x+B y+o( ). 若可微，则 A=f x(x 0,y 0),B=f y(x 0,y 0)。 闭有界区域上的连续函数一定有界，并能取得最大值和最小值；在连通区域内还具有介值性。",
            "summary": "在一点可微一定连续，也一定有各个偏导数；仅有偏导数或偏导数存在不能保证连续、可微。若偏导数在该点附近存在并连续，则函数在该点可微。 判断极限不存在，只要找两条趋近路径得到不同结果；证明极限存在则要给出与路径无关的整体估计。 二元函数极限与连续的定义式： (…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-day16p",
            "parentAnchorId": "anchor-1waukw5",
            "legacyParentAnchorId": "calculus-05-001-anchor-001",
            "title": "多元函数定义域、连续、偏导存在与可微的关系：lim_(x,y)to(x_0,y_0)f(x,y)",
            "latex": "\\lim_{(x,y)\\to(x_0,y_0)}f(x,y)=A\n\\Longleftrightarrow\n\\forall\\varepsilon>0,\\ \\exists\\delta>0,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "二元函数极限与连续的定义式：",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-001",
            "order": 0
          },
          {
            "id": "calculus-1he8jrb",
            "parentAnchorId": "anchor-1waukw5",
            "legacyParentAnchorId": "calculus-05-001-anchor-001",
            "title": "多元函数定义域、连续、偏导存在与可微的关系：0",
            "latex": "0<\\sqrt{(x-x_0)^2+(y-y_0)^2}<\\delta\n\\Longrightarrow |f(x,y)-A|<\\varepsilon.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：多元函数定义域、连续、偏导存在与可微的关系。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-001",
            "order": 1
          },
          {
            "id": "calculus-ab0b18",
            "parentAnchorId": "anchor-1waukw5",
            "legacyParentAnchorId": "calculus-05-001-anchor-001",
            "title": "多元函数定义域、连续、偏导存在与可微的关系：f 在 (x_0,y_0) 连续",
            "latex": "f\\text{ 在 }(x_0,y_0)\\text{ 连续}\n\\Longleftrightarrow\n\\lim_{(x,y)\\to(x_0,y_0)}f(x,y)=f(x_0,y_0).",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：多元函数定义域、连续、偏导存在与可微的关系。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-001",
            "order": 2
          },
          {
            "id": "calculus-4zv5m8",
            "parentAnchorId": "anchor-1waukw5",
            "legacyParentAnchorId": "calculus-05-001-anchor-001",
            "title": "多元函数定义域、连续、偏导存在与可微的关系：Delta z",
            "latex": "\\Delta z=A\\Delta x+B\\Delta y+o(\\rho).",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：多元函数定义域、连续、偏导存在与可微的关系。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-001",
            "order": 3
          }
        ]
      },
      {
        "id": "calculus-05-002",
        "title": "重极限",
        "body": "##### 二重极限存在性、路径判别与极坐标估计\n\n先代入判断是否为未定式；多项式比值常改用极坐标 \\(x=r\\cos\\theta,y=r\\sin\\theta\\)。若化成\n\n<!-- formula {\"id\":\"calculus-13s3e30\",\"title\":\"二重极限存在性、路径判别与极坐标估计：|f(x,y)-A|\",\"aliases\":[],\"context\":\"先代入判断是否为未定式；多项式比值常改用极坐标 x=r\\\\cos\\\\theta,y=r\\\\sin\\\\theta。若化成\"} -->\n\\[\n|f(x,y)-A|\\le C r^a\\quad(a>0),\n\\]\n\n则极限为 \\(A\\)。极坐标后仍含无法消掉的 \\(\\theta\\)，通常提示极限与路径有关，但仍应选具体路径验证。",
        "searchText": "重极限 重极限 重极限 二重极限存在性、路径判别与极坐标估计 先代入判断是否为未定式；多项式比值常改用极坐标 x=r ,y=r 。若化成 f(x,y)-A ≤ C r^a (a 0), 则极限为 A。极坐标后仍含无法消掉的 ，通常提示极限与路径有关，但仍应选具体路径验证。",
        "summary": "二重极限存在性、路径判别与极坐标估计 先代入判断是否为未定式；多项式比值常改用极坐标 x=r ,y=r 。若化成 f(x,y)-A ≤ C r^a (a 0), 则极限为 A。极坐标后仍含无法消掉的 ，通常提示极限与路径有关，但仍应选具体路径验证。",
        "anchors": [
          {
            "id": "anchor-1611dtg",
            "legacyId": "calculus-05-002-anchor-001",
            "title": "二重极限存在性、路径判别与极坐标估计",
            "searchText": "二重极限存在性、路径判别与极坐标估计 先代入判断是否为未定式；多项式比值常改用极坐标 x=r ,y=r 。若化成 f(x,y)-A ≤ C r^a (a 0), 则极限为 A。极坐标后仍含无法消掉的 ，通常提示极限与路径有关，但仍应选具体路径验证。",
            "summary": "先代入判断是否为未定式；多项式比值常改用极坐标 x=r ,y=r 。若化成 f(x,y)-A ≤ C r^a (a 0), 则极限为 A。极坐标后仍含无法消掉的 ，通常提示极限与路径有关，但仍应选具体路径验证。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-13s3e30",
            "parentAnchorId": "anchor-1611dtg",
            "legacyParentAnchorId": "calculus-05-002-anchor-001",
            "title": "二重极限存在性、路径判别与极坐标估计：|f(x,y)-A|",
            "latex": "|f(x,y)-A|\\le C r^a\\quad(a>0),",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "先代入判断是否为未定式；多项式比值常改用极坐标 x=r\\cos\\theta,y=r\\sin\\theta。若化成",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-002",
            "order": 0
          }
        ]
      },
      {
        "id": "calculus-05-003",
        "title": "偏导数",
        "body": "##### 一阶偏导、二阶偏导、全微分与线性近似\n\n偏导数定义：\n\n<!-- formula {\"id\":\"calculus-wb8q6\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：f_x(x_0,y_0)\",\"aliases\":[],\"context\":\"偏导数定义：\"} -->\n\\[\nf_x(x_0,y_0)=\\lim_{h\\to0}\n\\frac{f(x_0+h,y_0)-f(x_0,y_0)}h,\n\\]\n\n<!-- formula {\"id\":\"calculus-v400ip\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：f_y(x_0,y_0)\",\"aliases\":[],\"context\":\"所属知识点：一阶偏导、二阶偏导、全微分与线性近似。\"} -->\n\\[\nf_y(x_0,y_0)=\\lim_{h\\to0}\n\\frac{f(x_0,y_0+h)-f(x_0,y_0)}h.\n\\]\n\n<!-- formula {\"id\":\"calculus-114wj0y\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：dz\",\"aliases\":[],\"context\":\"所属知识点：一阶偏导、二阶偏导、全微分与线性近似。\"} -->\n\\[\ndz=f_x\\,dx+f_y\\,dy.\n\\]\n\n可微时的线性近似为\n\n<!-- formula {\"id\":\"calculus-aqy05v\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：f(x_0+Delta x,y_0+Delta y)\",\"aliases\":[],\"context\":\"可微时的线性近似为\"} -->\n\\[\nf(x_0+\\Delta x,y_0+\\Delta y)\n\\approx f(x_0,y_0)+f_x\\Delta x+f_y\\Delta y.\n\\]\n\n二阶偏导连续时：\n\n<!-- formula {\"id\":\"calculus-1lumlqx\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：f_xy\",\"aliases\":[],\"context\":\"二阶偏导连续时：\"} -->\n\\[\nf_{xy}=f_{yx}.\n\\]\n\n当 \\(x,y\\) 是独立变量时，二阶全微分为\n\n<!-- formula {\"id\":\"calculus-uou74l\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：d^2z\",\"aliases\":[],\"context\":\"当 x,y 是独立变量时，二阶全微分为\"} -->\n\\[\nd^2z=f_{xx}\\,dx^2+2f_{xy}\\,dx\\,dy+f_{yy}\\,dy^2.\n\\]\n\n全微分形式不变性：无论 \\(x,y\\) 是独立变量还是其他变量的可微函数，始终有\n\n<!-- formula {\"id\":\"calculus-114wj0y-2\",\"title\":\"一阶偏导、二阶偏导、全微分与线性近似：dz\",\"aliases\":[],\"context\":\"全微分形式不变性：无论 x,y 是独立变量还是其他变量的可微函数，始终有\"} -->\n\\[\ndz=f_x\\,dx+f_y\\,dy.\n\\]\n\n分段点求偏导必须回到定义，不能直接套分段外的求导式。\n\n##### 多元复合函数链式法则与全导数\n\n若 \\(z=f(u,v)\\)，\\(u=u(x,y),v=v(x,y)\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-9oqt6-1\",\"title\":\"多元复合函数链式法则与全导数：z_x\",\"aliases\":[],\"context\":\"若 \\\\(z=f(u,v)\\\\)，\\\\(u=u(x,y),v=v(x,y)\\\\)，则\",\"latex\":\"z_x=f_u u_x+f_v v_x\"},{\"id\":\"calculus-9oqt6-2\",\"title\":\"多元复合函数链式法则与全导数：z_y\",\"aliases\":[],\"context\":\"若 \\\\(z=f(u,v)\\\\)，\\\\(u=u(x,y),v=v(x,y)\\\\)，则\",\"latex\":\"z_y=f_u u_y+f_v v_y\"}]} -->\n\\[\nz_x=f_u u_x+f_v v_x,\\qquad\nz_y=f_u u_y+f_v v_y.\n\\]\n\n若 \\(u=u(t),v=v(t)\\)，则\n\n<!-- formula {\"id\":\"calculus-twid3p\",\"title\":\"多元复合函数链式法则与全导数：(dz)/(dt)\",\"aliases\":[],\"context\":\"若 \\\\(u=u(t),v=v(t)\\\\)，则\"} -->\n\\[\n\\frac{dz}{dt}=f_u\\frac{du}{dt}+f_v\\frac{dv}{dt}.\n\\]\n\n若 \\(z=f(x,y)\\) 且 \\(y=y(x)\\)，则\n\n<!-- formula {\"id\":\"calculus-xqga8r\",\"title\":\"多元复合函数链式法则与全导数：(dz)/(dx)\",\"aliases\":[],\"context\":\"若 \\\\(z=f(x,y)\\\\) 且 \\\\(y=y(x)\\\\)，则\"} -->\n\\[\n\\frac{dz}{dx}=f_x+f_y\\frac{dy}{dx}.\n\\]\n\n求二阶偏导时，对一阶结果整体再求导，注意 \\(f_u,f_v\\) 也随 \\(x,y\\) 变化。\n\n##### 一元隐函数与多元隐函数偏导公式\n\n若 \\(F(x,y,z)=0\\) 确定 \\(z=z(x,y)\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"calculus-1k14flr-1\",\"title\":\"一元隐函数与多元隐函数偏导公式：z_x\",\"aliases\":[],\"context\":\"若 \\\\(F(x,y,z)=0\\\\) 确定 \\\\(z=z(x,y)\\\\)，则\",\"latex\":\"z_x=-\\\\frac{F_x}{F_z}\"},{\"id\":\"calculus-1k14flr-2\",\"title\":\"一元隐函数与多元隐函数偏导公式：z_y\",\"aliases\":[],\"context\":\"若 \\\\(F(x,y,z)=0\\\\) 确定 \\\\(z=z(x,y)\\\\)，则\",\"latex\":\"z_y=-\\\\frac{F_y}{F_z}\\\\quad (F_z\\\\ne0)\"}]} -->\n\\[\nz_x=-\\frac{F_x}{F_z},\\qquad z_y=-\\frac{F_y}{F_z}\\quad(F_z\\ne0).\n\\]\n\n若 \\(F(x,y)=0\\) 确定 \\(y=y(x)\\)，则\n\n<!-- formula {\"id\":\"calculus-1wpjjd4\",\"title\":\"一元隐函数与多元隐函数偏导公式：y'\",\"aliases\":[],\"context\":\"若 \\\\(F(x,y)=0\\\\) 确定 \\\\(y=y(x)\\\\)，则\"} -->\n\\[\ny'=-\\frac{F_x}{F_y},\n\\]\n\n<!-- formula {\"id\":\"calculus-q78ui5-1\",\"title\":\"一元隐函数与多元隐函数偏导公式：y''\",\"aliases\":[],\"context\":\"所属知识点：一元隐函数与多元隐函数偏导公式。\"} -->\n\\[\ny''=-\\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}\\qquad(F_y\\ne0).\n\\]\n\n多个方程确定多个函数时，把未知偏导数列成线性方程组求解；不必强行先解出隐函数。\n\n##### 已知偏导数反求二元函数\n\n由 \\(f_x=P(x,y)\\) 对 \\(x\\) 积分时，积分“常数”应写成只含 \\(y\\) 的函数：\n\n<!-- formula {\"id\":\"calculus-1yimast\",\"title\":\"已知偏导数反求二元函数：f(x,y)\",\"aliases\":[],\"context\":\"由 \\\\(f_x=P(x,y)\\\\) 对 x 积分时，积分“常数”应写成只含 y 的函数：\"} -->\n\\[\nf(x,y)=\\int P(x,y)\\,dx+\\varphi(y).\n\\]\n\n再用 \\(f_y\\) 或其他条件求 \\(\\varphi\\)。",
        "searchText": "偏导数 偏导数 偏导数 一阶偏导、二阶偏导、全微分与线性近似 偏导数定义： f x(x 0,y 0)= h 0 f(x 0+h,y 0)-f(x 0,y 0) h, f y(x 0,y 0)= h 0 f(x 0,y 0+h)-f(x 0,y 0) h. dz=f x\\,dx+f y\\,dy. 可微时的线性近似为 f(x 0+ x,y 0+ y) f(x 0,y 0)+f x x+f y y. 二阶偏导连续时： f xy =f yx . 当 x,y 是独立变量时，二阶全微分为 d^2z=f xx \\,dx^2+2f xy \\,dx\\,dy+f yy \\,dy^2. 全微分形式不变性：无论 x,y 是独立变量还是其他变量的可微函数，始终有 dz=f x\\,dx+f y\\,dy. 分段点求偏导必须回到定义，不能直接套分段外的求导式。 多元复合函数链式法则与全导数 若 z=f(u,v)，u=u(x,y),v=v(x,y)，则 z x=f u u x+f v v x, z y=f u u y+f v v y. 若 u=u(t),v=v(t)，则 dz dt =f u du dt +f v dv dt . 若 z=f(x,y) 且 y=y(x)，则 dz dx =f x+f y dy dx . 求二阶偏导时，对一阶结果整体再求导，注意 f u,f v 也随 x,y 变化。 一元隐函数与多元隐函数偏导公式 若 F(x,y,z)=0 确定 z=z(x,y)，则 z x=- F x F z , z y=- F y F z (F z≠0). 若 F(x,y)=0 确定 y=y(x)，则 y'=- F x F y , y''=- F xx +2F xy y'+F yy (y')^2 F y (F y≠0). 多个方程确定多个函数时，把未知偏导数列成线性方程组求解；不必强行先解出隐函数。 已知偏导数反求二元函数 由 f x=P(x,y) 对 x 积分时，积分“常数”应写成只含 y 的函数： f(x,y)= P(x,y)\\,dx+ (y). 再用 f y 或其他条件求 。",
        "summary": "一阶偏导、二阶偏导、全微分与线性近似 偏导数定义： f x(x 0,y 0)= h 0 f(x 0+h,y 0)-f(x 0,y 0) h, f y(x 0,y 0)= h 0 f(x 0,y 0+h)-f(x 0,y 0) h. dz=f x\\,dx+f…",
        "anchors": [
          {
            "id": "anchor-ey2hqb",
            "legacyId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似",
            "searchText": "一阶偏导、二阶偏导、全微分与线性近似 偏导数定义： f x(x 0,y 0)= h 0 f(x 0+h,y 0)-f(x 0,y 0) h, f y(x 0,y 0)= h 0 f(x 0,y 0+h)-f(x 0,y 0) h. dz=f x\\,dx+f y\\,dy. 可微时的线性近似为 f(x 0+ x,y 0+ y) f(x 0,y 0)+f x x+f y y. 二阶偏导连续时： f xy =f yx . 当 x,y 是独立变量时，二阶全微分为 d^2z=f xx \\,dx^2+2f xy \\,dx\\,dy+f yy \\,dy^2. 全微分形式不变性：无论 x,y 是独立变量还是其他变量的可微函数，始终有 dz=f x\\,dx+f y\\,dy. 分段点求偏导必须回到定义，不能直接套分段外的求导式。",
            "summary": "偏导数定义： f x(x 0,y 0)= h 0 f(x 0+h,y 0)-f(x 0,y 0) h, f y(x 0,y 0)= h 0 f(x 0,y 0+h)-f(x 0,y 0) h. dz=f x\\,dx+f y\\,dy. 可微时的线性近似为 f…"
          },
          {
            "id": "anchor-1euphqa",
            "legacyId": "calculus-05-003-anchor-002",
            "title": "多元复合函数链式法则与全导数",
            "searchText": "多元复合函数链式法则与全导数 若 z=f(u,v)，u=u(x,y),v=v(x,y)，则 z x=f u u x+f v v x, z y=f u u y+f v v y. 若 u=u(t),v=v(t)，则 dz dt =f u du dt +f v dv dt . 若 z=f(x,y) 且 y=y(x)，则 dz dx =f x+f y dy dx . 求二阶偏导时，对一阶结果整体再求导，注意 f u,f v 也随 x,y 变化。",
            "summary": "若 z=f(u,v)，u=u(x,y),v=v(x,y)，则 z x=f u u x+f v v x, z y=f u u y+f v v y. 若 u=u(t),v=v(t)，则 dz dt =f u du dt +f v dv dt . 若 z=f(x…"
          },
          {
            "id": "anchor-hwjhzo",
            "legacyId": "calculus-05-003-anchor-003",
            "title": "一元隐函数与多元隐函数偏导公式",
            "searchText": "一元隐函数与多元隐函数偏导公式 若 F(x,y,z)=0 确定 z=z(x,y)，则 z x=- F x F z , z y=- F y F z (F z≠0). 若 F(x,y)=0 确定 y=y(x)，则 y'=- F x F y , y''=- F xx +2F xy y'+F yy (y')^2 F y (F y≠0). 多个方程确定多个函数时，把未知偏导数列成线性方程组求解；不必强行先解出隐函数。",
            "summary": "若 F(x,y,z)=0 确定 z=z(x,y)，则 z x=- F x F z , z y=- F y F z (F z≠0). 若 F(x,y)=0 确定 y=y(x)，则 y'=- F x F y , y''=- F xx +2F xy y'+F y…"
          },
          {
            "id": "anchor-mpy8o7",
            "legacyId": "calculus-05-003-anchor-004",
            "title": "已知偏导数反求二元函数",
            "searchText": "已知偏导数反求二元函数 由 f x=P(x,y) 对 x 积分时，积分“常数”应写成只含 y 的函数： f(x,y)= P(x,y)\\,dx+ (y). 再用 f y 或其他条件求 。",
            "summary": "由 f x=P(x,y) 对 x 积分时，积分“常数”应写成只含 y 的函数： f(x,y)= P(x,y)\\,dx+ (y). 再用 f y 或其他条件求 。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-wb8q6",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：f_x(x_0,y_0)",
            "latex": "f_x(x_0,y_0)=\\lim_{h\\to0}\n\\frac{f(x_0+h,y_0)-f(x_0,y_0)}h,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "偏导数定义：",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 0
          },
          {
            "id": "calculus-v400ip",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：f_y(x_0,y_0)",
            "latex": "f_y(x_0,y_0)=\\lim_{h\\to0}\n\\frac{f(x_0,y_0+h)-f(x_0,y_0)}h.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：一阶偏导、二阶偏导、全微分与线性近似。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 1
          },
          {
            "id": "calculus-114wj0y",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：dz",
            "latex": "dz=f_x\\,dx+f_y\\,dy.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：一阶偏导、二阶偏导、全微分与线性近似。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 2
          },
          {
            "id": "calculus-aqy05v",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：f(x_0+Delta x,y_0+Delta y)",
            "latex": "f(x_0+\\Delta x,y_0+\\Delta y)\n\\approx f(x_0,y_0)+f_x\\Delta x+f_y\\Delta y.",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "可微时的线性近似为",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 3
          },
          {
            "id": "calculus-1lumlqx",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：f_xy",
            "latex": "f_{xy}=f_{yx}.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "二阶偏导连续时：",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 4
          },
          {
            "id": "calculus-uou74l",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：d^2z",
            "latex": "d^2z=f_{xx}\\,dx^2+2f_{xy}\\,dx\\,dy+f_{yy}\\,dy^2.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "当 x,y 是独立变量时，二阶全微分为",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 5
          },
          {
            "id": "calculus-114wj0y-2",
            "parentAnchorId": "anchor-ey2hqb",
            "legacyParentAnchorId": "calculus-05-003-anchor-001",
            "title": "一阶偏导、二阶偏导、全微分与线性近似：dz",
            "latex": "dz=f_x\\,dx+f_y\\,dy.",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "全微分形式不变性：无论 x,y 是独立变量还是其他变量的可微函数，始终有",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 6
          },
          {
            "id": "calculus-9oqt6-1",
            "parentAnchorId": "anchor-1euphqa",
            "legacyParentAnchorId": "calculus-05-003-anchor-002",
            "title": "多元复合函数链式法则与全导数：z_x",
            "latex": "z_x=f_u u_x+f_v v_x",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "若 \\(z=f(u,v)\\)，\\(u=u(x,y),v=v(x,y)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 7
          },
          {
            "id": "calculus-9oqt6-2",
            "parentAnchorId": "anchor-1euphqa",
            "legacyParentAnchorId": "calculus-05-003-anchor-002",
            "title": "多元复合函数链式法则与全导数：z_y",
            "latex": "z_y=f_u u_y+f_v v_y",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "若 \\(z=f(u,v)\\)，\\(u=u(x,y),v=v(x,y)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 8
          },
          {
            "id": "calculus-twid3p",
            "parentAnchorId": "anchor-1euphqa",
            "legacyParentAnchorId": "calculus-05-003-anchor-002",
            "title": "多元复合函数链式法则与全导数：(dz)/(dt)",
            "latex": "\\frac{dz}{dt}=f_u\\frac{du}{dt}+f_v\\frac{dv}{dt}.",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "若 \\(u=u(t),v=v(t)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 9
          },
          {
            "id": "calculus-xqga8r",
            "parentAnchorId": "anchor-1euphqa",
            "legacyParentAnchorId": "calculus-05-003-anchor-002",
            "title": "多元复合函数链式法则与全导数：(dz)/(dx)",
            "latex": "\\frac{dz}{dx}=f_x+f_y\\frac{dy}{dx}.",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "若 \\(z=f(x,y)\\) 且 \\(y=y(x)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 10
          },
          {
            "id": "calculus-1k14flr-1",
            "parentAnchorId": "anchor-hwjhzo",
            "legacyParentAnchorId": "calculus-05-003-anchor-003",
            "title": "一元隐函数与多元隐函数偏导公式：z_x",
            "latex": "z_x=-\\frac{F_x}{F_z}",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "若 \\(F(x,y,z)=0\\) 确定 \\(z=z(x,y)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 11
          },
          {
            "id": "calculus-1k14flr-2",
            "parentAnchorId": "anchor-hwjhzo",
            "legacyParentAnchorId": "calculus-05-003-anchor-003",
            "title": "一元隐函数与多元隐函数偏导公式：z_y",
            "latex": "z_y=-\\frac{F_y}{F_z}\\quad (F_z\\ne0)",
            "sourceBlockIndex": 21,
            "searchAliases": [],
            "context": "若 \\(F(x,y,z)=0\\) 确定 \\(z=z(x,y)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 12
          },
          {
            "id": "calculus-1wpjjd4",
            "parentAnchorId": "anchor-hwjhzo",
            "legacyParentAnchorId": "calculus-05-003-anchor-003",
            "title": "一元隐函数与多元隐函数偏导公式：y'",
            "latex": "y'=-\\frac{F_x}{F_y},",
            "sourceBlockIndex": 24,
            "searchAliases": [],
            "context": "若 \\(F(x,y)=0\\) 确定 \\(y=y(x)\\)，则",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 13
          },
          {
            "id": "calculus-q78ui5-1",
            "parentAnchorId": "anchor-hwjhzo",
            "legacyParentAnchorId": "calculus-05-003-anchor-003",
            "title": "一元隐函数与多元隐函数偏导公式：y''",
            "latex": "y''=-\\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}\\qquad(F_y\\ne0).",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "所属知识点：一元隐函数与多元隐函数偏导公式。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 14
          },
          {
            "id": "calculus-1yimast",
            "parentAnchorId": "anchor-mpy8o7",
            "legacyParentAnchorId": "calculus-05-003-anchor-004",
            "title": "已知偏导数反求二元函数：f(x,y)",
            "latex": "f(x,y)=\\int P(x,y)\\,dx+\\varphi(y).",
            "sourceBlockIndex": 29,
            "searchAliases": [],
            "context": "由 \\(f_x=P(x,y)\\) 对 x 积分时，积分“常数”应写成只含 y 的函数：",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-003",
            "order": 15
          }
        ]
      },
      {
        "id": "calculus-05-004",
        "title": "多元微分应用",
        "body": "##### 二元函数无条件极值与二阶判别式\n\n先解\n\n<!-- formula {\"id\":\"calculus-1v2hh2s-1\",\"title\":\"二元函数无条件极值与二阶判别式：f_x\",\"aliases\":[],\"context\":\"所属知识点：二元函数无条件极值与二阶判别式。\"} -->\n\\[\nf_x=0,\\qquad f_y=0.\n\\]\n\n在满足 \\(f_x=f_y=0\\) 的点计算\n\n<!-- formula {\"id\":\"calculus-iwhzr3-1\",\"title\":\"二元函数无条件极值与二阶判别式：A\",\"aliases\":[],\"context\":\"在满足 f_x=f_y=0 的点计算\"} -->\n\\[\nA=f_{xx},\\quad B=f_{xy},\\quad C=f_{yy},\\quad \\Delta=AC-B^2.\n\\]\n\n- \\(\\Delta>0,A>0\\)：极小值；\n- \\(\\Delta>0,A<0\\)：极大值；\n- \\(\\Delta<0\\)：不是极值；\n- \\(\\Delta=0\\)：该判别法失效，另作判断。\n\n当 \\(\\Delta=0\\) 时，可令 \\(x=x_0+h,y=y_0+k\\)，比较展开式的最低次非零项：该项恒正或恒负时分别为极小或极大；沿不同路径异号时不是极值。\n\n##### 拉格朗日乘数法与条件极值\n\n约束 \\(g(x,y)=0\\) 时设\n\n<!-- formula {\"id\":\"calculus-8ojpx1\",\"title\":\"拉格朗日乘数法与条件极值：L\",\"aliases\":[],\"context\":\"约束 \\\\(g(x,y)=0\\\\) 时设\"} -->\n\\[\nL=f+\\lambda g,\n\\]\n\n联立 \\(L_x=L_y=L_\\lambda=0\\)。两个约束就引入两个乘数。\n\n##### 闭区域最大值、最小值与边界比较\n\n分别计算区域内部满足 \\(f_x=f_y=0\\) 的点和边界上的候选点，再比较函数值。边界可以代入化为一元函数，也可用拉格朗日乘数法。",
        "searchText": "多元微分应用 多元微分应用 多元微分应用 二元函数无条件极值与二阶判别式 先解 f x=0, f y=0. 在满足 f x=f y=0 的点计算 A=f xx , B=f xy , C=f yy , =AC-B^2. 0,A 0：极小值； 0,A<0：极大值； <0：不是极值； =0：该判别法失效，另作判断。 当 =0 时，可令 x=x 0+h,y=y 0+k，比较展开式的最低次非零项：该项恒正或恒负时分别为极小或极大；沿不同路径异号时不是极值。 拉格朗日乘数法与条件极值 约束 g(x,y)=0 时设 L=f+ g, 联立 L x=L y=L =0。两个约束就引入两个乘数。 闭区域最大值、最小值与边界比较 分别计算区域内部满足 f x=f y=0 的点和边界上的候选点，再比较函数值。边界可以代入化为一元函数，也可用拉格朗日乘数法。",
        "summary": "二元函数无条件极值与二阶判别式 先解 f x=0, f y=0. 在满足 f x=f y=0 的点计算 A=f xx , B=f xy , C=f yy , =AC-B^2. 0,A 0：极小值； 0,A<0：极大值； <0：不是极值； =0：该判别法失效…",
        "anchors": [
          {
            "id": "anchor-156v72a",
            "legacyId": "calculus-05-004-anchor-001",
            "title": "二元函数无条件极值与二阶判别式",
            "searchText": "二元函数无条件极值与二阶判别式 先解 f x=0, f y=0. 在满足 f x=f y=0 的点计算 A=f xx , B=f xy , C=f yy , =AC-B^2. 0,A 0：极小值； 0,A<0：极大值； <0：不是极值； =0：该判别法失效，另作判断。 当 =0 时，可令 x=x 0+h,y=y 0+k，比较展开式的最低次非零项：该项恒正或恒负时分别为极小或极大；沿不同路径异号时不是极值。",
            "summary": "先解 f x=0, f y=0. 在满足 f x=f y=0 的点计算 A=f xx , B=f xy , C=f yy , =AC-B^2. 0,A 0：极小值； 0,A<0：极大值； <0：不是极值； =0：该判别法失效，另作判断。 当 =0 时，可令…"
          },
          {
            "id": "anchor-i8i1m",
            "legacyId": "calculus-05-004-anchor-002",
            "title": "拉格朗日乘数法与条件极值",
            "searchText": "拉格朗日乘数法与条件极值 约束 g(x,y)=0 时设 L=f+ g, 联立 L x=L y=L =0。两个约束就引入两个乘数。",
            "summary": "约束 g(x,y)=0 时设 L=f+ g, 联立 L x=L y=L =0。两个约束就引入两个乘数。"
          },
          {
            "id": "anchor-1c0bni3",
            "legacyId": "calculus-05-004-anchor-003",
            "title": "闭区域最大值、最小值与边界比较",
            "searchText": "闭区域最大值、最小值与边界比较 分别计算区域内部满足 f x=f y=0 的点和边界上的候选点，再比较函数值。边界可以代入化为一元函数，也可用拉格朗日乘数法。",
            "summary": "分别计算区域内部满足 f x=f y=0 的点和边界上的候选点，再比较函数值。边界可以代入化为一元函数，也可用拉格朗日乘数法。"
          }
        ],
        "formulas": [
          {
            "id": "calculus-1v2hh2s-1",
            "parentAnchorId": "anchor-156v72a",
            "legacyParentAnchorId": "calculus-05-004-anchor-001",
            "title": "二元函数无条件极值与二阶判别式：f_x",
            "latex": "f_x=0,\\qquad f_y=0.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：二元函数无条件极值与二阶判别式。",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-004",
            "order": 0
          },
          {
            "id": "calculus-iwhzr3-1",
            "parentAnchorId": "anchor-156v72a",
            "legacyParentAnchorId": "calculus-05-004-anchor-001",
            "title": "二元函数无条件极值与二阶判别式：A",
            "latex": "A=f_{xx},\\quad B=f_{xy},\\quad C=f_{yy},\\quad \\Delta=AC-B^2.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "在满足 f_x=f_y=0 的点计算",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-004",
            "order": 1
          },
          {
            "id": "calculus-8ojpx1",
            "parentAnchorId": "anchor-i8i1m",
            "legacyParentAnchorId": "calculus-05-004-anchor-002",
            "title": "拉格朗日乘数法与条件极值：L",
            "latex": "L=f+\\lambda g,",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "约束 \\(g(x,y)=0\\) 时设",
            "chapterId": "calculus-05",
            "topicId": "calculus-05-004",
            "order": 2
          }
        ]
      }
    ]
  },
  {
    "id": "calculus-06",
    "partId": "calculus",
    "partTitle": "高等数学",
    "title": "第六章　二重积分",
    "topics": [
      {
        "id": "calculus-06-001",
        "title": "计算",
        "body": "##### 二重积分的计算步骤：对称性、坐标系、积分次序与分块\n\n1. **先看对称性。** 积分区域关于 \\(x\\) 轴对称时，检查被积函数对 \\(y\\) 的奇偶性；关于 \\(y\\) 轴对称时，检查它对 \\(x\\) 的奇偶性。对应变量为奇函数，积分为零；为偶函数，可只算一半区域再乘 \\(2\\)。区域关于直线 \\(y=x\\) 对称时，可交换 \\(x,y\\) 来化简。只有区域也具有相应对称性时才能这样做。\n2. **再选坐标系。** 边界容易写成上下或左右关系时用直角坐标；圆域、扇形或式子含 \\(x^2+y^2\\) 时优先考虑极坐标，并记住 \\(dA=r\\,dr\\,d\\theta\\)。需要换元时，积分区域和面积微元都要一起变换。\n3. **定积分次序，必要时分块。** \\(X\\) 型区域先对 \\(y\\) 积分、后对 \\(x\\) 积分；\\(Y\\) 型区域先对 \\(x\\) 积分、后对 \\(y\\) 积分。边界发生变化，或被积函数含绝对值、取整、\\(\\max\\)、\\(\\min\\) 时，先找分界线再分块。\n4. **最后写积分限并计算。** 画出区域，沿内层积分变量的方向扫描，确定每段的起点和终点；外层积分限是该区域或分块的投影范围。先核对区域与积分限是否一致，再计算。\n\n##### X型区域、Y型区域与直角坐标累次积分\n\n\\(X\\) 型区域：\n\n<!-- formula {\"id\":\"calculus-pdmhwf\",\"title\":\"X型区域、Y型区域与直角坐标累次积分：D\",\"aliases\":[],\"context\":\"所属知识点：X型区域、Y型区域与直角坐标累次积分。\"} -->\n\\[\nD=\\{(x,y):a\\le x\\le b,\\ \\varphi_1(x)\\le y\\le\\varphi_2(x)\\},\n\\]\n\n<!-- formula {\"id\":\"calculus-oq0g2r\",\"title\":\"X型区域、Y型区域与直角坐标累次积分：iint_D f dA\",\"aliases\":[],\"context\":\"所属知识点：X型区域、Y型区域与直角坐标累次积分。\"} -->\n\\[\n\\iint_D f\\,dA=\\int_a^b dx\\int_{\\varphi_1(x)}^{\\varphi_2(x)}f(x,y)\\,dy.\n\\]\n\n\\(Y\\) 型区域同理先写 \\(y\\) 的范围，再写 \\(x\\) 的左右边界。若一条扫描线穿过区域时上下边界发生变化，就分段积分。\n\n##### 极坐标、一般换元与雅可比行列式\n\n<!-- formula {\"id\":\"calculus-ncsz3t-1\",\"title\":\"极坐标、一般换元与雅可比行列式：x\",\"aliases\":[],\"context\":\"所属知识点：极坐标、一般换元与雅可比行列式。\"} -->\n\\[\nx=r\\cos\\theta,\\qquad y=r\\sin\\theta,\\qquad dA=r\\,dr\\,d\\theta.\n\\]\n\n<!-- formula {\"id\":\"calculus-1wm6sut\",\"title\":\"极坐标、一般换元与雅可比行列式：iint_D f(x,y) dA\",\"aliases\":[],\"context\":\"所属知识点：极坐标、一般换元与雅可比行列式。\"} -->\n\\[\n\\iint_D f(x,y)\\,dA\n=\\int_\\alpha^\\beta d\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}\nf(r\\cos\\theta,r\\sin\\theta)r\\,dr.\n\\]\n\n圆域、扇形、被积函数含 \\(x^2+y^2\\) 时优先极坐标；椭圆域可令 \\(x=au,y=bv\\)，面积因子变为 \\(ab\\)。\n\n一般换元公式：若\n\n<!-- formula {\"id\":\"calculus-1j1r03t-1\",\"title\":\"极坐标、一般换元与雅可比行列式：x\",\"aliases\":[],\"context\":\"一般换元公式：若\"} -->\n\\[\nx=x(u,v),\\qquad y=y(u,v),\n\\]\n\n则\n\n<!-- formula {\"id\":\"calculus-wkbq2e\",\"title\":\"极坐标、一般换元与雅可比行列式：iint_D f(x,y) dx dy\",\"aliases\":[],\"context\":\"所属知识点：极坐标、一般换元与雅可比行列式。\"} -->\n\\[\n\\iint_D f(x,y)\\,dx\\,dy\n=\\iint_{D'} f(x(u,v),y(u,v))\n\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|du\\,dv,\n\\]\n\n其中\n\n<!-- formula {\"id\":\"calculus-15twt1l\",\"title\":\"极坐标、一般换元与雅可比行列式：(partial(x,y))/(partial(u,v))\",\"aliases\":[],\"context\":\"所属知识点：极坐标、一般换元与雅可比行列式。\"} -->\n\\[\n\\frac{\\partial(x,y)}{\\partial(u,v)}\n=x_u y_v-x_v y_u.\n\\]\n\n##### 平移极坐标与偏心圆区域\n\n圆心为 \\((a,b)\\) 的圆域优先令\n\n<!-- formula {\"id\":\"calculus-1ej49wb\",\"title\":\"平移极坐标与偏心圆区域：x\",\"aliases\":[],\"context\":\"圆心为 \\\\((a,b)\\\\) 的圆域优先令\"} -->\n\\[\nx=a+r\\cos\\theta,qquad y=b+r\\sin\\theta,qquad dA=r\\,dr\\,d\\theta.\n\\]\n\n常见圆的极坐标方程：\n\n<!-- formula {\"id\":\"calculus-1xuf8o5\",\"title\":\"平移极坐标与偏心圆区域：x^2+y^2\",\"aliases\":[],\"context\":\"常见圆的极坐标方程：\"} -->\n\\[\nx^2+y^2=2ax\\Longleftrightarrow r=2a\\cos\\theta,\n\\]\n\n<!-- formula {\"id\":\"calculus-174h923\",\"title\":\"平移极坐标与偏心圆区域：x^2+y^2\",\"aliases\":[],\"context\":\"所属知识点：平移极坐标与偏心圆区域。\"} -->\n\\[\nx^2+y^2=2by\\Longleftrightarrow r=2b\\sin\\theta.\n\\]\n\n##### 轴对称、中心对称、交换对称与分区积分\n\n区域关于 \\(y\\) 轴对称时，含 \\(x\\) 的奇函数积分为零；关于 \\(x\\) 轴对称时，含 \\(y\\) 的奇函数积分为零。含绝对值、最大值、最小值或取整函数时，先按分界曲线把区域拆开。\n\n若区域关于直线 \\(x=a\\) 对称，则把 \\(x-a\\) 看作新的对称变量；被积函数关于 \\(x-a\\) 为奇函数时积分为零，关于 \\(x-a\\) 为偶函数时可取一半区域后乘 \\(2\\)。关于 \\(y=b\\) 对称时同理。\n\n若区域关于原点对称，且 \\(f(-x,-y)=-f(x,y)\\)，则 <!-- formula {\"id\":\"calculus-double-integral-origin-odd-zero\",\"title\":\"原点中心对称区域的奇函数积分为零\",\"aliases\":[\"中心对称二重积分\",\"原点对称积分为零\"],\"context\":\"区域关于原点对称，被积函数同时把 x、y 变号后变为相反数。\"} -->\\(\\iint_D f(x,y)\\,dA=0\\)。\n\n若区域关于直线 \\(y=x\\) 对称，则\n\n<!-- formula {\"id\":\"calculus-1vkmuvj\",\"title\":\"轴对称、中心对称、交换对称与分区积分：iint_D f(x,y) dA\",\"aliases\":[],\"context\":\"若区域关于直线 y=x 对称，则\"} -->\n\\[\n\\iint_D f(x,y)\\,dA=\\iint_D f(y,x)\\,dA\n=\\frac12\\iint_D[f(x,y)+f(y,x)]\\,dA.\n\\]\n\n特别地，若 \\(f(y,x)=-f(x,y)\\)，则积分为零。",
        "searchText": "计算 计算 计算 二重积分的计算步骤：对称性、坐标系、积分次序与分块 先看对称性。 积分区域关于 x 轴对称时，检查被积函数对 y 的奇偶性；关于 y 轴对称时，检查它对 x 的奇偶性。对应变量为奇函数，积分为零；为偶函数，可只算一半区域再乘 2。区域关于直线 y=x 对称时，可交换 x,y 来化简。只有区域也具有相应对称性时才能这样做。 再选坐标系。 边界容易写成上下或左右关系时用直角坐标；圆域、扇形或式子含 x^2+y^2 时优先考虑极坐标，并记住 dA=r\\,dr\\,d 。需要换元时，积分区域和面积微元都要一起变换。 定积分次序，必要时分块。 X 型区域先对 y 积分、后对 x 积分；Y 型区域先对 x 积分、后对 y 积分。边界发生变化，或被积函数含绝对值、取整、 、 时，先找分界线再分块。 最后写积分限并计算。 画出区域，沿内层积分变量的方向扫描，确定每段的起点和终点；外层积分限是该区域或分块的投影范围。先核对区域与积分限是否一致，再计算。 X型区域、Y型区域与直角坐标累次积分 X 型区域： D=\\ (x,y):a≤ x≤ b,\\ 1(x)≤ y≤ 2(x)\\ , D f\\,dA= a^b dx 1(x) ^ 2(x) f(x,y)\\,dy. Y 型区域同理先写 y 的范围，再写 x 的左右边界。若一条扫描线穿过区域时上下边界发生变化，就分段积分。 极坐标、一般换元与雅可比行列式 x=r , y=r , dA=r\\,dr\\,d . D f(x,y)\\,dA = ^ d r 1( ) ^ r 2( ) f(r ,r )r\\,dr. 圆域、扇形、被积函数含 x^2+y^2 时优先极坐标；椭圆域可令 x=au,y=bv，面积因子变为 ab。 一般换元公式：若 x=x(u,v), y=y(u,v), 则 D f(x,y)\\,dx\\,dy = D' f(x(u,v),y(u,v)) ≤ft (x,y) (u,v) du\\,dv, 其中 (x,y) (u,v) =x u y v-x v y u. 平移极坐标与偏心圆区域 圆心为 (a,b) 的圆域优先令 x=a+r ,qquad y=b+r ,qquad dA=r\\,dr\\,d . 常见圆的极坐标方程： x^2+y^2=2ax r=2a , x^2+y^2=2by r=2b . 轴对称、中心对称、交换对称与分区积分 区域关于 y 轴对称时，含 x 的奇函数积分为零；关于 x 轴对称时，含 y 的奇函数积分为零。含绝对值、最大值、最小值或取整函数时，先按分界曲线把区域拆开。 若区域关于直线 x=a 对称，则把 x-a 看作新的对称变量；被积函数关于 x-a 为奇函数时积分为零，关于 x-a 为偶函数时可取一半区域后乘 2。关于 y=b 对称时同理。 若区域关于原点对称，且 f(-x,-y)=-f(x,y)，则 D f(x,y)\\,dA=0。 若区域关于直线 y=x 对称，则 D f(x,y)\\,dA= D f(y,x)\\,dA = 12 D[f(x,y)+f(y,x)]\\,dA. 特别地，若 f(y,x)=-f(x,y)，则积分为零。",
        "summary": "二重积分的计算步骤：对称性、坐标系、积分次序与分块 先看对称性。 积分区域关于 x 轴对称时，检查被积函数对 y 的奇偶性；关于 y 轴对称时，检查它对 x 的奇偶性。对应变量为奇函数，积分为零；为偶函数，可只算一半区域再乘 2。区域关于直线 y=x 对称…",
        "anchors": [
          {
            "id": "anchor-kw6aq",
            "legacyId": "calculus-06-001-anchor-001",
            "title": "二重积分的计算步骤：对称性、坐标系、积分次序与分块",
            "searchText": "二重积分的计算步骤：对称性、坐标系、积分次序与分块 先看对称性。 积分区域关于 x 轴对称时，检查被积函数对 y 的奇偶性；关于 y 轴对称时，检查它对 x 的奇偶性。对应变量为奇函数，积分为零；为偶函数，可只算一半区域再乘 2。区域关于直线 y=x 对称时，可交换 x,y 来化简。只有区域也具有相应对称性时才能这样做。 再选坐标系。 边界容易写成上下或左右关系时用直角坐标；圆域、扇形或式子含 x^2+y^2 时优先考虑极坐标，并记住 dA=r\\,dr\\,d 。需要换元时，积分区域和面积微元都要一起变换。 定积分次序，必要时分块。 X 型区域先对 y 积分、后对 x 积分；Y 型区域先对 x 积分、后对 y 积分。边界发生变化，或被积函数含绝对值、取整、 、 时，先找分界线再分块。 最后写积分限并计算。 画出区域，沿内层积分变量的方向扫描，确定每段的起点和终点；外层积分限是该区域或分块的投影范围。先核对区域与积分限是否一致，再计算。",
            "summary": "先看对称性。 积分区域关于 x 轴对称时，检查被积函数对 y 的奇偶性；关于 y 轴对称时，检查它对 x 的奇偶性。对应变量为奇函数，积分为零；为偶函数，可只算一半区域再乘 2。区域关于直线 y=x 对称时，可交换 x,y 来化简。只有区域也具有相应对称性…"
          },
          {
            "id": "anchor-a903lx",
            "legacyId": "calculus-06-001-anchor-002",
            "title": "X型区域、Y型区域与直角坐标累次积分",
            "searchText": "X型区域、Y型区域与直角坐标累次积分 X 型区域： D=\\ (x,y):a≤ x≤ b,\\ 1(x)≤ y≤ 2(x)\\ , D f\\,dA= a^b dx 1(x) ^ 2(x) f(x,y)\\,dy. Y 型区域同理先写 y 的范围，再写 x 的左右边界。若一条扫描线穿过区域时上下边界发生变化，就分段积分。",
            "summary": "X 型区域： D=\\ (x,y):a≤ x≤ b,\\ 1(x)≤ y≤ 2(x)\\ , D f\\,dA= a^b dx 1(x) ^ 2(x) f(x,y)\\,dy. Y 型区域同理先写 y 的范围，再写 x 的左右边界。若一条扫描线穿过区域时上下边界发生…"
          },
          {
            "id": "anchor-1no3ayr",
            "legacyId": "calculus-06-001-anchor-003",
            "title": "极坐标、一般换元与雅可比行列式",
            "searchText": "极坐标、一般换元与雅可比行列式 x=r , y=r , dA=r\\,dr\\,d . D f(x,y)\\,dA = ^ d r 1( ) ^ r 2( ) f(r ,r )r\\,dr. 圆域、扇形、被积函数含 x^2+y^2 时优先极坐标；椭圆域可令 x=au,y=bv，面积因子变为 ab。 一般换元公式：若 x=x(u,v), y=y(u,v), 则 D f(x,y)\\,dx\\,dy = D' f(x(u,v),y(u,v)) ≤ft (x,y) (u,v) du\\,dv, 其中 (x,y) (u,v) =x u y v-x v y u.",
            "summary": "x=r , y=r , dA=r\\,dr\\,d . D f(x,y)\\,dA = ^ d r 1( ) ^ r 2( ) f(r ,r )r\\,dr. 圆域、扇形、被积函数含 x^2+y^2 时优先极坐标；椭圆域可令 x=au,y=bv，面积因子变为 ab…"
          },
          {
            "id": "anchor-1p3v1i4",
            "legacyId": "calculus-06-001-anchor-004",
            "title": "平移极坐标与偏心圆区域",
            "searchText": "平移极坐标与偏心圆区域 圆心为 (a,b) 的圆域优先令 x=a+r ,qquad y=b+r ,qquad dA=r\\,dr\\,d . 常见圆的极坐标方程： x^2+y^2=2ax r=2a , x^2+y^2=2by r=2b .",
            "summary": "圆心为 (a,b) 的圆域优先令 x=a+r ,qquad y=b+r ,qquad dA=r\\,dr\\,d . 常见圆的极坐标方程： x^2+y^2=2ax r=2a , x^2+y^2=2by r=2b ."
          },
          {
            "id": "anchor-1w9znj5",
            "legacyId": "calculus-06-001-anchor-005",
            "title": "轴对称、中心对称、交换对称与分区积分",
            "searchText": "轴对称、中心对称、交换对称与分区积分 区域关于 y 轴对称时，含 x 的奇函数积分为零；关于 x 轴对称时，含 y 的奇函数积分为零。含绝对值、最大值、最小值或取整函数时，先按分界曲线把区域拆开。 若区域关于直线 x=a 对称，则把 x-a 看作新的对称变量；被积函数关于 x-a 为奇函数时积分为零，关于 x-a 为偶函数时可取一半区域后乘 2。关于 y=b 对称时同理。 若区域关于原点对称，且 f(-x,-y)=-f(x,y)，则 D f(x,y)\\,dA=0。 若区域关于直线 y=x 对称，则 D f(x,y)\\,dA= D f(y,x)\\,dA = 12 D[f(x,y)+f(y,x)]\\,dA. 特别地，若 f(y,x)=-f(x,y)，则积分为零。",
            "summary": "区域关于 y 轴对称时，含 x 的奇函数积分为零；关于 x 轴对称时，含 y 的奇函数积分为零。含绝对值、最大值、最小值或取整函数时，先按分界曲线把区域拆开。 若区域关于直线 x=a 对称，则把 x-a 看作新的对称变量；被积函数关于 x-a 为奇函数时积…"
          }
        ],
        "formulas": [
          {
            "id": "calculus-pdmhwf",
            "parentAnchorId": "anchor-a903lx",
            "legacyParentAnchorId": "calculus-06-001-anchor-002",
            "title": "X型区域、Y型区域与直角坐标累次积分：D",
            "latex": "D=\\{(x,y):a\\le x\\le b,\\ \\varphi_1(x)\\le y\\le\\varphi_2(x)\\},",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "所属知识点：X型区域、Y型区域与直角坐标累次积分。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 0
          },
          {
            "id": "calculus-oq0g2r",
            "parentAnchorId": "anchor-a903lx",
            "legacyParentAnchorId": "calculus-06-001-anchor-002",
            "title": "X型区域、Y型区域与直角坐标累次积分：iint_D f dA",
            "latex": "\\iint_D f\\,dA=\\int_a^b dx\\int_{\\varphi_1(x)}^{\\varphi_2(x)}f(x,y)\\,dy.",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "所属知识点：X型区域、Y型区域与直角坐标累次积分。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 1
          },
          {
            "id": "calculus-ncsz3t-1",
            "parentAnchorId": "anchor-1no3ayr",
            "legacyParentAnchorId": "calculus-06-001-anchor-003",
            "title": "极坐标、一般换元与雅可比行列式：x",
            "latex": "x=r\\cos\\theta,\\qquad y=r\\sin\\theta,\\qquad dA=r\\,dr\\,d\\theta.",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "所属知识点：极坐标、一般换元与雅可比行列式。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 2
          },
          {
            "id": "calculus-1wm6sut",
            "parentAnchorId": "anchor-1no3ayr",
            "legacyParentAnchorId": "calculus-06-001-anchor-003",
            "title": "极坐标、一般换元与雅可比行列式：iint_D f(x,y) dA",
            "latex": "\\iint_D f(x,y)\\,dA\n=\\int_\\alpha^\\beta d\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}\nf(r\\cos\\theta,r\\sin\\theta)r\\,dr.",
            "sourceBlockIndex": 24,
            "searchAliases": [],
            "context": "所属知识点：极坐标、一般换元与雅可比行列式。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 3
          },
          {
            "id": "calculus-1j1r03t-1",
            "parentAnchorId": "anchor-1no3ayr",
            "legacyParentAnchorId": "calculus-06-001-anchor-003",
            "title": "极坐标、一般换元与雅可比行列式：x",
            "latex": "x=x(u,v),\\qquad y=y(u,v),",
            "sourceBlockIndex": 28,
            "searchAliases": [],
            "context": "一般换元公式：若",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 4
          },
          {
            "id": "calculus-wkbq2e",
            "parentAnchorId": "anchor-1no3ayr",
            "legacyParentAnchorId": "calculus-06-001-anchor-003",
            "title": "极坐标、一般换元与雅可比行列式：iint_D f(x,y) dx dy",
            "latex": "\\iint_D f(x,y)\\,dx\\,dy\n=\\iint_{D'} f(x(u,v),y(u,v))\n\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|du\\,dv,",
            "sourceBlockIndex": 29,
            "searchAliases": [],
            "context": "所属知识点：极坐标、一般换元与雅可比行列式。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 5
          },
          {
            "id": "calculus-15twt1l",
            "parentAnchorId": "anchor-1no3ayr",
            "legacyParentAnchorId": "calculus-06-001-anchor-003",
            "title": "极坐标、一般换元与雅可比行列式：(partial(x,y))/(partial(u,v))",
            "latex": "\\frac{\\partial(x,y)}{\\partial(u,v)}\n=x_u y_v-x_v y_u.",
            "sourceBlockIndex": 30,
            "searchAliases": [],
            "context": "所属知识点：极坐标、一般换元与雅可比行列式。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 6
          },
          {
            "id": "calculus-1ej49wb",
            "parentAnchorId": "anchor-1p3v1i4",
            "legacyParentAnchorId": "calculus-06-001-anchor-004",
            "title": "平移极坐标与偏心圆区域：x",
            "latex": "x=a+r\\cos\\theta,qquad y=b+r\\sin\\theta,qquad dA=r\\,dr\\,d\\theta.",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "圆心为 \\((a,b)\\) 的圆域优先令",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 7
          },
          {
            "id": "calculus-1xuf8o5",
            "parentAnchorId": "anchor-1p3v1i4",
            "legacyParentAnchorId": "calculus-06-001-anchor-004",
            "title": "平移极坐标与偏心圆区域：x^2+y^2",
            "latex": "x^2+y^2=2ax\\Longleftrightarrow r=2a\\cos\\theta,",
            "sourceBlockIndex": 33,
            "searchAliases": [],
            "context": "常见圆的极坐标方程：",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 8
          },
          {
            "id": "calculus-174h923",
            "parentAnchorId": "anchor-1p3v1i4",
            "legacyParentAnchorId": "calculus-06-001-anchor-004",
            "title": "平移极坐标与偏心圆区域：x^2+y^2",
            "latex": "x^2+y^2=2by\\Longleftrightarrow r=2b\\sin\\theta.",
            "sourceBlockIndex": 34,
            "searchAliases": [],
            "context": "所属知识点：平移极坐标与偏心圆区域。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 9
          },
          {
            "id": "calculus-double-integral-origin-odd-zero",
            "parentAnchorId": "anchor-1w9znj5",
            "legacyParentAnchorId": "calculus-06-001-anchor-005",
            "title": "原点中心对称区域的奇函数积分为零",
            "latex": "\\iint_D f(x,y)\\,dA=0",
            "sourceBlockIndex": 46,
            "searchAliases": [
              "中心对称二重积分",
              "原点对称积分为零"
            ],
            "context": "区域关于原点对称，被积函数同时把 x、y 变号后变为相反数。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 10
          },
          {
            "id": "calculus-1vkmuvj",
            "parentAnchorId": "anchor-1w9znj5",
            "legacyParentAnchorId": "calculus-06-001-anchor-005",
            "title": "轴对称、中心对称、交换对称与分区积分：iint_D f(x,y) dA",
            "latex": "\\iint_D f(x,y)\\,dA=\\iint_D f(y,x)\\,dA\n=\\frac12\\iint_D[f(x,y)+f(y,x)]\\,dA.",
            "sourceBlockIndex": 48,
            "searchAliases": [],
            "context": "若区域关于直线 y=x 对称，则",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-001",
            "order": 11
          }
        ]
      },
      {
        "id": "calculus-06-002",
        "title": "其他",
        "body": "##### 二重积分概念、线性、区域可加性与定义型和式极限\n\n<!-- formula {\"id\":\"calculus-1pbz82d\",\"title\":\"二重积分概念、线性、区域可加性与定义型和式极限：iint_D(af+bg) dA\",\"aliases\":[],\"context\":\"所属知识点：二重积分概念、线性、区域可加性与定义型和式极限。\"} -->\n\\[\n\\iint_D(af+bg)\\,dA\n=a\\iint_Df\\,dA+b\\iint_Dg\\,dA.\n\\]\n\n若 \\(D=D_1\\cup D_2\\) 且内部不重叠，则\n\n<!-- formula {\"id\":\"calculus-pb2wau\",\"title\":\"二重积分概念、线性、区域可加性与定义型和式极限：iint_Df dA\",\"aliases\":[],\"context\":\"若 D=D_1\\\\cup D_2 且内部不重叠，则\"} -->\n\\[\n\\iint_Df\\,dA=\\iint_{D_1}f\\,dA+\\iint_{D_2}f\\,dA.\n\\]\n\n若把 \\(D\\) 分成小区域 \\(\\Delta D_i\\)，取点 \\((\\xi_i,\\eta_i)\\in\\Delta D_i\\)，则\n\n<!-- formula {\"id\":\"calculus-1hnz1db\",\"title\":\"二重积分概念、线性、区域可加性与定义型和式极限：lim_λto0Σ_i\",\"aliases\":[],\"context\":\"若把 D 分成小区域 \\\\Delta D_i，取点 \\\\((\\\\xi_i,\\\\eta_i)\\\\in\\\\Delta D_i\\\\)，则\"} -->\n\\[\n\\lim_{\\lambda\\to0}\\sum_{i=1}^n\nf(\\xi_i,\\eta_i)\\,\\Delta\\sigma_i\n=\\iint_D f(x,y)\\,dA,\n\\]\n\n其中 \\(\\lambda\\) 是各小区域直径的最大值。\n\n##### 交换积分次序与重新描述积分区域\n\n先把原积分画成区域，再按新的扫描方向写边界；不要直接机械交换上下限。直角坐标与极坐标互换时同样先确定区域。\n\n##### 二重积分比较、估值、中值定理与平均值\n\n在同一区域上比较 \\(f\\) 与 \\(g\\)：若 \\(f\\ge g\\)，则\n\n<!-- formula {\"id\":\"calculus-1wrhkvw\",\"title\":\"二重积分比较、估值、中值定理与平均值：iint_D f dA\",\"aliases\":[],\"context\":\"在同一区域上比较 f 与 g：若 f\\\\ge g，则\"} -->\n\\[\n\\iint_D f\\,dA\\ge\\iint_D g\\,dA.\n\\]\n\n若区域或被积函数有对称性，先化简再判断。\n\n二重积分同样满足线性、区域可加性和保序性。若 \\(f\\) 在有界闭区域 \\(D\\) 上连续，则存在 \\((\\xi,\\eta)\\in D\\)，使\n\n<!-- formula {\"id\":\"calculus-xl6u7u\",\"title\":\"二重积分比较、估值、中值定理与平均值：iint_D f(x,y) dA\",\"aliases\":[],\"context\":\"二重积分同样满足线性、区域可加性和保序性。若 f 在有界闭区域 D 上连续，则存在 \\\\((\\\\xi,\\\\eta)\\\\in D\\\\)，使\"} -->\n\\[\n\\iint_D f(x,y)\\,dA=f(\\xi,\\eta)\\,S_D.\n\\]\n\n若 \\(m\\le f(x,y)\\le M\\)，则\n\n<!-- formula {\"id\":\"calculus-fwyom1\",\"title\":\"二重积分比较、估值、中值定理与平均值：mS_D\",\"aliases\":[],\"context\":\"若 \\\\(m\\\\le f(x,y)\\\\le M\\\\)，则\"} -->\n\\[\nmS_D\\le\\iint_D f(x,y)\\,dA\\le MS_D,\n\\]\n\n并且\n\n<!-- formula {\"id\":\"calculus-1cokc9v\",\"title\":\"二重积分绝对值不等式\",\"aliases\":[],\"context\":\"所属知识点：二重积分比较、估值、中值定理与平均值。\"} -->\n\\[\n\\left|\\iint_D f\\,dA\\right|\\le\\iint_D|f|\\,dA.\n\\]\n\n函数在区域上的平均值为\n\n<!-- formula {\"id\":\"calculus-1hwryk0\",\"title\":\"二重积分比较、估值、中值定理与平均值：bar f\",\"aliases\":[],\"context\":\"函数在区域上的平均值为\"} -->\n\\[\n\\bar f=\\frac1{S_D}\\iint_D f(x,y)\\,dA.\n\\]\n\n##### 面积与体积\n\n<!-- formula {\"items\":[{\"id\":\"calculus-dd4poq-1\",\"title\":\"面积与体积：S\",\"aliases\":[],\"context\":\"所属知识点：面积与体积。\",\"latex\":\"S=\\\\iint_D1\\\\,dA\"},{\"id\":\"calculus-dd4poq-2\",\"title\":\"面积与体积：V\",\"aliases\":[],\"context\":\"所属知识点：面积与体积。\",\"latex\":\"V=\\\\iint_D f(x,y)\\\\,dA\\\\quad (f\\\\ge0)\"}]} -->\n\\[\nS=\\iint_D1\\,dA,\n\\qquad V=\\iint_D f(x,y)\\,dA\\quad(f\\ge0).\n\\]",
        "searchText": "其他 其他 其他 二重积分概念、线性、区域可加性与定义型和式极限 D(af+bg)\\,dA =a Df\\,dA+b Dg\\,dA. 若 D=D 1 D 2 且内部不重叠，则 Df\\,dA= D 1 f\\,dA+ D 2 f\\,dA. 若把 D 分成小区域 D i，取点 ( i, i) D i，则 0 i=1 ^n f( i, i)\\, i = D f(x,y)\\,dA, 其中 是各小区域直径的最大值。 交换积分次序与重新描述积分区域 先把原积分画成区域，再按新的扫描方向写边界；不要直接机械交换上下限。直角坐标与极坐标互换时同样先确定区域。 二重积分比较、估值、中值定理与平均值 在同一区域上比较 f 与 g：若 f≥ g，则 D f\\,dA≥ D g\\,dA. 若区域或被积函数有对称性，先化简再判断。 二重积分同样满足线性、区域可加性和保序性。若 f 在有界闭区域 D 上连续，则存在 ( , ) D，使 D f(x,y)\\,dA=f( , )\\,S D. 若 m≤ f(x,y)≤ M，则 mS D≤ D f(x,y)\\,dA≤ MS D, 并且 ≤ft D f\\,dA ≤ D f \\,dA. 函数在区域上的平均值为 f= 1 S D D f(x,y)\\,dA. 面积与体积 S= D1\\,dA, V= D f(x,y)\\,dA (f≥0).",
        "summary": "二重积分概念、线性、区域可加性与定义型和式极限 D(af+bg)\\,dA =a Df\\,dA+b Dg\\,dA. 若 D=D 1 D 2 且内部不重叠，则 Df\\,dA= D 1 f\\,dA+ D 2 f\\,dA. 若把 D 分成小区域 D i，取点 ( …",
        "anchors": [
          {
            "id": "anchor-1gpyc81",
            "legacyId": "calculus-06-002-anchor-001",
            "title": "二重积分概念、线性、区域可加性与定义型和式极限",
            "searchText": "二重积分概念、线性、区域可加性与定义型和式极限 D(af+bg)\\,dA =a Df\\,dA+b Dg\\,dA. 若 D=D 1 D 2 且内部不重叠，则 Df\\,dA= D 1 f\\,dA+ D 2 f\\,dA. 若把 D 分成小区域 D i，取点 ( i, i) D i，则 0 i=1 ^n f( i, i)\\, i = D f(x,y)\\,dA, 其中 是各小区域直径的最大值。",
            "summary": "D(af+bg)\\,dA =a Df\\,dA+b Dg\\,dA. 若 D=D 1 D 2 且内部不重叠，则 Df\\,dA= D 1 f\\,dA+ D 2 f\\,dA. 若把 D 分成小区域 D i，取点 ( i, i) D i，则 0 i=1 ^n f( …"
          },
          {
            "id": "anchor-128uc8u",
            "legacyId": "calculus-06-002-anchor-002",
            "title": "交换积分次序与重新描述积分区域",
            "searchText": "交换积分次序与重新描述积分区域 先把原积分画成区域，再按新的扫描方向写边界；不要直接机械交换上下限。直角坐标与极坐标互换时同样先确定区域。",
            "summary": "先把原积分画成区域，再按新的扫描方向写边界；不要直接机械交换上下限。直角坐标与极坐标互换时同样先确定区域。"
          },
          {
            "id": "anchor-1saj91z",
            "legacyId": "calculus-06-002-anchor-003",
            "title": "二重积分比较、估值、中值定理与平均值",
            "searchText": "二重积分比较、估值、中值定理与平均值 在同一区域上比较 f 与 g：若 f≥ g，则 D f\\,dA≥ D g\\,dA. 若区域或被积函数有对称性，先化简再判断。 二重积分同样满足线性、区域可加性和保序性。若 f 在有界闭区域 D 上连续，则存在 ( , ) D，使 D f(x,y)\\,dA=f( , )\\,S D. 若 m≤ f(x,y)≤ M，则 mS D≤ D f(x,y)\\,dA≤ MS D, 并且 ≤ft D f\\,dA ≤ D f \\,dA. 函数在区域上的平均值为 f= 1 S D D f(x,y)\\,dA.",
            "summary": "在同一区域上比较 f 与 g：若 f≥ g，则 D f\\,dA≥ D g\\,dA. 若区域或被积函数有对称性，先化简再判断。 二重积分同样满足线性、区域可加性和保序性。若 f 在有界闭区域 D 上连续，则存在 ( , ) D，使 D f(x,y)\\,dA=…"
          },
          {
            "id": "anchor-lfgr2w",
            "legacyId": "calculus-06-002-anchor-004",
            "title": "面积与体积",
            "searchText": "面积与体积 S= D1\\,dA, V= D f(x,y)\\,dA (f≥0).",
            "summary": "S= D1\\,dA, V= D f(x,y)\\,dA (f≥0)."
          }
        ],
        "formulas": [
          {
            "id": "calculus-1pbz82d",
            "parentAnchorId": "anchor-1gpyc81",
            "legacyParentAnchorId": "calculus-06-002-anchor-001",
            "title": "二重积分概念、线性、区域可加性与定义型和式极限：iint_D(af+bg) dA",
            "latex": "\\iint_D(af+bg)\\,dA\n=a\\iint_Df\\,dA+b\\iint_Dg\\,dA.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：二重积分概念、线性、区域可加性与定义型和式极限。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 0
          },
          {
            "id": "calculus-pb2wau",
            "parentAnchorId": "anchor-1gpyc81",
            "legacyParentAnchorId": "calculus-06-002-anchor-001",
            "title": "二重积分概念、线性、区域可加性与定义型和式极限：iint_Df dA",
            "latex": "\\iint_Df\\,dA=\\iint_{D_1}f\\,dA+\\iint_{D_2}f\\,dA.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "若 D=D_1\\cup D_2 且内部不重叠，则",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 1
          },
          {
            "id": "calculus-1hnz1db",
            "parentAnchorId": "anchor-1gpyc81",
            "legacyParentAnchorId": "calculus-06-002-anchor-001",
            "title": "二重积分概念、线性、区域可加性与定义型和式极限：lim_λto0Σ_i",
            "latex": "\\lim_{\\lambda\\to0}\\sum_{i=1}^n\nf(\\xi_i,\\eta_i)\\,\\Delta\\sigma_i\n=\\iint_D f(x,y)\\,dA,",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "若把 D 分成小区域 \\Delta D_i，取点 \\((\\xi_i,\\eta_i)\\in\\Delta D_i\\)，则",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 2
          },
          {
            "id": "calculus-1wrhkvw",
            "parentAnchorId": "anchor-1saj91z",
            "legacyParentAnchorId": "calculus-06-002-anchor-003",
            "title": "二重积分比较、估值、中值定理与平均值：iint_D f dA",
            "latex": "\\iint_D f\\,dA\\ge\\iint_D g\\,dA.",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "在同一区域上比较 f 与 g：若 f\\ge g，则",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 3
          },
          {
            "id": "calculus-xl6u7u",
            "parentAnchorId": "anchor-1saj91z",
            "legacyParentAnchorId": "calculus-06-002-anchor-003",
            "title": "二重积分比较、估值、中值定理与平均值：iint_D f(x,y) dA",
            "latex": "\\iint_D f(x,y)\\,dA=f(\\xi,\\eta)\\,S_D.",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "二重积分同样满足线性、区域可加性和保序性。若 f 在有界闭区域 D 上连续，则存在 \\((\\xi,\\eta)\\in D\\)，使",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 4
          },
          {
            "id": "calculus-fwyom1",
            "parentAnchorId": "anchor-1saj91z",
            "legacyParentAnchorId": "calculus-06-002-anchor-003",
            "title": "二重积分比较、估值、中值定理与平均值：mS_D",
            "latex": "mS_D\\le\\iint_D f(x,y)\\,dA\\le MS_D,",
            "sourceBlockIndex": 17,
            "searchAliases": [],
            "context": "若 \\(m\\le f(x,y)\\le M\\)，则",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 5
          },
          {
            "id": "calculus-1cokc9v",
            "parentAnchorId": "anchor-1saj91z",
            "legacyParentAnchorId": "calculus-06-002-anchor-003",
            "title": "二重积分绝对值不等式",
            "latex": "\\left|\\iint_D f\\,dA\\right|\\le\\iint_D|f|\\,dA.",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "所属知识点：二重积分比较、估值、中值定理与平均值。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 6
          },
          {
            "id": "calculus-1hwryk0",
            "parentAnchorId": "anchor-1saj91z",
            "legacyParentAnchorId": "calculus-06-002-anchor-003",
            "title": "二重积分比较、估值、中值定理与平均值：bar f",
            "latex": "\\bar f=\\frac1{S_D}\\iint_D f(x,y)\\,dA.",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "函数在区域上的平均值为",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 7
          },
          {
            "id": "calculus-dd4poq-1",
            "parentAnchorId": "anchor-lfgr2w",
            "legacyParentAnchorId": "calculus-06-002-anchor-004",
            "title": "面积与体积：S",
            "latex": "S=\\iint_D1\\,dA",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：面积与体积。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 8
          },
          {
            "id": "calculus-dd4poq-2",
            "parentAnchorId": "anchor-lfgr2w",
            "legacyParentAnchorId": "calculus-06-002-anchor-004",
            "title": "面积与体积：V",
            "latex": "V=\\iint_D f(x,y)\\,dA\\quad (f\\ge0)",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：面积与体积。",
            "chapterId": "calculus-06",
            "topicId": "calculus-06-002",
            "order": 9
          }
        ]
      }
    ]
  },
  {
    "id": "linear-algebra-01",
    "partId": "linear-algebra",
    "partTitle": "线性代数",
    "title": "第一章　行列式",
    "topics": [
      {
        "id": "linear-algebra-01-001",
        "title": "具体行列式计算",
        "body": "##### 线代结论与考研口诀速查\n\n##### 解集小，秩反而大\n\n对未知数个数相同的两个齐次方程组，若 \\(Ax=0\\) 的每个解都是 \\(Bx=0\\) 的解，则\n\n<!-- formula {\"id\":\"linear-1glbyvf\",\"title\":\"解集小，秩反而大：r(A)\",\"aliases\":[],\"context\":\"对未知数个数相同的两个齐次方程组，若 Ax=0 的每个解都是 Bx=0 的解，则\"} -->\n\\[\nr(A)\\ge r(B).\n\\]\n\n限制越多，秩越大，解越少。反过来，\\(r(A)\\ge r(B)\\) 不能单独推出解的包含关系。\n\n##### 无关被表，个数不多\n\n若线性无关的向量组\n\\(\\beta_1,\\ldots,\\beta_s\\) 可由 \\(\\alpha_1,\\ldots,\\alpha_r\\) 线性表示，则\n\n<!-- formula {\"id\":\"linear-1bmy9k0\",\"title\":\"无关被表，个数不多：s\",\"aliases\":[],\"context\":\"若线性无关的向量组\"} -->\n\\[\ns\\le r.\n\\]\n\n即“被表示的一组若无关，它的向量个数不超过表示它的那一组”。\n\n##### 以少表多，多必相关\n\n若 \\(s\\) 个向量都能由 \\(r\\) 个向量线性表示，且 \\(s>r\\)，则这 \\(s\\) 个向量线性相关。这是“无关被表，个数不多”的逆否说法。\n\n##### 被表秩小，表者秩大\n\n若向量组 \\(B\\) 可由向量组 \\(A\\) 线性表示，即 \\(B=AC\\)，则\n\n<!-- formula {\"id\":\"linear-sk4b4h\",\"title\":\"被表秩小，表者秩大：r(B)\",\"aliases\":[],\"context\":\"若向量组 B 可由向量组 A 线性表示，即 B=AC，则\"} -->\n\\[\nr(B)\\le r(A).\n\\]\n\n口诀中的“大小”指秩，不是向量的长短。\n\n##### 两组互表，秩必相等\n\n两个向量组能互相线性表示，称为等价向量组，必有\n\n<!-- formula {\"id\":\"linear-swwd52\",\"title\":\"两组互表，秩必相等：r(A)\",\"aliases\":[],\"context\":\"两个向量组能互相线性表示，称为等价向量组，必有\"} -->\n\\[\nr(A)=r(B).\n\\]\n\n只有秩相等不能直接推出两组等价。\n\n##### 整体无关，部分无关；部分相关，整体相关\n\n线性无关向量组的任意部分组仍线性无关；一个向量组只要含有相关的部分组，整个向量组就相关。\n\n##### 多于维数，必定相关\n\n\\(s\\) 个 \\(n\\) 维向量中，若 \\(s>n\\)，则向量组必线性相关；若 \\(s\\le n\\)，不能只凭个数判断。\n\n##### 无关添一变相关，新增向量唯一可表\n\n若 \\(\\alpha_1,\\ldots,\\alpha_r\\) 线性无关，而 \\(\\alpha_1,\\ldots,\\alpha_r,\\beta\\) 线性相关，则 \\(\\beta\\) 可由原向量组唯一线性表示。\n\n##### 相关必有一个可由其余表示\n\n向量组线性相关，当且仅当其中至少一个向量可由其余向量线性表示；含零向量的向量组一定相关。\n\n##### 极大无关组：自己无关，其余都能表示\n\n从原向量组中取出的部分组，若它本身线性无关，且原组中其余向量都能由它表示，它就是极大无关组；所含向量个数等于原向量组的秩。\n\n##### 齐次方程组：满秩只有零解，秩亏必有非零解\n\n设 \\(A\\) 有 \\(n\\) 列，则\n\n<!-- formula {\"id\":\"linear-i74sfx\",\"title\":\"齐次方程组：满秩只有零解，秩亏必有非零解：r(A)\",\"aliases\":[],\"context\":\"设 A 有 n 列，则\"} -->\n\\[\nr(A)=n\\Longleftrightarrow Ax=0\\text{ 只有零解},\n\\]\n\n<!-- formula {\"id\":\"linear-4jzdze\",\"title\":\"齐次方程组：满秩只有零解，秩亏必有非零解：r(A)\",\"aliases\":[],\"context\":\"所属知识点：齐次方程组：满秩只有零解，秩亏必有非零解。\"} -->\n\\[\nr(A)<n\\Longleftrightarrow Ax=0\\text{ 有非零解}.\n\\]\n\n基础解系含 \\(n-r(A)\\) 个线性无关解。\n\n##### 非齐次方程组：先比两秩，再和未知数个数比\n\n设 \\(A\\) 有 \\(n\\) 列，则\n\n<!-- formula {\"id\":\"linear-uyqmcp\",\"title\":\"非齐次线性方程组的解的三种情况\",\"aliases\":[],\"context\":\"设 A 有 n 列，则\"} -->\n\\[\n\\begin{array}{c|c}\nr(A)\\ne r(A,b)&\\text{无解}\\\\\nr(A)=r(A,b)=n&\\text{唯一解}\\\\\nr(A)=r(A,b)<n&\\text{无穷多解}\n\\end{array}\n\\]\n\n##### 非齐减非齐得齐次，非齐通解等于特解加齐次通解\n\n若 \\(Ax_1=b,\\ Ax_2=b\\)，则\n\n<!-- formula {\"id\":\"linear-136hg8t\",\"title\":\"非齐减非齐得齐次，非齐通解等于特解加齐次通解：A(x_1-x_2)\",\"aliases\":[],\"context\":\"若 Ax_1=b,\\\\ Ax_2=b，则\"} -->\n\\[\nA(x_1-x_2)=0.\n\\]\n\n若 \\(\\eta^*\\) 是 \\(Ax=b\\) 的一个特解，则全部解为\n\n<!-- formula {\"id\":\"linear-1mxzg24-1\",\"title\":\"非齐减非齐得齐次，非齐通解等于特解加齐次通解：x\",\"aliases\":[],\"context\":\"若 \\\\eta^ 是 Ax=b 的一个特解，则全部解为\"} -->\n\\[\nx=\\eta^*+\\xi,\\qquad A\\xi=0.\n\\]\n\n##### 矩阵越乘，秩不会增加\n\n若 \\(AB\\) 有意义，则\n\n<!-- formula {\"id\":\"linear-1i76qzt\",\"title\":\"矩阵越乘，秩不会增加：r(AB)\",\"aliases\":[],\"context\":\"若 AB 有意义，则\"} -->\n\\[\nr(AB)\\le \\min\\{r(A),r(B)\\}.\n\\]\n\n若 \\(AB=O\\)，且 \\(A\\) 有 \\(n\\) 列，则\n\n<!-- formula {\"id\":\"linear-wcjw9k\",\"title\":\"矩阵越乘，秩不会增加：r(A)+r(B)\",\"aliases\":[],\"context\":\"若 AB=O，且 A 有 n 列，则\"} -->\n\\[\nr(A)+r(B)\\le n.\n\\]\n\n##### 矩阵横拼竖拼，秩不会变小\n\n<!-- formula {\"id\":\"linear-hnpor7\",\"title\":\"矩阵横拼竖拼，秩不会变小：maxr(A),r(B)\",\"aliases\":[],\"context\":\"所属知识点：矩阵横拼竖拼，秩不会变小。\"} -->\n\\[\n\\max\\{r(A),r(B)\\}\\le r(A,B)\\le r(A)+r(B),\n\\]\n\n上下拼接时同理。\n\n##### 可逆矩阵夹乘，不改变秩\n\n若 \\(P,Q\\) 可逆，则\n\n<!-- formula {\"id\":\"linear-agslz1\",\"title\":\"可逆矩阵夹乘，不改变秩：r(PA)\",\"aliases\":[],\"context\":\"若 P,Q 可逆，则\"} -->\n\\[\nr(PA)=r(AQ)=r(PAQ)=r(A).\n\\]\n\n初等变换不改变矩阵的秩。\n\n##### 方阵单边得单位阵，另一边也成立\n\n同阶方阵满足 \\(AB=E\\) 或 \\(BA=E\\) 时，\\(A,B\\) 都可逆，并且\n\n<!-- formula {\"id\":\"linear-1xoset7-1\",\"title\":\"方阵单边得单位阵，另一边也成立：B\",\"aliases\":[],\"context\":\"同阶方阵满足 AB=E 或 BA=E 时，A,B 都可逆，并且\"} -->\n\\[\nB=A^{-1},\\qquad AB=BA=E.\n\\]\n\n##### 伴随矩阵的秩，只看原矩阵差几秩\n\n对 \\(n\\ge2\\) 阶方阵 \\(A\\)：\n\n<!-- formula {\"id\":\"linear-1quh0ps\",\"title\":\"伴随矩阵的秩，只看原矩阵差几秩：r(A^*)\",\"aliases\":[],\"context\":\"对 n\\\\ge2 阶方阵 A：\"} -->\n\\[\nr(A^*)=\n\\begin{cases}\nn,&r(A)=n,\\\\\n1,&r(A)=n-1,\\\\\n0,&r(A)\\le n-2.\n\\end{cases}\n\\]\n\n##### 特征值之和看迹，特征值之积看行列式\n\n计入重数后，\\(n\\) 阶方阵的特征值满足\n\n<!-- formula {\"items\":[{\"id\":\"linear-n93hf3-1\",\"title\":\"特征值之和看迹，特征值之积看行列式：Σ_i\",\"aliases\":[],\"context\":\"计入重数后，n 阶方阵的特征值满足\",\"latex\":\"\\\\sum_{i=1}^{n}\\\\lambda_i=\\\\operatorname{tr}(A)\"},{\"id\":\"linear-n93hf3-2\",\"title\":\"特征值之和看迹，特征值之积看行列式：prod_i\",\"aliases\":[],\"context\":\"计入重数后，n 阶方阵的特征值满足\",\"latex\":\"\\\\prod_{i=1}^{n}\\\\lambda_i=|A|\"}]} -->\n\\[\n\\sum_{i=1}^{n}\\lambda_i=\\operatorname{tr}(A),\\qquad\n\\prod_{i=1}^{n}\\lambda_i=|A|.\n\\]\n\n##### 不同特征值，对应特征向量必无关\n\n属于互不相同特征值的特征向量线性无关。同一特征值对应的特征向量不一定无关，要另行判断。\n\n##### 秩一矩阵：平方等于迹乘自身\n\n若 \\(r(A)=1\\)，则\n\n<!-- formula {\"items\":[{\"id\":\"linear-x6j5u1-1\",\"title\":\"秩一矩阵：平方等于迹乘自身：A^2\",\"aliases\":[],\"context\":\"若 \\\\(r(A)=1\\\\)，则\",\"latex\":\"A^2=\\\\operatorname{tr}(A)A\"},{\"id\":\"linear-x6j5u1-2\",\"title\":\"秩一矩阵：平方等于迹乘自身：|λ E-A|\",\"aliases\":[],\"context\":\"若 \\\\(r(A)=1\\\\)，则\",\"latex\":\"|\\\\lambda E-A|=\\\\lambda^{n-1}\\\\bigl(\\\\lambda-\\\\operatorname{tr}(A)\\\\bigr)\"}]} -->\n\\[\nA^2=\\operatorname{tr}(A)A,\\qquad\n|\\lambda E-A|=\\lambda^{n-1}\\bigl(\\lambda-\\operatorname{tr}(A)\\bigr).\n\\]\n\n所以特征值为 \\(0\\) 与 \\(\\operatorname{tr}(A)\\)；当迹为零时，全部特征值都为零。\n\n##### 实对称矩阵三件套\n\n实对称矩阵的特征值全为实数；不同特征值对应的特征向量正交；一定可以用正交矩阵对角化：\n\n<!-- formula {\"id\":\"linear-93re0p-1\",\"title\":\"实对称矩阵三件套：Q^TAQ\",\"aliases\":[],\"context\":\"实对称矩阵的特征值全为实数；不同特征值对应的特征向量正交；一定可以用正交矩阵对角化：\"} -->\n\\[\nQ^TAQ=\\Lambda,\\qquad Q^TQ=E.\n\\]\n\n##### 相似保特征，合同保惯性\n\n相似矩阵具有相同的特征多项式、特征值、行列式、迹和秩；这些相同一般不能反推相似。\n\n实对称矩阵合同后，正、负、零平方项的个数不变，即正、负惯性指数和秩不变。\n\n##### 正定三连判\n\n实对称矩阵 \\(A\\) 正定，等价于以下任一条件：\n\n<!-- formula {\"id\":\"linear-1ewwq8h-1\",\"title\":\"正定三连判：x^TAx\",\"aliases\":[],\"context\":\"实对称矩阵 A 正定，等价于以下任一条件：\"} -->\n\\[\nx^TAx>0\\quad(x\\ne0),\n\\]\n\n- 全部特征值大于零；\n- 各阶顺序主子式全部大于零；\n- 正惯性指数为 \\(n\\)。\n\n##### 逆序数与行列式展开定义\n\n排列 \\(j_1j_2\\cdots j_n\\) 中，前面数字大于后面数字的一对叫逆序，逆序总数记为 \\(\\tau(j_1j_2\\cdots j_n)\\)。\n\n<!-- formula {\"id\":\"linear-866w82\",\"title\":\"逆序数与行列式展开定义：|A|\",\"aliases\":[],\"context\":\"排列 j_1j_2\\\\cdots j_n 中，前面数字大于后面数字的一对叫逆序，逆序总数记为 \\\\(\\\\tau(j_1j_2\\\\cdots j_n)\\\\)。\"} -->\n\\[\n|A|=\\sum_{j_1j_2\\cdots j_n}\n(-1)^{\\tau(j_1j_2\\cdots j_n)}\na_{1j_1}a_{2j_2}\\cdots a_{nj_n}.\n\\]\n\n##### 行列式基本性质、转置与三角行列式\n\n<!-- formula {\"id\":\"linear-1dmj5hr\",\"title\":\"行列式基本性质、转置与三角行列式：|A^T|\",\"aliases\":[],\"context\":\"所属知识点：行列式基本性质、转置与三角行列式。\"} -->\n\\[\n|A^T|=|A|.\n\\]\n\n- 交换两行或两列，行列式变号。\n- 某行或某列乘 \\(k\\)，行列式乘 \\(k\\)。\n- 某行或某列的 \\(k\\) 倍加到另一行或另一列，行列式不变。\n- 两行或两列相同、成比例，或某行、某列全为零，行列式为零。\n- 三角形行列式等于主对角元之积。\n\n上三角、下三角和对角行列式均为主对角元之积；反对角三角形行列式为\n\n<!-- formula {\"id\":\"linear-z466lh\",\"title\":\"副对角线行列式公式\",\"aliases\":[],\"context\":\"上三角、下三角和对角行列式均为主对角元之积；反对角三角形行列式为\"} -->\n\\[\n(-1)^{\\frac{n(n-1)}2}a_{1n}a_{2,n-1}\\cdots a_{n1}.\n\\]\n\n##### 范德蒙德、三对角、爪形与箭头形行列式\n\n- “行和或列和相等”：把各列加到一列，提取公共因子，再降阶。\n- “爪形、箭头形”：沿非零元素最少的行或列展开，或先消成三角形。\n- “么字形、\\(X\\) 型”：按稀疏行列展开，注意每次展开的正负号。\n- 三对角线行列式：按第一行展开建立递推式，再由初值求通项。\n- 范德蒙德行列式：\n\n<!-- formula {\"id\":\"linear-1s2vyjs\",\"title\":\"范德蒙德行列式\",\"aliases\":[],\"context\":\"范德蒙德行列式：\"} -->\n\\[\n\\begin{vmatrix}\n1&1&\\cdots&1\\\\\nx_1&x_2&\\cdots&x_n\\\\\n\\vdots&\\vdots&&\\vdots\\\\\nx_1^{n-1}&x_2^{n-1}&\\cdots&x_n^{n-1}\n\\end{vmatrix}\n=\\prod_{1\\le i<j\\le n}(x_j-x_i).\n\\]",
        "searchText": "具体行列式计算 具体行列式计算 具体行列式计算 线代结论与考研口诀速查 解集小，秩反而大 对未知数个数相同的两个齐次方程组，若 Ax=0 的每个解都是 Bx=0 的解，则 r(A)≥ r(B). 限制越多，秩越大，解越少。反过来，r(A)≥ r(B) 不能单独推出解的包含关系。 无关被表，个数不多 若线性无关的向量组 1, , s 可由 1, , r 线性表示，则 s≤ r. 即“被表示的一组若无关，它的向量个数不超过表示它的那一组”。 以少表多，多必相关 若 s 个向量都能由 r 个向量线性表示，且 s r，则这 s 个向量线性相关。这是“无关被表，个数不多”的逆否说法。 被表秩小，表者秩大 若向量组 B 可由向量组 A 线性表示，即 B=AC，则 r(B)≤ r(A). 口诀中的“大小”指秩，不是向量的长短。 两组互表，秩必相等 两个向量组能互相线性表示，称为等价向量组，必有 r(A)=r(B). 只有秩相等不能直接推出两组等价。 整体无关，部分无关；部分相关，整体相关 线性无关向量组的任意部分组仍线性无关；一个向量组只要含有相关的部分组，整个向量组就相关。 多于维数，必定相关 s 个 n 维向量中，若 s n，则向量组必线性相关；若 s≤ n，不能只凭个数判断。 无关添一变相关，新增向量唯一可表 若 1, , r 线性无关，而 1, , r, 线性相关，则 可由原向量组唯一线性表示。 相关必有一个可由其余表示 向量组线性相关，当且仅当其中至少一个向量可由其余向量线性表示；含零向量的向量组一定相关。 极大无关组：自己无关，其余都能表示 从原向量组中取出的部分组，若它本身线性无关，且原组中其余向量都能由它表示，它就是极大无关组；所含向量个数等于原向量组的秩。 齐次方程组：满秩只有零解，秩亏必有非零解 设 A 有 n 列，则 r(A)=n Ax=0 只有零解, r(A)<n Ax=0 有非零解. 基础解系含 n-r(A) 个线性无关解。 非齐次方程组：先比两秩，再和未知数个数比 设 A 有 n 列，则 array c c r(A)≠ r(A,b)&无解\\\\ r(A)=r(A,b)=n&唯一解\\\\ r(A)=r(A,b)<n&无穷多解 array 非齐减非齐得齐次，非齐通解等于特解加齐次通解 若 Ax 1=b,\\ Ax 2=b，则 A(x 1-x 2)=0. 若 ^ 是 Ax=b 的一个特解，则全部解为 x= ^ + , A =0. 矩阵越乘，秩不会增加 若 AB 有意义，则 r(AB)≤ \\ r(A),r(B)\\ . 若 AB=O，且 A 有 n 列，则 r(A)+r(B)≤ n. 矩阵横拼竖拼，秩不会变小 \\ r(A),r(B)\\ ≤ r(A,B)≤ r(A)+r(B), 上下拼接时同理。 可逆矩阵夹乘，不改变秩 若 P,Q 可逆，则 r(PA)=r(AQ)=r(PAQ)=r(A). 初等变换不改变矩阵的秩。 方阵单边得单位阵，另一边也成立 同阶方阵满足 AB=E 或 BA=E 时，A,B 都可逆，并且 B=A^ -1 , AB=BA=E. 伴随矩阵的秩，只看原矩阵差几秩 对 n≥2 阶方阵 A： r(A^ )= cases n,&r(A)=n,\\\\ 1,&r(A)=n-1,\\\\ 0,&r(A)≤ n-2. cases 特征值之和看迹，特征值之积看行列式 计入重数后，n 阶方阵的特征值满足 i=1 ^ n i= tr (A), i=1 ^ n i= A . 不同特征值，对应特征向量必无关 属于互不相同特征值的特征向量线性无关。同一特征值对应的特征向量不一定无关，要另行判断。 秩一矩阵：平方等于迹乘自身 若 r(A)=1，则 A^2= tr (A)A, E-A = ^ n-1 ( - tr (A) ). 所以特征值为 0 与 tr (A)；当迹为零时，全部特征值都为零。 实对称矩阵三件套 实对称矩阵的特征值全为实数；不同特征值对应的特征向量正交；一定可以用正交矩阵对角化： Q^TAQ= , Q^TQ=E. 相似保特征，合同保惯性 相似矩阵具有相同的特征多项式、特征值、行列式、迹和秩；这些相同一般不能反推相似。 实对称矩阵合同后，正、负、零平方项的个数不变，即正、负惯性指数和秩不变。 正定三连判 实对称矩阵 A 正定，等价于以下任一条件： x^TAx 0 (x≠0), 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n。 逆序数与行列式展开定义 排列 j 1j 2 j n 中，前面数字大于后面数字的一对叫逆序，逆序总数记为 (j 1j 2 j n)。 A = j 1j 2 j n (-1)^ (j 1j 2 j n) a 1j 1 a 2j 2 a nj n . 行列式基本性质、转置与三角行列式 A^T = A . 交换两行或两列，行列式变号。 某行或某列乘 k，行列式乘 k。 某行或某列的 k 倍加到另一行或另一列，行列式不变。 两行或两列相同、成比例，或某行、某列全为零，行列式为零。 三角形行列式等于主对角元之积。 上三角、下三角和对角行列式均为主对角元之积；反对角三角形行列式为 (-1)^ n(n-1) 2 a 1n a 2,n-1 a n1 . 范德蒙德、三对角、爪形与箭头形行列式 “行和或列和相等”：把各列加到一列，提取公共因子，再降阶。 “爪形、箭头形”：沿非零元素最少的行或列展开，或先消成三角形。 “么字形、X 型”：按稀疏行列展开，注意每次展开的正负号。 三对角线行列式：按第一行展开建立递推式，再由初值求通项。 范德蒙德行列式： vmatrix 1&1& &1\\\\ x 1&x 2& &x n\\\\ & && \\\\ x 1^ n-1 &x 2^ n-1 & &x n^ n-1 vmatrix = 1≤ i<j≤ n (x j-x i).",
        "summary": "线代结论与考研口诀速查 解集小，秩反而大 对未知数个数相同的两个齐次方程组，若 Ax=0 的每个解都是 Bx=0 的解，则 r(A)≥ r(B). 限制越多，秩越大，解越少。反过来，r(A)≥ r(B) 不能单独推出解的包含关系。 无关被表，个数不多 若线…",
        "anchors": [
          {
            "id": "anchor-1a5bvic",
            "legacyId": "linear-algebra-01-001-anchor-001",
            "title": "线代结论与考研口诀速查",
            "searchText": "线代结论与考研口诀速查",
            "summary": ""
          },
          {
            "id": "anchor-111xxjc",
            "legacyId": "linear-algebra-01-001-anchor-002",
            "title": "解集小，秩反而大",
            "searchText": "解集小，秩反而大 对未知数个数相同的两个齐次方程组，若 Ax=0 的每个解都是 Bx=0 的解，则 r(A)≥ r(B). 限制越多，秩越大，解越少。反过来，r(A)≥ r(B) 不能单独推出解的包含关系。",
            "summary": "对未知数个数相同的两个齐次方程组，若 Ax=0 的每个解都是 Bx=0 的解，则 r(A)≥ r(B). 限制越多，秩越大，解越少。反过来，r(A)≥ r(B) 不能单独推出解的包含关系。"
          },
          {
            "id": "anchor-1yn9mi4",
            "legacyId": "linear-algebra-01-001-anchor-003",
            "title": "无关被表，个数不多",
            "searchText": "无关被表，个数不多 若线性无关的向量组 1, , s 可由 1, , r 线性表示，则 s≤ r. 即“被表示的一组若无关，它的向量个数不超过表示它的那一组”。",
            "summary": "若线性无关的向量组 1, , s 可由 1, , r 线性表示，则 s≤ r. 即“被表示的一组若无关，它的向量个数不超过表示它的那一组”。"
          },
          {
            "id": "anchor-ml8ruf",
            "legacyId": "linear-algebra-01-001-anchor-004",
            "title": "以少表多，多必相关",
            "searchText": "以少表多，多必相关 若 s 个向量都能由 r 个向量线性表示，且 s r，则这 s 个向量线性相关。这是“无关被表，个数不多”的逆否说法。",
            "summary": "若 s 个向量都能由 r 个向量线性表示，且 s r，则这 s 个向量线性相关。这是“无关被表，个数不多”的逆否说法。"
          },
          {
            "id": "anchor-zf8f1p",
            "legacyId": "linear-algebra-01-001-anchor-005",
            "title": "被表秩小，表者秩大",
            "searchText": "被表秩小，表者秩大 若向量组 B 可由向量组 A 线性表示，即 B=AC，则 r(B)≤ r(A). 口诀中的“大小”指秩，不是向量的长短。",
            "summary": "若向量组 B 可由向量组 A 线性表示，即 B=AC，则 r(B)≤ r(A). 口诀中的“大小”指秩，不是向量的长短。"
          },
          {
            "id": "anchor-1ojz8ps",
            "legacyId": "linear-algebra-01-001-anchor-006",
            "title": "两组互表，秩必相等",
            "searchText": "两组互表，秩必相等 两个向量组能互相线性表示，称为等价向量组，必有 r(A)=r(B). 只有秩相等不能直接推出两组等价。",
            "summary": "两个向量组能互相线性表示，称为等价向量组，必有 r(A)=r(B). 只有秩相等不能直接推出两组等价。"
          },
          {
            "id": "anchor-1uvhxuq",
            "legacyId": "linear-algebra-01-001-anchor-007",
            "title": "整体无关，部分无关；部分相关，整体相关",
            "searchText": "整体无关，部分无关；部分相关，整体相关 线性无关向量组的任意部分组仍线性无关；一个向量组只要含有相关的部分组，整个向量组就相关。",
            "summary": "线性无关向量组的任意部分组仍线性无关；一个向量组只要含有相关的部分组，整个向量组就相关。"
          },
          {
            "id": "anchor-1pg39ph",
            "legacyId": "linear-algebra-01-001-anchor-008",
            "title": "多于维数，必定相关",
            "searchText": "多于维数，必定相关 s 个 n 维向量中，若 s n，则向量组必线性相关；若 s≤ n，不能只凭个数判断。",
            "summary": "s 个 n 维向量中，若 s n，则向量组必线性相关；若 s≤ n，不能只凭个数判断。"
          },
          {
            "id": "anchor-1eqpfuu",
            "legacyId": "linear-algebra-01-001-anchor-009",
            "title": "无关添一变相关，新增向量唯一可表",
            "searchText": "无关添一变相关，新增向量唯一可表 若 1, , r 线性无关，而 1, , r, 线性相关，则 可由原向量组唯一线性表示。",
            "summary": "若 1, , r 线性无关，而 1, , r, 线性相关，则 可由原向量组唯一线性表示。"
          },
          {
            "id": "anchor-1342a6z",
            "legacyId": "linear-algebra-01-001-anchor-010",
            "title": "相关必有一个可由其余表示",
            "searchText": "相关必有一个可由其余表示 向量组线性相关，当且仅当其中至少一个向量可由其余向量线性表示；含零向量的向量组一定相关。",
            "summary": "向量组线性相关，当且仅当其中至少一个向量可由其余向量线性表示；含零向量的向量组一定相关。"
          },
          {
            "id": "anchor-1ulaybf",
            "legacyId": "linear-algebra-01-001-anchor-011",
            "title": "极大无关组：自己无关，其余都能表示",
            "searchText": "极大无关组：自己无关，其余都能表示 从原向量组中取出的部分组，若它本身线性无关，且原组中其余向量都能由它表示，它就是极大无关组；所含向量个数等于原向量组的秩。",
            "summary": "从原向量组中取出的部分组，若它本身线性无关，且原组中其余向量都能由它表示，它就是极大无关组；所含向量个数等于原向量组的秩。"
          },
          {
            "id": "anchor-1r4kep3",
            "legacyId": "linear-algebra-01-001-anchor-012",
            "title": "齐次方程组：满秩只有零解，秩亏必有非零解",
            "searchText": "齐次方程组：满秩只有零解，秩亏必有非零解 设 A 有 n 列，则 r(A)=n Ax=0 只有零解, r(A)<n Ax=0 有非零解. 基础解系含 n-r(A) 个线性无关解。",
            "summary": "设 A 有 n 列，则 r(A)=n Ax=0 只有零解, r(A)<n Ax=0 有非零解. 基础解系含 n-r(A) 个线性无关解。"
          },
          {
            "id": "anchor-1jdggfb",
            "legacyId": "linear-algebra-01-001-anchor-013",
            "title": "非齐次方程组：先比两秩，再和未知数个数比",
            "searchText": "非齐次方程组：先比两秩，再和未知数个数比 设 A 有 n 列，则 array c c r(A)≠ r(A,b)&无解\\\\ r(A)=r(A,b)=n&唯一解\\\\ r(A)=r(A,b)<n&无穷多解 array",
            "summary": "设 A 有 n 列，则 array c c r(A)≠ r(A,b)&无解\\\\ r(A)=r(A,b)=n&唯一解\\\\ r(A)=r(A,b)<n&无穷多解 array"
          },
          {
            "id": "anchor-1jzimhm",
            "legacyId": "linear-algebra-01-001-anchor-014",
            "title": "非齐减非齐得齐次，非齐通解等于特解加齐次通解",
            "searchText": "非齐减非齐得齐次，非齐通解等于特解加齐次通解 若 Ax 1=b,\\ Ax 2=b，则 A(x 1-x 2)=0. 若 ^ 是 Ax=b 的一个特解，则全部解为 x= ^ + , A =0.",
            "summary": "若 Ax 1=b,\\ Ax 2=b，则 A(x 1-x 2)=0. 若 ^ 是 Ax=b 的一个特解，则全部解为 x= ^ + , A =0."
          },
          {
            "id": "anchor-72u727",
            "legacyId": "linear-algebra-01-001-anchor-015",
            "title": "矩阵越乘，秩不会增加",
            "searchText": "矩阵越乘，秩不会增加 若 AB 有意义，则 r(AB)≤ \\ r(A),r(B)\\ . 若 AB=O，且 A 有 n 列，则 r(A)+r(B)≤ n.",
            "summary": "若 AB 有意义，则 r(AB)≤ \\ r(A),r(B)\\ . 若 AB=O，且 A 有 n 列，则 r(A)+r(B)≤ n."
          },
          {
            "id": "anchor-4kgzu",
            "legacyId": "linear-algebra-01-001-anchor-016",
            "title": "矩阵横拼竖拼，秩不会变小",
            "searchText": "矩阵横拼竖拼，秩不会变小 \\ r(A),r(B)\\ ≤ r(A,B)≤ r(A)+r(B), 上下拼接时同理。",
            "summary": "\\ r(A),r(B)\\ ≤ r(A,B)≤ r(A)+r(B), 上下拼接时同理。"
          },
          {
            "id": "anchor-17571s4",
            "legacyId": "linear-algebra-01-001-anchor-017",
            "title": "可逆矩阵夹乘，不改变秩",
            "searchText": "可逆矩阵夹乘，不改变秩 若 P,Q 可逆，则 r(PA)=r(AQ)=r(PAQ)=r(A). 初等变换不改变矩阵的秩。",
            "summary": "若 P,Q 可逆，则 r(PA)=r(AQ)=r(PAQ)=r(A). 初等变换不改变矩阵的秩。"
          },
          {
            "id": "anchor-im67ae",
            "legacyId": "linear-algebra-01-001-anchor-018",
            "title": "方阵单边得单位阵，另一边也成立",
            "searchText": "方阵单边得单位阵，另一边也成立 同阶方阵满足 AB=E 或 BA=E 时，A,B 都可逆，并且 B=A^ -1 , AB=BA=E.",
            "summary": "同阶方阵满足 AB=E 或 BA=E 时，A,B 都可逆，并且 B=A^ -1 , AB=BA=E."
          },
          {
            "id": "anchor-1x76og0",
            "legacyId": "linear-algebra-01-001-anchor-019",
            "title": "伴随矩阵的秩，只看原矩阵差几秩",
            "searchText": "伴随矩阵的秩，只看原矩阵差几秩 对 n≥2 阶方阵 A： r(A^ )= cases n,&r(A)=n,\\\\ 1,&r(A)=n-1,\\\\ 0,&r(A)≤ n-2. cases",
            "summary": "对 n≥2 阶方阵 A： r(A^ )= cases n,&r(A)=n,\\\\ 1,&r(A)=n-1,\\\\ 0,&r(A)≤ n-2. cases"
          },
          {
            "id": "anchor-tkxywz",
            "legacyId": "linear-algebra-01-001-anchor-020",
            "title": "特征值之和看迹，特征值之积看行列式",
            "searchText": "特征值之和看迹，特征值之积看行列式 计入重数后，n 阶方阵的特征值满足 i=1 ^ n i= tr (A), i=1 ^ n i= A .",
            "summary": "计入重数后，n 阶方阵的特征值满足 i=1 ^ n i= tr (A), i=1 ^ n i= A ."
          },
          {
            "id": "anchor-uadu3h",
            "legacyId": "linear-algebra-01-001-anchor-021",
            "title": "不同特征值，对应特征向量必无关",
            "searchText": "不同特征值，对应特征向量必无关 属于互不相同特征值的特征向量线性无关。同一特征值对应的特征向量不一定无关，要另行判断。",
            "summary": "属于互不相同特征值的特征向量线性无关。同一特征值对应的特征向量不一定无关，要另行判断。"
          },
          {
            "id": "anchor-th36ml",
            "legacyId": "linear-algebra-01-001-anchor-022",
            "title": "秩一矩阵：平方等于迹乘自身",
            "searchText": "秩一矩阵：平方等于迹乘自身 若 r(A)=1，则 A^2= tr (A)A, E-A = ^ n-1 ( - tr (A) ). 所以特征值为 0 与 tr (A)；当迹为零时，全部特征值都为零。",
            "summary": "若 r(A)=1，则 A^2= tr (A)A, E-A = ^ n-1 ( - tr (A) ). 所以特征值为 0 与 tr (A)；当迹为零时，全部特征值都为零。"
          },
          {
            "id": "anchor-x4fj9u",
            "legacyId": "linear-algebra-01-001-anchor-023",
            "title": "实对称矩阵三件套",
            "searchText": "实对称矩阵三件套 实对称矩阵的特征值全为实数；不同特征值对应的特征向量正交；一定可以用正交矩阵对角化： Q^TAQ= , Q^TQ=E.",
            "summary": "实对称矩阵的特征值全为实数；不同特征值对应的特征向量正交；一定可以用正交矩阵对角化： Q^TAQ= , Q^TQ=E."
          },
          {
            "id": "anchor-11n4d9n",
            "legacyId": "linear-algebra-01-001-anchor-024",
            "title": "相似保特征，合同保惯性",
            "searchText": "相似保特征，合同保惯性 相似矩阵具有相同的特征多项式、特征值、行列式、迹和秩；这些相同一般不能反推相似。 实对称矩阵合同后，正、负、零平方项的个数不变，即正、负惯性指数和秩不变。",
            "summary": "相似矩阵具有相同的特征多项式、特征值、行列式、迹和秩；这些相同一般不能反推相似。 实对称矩阵合同后，正、负、零平方项的个数不变，即正、负惯性指数和秩不变。"
          },
          {
            "id": "anchor-19ugkjx",
            "legacyId": "linear-algebra-01-001-anchor-025",
            "title": "正定三连判",
            "searchText": "正定三连判 实对称矩阵 A 正定，等价于以下任一条件： x^TAx 0 (x≠0), 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n。",
            "summary": "实对称矩阵 A 正定，等价于以下任一条件： x^TAx 0 (x≠0), 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n。"
          },
          {
            "id": "anchor-15fx8au",
            "legacyId": "linear-algebra-01-001-anchor-026",
            "title": "逆序数与行列式展开定义",
            "searchText": "逆序数与行列式展开定义 排列 j 1j 2 j n 中，前面数字大于后面数字的一对叫逆序，逆序总数记为 (j 1j 2 j n)。 A = j 1j 2 j n (-1)^ (j 1j 2 j n) a 1j 1 a 2j 2 a nj n .",
            "summary": "排列 j 1j 2 j n 中，前面数字大于后面数字的一对叫逆序，逆序总数记为 (j 1j 2 j n)。 A = j 1j 2 j n (-1)^ (j 1j 2 j n) a 1j 1 a 2j 2 a nj n ."
          },
          {
            "id": "anchor-14miwg4",
            "legacyId": "linear-algebra-01-001-anchor-027",
            "title": "行列式基本性质、转置与三角行列式",
            "searchText": "行列式基本性质、转置与三角行列式 A^T = A . 交换两行或两列，行列式变号。 某行或某列乘 k，行列式乘 k。 某行或某列的 k 倍加到另一行或另一列，行列式不变。 两行或两列相同、成比例，或某行、某列全为零，行列式为零。 三角形行列式等于主对角元之积。 上三角、下三角和对角行列式均为主对角元之积；反对角三角形行列式为 (-1)^ n(n-1) 2 a 1n a 2,n-1 a n1 .",
            "summary": "A^T = A . 交换两行或两列，行列式变号。 某行或某列乘 k，行列式乘 k。 某行或某列的 k 倍加到另一行或另一列，行列式不变。 两行或两列相同、成比例，或某行、某列全为零，行列式为零。 三角形行列式等于主对角元之积。 上三角、下三角和对角行列式均…"
          },
          {
            "id": "anchor-oqrdrk",
            "legacyId": "linear-algebra-01-001-anchor-028",
            "title": "范德蒙德、三对角、爪形与箭头形行列式",
            "searchText": "范德蒙德、三对角、爪形与箭头形行列式 “行和或列和相等”：把各列加到一列，提取公共因子，再降阶。 “爪形、箭头形”：沿非零元素最少的行或列展开，或先消成三角形。 “么字形、X 型”：按稀疏行列展开，注意每次展开的正负号。 三对角线行列式：按第一行展开建立递推式，再由初值求通项。 范德蒙德行列式： vmatrix 1&1& &1\\\\ x 1&x 2& &x n\\\\ & && \\\\ x 1^ n-1 &x 2^ n-1 & &x n^ n-1 vmatrix = 1≤ i<j≤ n (x j-x i).",
            "summary": "“行和或列和相等”：把各列加到一列，提取公共因子，再降阶。 “爪形、箭头形”：沿非零元素最少的行或列展开，或先消成三角形。 “么字形、X 型”：按稀疏行列展开，注意每次展开的正负号。 三对角线行列式：按第一行展开建立递推式，再由初值求通项。 范德蒙德行列式…"
          }
        ],
        "formulas": [
          {
            "id": "linear-1glbyvf",
            "parentAnchorId": "anchor-111xxjc",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-002",
            "title": "解集小，秩反而大：r(A)",
            "latex": "r(A)\\ge r(B).",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "对未知数个数相同的两个齐次方程组，若 Ax=0 的每个解都是 Bx=0 的解，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 0
          },
          {
            "id": "linear-1bmy9k0",
            "parentAnchorId": "anchor-1yn9mi4",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-003",
            "title": "无关被表，个数不多：s",
            "latex": "s\\le r.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "若线性无关的向量组",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 1
          },
          {
            "id": "linear-sk4b4h",
            "parentAnchorId": "anchor-zf8f1p",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-005",
            "title": "被表秩小，表者秩大：r(B)",
            "latex": "r(B)\\le r(A).",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "若向量组 B 可由向量组 A 线性表示，即 B=AC，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 2
          },
          {
            "id": "linear-swwd52",
            "parentAnchorId": "anchor-1ojz8ps",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-006",
            "title": "两组互表，秩必相等：r(A)",
            "latex": "r(A)=r(B).",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "两个向量组能互相线性表示，称为等价向量组，必有",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 3
          },
          {
            "id": "linear-i74sfx",
            "parentAnchorId": "anchor-1r4kep3",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-012",
            "title": "齐次方程组：满秩只有零解，秩亏必有非零解：r(A)",
            "latex": "r(A)=n\\Longleftrightarrow Ax=0\\text{ 只有零解},",
            "sourceBlockIndex": 25,
            "searchAliases": [],
            "context": "设 A 有 n 列，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 4
          },
          {
            "id": "linear-4jzdze",
            "parentAnchorId": "anchor-1r4kep3",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-012",
            "title": "齐次方程组：满秩只有零解，秩亏必有非零解：r(A)",
            "latex": "r(A)<n\\Longleftrightarrow Ax=0\\text{ 有非零解}.",
            "sourceBlockIndex": 26,
            "searchAliases": [],
            "context": "所属知识点：齐次方程组：满秩只有零解，秩亏必有非零解。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 5
          },
          {
            "id": "linear-uyqmcp",
            "parentAnchorId": "anchor-1jdggfb",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-013",
            "title": "非齐次线性方程组的解的三种情况",
            "latex": "\\begin{array}{c|c}\nr(A)\\ne r(A,b)&\\text{无解}\\\\\nr(A)=r(A,b)=n&\\text{唯一解}\\\\\nr(A)=r(A,b)<n&\\text{无穷多解}\n\\end{array}",
            "sourceBlockIndex": 30,
            "searchAliases": [],
            "context": "设 A 有 n 列，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 6
          },
          {
            "id": "linear-136hg8t",
            "parentAnchorId": "anchor-1jzimhm",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-014",
            "title": "非齐减非齐得齐次，非齐通解等于特解加齐次通解：A(x_1-x_2)",
            "latex": "A(x_1-x_2)=0.",
            "sourceBlockIndex": 32,
            "searchAliases": [],
            "context": "若 Ax_1=b,\\ Ax_2=b，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 7
          },
          {
            "id": "linear-1mxzg24-1",
            "parentAnchorId": "anchor-1jzimhm",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-014",
            "title": "非齐减非齐得齐次，非齐通解等于特解加齐次通解：x",
            "latex": "x=\\eta^*+\\xi,\\qquad A\\xi=0.",
            "sourceBlockIndex": 35,
            "searchAliases": [],
            "context": "若 \\eta^ 是 Ax=b 的一个特解，则全部解为",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 8
          },
          {
            "id": "linear-1i76qzt",
            "parentAnchorId": "anchor-72u727",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-015",
            "title": "矩阵越乘，秩不会增加：r(AB)",
            "latex": "r(AB)\\le \\min\\{r(A),r(B)\\}.",
            "sourceBlockIndex": 37,
            "searchAliases": [],
            "context": "若 AB 有意义，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 9
          },
          {
            "id": "linear-wcjw9k",
            "parentAnchorId": "anchor-72u727",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-015",
            "title": "矩阵越乘，秩不会增加：r(A)+r(B)",
            "latex": "r(A)+r(B)\\le n.",
            "sourceBlockIndex": 41,
            "searchAliases": [],
            "context": "若 AB=O，且 A 有 n 列，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 10
          },
          {
            "id": "linear-hnpor7",
            "parentAnchorId": "anchor-4kgzu",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-016",
            "title": "矩阵横拼竖拼，秩不会变小：maxr(A),r(B)",
            "latex": "\\max\\{r(A),r(B)\\}\\le r(A,B)\\le r(A)+r(B),",
            "sourceBlockIndex": 42,
            "searchAliases": [],
            "context": "所属知识点：矩阵横拼竖拼，秩不会变小。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 11
          },
          {
            "id": "linear-agslz1",
            "parentAnchorId": "anchor-17571s4",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-017",
            "title": "可逆矩阵夹乘，不改变秩：r(PA)",
            "latex": "r(PA)=r(AQ)=r(PAQ)=r(A).",
            "sourceBlockIndex": 44,
            "searchAliases": [],
            "context": "若 P,Q 可逆，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 12
          },
          {
            "id": "linear-1xoset7-1",
            "parentAnchorId": "anchor-im67ae",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-018",
            "title": "方阵单边得单位阵，另一边也成立：B",
            "latex": "B=A^{-1},\\qquad AB=BA=E.",
            "sourceBlockIndex": 48,
            "searchAliases": [],
            "context": "同阶方阵满足 AB=E 或 BA=E 时，A,B 都可逆，并且",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 13
          },
          {
            "id": "linear-1quh0ps",
            "parentAnchorId": "anchor-1x76og0",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-019",
            "title": "伴随矩阵的秩，只看原矩阵差几秩：r(A^*)",
            "latex": "r(A^*)=\n\\begin{cases}\nn,&r(A)=n,\\\\\n1,&r(A)=n-1,\\\\\n0,&r(A)\\le n-2.\n\\end{cases}",
            "sourceBlockIndex": 51,
            "searchAliases": [],
            "context": "对 n\\ge2 阶方阵 A：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 14
          },
          {
            "id": "linear-n93hf3-1",
            "parentAnchorId": "anchor-tkxywz",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-020",
            "title": "特征值之和看迹，特征值之积看行列式：Σ_i",
            "latex": "\\sum_{i=1}^{n}\\lambda_i=\\operatorname{tr}(A)",
            "sourceBlockIndex": 53,
            "searchAliases": [],
            "context": "计入重数后，n 阶方阵的特征值满足",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 15
          },
          {
            "id": "linear-n93hf3-2",
            "parentAnchorId": "anchor-tkxywz",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-020",
            "title": "特征值之和看迹，特征值之积看行列式：prod_i",
            "latex": "\\prod_{i=1}^{n}\\lambda_i=|A|",
            "sourceBlockIndex": 53,
            "searchAliases": [],
            "context": "计入重数后，n 阶方阵的特征值满足",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 16
          },
          {
            "id": "linear-x6j5u1-1",
            "parentAnchorId": "anchor-th36ml",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-022",
            "title": "秩一矩阵：平方等于迹乘自身：A^2",
            "latex": "A^2=\\operatorname{tr}(A)A",
            "sourceBlockIndex": 55,
            "searchAliases": [],
            "context": "若 \\(r(A)=1\\)，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 17
          },
          {
            "id": "linear-x6j5u1-2",
            "parentAnchorId": "anchor-th36ml",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-022",
            "title": "秩一矩阵：平方等于迹乘自身：|λ E-A|",
            "latex": "|\\lambda E-A|=\\lambda^{n-1}\\bigl(\\lambda-\\operatorname{tr}(A)\\bigr)",
            "sourceBlockIndex": 55,
            "searchAliases": [],
            "context": "若 \\(r(A)=1\\)，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 18
          },
          {
            "id": "linear-93re0p-1",
            "parentAnchorId": "anchor-x4fj9u",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-023",
            "title": "实对称矩阵三件套：Q^TAQ",
            "latex": "Q^TAQ=\\Lambda,\\qquad Q^TQ=E.",
            "sourceBlockIndex": 58,
            "searchAliases": [],
            "context": "实对称矩阵的特征值全为实数；不同特征值对应的特征向量正交；一定可以用正交矩阵对角化：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 19
          },
          {
            "id": "linear-1ewwq8h-1",
            "parentAnchorId": "anchor-19ugkjx",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-025",
            "title": "正定三连判：x^TAx",
            "latex": "x^TAx>0\\quad(x\\ne0),",
            "sourceBlockIndex": 60,
            "searchAliases": [],
            "context": "实对称矩阵 A 正定，等价于以下任一条件：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 20
          },
          {
            "id": "linear-866w82",
            "parentAnchorId": "anchor-15fx8au",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-026",
            "title": "逆序数与行列式展开定义：|A|",
            "latex": "|A|=\\sum_{j_1j_2\\cdots j_n}\n(-1)^{\\tau(j_1j_2\\cdots j_n)}\na_{1j_1}a_{2j_2}\\cdots a_{nj_n}.",
            "sourceBlockIndex": 64,
            "searchAliases": [],
            "context": "排列 j_1j_2\\cdots j_n 中，前面数字大于后面数字的一对叫逆序，逆序总数记为 \\(\\tau(j_1j_2\\cdots j_n)\\)。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 21
          },
          {
            "id": "linear-1dmj5hr",
            "parentAnchorId": "anchor-14miwg4",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-027",
            "title": "行列式基本性质、转置与三角行列式：|A^T|",
            "latex": "|A^T|=|A|.",
            "sourceBlockIndex": 65,
            "searchAliases": [],
            "context": "所属知识点：行列式基本性质、转置与三角行列式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 22
          },
          {
            "id": "linear-z466lh",
            "parentAnchorId": "anchor-14miwg4",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-027",
            "title": "副对角线行列式公式",
            "latex": "(-1)^{\\frac{n(n-1)}2}a_{1n}a_{2,n-1}\\cdots a_{n1}.",
            "sourceBlockIndex": 69,
            "searchAliases": [],
            "context": "上三角、下三角和对角行列式均为主对角元之积；反对角三角形行列式为",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 23
          },
          {
            "id": "linear-1s2vyjs",
            "parentAnchorId": "anchor-oqrdrk",
            "legacyParentAnchorId": "linear-algebra-01-001-anchor-028",
            "title": "范德蒙德行列式",
            "latex": "\\begin{vmatrix}\n1&1&\\cdots&1\\\\\nx_1&x_2&\\cdots&x_n\\\\\n\\vdots&\\vdots&&\\vdots\\\\\nx_1^{n-1}&x_2^{n-1}&\\cdots&x_n^{n-1}\n\\end{vmatrix}\n=\\prod_{1\\le i<j\\le n}(x_j-x_i).",
            "sourceBlockIndex": 71,
            "searchAliases": [],
            "context": "范德蒙德行列式：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-001",
            "order": 24
          }
        ]
      },
      {
        "id": "linear-algebra-01-002",
        "title": "抽象行列式计算",
        "body": "##### 矩阵乘积、转置、逆、伴随与特征值的行列式公式\n\n对 \\(n\\) 阶方阵：\n\n<!-- formula {\"items\":[{\"id\":\"linear-3eqy77-1\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|kA|\",\"aliases\":[],\"context\":\"对 n 阶方阵：\",\"latex\":\"|kA|=k^n|A|\"},{\"id\":\"linear-3eqy77-2\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|AB|\",\"aliases\":[],\"context\":\"对 n 阶方阵：\",\"latex\":\"|AB|=|A||B|\"}]} -->\n\\[\n|kA|=k^n|A|,\\qquad |AB|=|A||B|,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-1xdjm0l-1\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^m|\",\"aliases\":[],\"context\":\"所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。\",\"latex\":\"|A^m|=|A|^m\"},{\"id\":\"linear-1xdjm0l-2\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^T|\",\"aliases\":[],\"context\":\"所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。\",\"latex\":\"|A^T|=|A|\"}]} -->\n\\[\n|A^m|=|A|^m,\\qquad |A^T|=|A|.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-lx7lsi-1\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^-1|\",\"aliases\":[],\"context\":\"所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。\",\"latex\":\"|A^{-1}|=\\\\frac1{|A|}\"},{\"id\":\"linear-lx7lsi-2\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^*|\",\"aliases\":[],\"context\":\"所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。\",\"latex\":\"|A^*|=|A|^{n-1}\"}]} -->\n\\[\n|A^{-1}|=\\frac1{|A|},\\qquad |A^*|=|A|^{n-1},\n\\]\n\n<!-- formula {\"id\":\"linear-1i7q275\",\"title\":\"矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A|\",\"aliases\":[],\"context\":\"所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。\"} -->\n\\[\n|A|=\\lambda_1\\lambda_2\\cdots\\lambda_n.\n\\]\n\n分块三角行列式：\n\n<!-- formula {\"id\":\"linear-1fq87qo\",\"title\":\"分块上三角行列式\",\"aliases\":[],\"context\":\"分块三角行列式：\"} -->\n\\[\n\\begin{vmatrix}A&C\\\\O&B\\end{vmatrix}=|A||B|.\n\\]\n\n对同阶方阵块：\n\n<!-- formula {\"id\":\"linear-xh543f\",\"title\":\"反对角分块行列式\",\"aliases\":[],\"context\":\"对同阶方阵块：\"} -->\n\\[\n\\begin{vmatrix}O&A\\\\B&O\\end{vmatrix}=(-1)^n|A||B|.\n\\]\n\n若对角块互换，符号要按块的行列数判断；不要把普通数的交换律直接用于矩阵块。\n\n若 \\(A\\) 可逆，则\n\n<!-- formula {\"id\":\"linear-1taijfc\",\"title\":\"以 A 为可逆块的舒尔补行列式\",\"aliases\":[],\"context\":\"若 A 可逆，则\"} -->\n\\[\n\\begin{vmatrix}A&B\\\\C&D\\end{vmatrix}\n=|A|\\,|D-CA^{-1}B|.\n\\]\n\n若 \\(D\\) 可逆，则\n\n<!-- formula {\"id\":\"linear-6mecf7\",\"title\":\"以 D 为可逆块的舒尔补行列式\",\"aliases\":[],\"context\":\"若 D 可逆，则\"} -->\n\\[\n\\begin{vmatrix}A&B\\\\C&D\\end{vmatrix}\n=|D|\\,|A-BD^{-1}C|.\n\\]",
        "searchText": "抽象行列式计算 抽象行列式计算 抽象行列式计算 矩阵乘积、转置、逆、伴随与特征值的行列式公式 对 n 阶方阵： kA =k^n A , AB = A B , A^m = A ^m, A^T = A . A^ -1 = 1 A , A^ = A ^ n-1 , A = 1 2 n. 分块三角行列式： vmatrix A&C\\ &B vmatrix = A B . 对同阶方阵块： vmatrix O&A\\ &O vmatrix =(-1)^n A B . 若对角块互换，符号要按块的行列数判断；不要把普通数的交换律直接用于矩阵块。 若 A 可逆，则 vmatrix A&B\\ &D vmatrix = A \\, D-CA^ -1 B . 若 D 可逆，则 vmatrix A&B\\ &D vmatrix = D \\, A-BD^ -1 C .",
        "summary": "矩阵乘积、转置、逆、伴随与特征值的行列式公式 对 n 阶方阵： kA =k^n A , AB = A B , A^m = A ^m, A^T = A . A^ -1 = 1 A , A^ = A ^ n-1 , A = 1 2 n. 分块三角行列式： vm…",
        "anchors": [
          {
            "id": "anchor-1k8qs45",
            "legacyId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式",
            "searchText": "矩阵乘积、转置、逆、伴随与特征值的行列式公式 对 n 阶方阵： kA =k^n A , AB = A B , A^m = A ^m, A^T = A . A^ -1 = 1 A , A^ = A ^ n-1 , A = 1 2 n. 分块三角行列式： vmatrix A&C\\ &B vmatrix = A B . 对同阶方阵块： vmatrix O&A\\ &O vmatrix =(-1)^n A B . 若对角块互换，符号要按块的行列数判断；不要把普通数的交换律直接用于矩阵块。 若 A 可逆，则 vmatrix A&B\\ &D vmatrix = A \\, D-CA^ -1 B . 若 D 可逆，则 vmatrix A&B\\ &D vmatrix = D \\, A-BD^ -1 C .",
            "summary": "对 n 阶方阵： kA =k^n A , AB = A B , A^m = A ^m, A^T = A . A^ -1 = 1 A , A^ = A ^ n-1 , A = 1 2 n. 分块三角行列式： vmatrix A&C\\ &B vmatrix =…"
          }
        ],
        "formulas": [
          {
            "id": "linear-3eqy77-1",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|kA|",
            "latex": "|kA|=k^n|A|",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "对 n 阶方阵：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 0
          },
          {
            "id": "linear-3eqy77-2",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|AB|",
            "latex": "|AB|=|A||B|",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "对 n 阶方阵：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 1
          },
          {
            "id": "linear-1xdjm0l-1",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^m|",
            "latex": "|A^m|=|A|^m",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 2
          },
          {
            "id": "linear-1xdjm0l-2",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^T|",
            "latex": "|A^T|=|A|",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 3
          },
          {
            "id": "linear-lx7lsi-1",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^-1|",
            "latex": "|A^{-1}|=\\frac1{|A|}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 4
          },
          {
            "id": "linear-lx7lsi-2",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A^*|",
            "latex": "|A^*|=|A|^{n-1}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 5
          },
          {
            "id": "linear-1i7q275",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "矩阵乘积、转置、逆、伴随与特征值的行列式公式：|A|",
            "latex": "|A|=\\lambda_1\\lambda_2\\cdots\\lambda_n.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：矩阵乘积、转置、逆、伴随与特征值的行列式公式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 6
          },
          {
            "id": "linear-1fq87qo",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "分块上三角行列式",
            "latex": "\\begin{vmatrix}A&C\\\\O&B\\end{vmatrix}=|A||B|.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "分块三角行列式：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 7
          },
          {
            "id": "linear-xh543f",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "反对角分块行列式",
            "latex": "\\begin{vmatrix}O&A\\\\B&O\\end{vmatrix}=(-1)^n|A||B|.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "对同阶方阵块：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 8
          },
          {
            "id": "linear-1taijfc",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "以 A 为可逆块的舒尔补行列式",
            "latex": "\\begin{vmatrix}A&B\\\\C&D\\end{vmatrix}\n=|A|\\,|D-CA^{-1}B|.",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "若 A 可逆，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 9
          },
          {
            "id": "linear-6mecf7",
            "parentAnchorId": "anchor-1k8qs45",
            "legacyParentAnchorId": "linear-algebra-01-002-anchor-001",
            "title": "以 D 为可逆块的舒尔补行列式",
            "latex": "\\begin{vmatrix}A&B\\\\C&D\\end{vmatrix}\n=|D|\\,|A-BD^{-1}C|.",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "若 D 可逆，则",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-002",
            "order": 10
          }
        ]
      },
      {
        "id": "linear-algebra-01-003",
        "title": "(代数)余子式相关问题",
        "body": "##### 余子式、代数余子式与拉普拉斯展开公式\n\n<!-- formula {\"id\":\"linear-1h5r17w\",\"title\":\"余子式、代数余子式与拉普拉斯展开公式：A_ij\",\"aliases\":[],\"context\":\"所属知识点：余子式、代数余子式与拉普拉斯展开公式。\"} -->\n\\[\nA_{ij}=(-1)^{i+j}M_{ij}.\n\\]\n\n按第 \\(i\\) 行展开：\n\n<!-- formula {\"id\":\"linear-1apyhm8\",\"title\":\"余子式、代数余子式与拉普拉斯展开公式：|A|\",\"aliases\":[],\"context\":\"按第 i 行展开：\"} -->\n\\[\n|A|=\\sum_{j=1}^n a_{ij}A_{ij}.\n\\]\n\n第 \\(i\\) 行元素乘第 \\(k\\) 行对应代数余子式时：\n\n<!-- formula {\"id\":\"linear-1f67hd8\",\"title\":\"余子式、代数余子式与拉普拉斯展开公式：Σ_j\",\"aliases\":[],\"context\":\"第 i 行元素乘第 k 行对应代数余子式时：\"} -->\n\\[\n\\sum_{j=1}^n a_{ij}A_{kj}=\n\\begin{cases}\n|A|,&i=k,\\\\\n0,&i\\ne k.\n\\end{cases}\n\\]\n\n伴随矩阵的迹等于主对角线上代数余子式之和：\n\n<!-- formula {\"id\":\"linear-acy3k8\",\"title\":\"余子式、代数余子式与拉普拉斯展开公式：tr(A^*)\",\"aliases\":[],\"context\":\"伴随矩阵的迹等于主对角线上代数余子式之和：\"} -->\n\\[\n\\operatorname{tr}(A^*)=A_{11}+A_{22}+\\cdots+A_{nn}.\n\\]\n\n##### 代数余子式线性组合与全部余子式求和\n\n代数余子式的系数不是原行元素时，把对应行换成题目给的系数，再按该行展开。求全部代数余子式之和，可把矩阵一行或一列换成全 \\(1\\)，或利用伴随矩阵与全 \\(1\\) 向量相乘。",
        "searchText": "(代数)余子式相关问题 (代数)余子式相关问题 (代数)余子式相关问题 余子式、代数余子式与拉普拉斯展开公式 A ij =(-1)^ i+j M ij . 按第 i 行展开： A = j=1 ^n a ij A ij . 第 i 行元素乘第 k 行对应代数余子式时： j=1 ^n a ij A kj = cases A ,&i=k,\\\\ 0,&i≠ k. cases 伴随矩阵的迹等于主对角线上代数余子式之和： tr (A^ )=A 11 +A 22 + +A nn . 代数余子式线性组合与全部余子式求和 代数余子式的系数不是原行元素时，把对应行换成题目给的系数，再按该行展开。求全部代数余子式之和，可把矩阵一行或一列换成全 1，或利用伴随矩阵与全 1 向量相乘。",
        "summary": "余子式、代数余子式与拉普拉斯展开公式 A ij =(-1)^ i+j M ij . 按第 i 行展开： A = j=1 ^n a ij A ij . 第 i 行元素乘第 k 行对应代数余子式时： j=1 ^n a ij A kj = cases A ,&i…",
        "anchors": [
          {
            "id": "anchor-s7ns51",
            "legacyId": "linear-algebra-01-003-anchor-001",
            "title": "余子式、代数余子式与拉普拉斯展开公式",
            "searchText": "余子式、代数余子式与拉普拉斯展开公式 A ij =(-1)^ i+j M ij . 按第 i 行展开： A = j=1 ^n a ij A ij . 第 i 行元素乘第 k 行对应代数余子式时： j=1 ^n a ij A kj = cases A ,&i=k,\\\\ 0,&i≠ k. cases 伴随矩阵的迹等于主对角线上代数余子式之和： tr (A^ )=A 11 +A 22 + +A nn .",
            "summary": "A ij =(-1)^ i+j M ij . 按第 i 行展开： A = j=1 ^n a ij A ij . 第 i 行元素乘第 k 行对应代数余子式时： j=1 ^n a ij A kj = cases A ,&i=k,\\\\ 0,&i≠ k. case…"
          },
          {
            "id": "anchor-ypaqr",
            "legacyId": "linear-algebra-01-003-anchor-002",
            "title": "代数余子式线性组合与全部余子式求和",
            "searchText": "代数余子式线性组合与全部余子式求和 代数余子式的系数不是原行元素时，把对应行换成题目给的系数，再按该行展开。求全部代数余子式之和，可把矩阵一行或一列换成全 1，或利用伴随矩阵与全 1 向量相乘。",
            "summary": "代数余子式的系数不是原行元素时，把对应行换成题目给的系数，再按该行展开。求全部代数余子式之和，可把矩阵一行或一列换成全 1，或利用伴随矩阵与全 1 向量相乘。"
          }
        ],
        "formulas": [
          {
            "id": "linear-1h5r17w",
            "parentAnchorId": "anchor-s7ns51",
            "legacyParentAnchorId": "linear-algebra-01-003-anchor-001",
            "title": "余子式、代数余子式与拉普拉斯展开公式：A_ij",
            "latex": "A_{ij}=(-1)^{i+j}M_{ij}.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：余子式、代数余子式与拉普拉斯展开公式。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-003",
            "order": 0
          },
          {
            "id": "linear-1apyhm8",
            "parentAnchorId": "anchor-s7ns51",
            "legacyParentAnchorId": "linear-algebra-01-003-anchor-001",
            "title": "余子式、代数余子式与拉普拉斯展开公式：|A|",
            "latex": "|A|=\\sum_{j=1}^n a_{ij}A_{ij}.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "按第 i 行展开：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-003",
            "order": 1
          },
          {
            "id": "linear-1f67hd8",
            "parentAnchorId": "anchor-s7ns51",
            "legacyParentAnchorId": "linear-algebra-01-003-anchor-001",
            "title": "余子式、代数余子式与拉普拉斯展开公式：Σ_j",
            "latex": "\\sum_{j=1}^n a_{ij}A_{kj}=\n\\begin{cases}\n|A|,&i=k,\\\\\n0,&i\\ne k.\n\\end{cases}",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "第 i 行元素乘第 k 行对应代数余子式时：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-003",
            "order": 2
          },
          {
            "id": "linear-acy3k8",
            "parentAnchorId": "anchor-s7ns51",
            "legacyParentAnchorId": "linear-algebra-01-003-anchor-001",
            "title": "余子式、代数余子式与拉普拉斯展开公式：tr(A^*)",
            "latex": "\\operatorname{tr}(A^*)=A_{11}+A_{22}+\\cdots+A_{nn}.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "伴随矩阵的迹等于主对角线上代数余子式之和：",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-003",
            "order": 3
          }
        ]
      },
      {
        "id": "linear-algebra-01-004",
        "title": "多项式 $f(x)$ 以行列式形式给出",
        "body": "求某次幂系数时，只保留可能产生该次数的选项，按排列的正负号相加；也可先用初等变换把行列式降阶。求 \\(f(x)=0\\) 的根时，优先找让两行或两列相同、成比例的 \\(x\\)，再结合多项式次数确认根是否找全。",
        "searchText": "多项式 f(x) 以行列式形式给出 多项式 f(x) 以行列式形式给出 多项式 f(x) 以行列式形式给出 求某次幂系数时，只保留可能产生该次数的选项，按排列的正负号相加；也可先用初等变换把行列式降阶。求 f(x)=0 的根时，优先找让两行或两列相同、成比例的 x，再结合多项式次数确认根是否找全。",
        "summary": "求某次幂系数时，只保留可能产生该次数的选项，按排列的正负号相加；也可先用初等变换把行列式降阶。求 f(x)=0 的根时，优先找让两行或两列相同、成比例的 x，再结合多项式次数确认根是否找全。",
        "anchors": [],
        "formulas": []
      },
      {
        "id": "linear-algebra-01-005",
        "title": "克拉默法则",
        "body": "对 \\(n\\) 元方程组 \\(Ax=b\\)，若 \\(D=|A|\\ne0\\)，则唯一解为\n\n<!-- formula {\"id\":\"linear-1o4az7n\",\"title\":\"克拉默法则求解公式\",\"aliases\":[\"克拉默法则\",\"行列式求方程组解\"],\"context\":\"系数行列式不为零时，方程组有唯一解；将第 i 列换成常数列得到 D_i。\"} -->\n\\[\nx_i=\\frac{D_i}{D},\n\\]\n\n其中 \\(D_i\\) 是把 \\(D\\) 的第 \\(i\\) 列换成常数列 \\(b\\) 得到的行列式。\n\n齐次方程组：\n\n<!-- formula {\"id\":\"linear-1d0s6b5\",\"title\":\"齐次方程组只有零解的行列式判定\",\"aliases\":[\"齐次方程组零解\",\"行列式非零\"],\"context\":\"n 阶系数矩阵行列式不为零，当且仅当齐次方程组只有零解。\"} -->\n\\[\n|A|\\ne0\\Longleftrightarrow Ax=0\\text{ 只有零解},\n\\]\n\n<!-- formula {\"id\":\"linear-7ad1tj\",\"title\":\"齐次方程组有非零解的行列式判定\",\"aliases\":[\"齐次方程组非零解\",\"行列式为零\"],\"context\":\"n 阶系数矩阵行列式为零，当且仅当齐次方程组有非零解。\"} -->\n\\[\n|A|=0\\Longleftrightarrow Ax=0\\text{ 有非零解}.\n\\]\n\n##### 行列式为零、矩阵不可逆与零特征值的等价判定\n\n对 \\(n\\) 阶方阵 \\(A\\)：\n\n<!-- formula {\"id\":\"linear-uw0592\",\"title\":\"行列式为零的等价判定\",\"aliases\":[\"矩阵不可逆\",\"零特征值\",\"齐次方程组非零解\"],\"context\":\"对 n 阶方阵，以下条件等价。\"} -->\n\\[\n\\begin{aligned}\n|A|=0\n&\\Longleftrightarrow r(A)<n\n\\Longleftrightarrow A\\text{ 不可逆}\\\\\n&\\Longleftrightarrow Ax=0\\text{ 有非零解}\n\\Longleftrightarrow 0\\text{ 是 }A\\text{ 的特征值}.\n\\end{aligned}\n\\]",
        "searchText": "克拉默法则 克拉默法则 克拉默法则 对 n 元方程组 Ax=b，若 D= A ≠0，则唯一解为 x i= D i D , 其中 D i 是把 D 的第 i 列换成常数列 b 得到的行列式。 齐次方程组： A ≠0 Ax=0 只有零解, A =0 Ax=0 有非零解. 行列式为零、矩阵不可逆与零特征值的等价判定 对 n 阶方阵 A： aligned A =0 & r(A)<n A 不可逆\\\\ & Ax=0 有非零解 0 是 A 的特征值. aligned",
        "summary": "对 n 元方程组 Ax=b，若 D= A ≠0，则唯一解为 x i= D i D , 其中 D i 是把 D 的第 i 列换成常数列 b 得到的行列式。 齐次方程组： A ≠0 Ax=0 只有零解, A =0 Ax=0 有非零解. 行列式为零、矩阵不可逆与…",
        "anchors": [
          {
            "id": "anchor-danus2",
            "legacyId": "linear-algebra-01-005-anchor-001",
            "title": "行列式为零、矩阵不可逆与零特征值的等价判定",
            "searchText": "行列式为零、矩阵不可逆与零特征值的等价判定 对 n 阶方阵 A： aligned A =0 & r(A)<n A 不可逆\\\\ & Ax=0 有非零解 0 是 A 的特征值. aligned",
            "summary": "对 n 阶方阵 A： aligned A =0 & r(A)<n A 不可逆\\\\ & Ax=0 有非零解 0 是 A 的特征值. aligned"
          }
        ],
        "formulas": [
          {
            "id": "linear-1o4az7n",
            "parentAnchorId": "linear-algebra-01-005",
            "legacyParentAnchorId": "linear-algebra-01-005",
            "title": "克拉默法则求解公式",
            "latex": "x_i=\\frac{D_i}{D},",
            "sourceBlockIndex": 3,
            "searchAliases": [
              "克拉默法则",
              "行列式求方程组解"
            ],
            "context": "系数行列式不为零时，方程组有唯一解；将第 i 列换成常数列得到 D_i。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-005",
            "order": 0
          },
          {
            "id": "linear-1d0s6b5",
            "parentAnchorId": "linear-algebra-01-005",
            "legacyParentAnchorId": "linear-algebra-01-005",
            "title": "齐次方程组只有零解的行列式判定",
            "latex": "|A|\\ne0\\Longleftrightarrow Ax=0\\text{ 只有零解},",
            "sourceBlockIndex": 8,
            "searchAliases": [
              "齐次方程组零解",
              "行列式非零"
            ],
            "context": "n 阶系数矩阵行列式不为零，当且仅当齐次方程组只有零解。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-005",
            "order": 1
          },
          {
            "id": "linear-7ad1tj",
            "parentAnchorId": "linear-algebra-01-005",
            "legacyParentAnchorId": "linear-algebra-01-005",
            "title": "齐次方程组有非零解的行列式判定",
            "latex": "|A|=0\\Longleftrightarrow Ax=0\\text{ 有非零解}.",
            "sourceBlockIndex": 9,
            "searchAliases": [
              "齐次方程组非零解",
              "行列式为零"
            ],
            "context": "n 阶系数矩阵行列式为零，当且仅当齐次方程组有非零解。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-005",
            "order": 2
          },
          {
            "id": "linear-uw0592",
            "parentAnchorId": "anchor-danus2",
            "legacyParentAnchorId": "linear-algebra-01-005-anchor-001",
            "title": "行列式为零的等价判定",
            "latex": "\\begin{aligned}\n|A|=0\n&\\Longleftrightarrow r(A)<n\n\\Longleftrightarrow A\\text{ 不可逆}\\\\\n&\\Longleftrightarrow Ax=0\\text{ 有非零解}\n\\Longleftrightarrow 0\\text{ 是 }A\\text{ 的特征值}.\n\\end{aligned}",
            "sourceBlockIndex": 12,
            "searchAliases": [
              "矩阵不可逆",
              "零特征值",
              "齐次方程组非零解"
            ],
            "context": "对 n 阶方阵，以下条件等价。",
            "chapterId": "linear-algebra-01",
            "topicId": "linear-algebra-01-005",
            "order": 3
          }
        ]
      }
    ]
  },
  {
    "id": "linear-algebra-02",
    "partId": "linear-algebra",
    "partTitle": "线性代数",
    "title": "第二章　矩阵",
    "topics": [
      {
        "id": "linear-algebra-02-001",
        "title": "逆",
        "body": "##### 方阵可逆的全部等价条件\n\n对 \\(n\\) 阶方阵 \\(A\\)：\n\n<!-- formula {\"id\":\"linear-xce19k\",\"title\":\"方阵可逆的全部等价条件：A 可逆\",\"aliases\":[],\"context\":\"对 n 阶方阵 A：\"} -->\n\\[\nA\\text{ 可逆}\n\\Longleftrightarrow |A|\\ne0\n\\Longleftrightarrow r(A)=n\n\\Longleftrightarrow Ax=0\\text{ 只有零解}.\n\\]\n\n也等价于以下结论中的任意一个：\n\n- \\(0\\) 不是 \\(A\\) 的特征值；\n- \\(A\\) 的行向量线性无关；\n- \\(A\\) 的列向量线性无关；\n- \\(A\\) 可写成有限个初等矩阵的乘积；\n- 存在矩阵 \\(B\\) 使 \\(AB=E\\) 或 \\(BA=E\\)；\n- 对每个 \\(b\\)，\\(Ax=b\\) 都有唯一解。\n\n##### 逆矩阵公式、二阶逆矩阵与乘积转置求逆\n\n<!-- formula {\"id\":\"linear-16tzbaj\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：A^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\"} -->\n\\[\nA^{-1}=\\frac1{|A|}A^*,\n\\qquad\n(A,E)\\xrightarrow{\\text{行变换}}(E,A^{-1}),\n\\]\n\n二阶矩阵的逆矩阵公式：\n\n<!-- formula {\"id\":\"linear-7a2pgs-1\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：A\",\"aliases\":[],\"context\":\"二阶矩阵的逆矩阵公式：\"} -->\n\\[\nA=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix},\\quad ad-bc\\ne0\n\\Longrightarrow\nA^{-1}=\\frac1{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-rswsey-1\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：(AB)^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"(AB)^{-1}=B^{-1}A^{-1}\"},{\"id\":\"linear-rswsey-2\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：(A^T)^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"(A^T)^{-1}=(A^{-1})^T\"},{\"id\":\"linear-rswsey-3\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：(kA)^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"(kA)^{-1}=\\\\frac1kA^{-1}\"}]} -->\n\\[\n(AB)^{-1}=B^{-1}A^{-1},\\quad\n(A^T)^{-1}=(A^{-1})^T,\\quad\n(kA)^{-1}=\\frac1kA^{-1}.\n\\]\n\n并且\n\n<!-- formula {\"items\":[{\"id\":\"linear-3jlpwr-1\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：(A^-1)^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"(A^{-1})^{-1}=A\"},{\"id\":\"linear-3jlpwr-2\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：E^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"E^{-1}=E\"}]} -->\n\\[\n(A^{-1})^{-1}=A,\\qquad E^{-1}=E.\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-zacl3l-1\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：(A^m)^-1\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"(A^m)^{-1}=(A^{-1})^m\"},{\"id\":\"linear-zacl3l-2\",\"title\":\"逆矩阵公式、二阶逆矩阵与乘积转置求逆：|A^-1|\",\"aliases\":[],\"context\":\"所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。\",\"latex\":\"|A^{-1}|=\\\\frac1{|A|}\"}]} -->\n\\[\n(A^m)^{-1}=(A^{-1})^m,\\qquad\n|A^{-1}|=\\frac1{|A|}.\n\\]\n\n一般没有 \\((A+B)^{-1}=A^{-1}+B^{-1}\\)，也不能随意交换乘积中矩阵的顺序。\n\n证明可逆时，还可找出一个矩阵 \\(B\\) 使 \\(AB=E\\) 或 \\(BA=E\\)；方阵只需一侧成立即可推出 \\(B=A^{-1}\\)。",
        "searchText": "逆 逆 逆 方阵可逆的全部等价条件 对 n 阶方阵 A： A 可逆 A ≠0 r(A)=n Ax=0 只有零解. 也等价于以下结论中的任意一个： 0 不是 A 的特征值； A 的行向量线性无关； A 的列向量线性无关； A 可写成有限个初等矩阵的乘积； 存在矩阵 B 使 AB=E 或 BA=E； 对每个 b，Ax=b 都有唯一解。 逆矩阵公式、二阶逆矩阵与乘积转置求逆 A^ -1 = 1 A A^ , (A,E) 行变换 (E,A^ -1 ), 二阶矩阵的逆矩阵公式： A= pmatrix a&b\\ &d pmatrix , ad-bc≠0 ⇒ A^ -1 = 1 ad-bc pmatrix d&-b\\\\-c&a pmatrix . (AB)^ -1 =B^ -1 A^ -1 , (A^T)^ -1 =(A^ -1 )^T, (kA)^ -1 = 1kA^ -1 . 并且 (A^ -1 )^ -1 =A, E^ -1 =E. (A^m)^ -1 =(A^ -1 )^m, A^ -1 = 1 A . 一般没有 (A+B)^ -1 =A^ -1 +B^ -1 ，也不能随意交换乘积中矩阵的顺序。 证明可逆时，还可找出一个矩阵 B 使 AB=E 或 BA=E；方阵只需一侧成立即可推出 B=A^ -1 。",
        "summary": "方阵可逆的全部等价条件 对 n 阶方阵 A： A 可逆 A ≠0 r(A)=n Ax=0 只有零解. 也等价于以下结论中的任意一个： 0 不是 A 的特征值； A 的行向量线性无关； A 的列向量线性无关； A 可写成有限个初等矩阵的乘积； 存在矩阵 B …",
        "anchors": [
          {
            "id": "anchor-1tdu4gv",
            "legacyId": "linear-algebra-02-001-anchor-001",
            "title": "方阵可逆的全部等价条件",
            "searchText": "方阵可逆的全部等价条件 对 n 阶方阵 A： A 可逆 A ≠0 r(A)=n Ax=0 只有零解. 也等价于以下结论中的任意一个： 0 不是 A 的特征值； A 的行向量线性无关； A 的列向量线性无关； A 可写成有限个初等矩阵的乘积； 存在矩阵 B 使 AB=E 或 BA=E； 对每个 b，Ax=b 都有唯一解。",
            "summary": "对 n 阶方阵 A： A 可逆 A ≠0 r(A)=n Ax=0 只有零解. 也等价于以下结论中的任意一个： 0 不是 A 的特征值； A 的行向量线性无关； A 的列向量线性无关； A 可写成有限个初等矩阵的乘积； 存在矩阵 B 使 AB=E 或 BA=…"
          },
          {
            "id": "anchor-1mie9hc",
            "legacyId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆",
            "searchText": "逆矩阵公式、二阶逆矩阵与乘积转置求逆 A^ -1 = 1 A A^ , (A,E) 行变换 (E,A^ -1 ), 二阶矩阵的逆矩阵公式： A= pmatrix a&b\\ &d pmatrix , ad-bc≠0 ⇒ A^ -1 = 1 ad-bc pmatrix d&-b\\\\-c&a pmatrix . (AB)^ -1 =B^ -1 A^ -1 , (A^T)^ -1 =(A^ -1 )^T, (kA)^ -1 = 1kA^ -1 . 并且 (A^ -1 )^ -1 =A, E^ -1 =E. (A^m)^ -1 =(A^ -1 )^m, A^ -1 = 1 A . 一般没有 (A+B)^ -1 =A^ -1 +B^ -1 ，也不能随意交换乘积中矩阵的顺序。 证明可逆时，还可找出一个矩阵 B 使 AB=E 或 BA=E；方阵只需一侧成立即可推出 B=A^ -1 。",
            "summary": "A^ -1 = 1 A A^ , (A,E) 行变换 (E,A^ -1 ), 二阶矩阵的逆矩阵公式： A= pmatrix a&b\\ &d pmatrix , ad-bc≠0 ⇒ A^ -1 = 1 ad-bc pmatrix d&-b\\\\-c&a pma…"
          }
        ],
        "formulas": [
          {
            "id": "linear-xce19k",
            "parentAnchorId": "anchor-1tdu4gv",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-001",
            "title": "方阵可逆的全部等价条件：A 可逆",
            "latex": "A\\text{ 可逆}\n\\Longleftrightarrow |A|\\ne0\n\\Longleftrightarrow r(A)=n\n\\Longleftrightarrow Ax=0\\text{ 只有零解}.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "对 n 阶方阵 A：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 0
          },
          {
            "id": "linear-16tzbaj",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：A^-1",
            "latex": "A^{-1}=\\frac1{|A|}A^*,\n\\qquad\n(A,E)\\xrightarrow{\\text{行变换}}(E,A^{-1}),",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 1
          },
          {
            "id": "linear-7a2pgs-1",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：A",
            "latex": "A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix},\\quad ad-bc\\ne0\n\\Longrightarrow\nA^{-1}=\\frac1{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}.",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "二阶矩阵的逆矩阵公式：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 2
          },
          {
            "id": "linear-rswsey-1",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：(AB)^-1",
            "latex": "(AB)^{-1}=B^{-1}A^{-1}",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 3
          },
          {
            "id": "linear-rswsey-2",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：(A^T)^-1",
            "latex": "(A^T)^{-1}=(A^{-1})^T",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 4
          },
          {
            "id": "linear-rswsey-3",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：(kA)^-1",
            "latex": "(kA)^{-1}=\\frac1kA^{-1}",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 5
          },
          {
            "id": "linear-3jlpwr-1",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：(A^-1)^-1",
            "latex": "(A^{-1})^{-1}=A",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 6
          },
          {
            "id": "linear-3jlpwr-2",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：E^-1",
            "latex": "E^{-1}=E",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 7
          },
          {
            "id": "linear-zacl3l-1",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：(A^m)^-1",
            "latex": "(A^m)^{-1}=(A^{-1})^m",
            "sourceBlockIndex": 17,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 8
          },
          {
            "id": "linear-zacl3l-2",
            "parentAnchorId": "anchor-1mie9hc",
            "legacyParentAnchorId": "linear-algebra-02-001-anchor-002",
            "title": "逆矩阵公式、二阶逆矩阵与乘积转置求逆：|A^-1|",
            "latex": "|A^{-1}|=\\frac1{|A|}",
            "sourceBlockIndex": 17,
            "searchAliases": [],
            "context": "所属知识点：逆矩阵公式、二阶逆矩阵与乘积转置求逆。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-001",
            "order": 9
          }
        ]
      },
      {
        "id": "linear-algebra-02-002",
        "title": "伴随矩阵",
        "body": "##### 伴随矩阵全部公式与秩分类\n\n<!-- formula {\"id\":\"linear-1472bob\",\"title\":\"伴随矩阵全部公式与秩分类：AA^*\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\"} -->\n\\[\nAA^*=A^*A=|A|E,\n\\]\n\n二阶矩阵的伴随矩阵公式：\n\n<!-- formula {\"id\":\"linear-it3eqm\",\"title\":\"二阶矩阵的伴随矩阵\",\"aliases\":[],\"context\":\"二阶矩阵的伴随矩阵公式：\"} -->\n\\[\n\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^*\n=\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}.\n\\]\n\n<!-- formula {\"id\":\"linear-1apptq5-1\",\"title\":\"伴随矩阵全部公式与秩分类：A^*\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\"} -->\n\\[\nA^*=|A|A^{-1}\\quad(|A|\\ne0),\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-1t2nu8s-1\",\"title\":\"伴随矩阵全部公式与秩分类：(AB)^*\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\",\"latex\":\"(AB)^*=B^*A^*\"},{\"id\":\"linear-1t2nu8s-2\",\"title\":\"伴随矩阵全部公式与秩分类：(A^T)^*\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\",\"latex\":\"(A^T)^*=(A^*)^T\"}]} -->\n\\[\n(AB)^*=B^*A^*,\\qquad (A^T)^*=(A^*)^T.\n\\]\n\n<!-- formula {\"id\":\"linear-1milt8o\",\"title\":\"伴随矩阵全部公式与秩分类：(A^m)^*\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\"} -->\n\\[\n(A^m)^*=(A^*)^m.\n\\]\n\n若 \\(A\\) 可逆，则\n\n<!-- formula {\"id\":\"linear-1oijy0q\",\"title\":\"伴随矩阵全部公式与秩分类：(A^*)^-1\",\"aliases\":[],\"context\":\"若 A 可逆，则\"} -->\n\\[\n(A^*)^{-1}=\\frac{A}{|A|}.\n\\]\n\n并且\n\n<!-- formula {\"items\":[{\"id\":\"linear-srfu8x-1\",\"title\":\"伴随矩阵全部公式与秩分类：(A^-1)^*\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\",\"latex\":\"(A^{-1})^*=\\\\frac{A}{|A|}\"},{\"id\":\"linear-srfu8x-2\",\"title\":\"伴随矩阵全部公式与秩分类：|A^*|\",\"aliases\":[],\"context\":\"所属知识点：伴随矩阵全部公式与秩分类。\",\"latex\":\"|A^*|=|A|^{n-1}\"}]} -->\n\\[\n(A^{-1})^*=\\frac{A}{|A|},\\qquad\n|A^*|=|A|^{n-1}.\n\\]\n\n对 \\(n\\ge2\\)：\n\n<!-- formula {\"items\":[{\"id\":\"linear-1hv9m9v-1\",\"title\":\"伴随矩阵全部公式与秩分类：(kA)^*\",\"aliases\":[],\"context\":\"对 n\\\\ge2：\",\"latex\":\"(kA)^*=k^{n-1}A^*\"},{\"id\":\"linear-1hv9m9v-2\",\"title\":\"伴随矩阵全部公式与秩分类：(A^*)^*\",\"aliases\":[],\"context\":\"对 n\\\\ge2：\",\"latex\":\"(A^*)^*=|A|^{n-2}A\"}]} -->\n\\[\n(kA)^*=k^{n-1}A^*,\\qquad (A^*)^*=|A|^{n-2}A.\n\\]\n\n伴随矩阵的秩：\n\n<!-- formula {\"id\":\"linear-vvhk3l\",\"title\":\"伴随矩阵全部公式与秩分类：r(A^*)\",\"aliases\":[],\"context\":\"伴随矩阵的秩：\"} -->\n\\[\nr(A^*)=\n\\begin{cases}\nn,&r(A)=n,\\\\\n1,&r(A)=n-1,\\\\\n0,&r(A)\\le n-2.\n\\end{cases}\n\\]\n\n若题目给 \\(A^*=A\\) 或 \\(A^*=A^T\\)，先与 \\(AA^*=|A|E\\) 联立，再取行列式或看特征值。",
        "searchText": "伴随矩阵 伴随矩阵 伴随矩阵 伴随矩阵全部公式与秩分类 AA^ =A^ A= A E, 二阶矩阵的伴随矩阵公式： pmatrix a&b\\ &d pmatrix ^ = pmatrix d&-b\\\\-c&a pmatrix . A^ = A A^ -1 ( A ≠0), (AB)^ =B^ A^ , (A^T)^ =(A^ )^T. (A^m)^ =(A^ )^m. 若 A 可逆，则 (A^ )^ -1 = A A . 并且 (A^ -1 )^ = A A , A^ = A ^ n-1 . 对 n≥2： (kA)^ =k^ n-1 A^ , (A^ )^ = A ^ n-2 A. 伴随矩阵的秩： r(A^ )= cases n,&r(A)=n,\\\\ 1,&r(A)=n-1,\\\\ 0,&r(A)≤ n-2. cases 若题目给 A^ =A 或 A^ =A^T，先与 AA^ = A E 联立，再取行列式或看特征值。",
        "summary": "伴随矩阵全部公式与秩分类 AA^ =A^ A= A E, 二阶矩阵的伴随矩阵公式： pmatrix a&b\\ &d pmatrix ^ = pmatrix d&-b\\\\-c&a pmatrix . A^ = A A^ -1 ( A ≠0), (AB)^ =…",
        "anchors": [
          {
            "id": "anchor-nw0c5e",
            "legacyId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类",
            "searchText": "伴随矩阵全部公式与秩分类 AA^ =A^ A= A E, 二阶矩阵的伴随矩阵公式： pmatrix a&b\\ &d pmatrix ^ = pmatrix d&-b\\\\-c&a pmatrix . A^ = A A^ -1 ( A ≠0), (AB)^ =B^ A^ , (A^T)^ =(A^ )^T. (A^m)^ =(A^ )^m. 若 A 可逆，则 (A^ )^ -1 = A A . 并且 (A^ -1 )^ = A A , A^ = A ^ n-1 . 对 n≥2： (kA)^ =k^ n-1 A^ , (A^ )^ = A ^ n-2 A. 伴随矩阵的秩： r(A^ )= cases n,&r(A)=n,\\\\ 1,&r(A)=n-1,\\\\ 0,&r(A)≤ n-2. cases 若题目给 A^ =A 或 A^ =A^T，先与 AA^ = A E 联立，再取行列式或看特征值。",
            "summary": "AA^ =A^ A= A E, 二阶矩阵的伴随矩阵公式： pmatrix a&b\\ &d pmatrix ^ = pmatrix d&-b\\\\-c&a pmatrix . A^ = A A^ -1 ( A ≠0), (AB)^ =B^ A^ , (A^T)…"
          }
        ],
        "formulas": [
          {
            "id": "linear-1472bob",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：AA^*",
            "latex": "AA^*=A^*A=|A|E,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 0
          },
          {
            "id": "linear-it3eqm",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "二阶矩阵的伴随矩阵",
            "latex": "\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^*\n=\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "二阶矩阵的伴随矩阵公式：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 1
          },
          {
            "id": "linear-1apptq5-1",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：A^*",
            "latex": "A^*=|A|A^{-1}\\quad(|A|\\ne0),",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 2
          },
          {
            "id": "linear-1t2nu8s-1",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(AB)^*",
            "latex": "(AB)^*=B^*A^*",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 3
          },
          {
            "id": "linear-1t2nu8s-2",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(A^T)^*",
            "latex": "(A^T)^*=(A^*)^T",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 4
          },
          {
            "id": "linear-1milt8o",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(A^m)^*",
            "latex": "(A^m)^*=(A^*)^m.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 5
          },
          {
            "id": "linear-1oijy0q",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(A^*)^-1",
            "latex": "(A^*)^{-1}=\\frac{A}{|A|}.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "若 A 可逆，则",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 6
          },
          {
            "id": "linear-srfu8x-1",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(A^-1)^*",
            "latex": "(A^{-1})^*=\\frac{A}{|A|}",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 7
          },
          {
            "id": "linear-srfu8x-2",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：|A^*|",
            "latex": "|A^*|=|A|^{n-1}",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：伴随矩阵全部公式与秩分类。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 8
          },
          {
            "id": "linear-1hv9m9v-1",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(kA)^*",
            "latex": "(kA)^*=k^{n-1}A^*",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "对 n\\ge2：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 9
          },
          {
            "id": "linear-1hv9m9v-2",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：(A^*)^*",
            "latex": "(A^*)^*=|A|^{n-2}A",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "对 n\\ge2：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 10
          },
          {
            "id": "linear-vvhk3l",
            "parentAnchorId": "anchor-nw0c5e",
            "legacyParentAnchorId": "linear-algebra-02-002-anchor-001",
            "title": "伴随矩阵全部公式与秩分类：r(A^*)",
            "latex": "r(A^*)=\n\\begin{cases}\nn,&r(A)=n,\\\\\n1,&r(A)=n-1,\\\\\n0,&r(A)\\le n-2.\n\\end{cases}",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "伴随矩阵的秩：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-002",
            "order": 11
          }
        ]
      },
      {
        "id": "linear-algebra-02-003",
        "title": "秩",
        "body": "##### 矩阵秩的定义、子式判定与常用不等式\n\n<!-- formula {\"id\":\"linear-s1jo4r\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(A)\",\"aliases\":[],\"context\":\"所属知识点：矩阵秩的定义、子式判定与常用不等式。\"} -->\n\\[\nr(A)=r(A^T)=r(A^TA)=r(AA^T),\n\\]\n\n<!-- formula {\"id\":\"linear-1dp133b\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(kA)\",\"aliases\":[],\"context\":\"所属知识点：矩阵秩的定义、子式判定与常用不等式。\"} -->\n\\[\nr(kA)=r(A)\\quad(k\\ne0),\\qquad r(A)\\le\\min\\{m,n\\}\\quad(A_{m\\times n}).\n\\]\n\n<!-- formula {\"id\":\"linear-usaqdu\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(AB)\",\"aliases\":[],\"context\":\"所属知识点：矩阵秩的定义、子式判定与常用不等式。\"} -->\n\\[\nr(AB)\\le\\min\\{r(A),r(B)\\},\n\\]\n\n<!-- formula {\"id\":\"linear-1ds2t73\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：|r(A)-r(B)|\",\"aliases\":[],\"context\":\"所属知识点：矩阵秩的定义、子式判定与常用不等式。\"} -->\n\\[\n|r(A)-r(B)|\\le r(A\\pm B)\\le r(A)+r(B).\n\\]\n\n同样大小且行数相同的矩阵横向拼接时：\n\n<!-- formula {\"id\":\"linear-1kxk33x\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(A+B)\",\"aliases\":[],\"context\":\"同样大小且行数相同的矩阵横向拼接时：\"} -->\n\\[\nr(A+B)\\le r(A,B)\\le r(A)+r(B).\n\\]\n\n纵向拼接同样满足\n\n<!-- formula {\"id\":\"linear-i78wzn\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：maxr(A),r(B)\",\"aliases\":[],\"context\":\"纵向拼接同样满足\"} -->\n\\[\n\\max\\{r(A),r(B)\\}\n\\le r\\!\\begin{pmatrix}A\\\\B\\end{pmatrix}\n\\le r(A)+r(B).\n\\]\n\n若 \\(P,Q\\) 可逆，则\n\n<!-- formula {\"id\":\"linear-y3xeg0\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(PAQ)\",\"aliases\":[],\"context\":\"若 P,Q 可逆，则\"} -->\n\\[\nr(PAQ)=r(A).\n\\]\n\n<!-- formula {\"id\":\"linear-196fcv6\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(A)+r(B)-n\",\"aliases\":[],\"context\":\"所属知识点：矩阵秩的定义、子式判定与常用不等式。\"} -->\n\\[\nr(A)+r(B)-n\\le r(AB)\\le\\min\\{r(A),r(B)\\}\n\\]\n\n适用于 \\(A\\) 有 \\(n\\) 列、\\(B\\) 有 \\(n\\) 行的情形。\n\n满秩乘法结论：若 \\(A_{m\\times n}\\) 满列秩，即 \\(r(A)=n\\)，则对任意可乘的 \\(B\\)，\n\n<!-- formula {\"id\":\"linear-1ajeycy\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(AB)\",\"aliases\":[],\"context\":\"适用于 A 有 n 列、B 有 n 行的情形。\"} -->\n\\[\nr(AB)=r(B).\n\\]\n\n若 \\(B_{n\\times s}\\) 满行秩，即 \\(r(B)=n\\)，则对任意可乘的 \\(A\\)，\n\n<!-- formula {\"id\":\"linear-1qyczav\",\"title\":\"矩阵秩的定义、子式判定与常用不等式：r(AB)\",\"aliases\":[],\"context\":\"所属知识点：矩阵秩的定义、子式判定与常用不等式。\"} -->\n\\[\nr(AB)=r(A).\n\\]\n\n##### 初等变换求秩、非零子式与含参数秩分类\n\n具体矩阵用初等行变换化成阶梯形，非零行数就是秩。含参数时，记录每个非零行的首个非零位置可能消失的临界参数并分情况；也可先找非零子式证明“至少为几”，再用等式关系证明“至多为几”。",
        "searchText": "秩 秩 秩 矩阵秩的定义、子式判定与常用不等式 r(A)=r(A^T)=r(A^TA)=r(AA^T), r(kA)=r(A) (k≠0), r(A)≤ \\ m,n\\ (A m n ). r(AB)≤ \\ r(A),r(B)\\ , r(A)-r(B) ≤ r(A B)≤ r(A)+r(B). 同样大小且行数相同的矩阵横向拼接时： r(A+B)≤ r(A,B)≤ r(A)+r(B). 纵向拼接同样满足 \\ r(A),r(B)\\ ≤ r\\! pmatrix A\\ pmatrix ≤ r(A)+r(B). 若 P,Q 可逆，则 r(PAQ)=r(A). r(A)+r(B)-n≤ r(AB)≤ \\ r(A),r(B)\\ 适用于 A 有 n 列、B 有 n 行的情形。 满秩乘法结论：若 A m n 满列秩，即 r(A)=n，则对任意可乘的 B， r(AB)=r(B). 若 B n s 满行秩，即 r(B)=n，则对任意可乘的 A， r(AB)=r(A). 初等变换求秩、非零子式与含参数秩分类 具体矩阵用初等行变换化成阶梯形，非零行数就是秩。含参数时，记录每个非零行的首个非零位置可能消失的临界参数并分情况；也可先找非零子式证明“至少为几”，再用等式关系证明“至多为几”。",
        "summary": "矩阵秩的定义、子式判定与常用不等式 r(A)=r(A^T)=r(A^TA)=r(AA^T), r(kA)=r(A) (k≠0), r(A)≤ \\ m,n\\ (A m n ). r(AB)≤ \\ r(A),r(B)\\ , r(A)-r(B) ≤ r(A B)…",
        "anchors": [
          {
            "id": "anchor-6exx6v",
            "legacyId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式",
            "searchText": "矩阵秩的定义、子式判定与常用不等式 r(A)=r(A^T)=r(A^TA)=r(AA^T), r(kA)=r(A) (k≠0), r(A)≤ \\ m,n\\ (A m n ). r(AB)≤ \\ r(A),r(B)\\ , r(A)-r(B) ≤ r(A B)≤ r(A)+r(B). 同样大小且行数相同的矩阵横向拼接时： r(A+B)≤ r(A,B)≤ r(A)+r(B). 纵向拼接同样满足 \\ r(A),r(B)\\ ≤ r\\! pmatrix A\\ pmatrix ≤ r(A)+r(B). 若 P,Q 可逆，则 r(PAQ)=r(A). r(A)+r(B)-n≤ r(AB)≤ \\ r(A),r(B)\\ 适用于 A 有 n 列、B 有 n 行的情形。 满秩乘法结论：若 A m n 满列秩，即 r(A)=n，则对任意可乘的 B， r(AB)=r(B). 若 B n s 满行秩，即 r(B)=n，则对任意可乘的 A， r(AB)=r(A).",
            "summary": "r(A)=r(A^T)=r(A^TA)=r(AA^T), r(kA)=r(A) (k≠0), r(A)≤ \\ m,n\\ (A m n ). r(AB)≤ \\ r(A),r(B)\\ , r(A)-r(B) ≤ r(A B)≤ r(A)+r(B). 同样大小且…"
          },
          {
            "id": "anchor-fyvavw",
            "legacyId": "linear-algebra-02-003-anchor-002",
            "title": "初等变换求秩、非零子式与含参数秩分类",
            "searchText": "初等变换求秩、非零子式与含参数秩分类 具体矩阵用初等行变换化成阶梯形，非零行数就是秩。含参数时，记录每个非零行的首个非零位置可能消失的临界参数并分情况；也可先找非零子式证明“至少为几”，再用等式关系证明“至多为几”。",
            "summary": "具体矩阵用初等行变换化成阶梯形，非零行数就是秩。含参数时，记录每个非零行的首个非零位置可能消失的临界参数并分情况；也可先找非零子式证明“至少为几”，再用等式关系证明“至多为几”。"
          }
        ],
        "formulas": [
          {
            "id": "linear-s1jo4r",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(A)",
            "latex": "r(A)=r(A^T)=r(A^TA)=r(AA^T),",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：矩阵秩的定义、子式判定与常用不等式。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 0
          },
          {
            "id": "linear-1dp133b",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(kA)",
            "latex": "r(kA)=r(A)\\quad(k\\ne0),\\qquad r(A)\\le\\min\\{m,n\\}\\quad(A_{m\\times n}).",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：矩阵秩的定义、子式判定与常用不等式。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 1
          },
          {
            "id": "linear-usaqdu",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(AB)",
            "latex": "r(AB)\\le\\min\\{r(A),r(B)\\},",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：矩阵秩的定义、子式判定与常用不等式。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 2
          },
          {
            "id": "linear-1ds2t73",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：|r(A)-r(B)|",
            "latex": "|r(A)-r(B)|\\le r(A\\pm B)\\le r(A)+r(B).",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：矩阵秩的定义、子式判定与常用不等式。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 3
          },
          {
            "id": "linear-1kxk33x",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(A+B)",
            "latex": "r(A+B)\\le r(A,B)\\le r(A)+r(B).",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "同样大小且行数相同的矩阵横向拼接时：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 4
          },
          {
            "id": "linear-i78wzn",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：maxr(A),r(B)",
            "latex": "\\max\\{r(A),r(B)\\}\n\\le r\\!\\begin{pmatrix}A\\\\B\\end{pmatrix}\n\\le r(A)+r(B).",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "纵向拼接同样满足",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 5
          },
          {
            "id": "linear-y3xeg0",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(PAQ)",
            "latex": "r(PAQ)=r(A).",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "若 P,Q 可逆，则",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 6
          },
          {
            "id": "linear-196fcv6",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(A)+r(B)-n",
            "latex": "r(A)+r(B)-n\\le r(AB)\\le\\min\\{r(A),r(B)\\}",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：矩阵秩的定义、子式判定与常用不等式。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 7
          },
          {
            "id": "linear-1ajeycy",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(AB)",
            "latex": "r(AB)=r(B).",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "适用于 A 有 n 列、B 有 n 行的情形。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 8
          },
          {
            "id": "linear-1qyczav",
            "parentAnchorId": "anchor-6exx6v",
            "legacyParentAnchorId": "linear-algebra-02-003-anchor-001",
            "title": "矩阵秩的定义、子式判定与常用不等式：r(AB)",
            "latex": "r(AB)=r(A).",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：矩阵秩的定义、子式判定与常用不等式。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-003",
            "order": 9
          }
        ]
      },
      {
        "id": "linear-algebra-02-004",
        "title": "高次幂",
        "body": "##### 矩阵高次幂、幂零矩阵与凯莱—哈密顿降幂\n\n优先顺序：\n\n1. 若 \\(A^2=cA\\)，则 <!-- formula {\"id\":\"linear-power-from-quadratic-relation\",\"title\":\"由 A²=cA 求高次幂\",\"aliases\":[\"矩阵高次幂\",\"A平方等于cA\"],\"context\":\"A²=cA 且 n 为正整数时，Aⁿ=cⁿ⁻¹A。\"} -->\\(A^n=c^{n-1}A\\)。\n2. 若 \\(A^k=O\\)，按幂零关系截断。\n3. 若能相似对角化，\\(A=P\\Lambda P^{-1}\\)，则 <!-- formula {\"id\":\"linear-power-by-diagonalization\",\"title\":\"相似对角化求矩阵高次幂\",\"aliases\":[\"矩阵高次幂\",\"对角化求幂\"],\"context\":\"A 可相似对角化时，先对角化，再将对角矩阵的各对角元分别乘方。\"} -->\\(A^n=P\\Lambda^nP^{-1}\\)。\n4. 低阶矩阵可用 \\(|\\lambda E-A|\\) 得到的特征方程，把高次幂降成低次幂。\n\n##### 幂等矩阵的高次幂\n\n若 \\(A^2=A\\)，则对任意正整数 \\(n\\)，都有 <!-- formula {\"id\":\"linear-idempotent-power\",\"title\":\"幂等矩阵的高次幂不变\",\"aliases\":[\"幂等矩阵\",\"A平方等于A\"],\"context\":\"A²=A 时，对所有正整数 n 均有 Aⁿ=A；但 A 不一定是单位矩阵。\"} -->\\(A^n=A\\)；不能由此推出 \\(A=E\\)。\n\n##### 幂零矩阵的逆\n\n若 \\(A^k=O\\)，则 \\(E-A\\) 可逆，且\n\n<!-- formula {\"id\":\"linear-i3durs\",\"title\":\"幂零矩阵的逆：(E-A)^-1\",\"aliases\":[],\"context\":\"若 A^k=O，则 E-A 可逆，且\"} -->\n\\[\n(E-A)^{-1}=E+A+A^2+\\cdots+A^{k-1}.\n\\]",
        "searchText": "高次幂 高次幂 高次幂 矩阵高次幂、幂零矩阵与凯莱—哈密顿降幂 优先顺序： 若 A^2=cA，则 A^n=c^ n-1 A。 若 A^k=O，按幂零关系截断。 若能相似对角化，A=P P^ -1 ，则 A^n=P ^nP^ -1 。 低阶矩阵可用 E-A 得到的特征方程，把高次幂降成低次幂。 幂等矩阵的高次幂 若 A^2=A，则对任意正整数 n，都有 A^n=A；不能由此推出 A=E。 幂零矩阵的逆 若 A^k=O，则 E-A 可逆，且 (E-A)^ -1 =E+A+A^2+ +A^ k-1 .",
        "summary": "矩阵高次幂、幂零矩阵与凯莱—哈密顿降幂 优先顺序： 若 A^2=cA，则 A^n=c^ n-1 A。 若 A^k=O，按幂零关系截断。 若能相似对角化，A=P P^ -1 ，则 A^n=P ^nP^ -1 。 低阶矩阵可用 E-A 得到的特征方程，把高次幂…",
        "anchors": [
          {
            "id": "anchor-xqcsjc",
            "legacyId": "linear-algebra-02-004-anchor-001",
            "title": "矩阵高次幂、幂零矩阵与凯莱—哈密顿降幂",
            "searchText": "矩阵高次幂、幂零矩阵与凯莱—哈密顿降幂 优先顺序： 若 A^2=cA，则 A^n=c^ n-1 A。 若 A^k=O，按幂零关系截断。 若能相似对角化，A=P P^ -1 ，则 A^n=P ^nP^ -1 。 低阶矩阵可用 E-A 得到的特征方程，把高次幂降成低次幂。",
            "summary": "优先顺序： 若 A^2=cA，则 A^n=c^ n-1 A。 若 A^k=O，按幂零关系截断。 若能相似对角化，A=P P^ -1 ，则 A^n=P ^nP^ -1 。 低阶矩阵可用 E-A 得到的特征方程，把高次幂降成低次幂。"
          },
          {
            "id": "anchor-1xtyyy4",
            "legacyId": "linear-algebra-02-004-anchor-002",
            "title": "幂等矩阵的高次幂",
            "searchText": "幂等矩阵的高次幂 若 A^2=A，则对任意正整数 n，都有 A^n=A；不能由此推出 A=E。",
            "summary": "若 A^2=A，则对任意正整数 n，都有 A^n=A；不能由此推出 A=E。"
          },
          {
            "id": "anchor-1mtrtso",
            "legacyId": "linear-algebra-02-004-anchor-003",
            "title": "幂零矩阵的逆",
            "searchText": "幂零矩阵的逆 若 A^k=O，则 E-A 可逆，且 (E-A)^ -1 =E+A+A^2+ +A^ k-1 .",
            "summary": "若 A^k=O，则 E-A 可逆，且 (E-A)^ -1 =E+A+A^2+ +A^ k-1 ."
          }
        ],
        "formulas": [
          {
            "id": "linear-power-from-quadratic-relation",
            "parentAnchorId": "anchor-xqcsjc",
            "legacyParentAnchorId": "linear-algebra-02-004-anchor-001",
            "title": "由 A²=cA 求高次幂",
            "latex": "A^n=c^{n-1}A",
            "sourceBlockIndex": 1,
            "searchAliases": [
              "矩阵高次幂",
              "A平方等于cA"
            ],
            "context": "A²=cA 且 n 为正整数时，Aⁿ=cⁿ⁻¹A。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-004",
            "order": 0
          },
          {
            "id": "linear-power-by-diagonalization",
            "parentAnchorId": "anchor-xqcsjc",
            "legacyParentAnchorId": "linear-algebra-02-004-anchor-001",
            "title": "相似对角化求矩阵高次幂",
            "latex": "A^n=P\\Lambda^nP^{-1}",
            "sourceBlockIndex": 4,
            "searchAliases": [
              "矩阵高次幂",
              "对角化求幂"
            ],
            "context": "A 可相似对角化时，先对角化，再将对角矩阵的各对角元分别乘方。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-004",
            "order": 1
          },
          {
            "id": "linear-idempotent-power",
            "parentAnchorId": "anchor-1xtyyy4",
            "legacyParentAnchorId": "linear-algebra-02-004-anchor-002",
            "title": "幂等矩阵的高次幂不变",
            "latex": "A^n=A",
            "sourceBlockIndex": 8,
            "searchAliases": [
              "幂等矩阵",
              "A平方等于A"
            ],
            "context": "A²=A 时，对所有正整数 n 均有 Aⁿ=A；但 A 不一定是单位矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-004",
            "order": 2
          },
          {
            "id": "linear-i3durs",
            "parentAnchorId": "anchor-1mtrtso",
            "legacyParentAnchorId": "linear-algebra-02-004-anchor-003",
            "title": "幂零矩阵的逆：(E-A)^-1",
            "latex": "(E-A)^{-1}=E+A+A^2+\\cdots+A^{k-1}.",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "若 A^k=O，则 E-A 可逆，且",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-004",
            "order": 3
          }
        ]
      },
      {
        "id": "linear-algebra-02-005",
        "title": "初等变换与初等矩阵",
        "body": "##### 初等行列变换、初等矩阵及其逆矩阵\n\n- 左乘初等矩阵，相当于对原矩阵作同样的行变换。\n- 右乘初等矩阵，相当于作同样的列变换。\n- 交换型初等矩阵的逆还是自身；倍乘型把倍数换成倒数；倍加型把倍数换成相反数。\n- 可逆矩阵一定能写成若干初等矩阵的乘积。",
        "searchText": "初等变换与初等矩阵 初等变换与初等矩阵 初等变换与初等矩阵 初等行列变换、初等矩阵及其逆矩阵 左乘初等矩阵，相当于对原矩阵作同样的行变换。 右乘初等矩阵，相当于作同样的列变换。 交换型初等矩阵的逆还是自身；倍乘型把倍数换成倒数；倍加型把倍数换成相反数。 可逆矩阵一定能写成若干初等矩阵的乘积。",
        "summary": "初等行列变换、初等矩阵及其逆矩阵 左乘初等矩阵，相当于对原矩阵作同样的行变换。 右乘初等矩阵，相当于作同样的列变换。 交换型初等矩阵的逆还是自身；倍乘型把倍数换成倒数；倍加型把倍数换成相反数。 可逆矩阵一定能写成若干初等矩阵的乘积。",
        "anchors": [
          {
            "id": "anchor-18y9zhv",
            "legacyId": "linear-algebra-02-005-anchor-001",
            "title": "初等行列变换、初等矩阵及其逆矩阵",
            "searchText": "初等行列变换、初等矩阵及其逆矩阵 左乘初等矩阵，相当于对原矩阵作同样的行变换。 右乘初等矩阵，相当于作同样的列变换。 交换型初等矩阵的逆还是自身；倍乘型把倍数换成倒数；倍加型把倍数换成相反数。 可逆矩阵一定能写成若干初等矩阵的乘积。",
            "summary": "左乘初等矩阵，相当于对原矩阵作同样的行变换。 右乘初等矩阵，相当于作同样的列变换。 交换型初等矩阵的逆还是自身；倍乘型把倍数换成倒数；倍加型把倍数换成相反数。 可逆矩阵一定能写成若干初等矩阵的乘积。"
          }
        ],
        "formulas": []
      },
      {
        "id": "linear-algebra-02-006",
        "title": "分块矩阵",
        "body": "##### 分块逆矩阵\n\n<!-- formula {\"id\":\"linear-flxcod\",\"title\":\"分块对角矩阵的逆\",\"aliases\":[],\"context\":\"所属知识点：分块逆矩阵。\"} -->\n\\[\n\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}^{-1}\n=\\begin{pmatrix}A^{-1}&O\\\\O&B^{-1}\\end{pmatrix}.\n\\]\n\n<!-- formula {\"id\":\"linear-bbya09\",\"title\":\"反对角分块矩阵的逆\",\"aliases\":[],\"context\":\"所属知识点：分块逆矩阵。\"} -->\n\\[\n\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}^{-1}\n=\\begin{pmatrix}O&B^{-1}\\\\A^{-1}&O\\end{pmatrix}.\n\\]\n\n<!-- formula {\"id\":\"linear-2led9l\",\"title\":\"分块上三角矩阵的逆\",\"aliases\":[],\"context\":\"所属知识点：分块逆矩阵。\"} -->\n\\[\n\\begin{pmatrix}A&C\\\\O&B\\end{pmatrix}^{-1}\n=\\begin{pmatrix}\nA^{-1}&-A^{-1}CB^{-1}\\\\\nO&B^{-1}\n\\end{pmatrix},\n\\]\n\n<!-- formula {\"id\":\"linear-3unhw7\",\"title\":\"分块下三角矩阵的逆\",\"aliases\":[],\"context\":\"所属知识点：分块逆矩阵。\"} -->\n\\[\n\\begin{pmatrix}A&O\\\\C&B\\end{pmatrix}^{-1}\n=\\begin{pmatrix}\nA^{-1}&O\\\\\n-B^{-1}CA^{-1}&B^{-1}\n\\end{pmatrix}.\n\\]\n\n若\n\n<!-- formula {\"id\":\"linear-7hn7uf-1\",\"title\":\"分块逆矩阵：M\",\"aliases\":[],\"context\":\"所属知识点：分块逆矩阵。\"} -->\n\\[\nM=\\begin{pmatrix}A&B\\\\C&D\\end{pmatrix},\\qquad\nS=D-CA^{-1}B,\n\\]\n\n且 \\(A,S\\) 都可逆，则\n\n<!-- formula {\"id\":\"linear-azx0j4\",\"title\":\"分块逆矩阵：M^-1\",\"aliases\":[],\"context\":\"且 A,S 都可逆，则\"} -->\n\\[\nM^{-1}=\n\\begin{pmatrix}\nA^{-1}+A^{-1}BS^{-1}CA^{-1}&-A^{-1}BS^{-1}\\\\\n-S^{-1}CA^{-1}&S^{-1}\n\\end{pmatrix}.\n\\]\n\n##### 分块矩阵的秩\n\n<!-- formula {\"id\":\"linear-4hi7tp\",\"title\":\"分块对角矩阵的秩\",\"aliases\":[],\"context\":\"所属知识点：分块矩阵的秩。\"} -->\n\\[\nr\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}=r(A)+r(B).\n\\]\n\n分块大小相容时，还有\n\n<!-- formula {\"id\":\"linear-14fonpd\",\"title\":\"反对角分块矩阵的秩\",\"aliases\":[],\"context\":\"分块大小相容时，还有\"} -->\n\\[\nr\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}=r(A)+r(B).\n\\]\n\n当 \\(A\\) 可逆时，分块消元给出\n\n<!-- formula {\"id\":\"linear-1qdanwj\",\"title\":\"用舒尔补求分块矩阵的秩\",\"aliases\":[],\"context\":\"当 A 可逆时，分块消元给出\"} -->\n\\[\nr\\begin{pmatrix}A&B\\\\C&D\\end{pmatrix}\n=r(A)+r(D-CA^{-1}B).\n\\]\n\n对一般分块矩阵，先用可逆的分块行、列变换消去非对角块；变换前后秩不变。分块计算仍需注意乘法顺序。",
        "searchText": "分块矩阵 分块矩阵 分块矩阵 分块逆矩阵 pmatrix A&O\\ &B pmatrix ^ -1 = pmatrix A^ -1 &O\\ &B^ -1 pmatrix . pmatrix O&A\\ &O pmatrix ^ -1 = pmatrix O&B^ -1 \\ ^ -1 &O pmatrix . pmatrix A&C\\ &B pmatrix ^ -1 = pmatrix A^ -1 &-A^ -1 CB^ -1 \\\\ O&B^ -1 pmatrix , pmatrix A&O\\ &B pmatrix ^ -1 = pmatrix A^ -1 &O\\\\ -B^ -1 CA^ -1 &B^ -1 pmatrix . 若 M= pmatrix A&B\\ &D pmatrix , S=D-CA^ -1 B, 且 A,S 都可逆，则 M^ -1 = pmatrix A^ -1 +A^ -1 BS^ -1 CA^ -1 &-A^ -1 BS^ -1 \\\\ -S^ -1 CA^ -1 &S^ -1 pmatrix . 分块矩阵的秩 r pmatrix A&O\\ &B pmatrix =r(A)+r(B). 分块大小相容时，还有 r pmatrix O&A\\ &O pmatrix =r(A)+r(B). 当 A 可逆时，分块消元给出 r pmatrix A&B\\ &D pmatrix =r(A)+r(D-CA^ -1 B). 对一般分块矩阵，先用可逆的分块行、列变换消去非对角块；变换前后秩不变。分块计算仍需注意乘法顺序。",
        "summary": "分块逆矩阵 pmatrix A&O\\ &B pmatrix ^ -1 = pmatrix A^ -1 &O\\ &B^ -1 pmatrix . pmatrix O&A\\ &O pmatrix ^ -1 = pmatrix O&B^ -1 \\ ^ -1 &O…",
        "anchors": [
          {
            "id": "anchor-1w7eg5d",
            "legacyId": "linear-algebra-02-006-anchor-001",
            "title": "分块逆矩阵",
            "searchText": "分块逆矩阵 pmatrix A&O\\ &B pmatrix ^ -1 = pmatrix A^ -1 &O\\ &B^ -1 pmatrix . pmatrix O&A\\ &O pmatrix ^ -1 = pmatrix O&B^ -1 \\ ^ -1 &O pmatrix . pmatrix A&C\\ &B pmatrix ^ -1 = pmatrix A^ -1 &-A^ -1 CB^ -1 \\\\ O&B^ -1 pmatrix , pmatrix A&O\\ &B pmatrix ^ -1 = pmatrix A^ -1 &O\\\\ -B^ -1 CA^ -1 &B^ -1 pmatrix . 若 M= pmatrix A&B\\ &D pmatrix , S=D-CA^ -1 B, 且 A,S 都可逆，则 M^ -1 = pmatrix A^ -1 +A^ -1 BS^ -1 CA^ -1 &-A^ -1 BS^ -1 \\\\ -S^ -1 CA^ -1 &S^ -1 pmatrix .",
            "summary": "pmatrix A&O\\ &B pmatrix ^ -1 = pmatrix A^ -1 &O\\ &B^ -1 pmatrix . pmatrix O&A\\ &O pmatrix ^ -1 = pmatrix O&B^ -1 \\ ^ -1 &O pmatr…"
          },
          {
            "id": "anchor-1fgtxmu",
            "legacyId": "linear-algebra-02-006-anchor-002",
            "title": "分块矩阵的秩",
            "searchText": "分块矩阵的秩 r pmatrix A&O\\ &B pmatrix =r(A)+r(B). 分块大小相容时，还有 r pmatrix O&A\\ &O pmatrix =r(A)+r(B). 当 A 可逆时，分块消元给出 r pmatrix A&B\\ &D pmatrix =r(A)+r(D-CA^ -1 B). 对一般分块矩阵，先用可逆的分块行、列变换消去非对角块；变换前后秩不变。分块计算仍需注意乘法顺序。",
            "summary": "r pmatrix A&O\\ &B pmatrix =r(A)+r(B). 分块大小相容时，还有 r pmatrix O&A\\ &O pmatrix =r(A)+r(B). 当 A 可逆时，分块消元给出 r pmatrix A&B\\ &D pmatrix …"
          }
        ],
        "formulas": [
          {
            "id": "linear-flxcod",
            "parentAnchorId": "anchor-1w7eg5d",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-001",
            "title": "分块对角矩阵的逆",
            "latex": "\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}^{-1}\n=\\begin{pmatrix}A^{-1}&O\\\\O&B^{-1}\\end{pmatrix}.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：分块逆矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 0
          },
          {
            "id": "linear-bbya09",
            "parentAnchorId": "anchor-1w7eg5d",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-001",
            "title": "反对角分块矩阵的逆",
            "latex": "\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}^{-1}\n=\\begin{pmatrix}O&B^{-1}\\\\A^{-1}&O\\end{pmatrix}.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：分块逆矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 1
          },
          {
            "id": "linear-2led9l",
            "parentAnchorId": "anchor-1w7eg5d",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-001",
            "title": "分块上三角矩阵的逆",
            "latex": "\\begin{pmatrix}A&C\\\\O&B\\end{pmatrix}^{-1}\n=\\begin{pmatrix}\nA^{-1}&-A^{-1}CB^{-1}\\\\\nO&B^{-1}\n\\end{pmatrix},",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：分块逆矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 2
          },
          {
            "id": "linear-3unhw7",
            "parentAnchorId": "anchor-1w7eg5d",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-001",
            "title": "分块下三角矩阵的逆",
            "latex": "\\begin{pmatrix}A&O\\\\C&B\\end{pmatrix}^{-1}\n=\\begin{pmatrix}\nA^{-1}&O\\\\\n-B^{-1}CA^{-1}&B^{-1}\n\\end{pmatrix}.",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：分块逆矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 3
          },
          {
            "id": "linear-7hn7uf-1",
            "parentAnchorId": "anchor-1w7eg5d",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-001",
            "title": "分块逆矩阵：M",
            "latex": "M=\\begin{pmatrix}A&B\\\\C&D\\end{pmatrix},\\qquad\nS=D-CA^{-1}B,",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：分块逆矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 4
          },
          {
            "id": "linear-azx0j4",
            "parentAnchorId": "anchor-1w7eg5d",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-001",
            "title": "分块逆矩阵：M^-1",
            "latex": "M^{-1}=\n\\begin{pmatrix}\nA^{-1}+A^{-1}BS^{-1}CA^{-1}&-A^{-1}BS^{-1}\\\\\n-S^{-1}CA^{-1}&S^{-1}\n\\end{pmatrix}.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "且 A,S 都可逆，则",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 5
          },
          {
            "id": "linear-4hi7tp",
            "parentAnchorId": "anchor-1fgtxmu",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-002",
            "title": "分块对角矩阵的秩",
            "latex": "r\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}=r(A)+r(B).",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：分块矩阵的秩。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 6
          },
          {
            "id": "linear-14fonpd",
            "parentAnchorId": "anchor-1fgtxmu",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-002",
            "title": "反对角分块矩阵的秩",
            "latex": "r\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}=r(A)+r(B).",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "分块大小相容时，还有",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 7
          },
          {
            "id": "linear-1qdanwj",
            "parentAnchorId": "anchor-1fgtxmu",
            "legacyParentAnchorId": "linear-algebra-02-006-anchor-002",
            "title": "用舒尔补求分块矩阵的秩",
            "latex": "r\\begin{pmatrix}A&B\\\\C&D\\end{pmatrix}\n=r(A)+r(D-CA^{-1}B).",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "当 A 可逆时，分块消元给出",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-006",
            "order": 8
          }
        ]
      },
      {
        "id": "linear-algebra-02-007",
        "title": "$AB$ 关系",
        "body": "##### $AB=E$\n\n同阶方阵若 \\(AB=E\\)，则 \\(A,B\\) 都可逆，且\n\n<!-- formula {\"id\":\"linear-rhyze5-1\",\"title\":\"$AB=E$：B\",\"aliases\":[],\"context\":\"同阶方阵若 AB=E，则 A,B 都可逆，且\"} -->\n\\[\nB=A^{-1},\\qquad BA=E.\n\\]\n\n##### $AB=O$\n\n<!-- formula {\"id\":\"linear-140mohj\",\"title\":\"$AB=O$：r(A)+r(B)\",\"aliases\":[],\"context\":\"所属知识点：$AB=O$。\"} -->\n\\[\nr(A)+r(B)\\le n.\n\\]\n\n若其中一个 \\(n\\) 阶方阵可逆，则另一个只能是零矩阵。按列看，\\(B\\) 的每一列都是 \\(Ax=0\\) 的解；按行看，\\(A\\) 的每一行与 \\(B\\) 的各列相乘为零。\n\n##### $AB=C$\n\n<!-- formula {\"items\":[{\"id\":\"linear-1fh868z-1\",\"title\":\"$AB=C$：r(C)\",\"aliases\":[],\"context\":\"所属知识点：$AB=C$。\",\"latex\":\"r(C)\\\\le r(A)\"},{\"id\":\"linear-1fh868z-2\",\"title\":\"$AB=C$：r(C)\",\"aliases\":[],\"context\":\"所属知识点：$AB=C$。\",\"latex\":\"r(C)\\\\le r(B)\"}]} -->\n\\[\nr(C)\\le r(A),\\qquad r(C)\\le r(B).\n\\]\n\n若 \\(A\\) 可逆，<!-- formula {\"id\":\"linear-solve-ab-equals-c-for-b\",\"title\":\"AB=C 且 A 可逆时求 B\",\"aliases\":[\"矩阵方程求B\",\"左乘逆矩阵\"],\"context\":\"A 可逆时，等式两边左乘 A⁻¹。\"} -->\\(B=A^{-1}C\\)；若 \\(B\\) 可逆，<!-- formula {\"id\":\"linear-solve-ab-equals-c-for-a\",\"title\":\"AB=C 且 B 可逆时求 A\",\"aliases\":[\"矩阵方程求A\",\"右乘逆矩阵\"],\"context\":\"B 可逆时，等式两边右乘 B⁻¹。\"} -->\\(A=CB^{-1}\\)。不可逆时，把未知矩阵按列拆开，逐列解线性方程组。\n\n##### 矩阵乘法不能随意约去\n\n\\(AB=AC\\) 一般不能推出 \\(B=C\\)。只有当左侧的 \\(A\\) 是可逆方阵时，才能在等式两边左乘 \\(A^{-1}\\)，得到 \\(B=C\\)。",
        "searchText": "AB 关系 AB 关系 AB 关系 AB=E 同阶方阵若 AB=E，则 A,B 都可逆，且 B=A^ -1 , BA=E. AB=O r(A)+r(B)≤ n. 若其中一个 n 阶方阵可逆，则另一个只能是零矩阵。按列看，B 的每一列都是 Ax=0 的解；按行看，A 的每一行与 B 的各列相乘为零。 AB=C r(C)≤ r(A), r(C)≤ r(B). 若 A 可逆， B=A^ -1 C；若 B 可逆， A=CB^ -1 。不可逆时，把未知矩阵按列拆开，逐列解线性方程组。 矩阵乘法不能随意约去 AB=AC 一般不能推出 B=C。只有当左侧的 A 是可逆方阵时，才能在等式两边左乘 A^ -1 ，得到 B=C。",
        "summary": "AB=E 同阶方阵若 AB=E，则 A,B 都可逆，且 B=A^ -1 , BA=E. AB=O r(A)+r(B)≤ n. 若其中一个 n 阶方阵可逆，则另一个只能是零矩阵。按列看，B 的每一列都是 Ax=0 的解；按行看，A 的每一行与 B 的各列相乘…",
        "anchors": [
          {
            "id": "anchor-hn0so9",
            "legacyId": "linear-algebra-02-007-anchor-001",
            "title": "$AB=E$",
            "searchText": "AB=E 同阶方阵若 AB=E，则 A,B 都可逆，且 B=A^ -1 , BA=E.",
            "summary": "同阶方阵若 AB=E，则 A,B 都可逆，且 B=A^ -1 , BA=E."
          },
          {
            "id": "anchor-175f3w3",
            "legacyId": "linear-algebra-02-007-anchor-002",
            "title": "$AB=O$",
            "searchText": "AB=O r(A)+r(B)≤ n. 若其中一个 n 阶方阵可逆，则另一个只能是零矩阵。按列看，B 的每一列都是 Ax=0 的解；按行看，A 的每一行与 B 的各列相乘为零。",
            "summary": "r(A)+r(B)≤ n. 若其中一个 n 阶方阵可逆，则另一个只能是零矩阵。按列看，B 的每一列都是 Ax=0 的解；按行看，A 的每一行与 B 的各列相乘为零。"
          },
          {
            "id": "anchor-giw2wf",
            "legacyId": "linear-algebra-02-007-anchor-003",
            "title": "$AB=C$",
            "searchText": "AB=C r(C)≤ r(A), r(C)≤ r(B). 若 A 可逆， B=A^ -1 C；若 B 可逆， A=CB^ -1 。不可逆时，把未知矩阵按列拆开，逐列解线性方程组。",
            "summary": "r(C)≤ r(A), r(C)≤ r(B). 若 A 可逆， B=A^ -1 C；若 B 可逆， A=CB^ -1 。不可逆时，把未知矩阵按列拆开，逐列解线性方程组。"
          },
          {
            "id": "anchor-5mrg4g",
            "legacyId": "linear-algebra-02-007-anchor-004",
            "title": "矩阵乘法不能随意约去",
            "searchText": "矩阵乘法不能随意约去 AB=AC 一般不能推出 B=C。只有当左侧的 A 是可逆方阵时，才能在等式两边左乘 A^ -1 ，得到 B=C。",
            "summary": "AB=AC 一般不能推出 B=C。只有当左侧的 A 是可逆方阵时，才能在等式两边左乘 A^ -1 ，得到 B=C。"
          }
        ],
        "formulas": [
          {
            "id": "linear-rhyze5-1",
            "parentAnchorId": "anchor-hn0so9",
            "legacyParentAnchorId": "linear-algebra-02-007-anchor-001",
            "title": "$AB=E$：B",
            "latex": "B=A^{-1},\\qquad BA=E.",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "同阶方阵若 AB=E，则 A,B 都可逆，且",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-007",
            "order": 0
          },
          {
            "id": "linear-140mohj",
            "parentAnchorId": "anchor-175f3w3",
            "legacyParentAnchorId": "linear-algebra-02-007-anchor-002",
            "title": "$AB=O$：r(A)+r(B)",
            "latex": "r(A)+r(B)\\le n.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：$AB=O$。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-007",
            "order": 1
          },
          {
            "id": "linear-1fh868z-1",
            "parentAnchorId": "anchor-giw2wf",
            "legacyParentAnchorId": "linear-algebra-02-007-anchor-003",
            "title": "$AB=C$：r(C)",
            "latex": "r(C)\\le r(A)",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：$AB=C$。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-007",
            "order": 2
          },
          {
            "id": "linear-1fh868z-2",
            "parentAnchorId": "anchor-giw2wf",
            "legacyParentAnchorId": "linear-algebra-02-007-anchor-003",
            "title": "$AB=C$：r(C)",
            "latex": "r(C)\\le r(B)",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：$AB=C$。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-007",
            "order": 3
          },
          {
            "id": "linear-solve-ab-equals-c-for-b",
            "parentAnchorId": "anchor-giw2wf",
            "legacyParentAnchorId": "linear-algebra-02-007-anchor-003",
            "title": "AB=C 且 A 可逆时求 B",
            "latex": "B=A^{-1}C",
            "sourceBlockIndex": 14,
            "searchAliases": [
              "矩阵方程求B",
              "左乘逆矩阵"
            ],
            "context": "A 可逆时，等式两边左乘 A⁻¹。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-007",
            "order": 4
          },
          {
            "id": "linear-solve-ab-equals-c-for-a",
            "parentAnchorId": "anchor-giw2wf",
            "legacyParentAnchorId": "linear-algebra-02-007-anchor-003",
            "title": "AB=C 且 B 可逆时求 A",
            "latex": "A=CB^{-1}",
            "sourceBlockIndex": 16,
            "searchAliases": [
              "矩阵方程求A",
              "右乘逆矩阵"
            ],
            "context": "B 可逆时，等式两边右乘 B⁻¹。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-007",
            "order": 5
          }
        ]
      },
      {
        "id": "linear-algebra-02-008",
        "title": "矩阵分解",
        "body": "##### 相似对角化分解\n\n<!-- formula {\"id\":\"linear-dkhlww\",\"title\":\"相似对角化分解：A\",\"aliases\":[],\"context\":\"所属知识点：相似对角化分解。\"} -->\n\\[\nA=P\\Lambda P^{-1},\n\\]\n\n其中 \\(P\\) 的列是与 \\(\\Lambda\\) 对角元顺序一致的特征向量。\n\n##### 实对称矩阵分解\n\n<!-- formula {\"id\":\"linear-10yg4pq\",\"title\":\"实对称矩阵分解：A\",\"aliases\":[],\"context\":\"所属知识点：实对称矩阵分解。\"} -->\n\\[\nA=Q\\Lambda Q^T,\n\\]\n\n其中 \\(Q\\) 正交，\\(\\Lambda\\) 为实特征值组成的对角矩阵。",
        "searchText": "矩阵分解 矩阵分解 矩阵分解 相似对角化分解 A=P P^ -1 , 其中 P 的列是与 对角元顺序一致的特征向量。 实对称矩阵分解 A=Q Q^T, 其中 Q 正交， 为实特征值组成的对角矩阵。",
        "summary": "相似对角化分解 A=P P^ -1 , 其中 P 的列是与 对角元顺序一致的特征向量。 实对称矩阵分解 A=Q Q^T, 其中 Q 正交， 为实特征值组成的对角矩阵。",
        "anchors": [
          {
            "id": "anchor-7cc37g",
            "legacyId": "linear-algebra-02-008-anchor-001",
            "title": "相似对角化分解",
            "searchText": "相似对角化分解 A=P P^ -1 , 其中 P 的列是与 对角元顺序一致的特征向量。",
            "summary": "A=P P^ -1 , 其中 P 的列是与 对角元顺序一致的特征向量。"
          },
          {
            "id": "anchor-20es8i",
            "legacyId": "linear-algebra-02-008-anchor-002",
            "title": "实对称矩阵分解",
            "searchText": "实对称矩阵分解 A=Q Q^T, 其中 Q 正交， 为实特征值组成的对角矩阵。",
            "summary": "A=Q Q^T, 其中 Q 正交， 为实特征值组成的对角矩阵。"
          }
        ],
        "formulas": [
          {
            "id": "linear-dkhlww",
            "parentAnchorId": "anchor-7cc37g",
            "legacyParentAnchorId": "linear-algebra-02-008-anchor-001",
            "title": "相似对角化分解：A",
            "latex": "A=P\\Lambda P^{-1},",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：相似对角化分解。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-008",
            "order": 0
          },
          {
            "id": "linear-10yg4pq",
            "parentAnchorId": "anchor-20es8i",
            "legacyParentAnchorId": "linear-algebra-02-008-anchor-002",
            "title": "实对称矩阵分解：A",
            "latex": "A=Q\\Lambda Q^T,",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：实对称矩阵分解。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-008",
            "order": 1
          }
        ]
      },
      {
        "id": "linear-algebra-02-009",
        "title": "其他题型",
        "body": "##### 矩阵等价、标准形与秩的判定\n\n同型矩阵 \\(A,B\\) 等价，是指存在可逆矩阵 \\(P,Q\\)，使\n\n<!-- formula {\"id\":\"linear-164t56d\",\"title\":\"矩阵等价、标准形与秩的判定：PAQ\",\"aliases\":[],\"context\":\"同型矩阵 A,B 等价，是指存在可逆矩阵 P,Q，使\"} -->\n\\[\nPAQ=B.\n\\]\n\n<!-- formula {\"id\":\"linear-1uqujd\",\"title\":\"矩阵等价、标准形与秩的判定：A 与 B 等价\",\"aliases\":[],\"context\":\"所属知识点：矩阵等价、标准形与秩的判定。\"} -->\n\\[\nA\\text{ 与 }B\\text{ 等价}\n\\Longleftrightarrow r(A)=r(B).\n\\]\n\n任意秩为 \\(r\\) 的 \\(m\\times n\\) 矩阵都等价于\n\n<!-- formula {\"id\":\"linear-fsfdbz\",\"title\":\"矩阵等价的秩标准形\",\"aliases\":[],\"context\":\"任意秩为 r 的 m\\\\times n 矩阵都等价于\"} -->\n\\[\n\\begin{pmatrix}E_r&O\\\\O&O\\end{pmatrix}.\n\\]\n\n##### 矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵\n\n<!-- formula {\"items\":[{\"id\":\"linear-1qixxyd-1\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(A+B)^T\",\"aliases\":[],\"context\":\"所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。\",\"latex\":\"(A+B)^T=A^T+B^T\"},{\"id\":\"linear-1qixxyd-2\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(kA)^T\",\"aliases\":[],\"context\":\"所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。\",\"latex\":\"(kA)^T=kA^T\"}]} -->\n\\[\n(A+B)^T=A^T+B^T,\\qquad (kA)^T=kA^T,\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-6bvnif-1\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(AB)^T\",\"aliases\":[],\"context\":\"所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。\",\"latex\":\"(AB)^T=B^TA^T\"},{\"id\":\"linear-6bvnif-2\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(A^T)^T\",\"aliases\":[],\"context\":\"所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。\",\"latex\":\"(A^T)^T=A\"}]} -->\n\\[\n(AB)^T=B^TA^T,\\qquad (A^T)^T=A.\n\\]\n\n矩阵乘法满足结合律、分配律，一般不满足交换律。实对称矩阵满足 \\(A^T=A\\)，实反对称矩阵满足 \\(A^T=-A\\)。任意实方阵都可写成\n\n<!-- formula {\"id\":\"linear-zdonq8\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：A\",\"aliases\":[],\"context\":\"矩阵乘法满足结合律、分配律，一般不满足交换律。实对称矩阵满足 A^T=A，实反对称矩阵满足 A^T=-A。任意实方阵都可写成\"} -->\n\\[\nA=\\frac{A+A^T}{2}+\\frac{A-A^T}{2},\n\\]\n\n即“一个实对称矩阵＋一个实反对称矩阵”。\n\n迹的运算公式：\n\n<!-- formula {\"items\":[{\"id\":\"linear-8cldhh-1\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(A+B)\",\"aliases\":[],\"context\":\"迹的运算公式：\",\"latex\":\"\\\\operatorname{tr}(A+B)=\\\\operatorname{tr}(A)+\\\\operatorname{tr}(B)\"},{\"id\":\"linear-8cldhh-2\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(kA)\",\"aliases\":[],\"context\":\"迹的运算公式：\",\"latex\":\"\\\\operatorname{tr}(kA)=k\\\\operatorname{tr}(A)\"}]} -->\n\\[\n\\operatorname{tr}(A+B)=\\operatorname{tr}(A)+\\operatorname{tr}(B),\\qquad\n\\operatorname{tr}(kA)=k\\operatorname{tr}(A),\n\\]\n\n<!-- formula {\"items\":[{\"id\":\"linear-7q0xpz-1\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(AB)\",\"aliases\":[],\"context\":\"所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。\",\"latex\":\"\\\\operatorname{tr}(AB)=\\\\operatorname{tr}(BA)\"},{\"id\":\"linear-7q0xpz-2\",\"title\":\"矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(P^-1AP)\",\"aliases\":[],\"context\":\"所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。\",\"latex\":\"\\\\operatorname{tr}(P^{-1}AP)=\\\\operatorname{tr}(A)\"}]} -->\n\\[\n\\operatorname{tr}(AB)=\\operatorname{tr}(BA),\\qquad\n\\operatorname{tr}(P^{-1}AP)=\\operatorname{tr}(A).\n\\]\n\n##### 正交矩阵、幂零矩阵与秩一矩阵常用结论\n\n- 各行元素之和相同为 \\(s\\) 时，\\(s\\) 是特征值，\\((1,\\ldots,1)^T\\) 是对应特征向量。\n- 同型矩阵 \\(A,B\\) 等价，当且仅当 \\(r(A)=r(B)\\)。\n- \\(AB\\) 与 \\(BA\\) 为同阶方阵时有相同的特征多项式；若 \\(A\\) 可逆，则 <!-- formula {\"id\":\"linear-ab-ba-similar-when-a-invertible\",\"title\":\"A 可逆时 AB 与 BA 相似\",\"aliases\":[\"AB与BA相似\",\"矩阵乘积交换相似\"],\"context\":\"A、B 为同阶方阵且 A 可逆，BA=A⁻¹(AB)A。\"} -->\\(AB\\sim BA\\)。\n- 把式子“化成 \\(E\\)”常用 \\(AA^{-1}=E\\) 或 \\(A^{-1}A=E\\)，乘法顺序不能换。\n- 正交矩阵满足 \\(Q^TQ=QQ^T=E\\)，因此 <!-- formula {\"id\":\"linear-orthogonal-inverse-transpose\",\"title\":\"正交矩阵的逆等于转置\",\"aliases\":[\"正交矩阵求逆\",\"Q逆等于Q转置\"],\"context\":\"Q 为正交矩阵时成立。\"} -->\\(Q^{-1}=Q^T\\)，且 <!-- formula {\"id\":\"linear-orthogonal-determinant-sign\",\"title\":\"正交矩阵行列式为正负一\",\"aliases\":[\"正交矩阵行列式\",\"正交矩阵正负一\"],\"context\":\"Q 为实正交矩阵时，行列式只能取 1 或 -1。\"} -->\\(|Q|=\\pm1\\)。\n- 正交矩阵的行向量、列向量分别都是标准正交向量组，并保持长度与内积：\n  \\[\n  \\|Qx\\|=\\|x\\|,\\qquad (Qx)^T(Qy)=x^Ty.\n  \\]\n- 实反对称矩阵满足 \\(A^T=-A\\)，主对角元全为零；奇数阶实反对称矩阵行列式为零。\n- 秩一矩阵 \\(A=uv^T\\ne O\\) 满足 <!-- formula {\"id\":\"linear-rank-one-square-trace\",\"title\":\"秩一矩阵平方等于迹乘自身\",\"aliases\":[\"秩一矩阵平方\",\"迹乘矩阵\"],\"context\":\"非零秩一方阵 A=uvᵀ，且 tr(A)=vᵀu。\"} -->\\(A^2=(v^Tu)A=\\operatorname{tr}(A)A\\)。\n\n秩一方阵 \\(A=uv^T\\ne O\\) 还满足\n\n<!-- formula {\"id\":\"linear-btsj4n-1\",\"title\":\"正交矩阵、幂零矩阵与秩一矩阵常用结论：A^m\",\"aliases\":[],\"context\":\"秩一方阵 A=uv^T\\\\ne O 还满足\"} -->\n\\[\nA^m=[\\operatorname{tr}(A)]^{m-1}A\\quad(m\\ge1),\n\\]\n\n其特征值为 \\(\\operatorname{tr}(A)\\) 和 \\(n-1\\) 个 \\(0\\)（按代数重数计）。",
        "searchText": "其他题型 其他题型 其他题型 矩阵等价、标准形与秩的判定 同型矩阵 A,B 等价，是指存在可逆矩阵 P,Q，使 PAQ=B. A 与 B 等价 r(A)=r(B). 任意秩为 r 的 m n 矩阵都等价于 pmatrix E r&O\\ &O pmatrix . 矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵 (A+B)^T=A^T+B^T, (kA)^T=kA^T, (AB)^T=B^TA^T, (A^T)^T=A. 矩阵乘法满足结合律、分配律，一般不满足交换律。实对称矩阵满足 A^T=A，实反对称矩阵满足 A^T=-A。任意实方阵都可写成 A= A+A^T 2 + A-A^T 2 , 即“一个实对称矩阵＋一个实反对称矩阵”。 迹的运算公式： tr (A+B)= tr (A)+ tr (B), tr (kA)=k tr (A), tr (AB)= tr (BA), tr (P^ -1 AP)= tr (A). 正交矩阵、幂零矩阵与秩一矩阵常用结论 各行元素之和相同为 s 时，s 是特征值，(1, ,1)^T 是对应特征向量。 同型矩阵 A,B 等价，当且仅当 r(A)=r(B)。 AB 与 BA 为同阶方阵时有相同的特征多项式；若 A 可逆，则 AB BA。 把式子“化成 E”常用 AA^ -1 =E 或 A^ -1 A=E，乘法顺序不能换。 正交矩阵满足 Q^TQ=QQ^T=E，因此 Q^ -1 =Q^T，且 Q = 1。 正交矩阵的行向量、列向量分别都是标准正交向量组，并保持长度与内积： \\ Qx\\ =\\ x\\ , (Qx)^T(Qy)=x^Ty. 实反对称矩阵满足 A^T=-A，主对角元全为零；奇数阶实反对称矩阵行列式为零。 秩一矩阵 A=uv^T≠ O 满足 A^2=(v^Tu)A= tr (A)A。 秩一方阵 A=uv^T≠ O 还满足 A^m=[ tr (A)]^ m-1 A (m≥1), 其特征值为 tr (A) 和 n-1 个 0（按代数重数计）。",
        "summary": "矩阵等价、标准形与秩的判定 同型矩阵 A,B 等价，是指存在可逆矩阵 P,Q，使 PAQ=B. A 与 B 等价 r(A)=r(B). 任意秩为 r 的 m n 矩阵都等价于 pmatrix E r&O\\ &O pmatrix . 矩阵转置、迹、对称矩阵、…",
        "anchors": [
          {
            "id": "anchor-7tiisf",
            "legacyId": "linear-algebra-02-009-anchor-001",
            "title": "矩阵等价、标准形与秩的判定",
            "searchText": "矩阵等价、标准形与秩的判定 同型矩阵 A,B 等价，是指存在可逆矩阵 P,Q，使 PAQ=B. A 与 B 等价 r(A)=r(B). 任意秩为 r 的 m n 矩阵都等价于 pmatrix E r&O\\ &O pmatrix .",
            "summary": "同型矩阵 A,B 等价，是指存在可逆矩阵 P,Q，使 PAQ=B. A 与 B 等价 r(A)=r(B). 任意秩为 r 的 m n 矩阵都等价于 pmatrix E r&O\\ &O pmatrix ."
          },
          {
            "id": "anchor-1ub8g42",
            "legacyId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵",
            "searchText": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵 (A+B)^T=A^T+B^T, (kA)^T=kA^T, (AB)^T=B^TA^T, (A^T)^T=A. 矩阵乘法满足结合律、分配律，一般不满足交换律。实对称矩阵满足 A^T=A，实反对称矩阵满足 A^T=-A。任意实方阵都可写成 A= A+A^T 2 + A-A^T 2 , 即“一个实对称矩阵＋一个实反对称矩阵”。 迹的运算公式： tr (A+B)= tr (A)+ tr (B), tr (kA)=k tr (A), tr (AB)= tr (BA), tr (P^ -1 AP)= tr (A).",
            "summary": "(A+B)^T=A^T+B^T, (kA)^T=kA^T, (AB)^T=B^TA^T, (A^T)^T=A. 矩阵乘法满足结合律、分配律，一般不满足交换律。实对称矩阵满足 A^T=A，实反对称矩阵满足 A^T=-A。任意实方阵都可写成 A= A+A^T …"
          },
          {
            "id": "anchor-doq5h6",
            "legacyId": "linear-algebra-02-009-anchor-003",
            "title": "正交矩阵、幂零矩阵与秩一矩阵常用结论",
            "searchText": "正交矩阵、幂零矩阵与秩一矩阵常用结论 各行元素之和相同为 s 时，s 是特征值，(1, ,1)^T 是对应特征向量。 同型矩阵 A,B 等价，当且仅当 r(A)=r(B)。 AB 与 BA 为同阶方阵时有相同的特征多项式；若 A 可逆，则 AB BA。 把式子“化成 E”常用 AA^ -1 =E 或 A^ -1 A=E，乘法顺序不能换。 正交矩阵满足 Q^TQ=QQ^T=E，因此 Q^ -1 =Q^T，且 Q = 1。 正交矩阵的行向量、列向量分别都是标准正交向量组，并保持长度与内积： \\ Qx\\ =\\ x\\ , (Qx)^T(Qy)=x^Ty. 实反对称矩阵满足 A^T=-A，主对角元全为零；奇数阶实反对称矩阵行列式为零。 秩一矩阵 A=uv^T≠ O 满足 A^2=(v^Tu)A= tr (A)A。 秩一方阵 A=uv^T≠ O 还满足 A^m=[ tr (A)]^ m-1 A (m≥1), 其特征值为 tr (A) 和 n-1 个 0（按代数重数计）。",
            "summary": "各行元素之和相同为 s 时，s 是特征值，(1, ,1)^T 是对应特征向量。 同型矩阵 A,B 等价，当且仅当 r(A)=r(B)。 AB 与 BA 为同阶方阵时有相同的特征多项式；若 A 可逆，则 AB BA。 把式子“化成 E”常用 AA^ -1 =…"
          }
        ],
        "formulas": [
          {
            "id": "linear-164t56d",
            "parentAnchorId": "anchor-7tiisf",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-001",
            "title": "矩阵等价、标准形与秩的判定：PAQ",
            "latex": "PAQ=B.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "同型矩阵 A,B 等价，是指存在可逆矩阵 P,Q，使",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 0
          },
          {
            "id": "linear-1uqujd",
            "parentAnchorId": "anchor-7tiisf",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-001",
            "title": "矩阵等价、标准形与秩的判定：A 与 B 等价",
            "latex": "A\\text{ 与 }B\\text{ 等价}\n\\Longleftrightarrow r(A)=r(B).",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：矩阵等价、标准形与秩的判定。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 1
          },
          {
            "id": "linear-fsfdbz",
            "parentAnchorId": "anchor-7tiisf",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-001",
            "title": "矩阵等价的秩标准形",
            "latex": "\\begin{pmatrix}E_r&O\\\\O&O\\end{pmatrix}.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "任意秩为 r 的 m\\times n 矩阵都等价于",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 2
          },
          {
            "id": "linear-1qixxyd-1",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(A+B)^T",
            "latex": "(A+B)^T=A^T+B^T",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 3
          },
          {
            "id": "linear-1qixxyd-2",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(kA)^T",
            "latex": "(kA)^T=kA^T",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 4
          },
          {
            "id": "linear-6bvnif-1",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(AB)^T",
            "latex": "(AB)^T=B^TA^T",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 5
          },
          {
            "id": "linear-6bvnif-2",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：(A^T)^T",
            "latex": "(A^T)^T=A",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 6
          },
          {
            "id": "linear-zdonq8",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：A",
            "latex": "A=\\frac{A+A^T}{2}+\\frac{A-A^T}{2},",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "矩阵乘法满足结合律、分配律，一般不满足交换律。实对称矩阵满足 A^T=A，实反对称矩阵满足 A^T=-A。任意实方阵都可写成",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 7
          },
          {
            "id": "linear-8cldhh-1",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(A+B)",
            "latex": "\\operatorname{tr}(A+B)=\\operatorname{tr}(A)+\\operatorname{tr}(B)",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "迹的运算公式：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 8
          },
          {
            "id": "linear-8cldhh-2",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(kA)",
            "latex": "\\operatorname{tr}(kA)=k\\operatorname{tr}(A)",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "迹的运算公式：",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 9
          },
          {
            "id": "linear-7q0xpz-1",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(AB)",
            "latex": "\\operatorname{tr}(AB)=\\operatorname{tr}(BA)",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 10
          },
          {
            "id": "linear-7q0xpz-2",
            "parentAnchorId": "anchor-1ub8g42",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-002",
            "title": "矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵：tr(P^-1AP)",
            "latex": "\\operatorname{tr}(P^{-1}AP)=\\operatorname{tr}(A)",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "所属知识点：矩阵转置、迹、对称矩阵、反对称矩阵与正交矩阵。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 11
          },
          {
            "id": "linear-ab-ba-similar-when-a-invertible",
            "parentAnchorId": "anchor-doq5h6",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-003",
            "title": "A 可逆时 AB 与 BA 相似",
            "latex": "AB\\sim BA",
            "sourceBlockIndex": 22,
            "searchAliases": [
              "AB与BA相似",
              "矩阵乘积交换相似"
            ],
            "context": "A、B 为同阶方阵且 A 可逆，BA=A⁻¹(AB)A。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 12
          },
          {
            "id": "linear-orthogonal-inverse-transpose",
            "parentAnchorId": "anchor-doq5h6",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-003",
            "title": "正交矩阵的逆等于转置",
            "latex": "Q^{-1}=Q^T",
            "sourceBlockIndex": 27,
            "searchAliases": [
              "正交矩阵求逆",
              "Q逆等于Q转置"
            ],
            "context": "Q 为正交矩阵时成立。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 13
          },
          {
            "id": "linear-orthogonal-determinant-sign",
            "parentAnchorId": "anchor-doq5h6",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-003",
            "title": "正交矩阵行列式为正负一",
            "latex": "|Q|=\\pm1",
            "sourceBlockIndex": 28,
            "searchAliases": [
              "正交矩阵行列式",
              "正交矩阵正负一"
            ],
            "context": "Q 为实正交矩阵时，行列式只能取 1 或 -1。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 14
          },
          {
            "id": "linear-rank-one-square-trace",
            "parentAnchorId": "anchor-doq5h6",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-003",
            "title": "秩一矩阵平方等于迹乘自身",
            "latex": "A^2=(v^Tu)A=\\operatorname{tr}(A)A",
            "sourceBlockIndex": 32,
            "searchAliases": [
              "秩一矩阵平方",
              "迹乘矩阵"
            ],
            "context": "非零秩一方阵 A=uvᵀ，且 tr(A)=vᵀu。",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 15
          },
          {
            "id": "linear-btsj4n-1",
            "parentAnchorId": "anchor-doq5h6",
            "legacyParentAnchorId": "linear-algebra-02-009-anchor-003",
            "title": "正交矩阵、幂零矩阵与秩一矩阵常用结论：A^m",
            "latex": "A^m=[\\operatorname{tr}(A)]^{m-1}A\\quad(m\\ge1),",
            "sourceBlockIndex": 34,
            "searchAliases": [],
            "context": "秩一方阵 A=uv^T\\ne O 还满足",
            "chapterId": "linear-algebra-02",
            "topicId": "linear-algebra-02-009",
            "order": 16
          }
        ]
      }
    ]
  },
  {
    "id": "linear-algebra-03",
    "partId": "linear-algebra",
    "partTitle": "线性代数",
    "title": "第三章　向量",
    "topics": [
      {
        "id": "linear-algebra-03-001",
        "title": "向量有关计算",
        "body": "##### 向量内积、长度、夹角、正交与施密特正交化\n\n内积、长度与夹角：\n\n<!-- formula {\"items\":[{\"id\":\"linear-1plt9md-1\",\"title\":\"向量内积、长度、夹角、正交与施密特正交化：(α,β)\",\"aliases\":[],\"context\":\"内积、长度与夹角：\",\"latex\":\"(\\\\alpha,\\\\beta)=\\\\alpha^T\\\\beta\"},{\"id\":\"linear-1plt9md-2\",\"title\":\"向量内积、长度、夹角、正交与施密特正交化：|α|\",\"aliases\":[],\"context\":\"内积、长度与夹角：\",\"latex\":\"\\\\|\\\\alpha\\\\|=\\\\sqrt{\\\\alpha^T\\\\alpha}\"}]} -->\n\\[\n(\\alpha,\\beta)=\\alpha^T\\beta,\n\\qquad \\|\\alpha\\|=\\sqrt{\\alpha^T\\alpha},\n\\]\n\n<!-- formula {\"id\":\"linear-beq7ra\",\"title\":\"向量内积、长度、夹角、正交与施密特正交化：cosθ\",\"aliases\":[],\"context\":\"所属知识点：向量内积、长度、夹角、正交与施密特正交化。\"} -->\n\\[\n\\cos\\theta=\\frac{\\alpha^T\\beta}{\\|\\alpha\\|\\|\\beta\\|}.\n\\]\n\n正交即 \\(\\alpha^T\\beta=0\\)。施密特正交化：\n\n<!-- formula {\"items\":[{\"id\":\"linear-15ohb1r-1\",\"title\":\"向量内积、长度、夹角、正交与施密特正交化：β_k\",\"aliases\":[],\"context\":\"正交即 \\\\alpha^T\\\\beta=0。施密特正交化：\",\"latex\":\"\\\\beta_k=\\\\alpha_k-\\n\\\\sum_{j=1}^{k-1}\\\\frac{(\\\\alpha_k,\\\\beta_j)}{(\\\\beta_j,\\\\beta_j)}\\\\beta_j\"},{\"id\":\"linear-15ohb1r-2\",\"title\":\"向量内积、长度、夹角、正交与施密特正交化：e_k\",\"aliases\":[],\"context\":\"正交即 \\\\alpha^T\\\\beta=0。施密特正交化：\",\"latex\":\"e_k=\\\\frac{\\\\beta_k}{\\\\|\\\\beta_k\\\\|}\"}]} -->\n\\[\n\\beta_k=\\alpha_k-\n\\sum_{j=1}^{k-1}\\frac{(\\alpha_k,\\beta_j)}{(\\beta_j,\\beta_j)}\\beta_j,\n\\qquad e_k=\\frac{\\beta_k}{\\|\\beta_k\\|}.\n\\]\n\n向量 \\(\\alpha\\) 在非零向量 \\(\\beta\\) 方向上的投影向量为\n\n<!-- formula {\"id\":\"linear-a13vqk\",\"title\":\"向量内积、长度、夹角、正交与施密特正交化：proj_βα\",\"aliases\":[],\"context\":\"向量 \\\\alpha 在非零向量 \\\\beta 方向上的投影向量为\"} -->\n\\[\n\\operatorname{proj}_{\\beta}\\alpha\n=\\frac{\\alpha^T\\beta}{\\beta^T\\beta}\\,\\beta.\n\\]",
        "searchText": "向量有关计算 向量有关计算 向量有关计算 向量内积、长度、夹角、正交与施密特正交化 内积、长度与夹角： ( , )= ^T , \\ \\ = ^T , = ^T \\ \\ \\ \\ . 正交即 ^T =0。施密特正交化： k= k- j=1 ^ k-1 ( k, j) ( j, j) j, e k= k \\ k\\ . 向量 在非零向量 方向上的投影向量为 proj = ^T ^T \\, .",
        "summary": "向量内积、长度、夹角、正交与施密特正交化 内积、长度与夹角： ( , )= ^T , \\ \\ = ^T , = ^T \\ \\ \\ \\ . 正交即 ^T =0。施密特正交化： k= k- j=1 ^ k-1 ( k, j) ( j, j) j, e k= k…",
        "anchors": [
          {
            "id": "anchor-1fskpc6",
            "legacyId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化",
            "searchText": "向量内积、长度、夹角、正交与施密特正交化 内积、长度与夹角： ( , )= ^T , \\ \\ = ^T , = ^T \\ \\ \\ \\ . 正交即 ^T =0。施密特正交化： k= k- j=1 ^ k-1 ( k, j) ( j, j) j, e k= k \\ k\\ . 向量 在非零向量 方向上的投影向量为 proj = ^T ^T \\, .",
            "summary": "内积、长度与夹角： ( , )= ^T , \\ \\ = ^T , = ^T \\ \\ \\ \\ . 正交即 ^T =0。施密特正交化： k= k- j=1 ^ k-1 ( k, j) ( j, j) j, e k= k \\ k\\ . 向量 在非零向量 方向上的…"
          }
        ],
        "formulas": [
          {
            "id": "linear-1plt9md-1",
            "parentAnchorId": "anchor-1fskpc6",
            "legacyParentAnchorId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化：(α,β)",
            "latex": "(\\alpha,\\beta)=\\alpha^T\\beta",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "内积、长度与夹角：",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-001",
            "order": 0
          },
          {
            "id": "linear-1plt9md-2",
            "parentAnchorId": "anchor-1fskpc6",
            "legacyParentAnchorId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化：|α|",
            "latex": "\\|\\alpha\\|=\\sqrt{\\alpha^T\\alpha}",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "内积、长度与夹角：",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-001",
            "order": 1
          },
          {
            "id": "linear-beq7ra",
            "parentAnchorId": "anchor-1fskpc6",
            "legacyParentAnchorId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化：cosθ",
            "latex": "\\cos\\theta=\\frac{\\alpha^T\\beta}{\\|\\alpha\\|\\|\\beta\\|}.",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：向量内积、长度、夹角、正交与施密特正交化。",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-001",
            "order": 2
          },
          {
            "id": "linear-15ohb1r-1",
            "parentAnchorId": "anchor-1fskpc6",
            "legacyParentAnchorId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化：β_k",
            "latex": "\\beta_k=\\alpha_k-\n\\sum_{j=1}^{k-1}\\frac{(\\alpha_k,\\beta_j)}{(\\beta_j,\\beta_j)}\\beta_j",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "正交即 \\alpha^T\\beta=0。施密特正交化：",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-001",
            "order": 3
          },
          {
            "id": "linear-15ohb1r-2",
            "parentAnchorId": "anchor-1fskpc6",
            "legacyParentAnchorId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化：e_k",
            "latex": "e_k=\\frac{\\beta_k}{\\|\\beta_k\\|}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "正交即 \\alpha^T\\beta=0。施密特正交化：",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-001",
            "order": 4
          },
          {
            "id": "linear-a13vqk",
            "parentAnchorId": "anchor-1fskpc6",
            "legacyParentAnchorId": "linear-algebra-03-001-anchor-001",
            "title": "向量内积、长度、夹角、正交与施密特正交化：proj_βα",
            "latex": "\\operatorname{proj}_{\\beta}\\alpha\n=\\frac{\\alpha^T\\beta}{\\beta^T\\beta}\\,\\beta.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "向量 \\alpha 在非零向量 \\beta 方向上的投影向量为",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-001",
            "order": 5
          }
        ]
      },
      {
        "id": "linear-algebra-03-002",
        "title": "线性表示",
        "body": "##### 向量线性表示、表示系数唯一性与秩\n\n\\(\\beta\\) 能由 \\(\\alpha_1,\\ldots,\\alpha_m\\) 线性表示，等价于方程\n\n<!-- formula {\"id\":\"linear-1q1mlm4\",\"title\":\"向量线性表示、表示系数唯一性与秩：(α_1,ldots,α_m)x\",\"aliases\":[],\"context\":\"所属知识点：向量线性表示、表示系数唯一性与秩。\"} -->\n\\[\n(\\alpha_1,\\ldots,\\alpha_m)x=\\beta\n\\]\n\n有解，也等价于\n\n<!-- formula {\"id\":\"linear-1uwydff\",\"title\":\"向量线性表示、表示系数唯一性与秩：r(A)\",\"aliases\":[],\"context\":\"有解，也等价于\"} -->\n\\[\nr(A)=r(A,\\beta).\n\\]\n\n若 \\(\\alpha_1,\\ldots,\\alpha_m\\) 线性无关，则表示系数唯一；若相关且方程有解，表示通常不唯一。两个向量都能由同一向量组表示，不代表它们一定能互相表示。",
        "searchText": "线性表示 线性表示 线性表示 向量线性表示、表示系数唯一性与秩 能由 1, , m 线性表示，等价于方程 ( 1, , m)x= 有解，也等价于 r(A)=r(A, ). 若 1, , m 线性无关，则表示系数唯一；若相关且方程有解，表示通常不唯一。两个向量都能由同一向量组表示，不代表它们一定能互相表示。",
        "summary": "向量线性表示、表示系数唯一性与秩 能由 1, , m 线性表示，等价于方程 ( 1, , m)x= 有解，也等价于 r(A)=r(A, ). 若 1, , m 线性无关，则表示系数唯一；若相关且方程有解，表示通常不唯一。两个向量都能由同一向量组表示，不代表…",
        "anchors": [
          {
            "id": "anchor-122cvtk",
            "legacyId": "linear-algebra-03-002-anchor-001",
            "title": "向量线性表示、表示系数唯一性与秩",
            "searchText": "向量线性表示、表示系数唯一性与秩 能由 1, , m 线性表示，等价于方程 ( 1, , m)x= 有解，也等价于 r(A)=r(A, ). 若 1, , m 线性无关，则表示系数唯一；若相关且方程有解，表示通常不唯一。两个向量都能由同一向量组表示，不代表它们一定能互相表示。",
            "summary": "能由 1, , m 线性表示，等价于方程 ( 1, , m)x= 有解，也等价于 r(A)=r(A, ). 若 1, , m 线性无关，则表示系数唯一；若相关且方程有解，表示通常不唯一。两个向量都能由同一向量组表示，不代表它们一定能互相表示。"
          }
        ],
        "formulas": [
          {
            "id": "linear-1q1mlm4",
            "parentAnchorId": "anchor-122cvtk",
            "legacyParentAnchorId": "linear-algebra-03-002-anchor-001",
            "title": "向量线性表示、表示系数唯一性与秩：(α_1,ldots,α_m)x",
            "latex": "(\\alpha_1,\\ldots,\\alpha_m)x=\\beta",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：向量线性表示、表示系数唯一性与秩。",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-002",
            "order": 0
          },
          {
            "id": "linear-1uwydff",
            "parentAnchorId": "anchor-122cvtk",
            "legacyParentAnchorId": "linear-algebra-03-002-anchor-001",
            "title": "向量线性表示、表示系数唯一性与秩：r(A)",
            "latex": "r(A)=r(A,\\beta).",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "有解，也等价于",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-002",
            "order": 1
          }
        ]
      },
      {
        "id": "linear-algebra-03-003",
        "title": "向量组等价",
        "body": "##### 向量组等价、相互表示与拼接矩阵的秩\n\n两个向量组等价，是指它们能互相线性表示。若\n\n<!-- formula {\"id\":\"linear-b2s6xl\",\"title\":\"向量组等价、相互表示与拼接矩阵的秩：B\",\"aliases\":[],\"context\":\"两个向量组等价，是指它们能互相线性表示。若\"} -->\n\\[\nB=AC,\n\\]\n\n则 \\(B\\) 可由 \\(A\\) 表示，且 \\(r(B)\\le r(A)\\)。两组等价当且仅当拼接后不增加秩：\n\n<!-- formula {\"id\":\"linear-lh60qn\",\"title\":\"向量组等价、相互表示与拼接矩阵的秩：r(A)\",\"aliases\":[],\"context\":\"则 B 可由 A 表示，且 \\\\(r(B)\\\\le r(A)\\\\)。两组等价当且仅当拼接后不增加秩：\"} -->\n\\[\nr(A)=r(B)=r(A,B).\n\\]",
        "searchText": "向量组等价 向量组等价 向量组等价 向量组等价、相互表示与拼接矩阵的秩 两个向量组等价，是指它们能互相线性表示。若 B=AC, 则 B 可由 A 表示，且 r(B)≤ r(A)。两组等价当且仅当拼接后不增加秩： r(A)=r(B)=r(A,B).",
        "summary": "向量组等价、相互表示与拼接矩阵的秩 两个向量组等价，是指它们能互相线性表示。若 B=AC, 则 B 可由 A 表示，且 r(B)≤ r(A)。两组等价当且仅当拼接后不增加秩： r(A)=r(B)=r(A,B).",
        "anchors": [
          {
            "id": "anchor-126wx4i",
            "legacyId": "linear-algebra-03-003-anchor-001",
            "title": "向量组等价、相互表示与拼接矩阵的秩",
            "searchText": "向量组等价、相互表示与拼接矩阵的秩 两个向量组等价，是指它们能互相线性表示。若 B=AC, 则 B 可由 A 表示，且 r(B)≤ r(A)。两组等价当且仅当拼接后不增加秩： r(A)=r(B)=r(A,B).",
            "summary": "两个向量组等价，是指它们能互相线性表示。若 B=AC, 则 B 可由 A 表示，且 r(B)≤ r(A)。两组等价当且仅当拼接后不增加秩： r(A)=r(B)=r(A,B)."
          }
        ],
        "formulas": [
          {
            "id": "linear-b2s6xl",
            "parentAnchorId": "anchor-126wx4i",
            "legacyParentAnchorId": "linear-algebra-03-003-anchor-001",
            "title": "向量组等价、相互表示与拼接矩阵的秩：B",
            "latex": "B=AC,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "两个向量组等价，是指它们能互相线性表示。若",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-003",
            "order": 0
          },
          {
            "id": "linear-lh60qn",
            "parentAnchorId": "anchor-126wx4i",
            "legacyParentAnchorId": "linear-algebra-03-003-anchor-001",
            "title": "向量组等价、相互表示与拼接矩阵的秩：r(A)",
            "latex": "r(A)=r(B)=r(A,B).",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "则 B 可由 A 表示，且 \\(r(B)\\le r(A)\\)。两组等价当且仅当拼接后不增加秩：",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-003",
            "order": 1
          }
        ]
      },
      {
        "id": "linear-algebra-03-004",
        "title": "线性相关与无关",
        "body": "##### 线性相关、线性无关与秩的判定\n\n<!-- formula {\"id\":\"linear-xjacbl\",\"title\":\"线性相关、线性无关与秩的判定：k_1α_1+cdots+k_mα_m\",\"aliases\":[],\"context\":\"所属知识点：线性相关、线性无关与秩的判定。\"} -->\n\\[\nk_1\\alpha_1+\\cdots+k_m\\alpha_m=0\n\\]\n\n只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 \\(A\\)：\n\n<!-- formula {\"id\":\"linear-13l84s7\",\"title\":\"线性相关、线性无关与秩的判定：α_1,ldots,α_m 无关\",\"aliases\":[],\"context\":\"只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 A：\"} -->\n\\[\n\\alpha_1,\\ldots,\\alpha_m\\text{ 无关}\n\\Longleftrightarrow r(A)=m.\n\\]\n\n##### 线性相关与线性无关的快速结论\n\n- 含零向量一定相关。\n- 两个向量成比例一定相关。\n- \\(m\\) 个 \\(n\\) 维向量若 \\(m>n\\)，一定相关。\n- 无关组的任一部分组仍无关；相关组再增加向量仍相关。\n- 整体无关可以推出任一部分组无关；部分组相关可以推出整体相关。反方向一般不能推。\n- 若一组无关向量被同一个矩阵作用后仍无关，则作用矩阵在这些向量方向上没有把非零组合变成零。\n\n若新向量组由旧向量组按\n\n<!-- formula {\"id\":\"linear-1za7mj\",\"title\":\"线性相关与线性无关的快速结论：B\",\"aliases\":[],\"context\":\"若新向量组由旧向量组按\"} -->\n\\[\nB=AC\n\\]\n\n得到，则 \\(r(B)\\le r(A)\\)。当 \\(A\\) 的列向量线性无关时，\\(B\\) 的列向量是否无关可直接转成系数矩阵 \\(C\\) 的列向量是否无关。\n\n##### 加分量保无关，减分量保相关\n\n一组短向量线性无关，给每个向量补上同位置的新坐标分量后，长向量组仍线性无关。等价地，一组长向量线性相关，删去每个向量中相同位置的坐标分量后仍相关。这里增减的是每个向量的分量，不是增加或删除向量。\n\n##### 两两正交的非零向量线性无关\n\n若一组向量两两正交，且每个向量都不是零向量，则这组向量线性无关；“非零”是必需条件。",
        "searchText": "线性相关与无关 线性相关与无关 线性相关与无关 线性相关、线性无关与秩的判定 k 1 1+ +k m m=0 只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 A： 1, , m 无关 r(A)=m. 线性相关与线性无关的快速结论 含零向量一定相关。 两个向量成比例一定相关。 m 个 n 维向量若 m n，一定相关。 无关组的任一部分组仍无关；相关组再增加向量仍相关。 整体无关可以推出任一部分组无关；部分组相关可以推出整体相关。反方向一般不能推。 若一组无关向量被同一个矩阵作用后仍无关，则作用矩阵在这些向量方向上没有把非零组合变成零。 若新向量组由旧向量组按 B=AC 得到，则 r(B)≤ r(A)。当 A 的列向量线性无关时，B 的列向量是否无关可直接转成系数矩阵 C 的列向量是否无关。 加分量保无关，减分量保相关 一组短向量线性无关，给每个向量补上同位置的新坐标分量后，长向量组仍线性无关。等价地，一组长向量线性相关，删去每个向量中相同位置的坐标分量后仍相关。这里增减的是每个向量的分量，不是增加或删除向量。 两两正交的非零向量线性无关 若一组向量两两正交，且每个向量都不是零向量，则这组向量线性无关；“非零”是必需条件。",
        "summary": "线性相关、线性无关与秩的判定 k 1 1+ +k m m=0 只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 A： 1, , m 无关 r(A)=m. 线性相关与线性无关的快速结论 含零向量一定相关。 两个向量成比例一定相关。 m …",
        "anchors": [
          {
            "id": "anchor-zlkmt1",
            "legacyId": "linear-algebra-03-004-anchor-001",
            "title": "线性相关、线性无关与秩的判定",
            "searchText": "线性相关、线性无关与秩的判定 k 1 1+ +k m m=0 只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 A： 1, , m 无关 r(A)=m.",
            "summary": "k 1 1+ +k m m=0 只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 A： 1, , m 无关 r(A)=m."
          },
          {
            "id": "anchor-7ywz00",
            "legacyId": "linear-algebra-03-004-anchor-002",
            "title": "线性相关与线性无关的快速结论",
            "searchText": "线性相关与线性无关的快速结论 含零向量一定相关。 两个向量成比例一定相关。 m 个 n 维向量若 m n，一定相关。 无关组的任一部分组仍无关；相关组再增加向量仍相关。 整体无关可以推出任一部分组无关；部分组相关可以推出整体相关。反方向一般不能推。 若一组无关向量被同一个矩阵作用后仍无关，则作用矩阵在这些向量方向上没有把非零组合变成零。 若新向量组由旧向量组按 B=AC 得到，则 r(B)≤ r(A)。当 A 的列向量线性无关时，B 的列向量是否无关可直接转成系数矩阵 C 的列向量是否无关。",
            "summary": "含零向量一定相关。 两个向量成比例一定相关。 m 个 n 维向量若 m n，一定相关。 无关组的任一部分组仍无关；相关组再增加向量仍相关。 整体无关可以推出任一部分组无关；部分组相关可以推出整体相关。反方向一般不能推。 若一组无关向量被同一个矩阵作用后仍无…"
          },
          {
            "id": "anchor-mh2klw",
            "legacyId": "linear-algebra-03-004-anchor-003",
            "title": "加分量保无关，减分量保相关",
            "searchText": "加分量保无关，减分量保相关 一组短向量线性无关，给每个向量补上同位置的新坐标分量后，长向量组仍线性无关。等价地，一组长向量线性相关，删去每个向量中相同位置的坐标分量后仍相关。这里增减的是每个向量的分量，不是增加或删除向量。",
            "summary": "一组短向量线性无关，给每个向量补上同位置的新坐标分量后，长向量组仍线性无关。等价地，一组长向量线性相关，删去每个向量中相同位置的坐标分量后仍相关。这里增减的是每个向量的分量，不是增加或删除向量。"
          },
          {
            "id": "anchor-2bq40v",
            "legacyId": "linear-algebra-03-004-anchor-004",
            "title": "两两正交的非零向量线性无关",
            "searchText": "两两正交的非零向量线性无关 若一组向量两两正交，且每个向量都不是零向量，则这组向量线性无关；“非零”是必需条件。",
            "summary": "若一组向量两两正交，且每个向量都不是零向量，则这组向量线性无关；“非零”是必需条件。"
          }
        ],
        "formulas": [
          {
            "id": "linear-xjacbl",
            "parentAnchorId": "anchor-zlkmt1",
            "legacyParentAnchorId": "linear-algebra-03-004-anchor-001",
            "title": "线性相关、线性无关与秩的判定：k_1α_1+cdots+k_mα_m",
            "latex": "k_1\\alpha_1+\\cdots+k_m\\alpha_m=0",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：线性相关、线性无关与秩的判定。",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-004",
            "order": 0
          },
          {
            "id": "linear-13l84s7",
            "parentAnchorId": "anchor-zlkmt1",
            "legacyParentAnchorId": "linear-algebra-03-004-anchor-001",
            "title": "线性相关、线性无关与秩的判定：α_1,ldots,α_m 无关",
            "latex": "\\alpha_1,\\ldots,\\alpha_m\\text{ 无关}\n\\Longleftrightarrow r(A)=m.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "只有全零系数时，向量组线性无关；有非全零系数时线性相关。把向量作列组成 A：",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-004",
            "order": 1
          },
          {
            "id": "linear-1za7mj",
            "parentAnchorId": "anchor-7ywz00",
            "legacyParentAnchorId": "linear-algebra-03-004-anchor-002",
            "title": "线性相关与线性无关的快速结论：B",
            "latex": "B=AC",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "若新向量组由旧向量组按",
            "chapterId": "linear-algebra-03",
            "topicId": "linear-algebra-03-004",
            "order": 2
          }
        ]
      },
      {
        "id": "linear-algebra-03-005",
        "title": "极大无关组",
        "body": "##### 极大无关组、向量组的秩与基础列\n\n求极大无关组时，把向量作列组成矩阵，作初等行变换；阶梯形矩阵中每个非零行首个非零数所在的列号，对应原矩阵中同列号的向量。极大无关组所含向量个数等于向量组的秩。",
        "searchText": "极大无关组 极大无关组 极大无关组 极大无关组、向量组的秩与基础列 求极大无关组时，把向量作列组成矩阵，作初等行变换；阶梯形矩阵中每个非零行首个非零数所在的列号，对应原矩阵中同列号的向量。极大无关组所含向量个数等于向量组的秩。",
        "summary": "极大无关组、向量组的秩与基础列 求极大无关组时，把向量作列组成矩阵，作初等行变换；阶梯形矩阵中每个非零行首个非零数所在的列号，对应原矩阵中同列号的向量。极大无关组所含向量个数等于向量组的秩。",
        "anchors": [
          {
            "id": "anchor-10bslxo",
            "legacyId": "linear-algebra-03-005-anchor-001",
            "title": "极大无关组、向量组的秩与基础列",
            "searchText": "极大无关组、向量组的秩与基础列 求极大无关组时，把向量作列组成矩阵，作初等行变换；阶梯形矩阵中每个非零行首个非零数所在的列号，对应原矩阵中同列号的向量。极大无关组所含向量个数等于向量组的秩。",
            "summary": "求极大无关组时，把向量作列组成矩阵，作初等行变换；阶梯形矩阵中每个非零行首个非零数所在的列号，对应原矩阵中同列号的向量。极大无关组所含向量个数等于向量组的秩。"
          }
        ],
        "formulas": []
      }
    ]
  },
  {
    "id": "linear-algebra-04",
    "partId": "linear-algebra",
    "partTitle": "线性代数",
    "title": "第四章　线性方程组",
    "topics": [
      {
        "id": "linear-algebra-04-001",
        "title": "解的判定",
        "body": "##### 齐次线性方程组零解、非零解与自由变量\n\n对 \\(Ax=0\\)，一定有零解。若未知数个数为 \\(n\\)：\n\n<!-- formula {\"id\":\"linear-weg0n9\",\"title\":\"齐次线性方程组零解、非零解与自由变量：r(A)\",\"aliases\":[],\"context\":\"对 Ax=0，一定有零解。若未知数个数为 n：\"} -->\n\\[\nr(A)=n\\Longleftrightarrow\\text{只有零解},\n\\]\n\n<!-- formula {\"id\":\"linear-uwkua9\",\"title\":\"齐次线性方程组零解、非零解与自由变量：r(A)\",\"aliases\":[],\"context\":\"所属知识点：齐次线性方程组零解、非零解与自由变量。\"} -->\n\\[\nr(A)<n\\Longleftrightarrow\\text{有非零解，且有无穷多解}.\n\\]\n\n##### 非齐次线性方程组无解、唯一解与无穷多解\n\n<!-- formula {\"id\":\"linear-s5s5s2\",\"title\":\"非齐次线性方程组无解、唯一解与无穷多解：r(A)\",\"aliases\":[],\"context\":\"所属知识点：非齐次线性方程组无解、唯一解与无穷多解。\"} -->\n\\[\nr(A)<r(A,b)\\Longleftrightarrow\\text{无解},\n\\]\n\n<!-- formula {\"id\":\"linear-6u2ulv\",\"title\":\"非齐次线性方程组无解、唯一解与无穷多解：r(A)\",\"aliases\":[],\"context\":\"所属知识点：非齐次线性方程组无解、唯一解与无穷多解。\"} -->\n\\[\nr(A)=r(A,b)=n\\Longleftrightarrow\\text{唯一解},\n\\]\n\n<!-- formula {\"id\":\"linear-u2qrxk\",\"title\":\"非齐次线性方程组无解、唯一解与无穷多解：r(A)\",\"aliases\":[],\"context\":\"所属知识点：非齐次线性方程组无解、唯一解与无穷多解。\"} -->\n\\[\nr(A)=r(A,b)<n\\Longleftrightarrow\\text{无穷多解}.\n\\]\n\n含参数时，把增广矩阵化成阶梯形，重点检查形如 \\((0,\\ldots,0\\mid c)\\) 的行。",
        "searchText": "解的判定 解的判定 解的判定 齐次线性方程组零解、非零解与自由变量 对 Ax=0，一定有零解。若未知数个数为 n： r(A)=n 只有零解, r(A)<n 有非零解，且有无穷多解. 非齐次线性方程组无解、唯一解与无穷多解 r(A)<r(A,b) 无解, r(A)=r(A,b)=n 唯一解, r(A)=r(A,b)<n 无穷多解. 含参数时，把增广矩阵化成阶梯形，重点检查形如 (0, ,0 c) 的行。",
        "summary": "齐次线性方程组零解、非零解与自由变量 对 Ax=0，一定有零解。若未知数个数为 n： r(A)=n 只有零解, r(A)<n 有非零解，且有无穷多解. 非齐次线性方程组无解、唯一解与无穷多解 r(A)<r(A,b) 无解, r(A)=r(A,b)=n 唯一…",
        "anchors": [
          {
            "id": "anchor-1eupkxq",
            "legacyId": "linear-algebra-04-001-anchor-001",
            "title": "齐次线性方程组零解、非零解与自由变量",
            "searchText": "齐次线性方程组零解、非零解与自由变量 对 Ax=0，一定有零解。若未知数个数为 n： r(A)=n 只有零解, r(A)<n 有非零解，且有无穷多解.",
            "summary": "对 Ax=0，一定有零解。若未知数个数为 n： r(A)=n 只有零解, r(A)<n 有非零解，且有无穷多解."
          },
          {
            "id": "anchor-75rng7",
            "legacyId": "linear-algebra-04-001-anchor-002",
            "title": "非齐次线性方程组无解、唯一解与无穷多解",
            "searchText": "非齐次线性方程组无解、唯一解与无穷多解 r(A)<r(A,b) 无解, r(A)=r(A,b)=n 唯一解, r(A)=r(A,b)<n 无穷多解. 含参数时，把增广矩阵化成阶梯形，重点检查形如 (0, ,0 c) 的行。",
            "summary": "r(A)<r(A,b) 无解, r(A)=r(A,b)=n 唯一解, r(A)=r(A,b)<n 无穷多解. 含参数时，把增广矩阵化成阶梯形，重点检查形如 (0, ,0 c) 的行。"
          }
        ],
        "formulas": [
          {
            "id": "linear-weg0n9",
            "parentAnchorId": "anchor-1eupkxq",
            "legacyParentAnchorId": "linear-algebra-04-001-anchor-001",
            "title": "齐次线性方程组零解、非零解与自由变量：r(A)",
            "latex": "r(A)=n\\Longleftrightarrow\\text{只有零解},",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "对 Ax=0，一定有零解。若未知数个数为 n：",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-001",
            "order": 0
          },
          {
            "id": "linear-uwkua9",
            "parentAnchorId": "anchor-1eupkxq",
            "legacyParentAnchorId": "linear-algebra-04-001-anchor-001",
            "title": "齐次线性方程组零解、非零解与自由变量：r(A)",
            "latex": "r(A)<n\\Longleftrightarrow\\text{有非零解，且有无穷多解}.",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "所属知识点：齐次线性方程组零解、非零解与自由变量。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-001",
            "order": 1
          },
          {
            "id": "linear-s5s5s2",
            "parentAnchorId": "anchor-75rng7",
            "legacyParentAnchorId": "linear-algebra-04-001-anchor-002",
            "title": "非齐次线性方程组无解、唯一解与无穷多解：r(A)",
            "latex": "r(A)<r(A,b)\\Longleftrightarrow\\text{无解},",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：非齐次线性方程组无解、唯一解与无穷多解。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-001",
            "order": 2
          },
          {
            "id": "linear-6u2ulv",
            "parentAnchorId": "anchor-75rng7",
            "legacyParentAnchorId": "linear-algebra-04-001-anchor-002",
            "title": "非齐次线性方程组无解、唯一解与无穷多解：r(A)",
            "latex": "r(A)=r(A,b)=n\\Longleftrightarrow\\text{唯一解},",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：非齐次线性方程组无解、唯一解与无穷多解。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-001",
            "order": 3
          },
          {
            "id": "linear-u2qrxk",
            "parentAnchorId": "anchor-75rng7",
            "legacyParentAnchorId": "linear-algebra-04-001-anchor-002",
            "title": "非齐次线性方程组无解、唯一解与无穷多解：r(A)",
            "latex": "r(A)=r(A,b)<n\\Longleftrightarrow\\text{无穷多解}.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：非齐次线性方程组无解、唯一解与无穷多解。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-001",
            "order": 4
          }
        ]
      },
      {
        "id": "linear-algebra-04-002",
        "title": "方程组求解",
        "body": "##### 齐次方程组基础解系与通解\n\n把 \\(A\\) 化成行最简形，选 \\(n-r(A)\\) 个自由变量。基础解系恰有\n\n<!-- formula {\"id\":\"linear-ut67x8\",\"title\":\"齐次方程组基础解系与通解：n-r(A)\",\"aliases\":[],\"context\":\"把 A 化成行最简形，选 \\\\(n-r(A)\\\\) 个自由变量。基础解系恰有\"} -->\n\\[\nn-r(A)\n\\]\n\n个线性无关解，通解为这些基础解向量的任意线性组合。\n\n##### 齐次解的个数界限\n\n因此，任取超过 \\(n-r(A)\\) 个 \\(Ax=0\\) 的解，这些解必线性相关。\n\n##### 解方程组时行变换与列变换的区别\n\n对增广矩阵 \\((A,b)\\) 作初等行变换，不改变原方程组的解。若对系数矩阵作列变换，未知量的表示也会随之改变，不能把变换后求出的未知量直接当作原方程的解；常规求解优先用行变换，也不要把常数列 \\(b\\) 混入系数列变换。\n\n##### 非齐次方程组特解、齐次通解与解的线性组合\n\n若方程有解：\n\n<!-- formula {\"id\":\"linear-17fdku9\",\"title\":\"非齐次方程组特解、齐次通解与解的线性组合：x\",\"aliases\":[],\"context\":\"若方程有解：\"} -->\n\\[\nx=\\eta^*+k_1\\xi_1+\\cdots+k_{n-r(A)}\\xi_{n-r(A)},\n\\]\n\n其中 \\(\\eta^*\\) 是一个非齐次特解，\\(\\xi_i\\) 是对应齐次方程 \\(Ax=0\\) 的基础解系。\n\n若 \\(\\eta_1,\\eta_2\\) 都是 \\(Ax=b\\) 的解，则\n\n<!-- formula {\"id\":\"linear-1x5yrw9\",\"title\":\"非齐次方程组特解、齐次通解与解的线性组合：A(eta_1-eta_2)\",\"aliases\":[],\"context\":\"若 \\\\eta_1,\\\\eta_2 都是 Ax=b 的解，则\"} -->\n\\[\nA(\\eta_1-\\eta_2)=0.\n\\]\n\n若 \\(\\eta_1,\\ldots,\\eta_s\\) 都是非齐次解，则\n\n<!-- formula {\"id\":\"linear-10qzh66\",\"title\":\"非齐次方程组特解、齐次通解与解的线性组合：Σ_i\",\"aliases\":[],\"context\":\"若 \\\\eta_1,\\\\ldots,\\\\eta_s 都是非齐次解，则\"} -->\n\\[\n\\sum_{i=1}^s c_i\\eta_i\n\\begin{cases}\n\\text{是非齐次解},&\\sum c_i=1,\\\\\n\\text{是齐次解},&\\sum c_i=0.\n\\end{cases}\n\\]\n\n##### 由已知非齐次解反推基础解系与全部通解\n\n取一个非齐次解作特解；其余解减去该特解，得到齐次解。齐次基础解系必须满足：\n\n<!-- formula {\"id\":\"linear-5c3noc\",\"title\":\"由已知非齐次解反推基础解系与全部通解：Ax\",\"aliases\":[],\"context\":\"取一个非齐次解作特解；其余解减去该特解，得到齐次解。齐次基础解系必须满足：\"} -->\n\\[\nAx=0,\\qquad \\text{个数}=n-r(A),\\qquad \\text{线性无关}.\n\\]",
        "searchText": "方程组求解 方程组求解 方程组求解 齐次方程组基础解系与通解 把 A 化成行最简形，选 n-r(A) 个自由变量。基础解系恰有 n-r(A) 个线性无关解，通解为这些基础解向量的任意线性组合。 齐次解的个数界限 因此，任取超过 n-r(A) 个 Ax=0 的解，这些解必线性相关。 解方程组时行变换与列变换的区别 对增广矩阵 (A,b) 作初等行变换，不改变原方程组的解。若对系数矩阵作列变换，未知量的表示也会随之改变，不能把变换后求出的未知量直接当作原方程的解；常规求解优先用行变换，也不要把常数列 b 混入系数列变换。 非齐次方程组特解、齐次通解与解的线性组合 若方程有解： x= ^ +k 1 1+ +k n-r(A) n-r(A) , 其中 ^ 是一个非齐次特解， i 是对应齐次方程 Ax=0 的基础解系。 若 1, 2 都是 Ax=b 的解，则 A( 1- 2)=0. 若 1, , s 都是非齐次解，则 i=1 ^s c i i cases 是非齐次解,& c i=1,\\\\ 是齐次解,& c i=0. cases 由已知非齐次解反推基础解系与全部通解 取一个非齐次解作特解；其余解减去该特解，得到齐次解。齐次基础解系必须满足： Ax=0, 个数=n-r(A), 线性无关.",
        "summary": "齐次方程组基础解系与通解 把 A 化成行最简形，选 n-r(A) 个自由变量。基础解系恰有 n-r(A) 个线性无关解，通解为这些基础解向量的任意线性组合。 齐次解的个数界限 因此，任取超过 n-r(A) 个 Ax=0 的解，这些解必线性相关。 解方程组时…",
        "anchors": [
          {
            "id": "anchor-gzj65a",
            "legacyId": "linear-algebra-04-002-anchor-001",
            "title": "齐次方程组基础解系与通解",
            "searchText": "齐次方程组基础解系与通解 把 A 化成行最简形，选 n-r(A) 个自由变量。基础解系恰有 n-r(A) 个线性无关解，通解为这些基础解向量的任意线性组合。",
            "summary": "把 A 化成行最简形，选 n-r(A) 个自由变量。基础解系恰有 n-r(A) 个线性无关解，通解为这些基础解向量的任意线性组合。"
          },
          {
            "id": "anchor-80c63q",
            "legacyId": "linear-algebra-04-002-anchor-002",
            "title": "齐次解的个数界限",
            "searchText": "齐次解的个数界限 因此，任取超过 n-r(A) 个 Ax=0 的解，这些解必线性相关。",
            "summary": "因此，任取超过 n-r(A) 个 Ax=0 的解，这些解必线性相关。"
          },
          {
            "id": "anchor-1gj34rp",
            "legacyId": "linear-algebra-04-002-anchor-003",
            "title": "解方程组时行变换与列变换的区别",
            "searchText": "解方程组时行变换与列变换的区别 对增广矩阵 (A,b) 作初等行变换，不改变原方程组的解。若对系数矩阵作列变换，未知量的表示也会随之改变，不能把变换后求出的未知量直接当作原方程的解；常规求解优先用行变换，也不要把常数列 b 混入系数列变换。",
            "summary": "对增广矩阵 (A,b) 作初等行变换，不改变原方程组的解。若对系数矩阵作列变换，未知量的表示也会随之改变，不能把变换后求出的未知量直接当作原方程的解；常规求解优先用行变换，也不要把常数列 b 混入系数列变换。"
          },
          {
            "id": "anchor-z4dd55",
            "legacyId": "linear-algebra-04-002-anchor-004",
            "title": "非齐次方程组特解、齐次通解与解的线性组合",
            "searchText": "非齐次方程组特解、齐次通解与解的线性组合 若方程有解： x= ^ +k 1 1+ +k n-r(A) n-r(A) , 其中 ^ 是一个非齐次特解， i 是对应齐次方程 Ax=0 的基础解系。 若 1, 2 都是 Ax=b 的解，则 A( 1- 2)=0. 若 1, , s 都是非齐次解，则 i=1 ^s c i i cases 是非齐次解,& c i=1,\\\\ 是齐次解,& c i=0. cases",
            "summary": "若方程有解： x= ^ +k 1 1+ +k n-r(A) n-r(A) , 其中 ^ 是一个非齐次特解， i 是对应齐次方程 Ax=0 的基础解系。 若 1, 2 都是 Ax=b 的解，则 A( 1- 2)=0. 若 1, , s 都是非齐次解，则 i=…"
          },
          {
            "id": "anchor-uco91y",
            "legacyId": "linear-algebra-04-002-anchor-005",
            "title": "由已知非齐次解反推基础解系与全部通解",
            "searchText": "由已知非齐次解反推基础解系与全部通解 取一个非齐次解作特解；其余解减去该特解，得到齐次解。齐次基础解系必须满足： Ax=0, 个数=n-r(A), 线性无关.",
            "summary": "取一个非齐次解作特解；其余解减去该特解，得到齐次解。齐次基础解系必须满足： Ax=0, 个数=n-r(A), 线性无关."
          }
        ],
        "formulas": [
          {
            "id": "linear-ut67x8",
            "parentAnchorId": "anchor-gzj65a",
            "legacyParentAnchorId": "linear-algebra-04-002-anchor-001",
            "title": "齐次方程组基础解系与通解：n-r(A)",
            "latex": "n-r(A)",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "把 A 化成行最简形，选 \\(n-r(A)\\) 个自由变量。基础解系恰有",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-002",
            "order": 0
          },
          {
            "id": "linear-17fdku9",
            "parentAnchorId": "anchor-z4dd55",
            "legacyParentAnchorId": "linear-algebra-04-002-anchor-004",
            "title": "非齐次方程组特解、齐次通解与解的线性组合：x",
            "latex": "x=\\eta^*+k_1\\xi_1+\\cdots+k_{n-r(A)}\\xi_{n-r(A)},",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "若方程有解：",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-002",
            "order": 1
          },
          {
            "id": "linear-1x5yrw9",
            "parentAnchorId": "anchor-z4dd55",
            "legacyParentAnchorId": "linear-algebra-04-002-anchor-004",
            "title": "非齐次方程组特解、齐次通解与解的线性组合：A(eta_1-eta_2)",
            "latex": "A(\\eta_1-\\eta_2)=0.",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "若 \\eta_1,\\eta_2 都是 Ax=b 的解，则",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-002",
            "order": 2
          },
          {
            "id": "linear-10qzh66",
            "parentAnchorId": "anchor-z4dd55",
            "legacyParentAnchorId": "linear-algebra-04-002-anchor-004",
            "title": "非齐次方程组特解、齐次通解与解的线性组合：Σ_i",
            "latex": "\\sum_{i=1}^s c_i\\eta_i\n\\begin{cases}\n\\text{是非齐次解},&\\sum c_i=1,\\\\\n\\text{是齐次解},&\\sum c_i=0.\n\\end{cases}",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "若 \\eta_1,\\ldots,\\eta_s 都是非齐次解，则",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-002",
            "order": 3
          },
          {
            "id": "linear-5c3noc",
            "parentAnchorId": "anchor-uco91y",
            "legacyParentAnchorId": "linear-algebra-04-002-anchor-005",
            "title": "由已知非齐次解反推基础解系与全部通解：Ax",
            "latex": "Ax=0,\\qquad \\text{个数}=n-r(A),\\qquad \\text{线性无关}.",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "取一个非齐次解作特解；其余解减去该特解，得到齐次解。齐次基础解系必须满足：",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-002",
            "order": 4
          }
        ]
      },
      {
        "id": "linear-algebra-04-003",
        "title": "已知方程组的解推导其他",
        "body": "##### 已知齐次解或非齐次解判断线性组合仍为解\n\n把所有条件统一翻译成矩阵乘法：\\(A\\eta=b\\)、\\(A\\xi=0\\)。对给出的向量线性组合直接左乘 \\(A\\)，利用线性运算判断它是齐次解、非齐次解还是不再是解。",
        "searchText": "已知方程组的解推导其他 已知方程组的解推导其他 已知方程组的解推导其他 已知齐次解或非齐次解判断线性组合仍为解 把所有条件统一翻译成矩阵乘法：A =b、A =0。对给出的向量线性组合直接左乘 A，利用线性运算判断它是齐次解、非齐次解还是不再是解。",
        "summary": "已知齐次解或非齐次解判断线性组合仍为解 把所有条件统一翻译成矩阵乘法：A =b、A =0。对给出的向量线性组合直接左乘 A，利用线性运算判断它是齐次解、非齐次解还是不再是解。",
        "anchors": [
          {
            "id": "anchor-cl5tr5",
            "legacyId": "linear-algebra-04-003-anchor-001",
            "title": "已知齐次解或非齐次解判断线性组合仍为解",
            "searchText": "已知齐次解或非齐次解判断线性组合仍为解 把所有条件统一翻译成矩阵乘法：A =b、A =0。对给出的向量线性组合直接左乘 A，利用线性运算判断它是齐次解、非齐次解还是不再是解。",
            "summary": "把所有条件统一翻译成矩阵乘法：A =b、A =0。对给出的向量线性组合直接左乘 A，利用线性运算判断它是齐次解、非齐次解还是不再是解。"
          }
        ],
        "formulas": []
      },
      {
        "id": "linear-algebra-04-004",
        "title": "解的关系",
        "body": "##### 齐次方程组的公共解\n\n两个齐次方程组 \\(Ax=0\\)、\\(Bx=0\\) 的公共解由\n\n<!-- formula {\"id\":\"linear-1pl7w9k\",\"title\":\"两个齐次方程组的公共解\",\"aliases\":[],\"context\":\"两个齐次方程组 Ax=0、Bx=0 的公共解由\"} -->\n\\[\n\\begin{pmatrix}A\\\\B\\end{pmatrix}x=0\n\\]\n\n给出。\n\n若未知数个数为 \\(n\\)，则公共解的基础解向量个数为\n\n<!-- formula {\"id\":\"linear-ohprr5\",\"title\":\"齐次公共解空间的维数\",\"aliases\":[],\"context\":\"若未知数个数为 n，则公共解的基础解向量个数为\"} -->\n\\[\nn-r\\!\\begin{pmatrix}A\\\\B\\end{pmatrix}.\n\\]\n\n若只给两组通解，分别写成\n\n<!-- formula {\"id\":\"linear-3dmf3l-1\",\"title\":\"齐次方程组的公共解：x\",\"aliases\":[],\"context\":\"若只给两组通解，分别写成\"} -->\n\\[\nx=U\\alpha,\\qquad x=V\\beta,\n\\]\n\n则解\n\n<!-- formula {\"id\":\"linear-1wncgu4\",\"title\":\"齐次方程组的公共解：Uα\",\"aliases\":[],\"context\":\"所属知识点：齐次方程组的公共解。\"} -->\n\\[\nU\\alpha=V\\beta,\n\\]\n\n再代回 \\(x=U\\alpha\\) 或 \\(x=V\\beta\\)。\n\n##### 非齐次方程组的公共解\n\n对\n\n<!-- formula {\"id\":\"linear-ax3nwd-1\",\"title\":\"非齐次方程组的公共解：Ax\",\"aliases\":[],\"context\":\"所属知识点：非齐次方程组的公共解。\"} -->\n\\[\nAx=b,\\qquad Bx=d,\n\\]\n\n上下联立：\n\n<!-- formula {\"id\":\"linear-149xlvw\",\"title\":\"两个非齐次方程组的公共解\",\"aliases\":[],\"context\":\"上下联立：\"} -->\n\\[\n\\begin{pmatrix}A\\\\B\\end{pmatrix}x\n=\\begin{pmatrix}b\\\\d\\end{pmatrix}.\n\\]\n\n##### 齐次方程组同解\n\n对同列数矩阵：\n\n<!-- formula {\"id\":\"linear-zowuos\",\"title\":\"齐次方程组同解：Ax\",\"aliases\":[],\"context\":\"对同列数矩阵：\"} -->\n\\[\nAx=0\\text{ 与 }Bx=0\\text{ 同解}\n\\Longleftrightarrow\nr(A)=r(B)=r\\!\\begin{pmatrix}A\\\\B\\end{pmatrix}.\n\\]\n\n同型矩阵还可分别化成行最简形比较。\n\n##### 非齐次方程组同解\n\n令\n\n<!-- formula {\"id\":\"linear-1na1j52-1\",\"title\":\"非齐次方程组同解：C\",\"aliases\":[],\"context\":\"所属知识点：非齐次方程组同解。\"} -->\n\\[\nC=\\begin{pmatrix}A\\\\B\\end{pmatrix},\\qquad\nc=\\begin{pmatrix}b\\\\d\\end{pmatrix}.\n\\]\n\n则 \\(Ax=b\\) 与 \\(Bx=d\\) 同解，当且仅当\n\n<!-- formula {\"id\":\"linear-1gs464a\",\"title\":\"非齐次方程组同解：r(A)\",\"aliases\":[],\"context\":\"则 Ax=b 与 Bx=d 同解，当且仅当\"} -->\n\\[\nr(A)=r(B)=r(C),qquad r(C)=r(C,c).\n\\]",
        "searchText": "解的关系 解的关系 解的关系 齐次方程组的公共解 两个齐次方程组 Ax=0、Bx=0 的公共解由 pmatrix A\\ pmatrix x=0 给出。 若未知数个数为 n，则公共解的基础解向量个数为 n-r\\! pmatrix A\\ pmatrix . 若只给两组通解，分别写成 x=U , x=V , 则解 U =V , 再代回 x=U 或 x=V 。 非齐次方程组的公共解 对 Ax=b, Bx=d, 上下联立： pmatrix A\\ pmatrix x = pmatrix b\\ pmatrix . 齐次方程组同解 对同列数矩阵： Ax=0 与 Bx=0 同解 r(A)=r(B)=r\\! pmatrix A\\ pmatrix . 同型矩阵还可分别化成行最简形比较。 非齐次方程组同解 令 C= pmatrix A\\ pmatrix , c= pmatrix b\\ pmatrix . 则 Ax=b 与 Bx=d 同解，当且仅当 r(A)=r(B)=r(C),qquad r(C)=r(C,c).",
        "summary": "齐次方程组的公共解 两个齐次方程组 Ax=0、Bx=0 的公共解由 pmatrix A\\ pmatrix x=0 给出。 若未知数个数为 n，则公共解的基础解向量个数为 n-r\\! pmatrix A\\ pmatrix . 若只给两组通解，分别写成 x=U…",
        "anchors": [
          {
            "id": "anchor-1anke8d",
            "legacyId": "linear-algebra-04-004-anchor-001",
            "title": "齐次方程组的公共解",
            "searchText": "齐次方程组的公共解 两个齐次方程组 Ax=0、Bx=0 的公共解由 pmatrix A\\ pmatrix x=0 给出。 若未知数个数为 n，则公共解的基础解向量个数为 n-r\\! pmatrix A\\ pmatrix . 若只给两组通解，分别写成 x=U , x=V , 则解 U =V , 再代回 x=U 或 x=V 。",
            "summary": "两个齐次方程组 Ax=0、Bx=0 的公共解由 pmatrix A\\ pmatrix x=0 给出。 若未知数个数为 n，则公共解的基础解向量个数为 n-r\\! pmatrix A\\ pmatrix . 若只给两组通解，分别写成 x=U , x=V , 则…"
          },
          {
            "id": "anchor-18su3xv",
            "legacyId": "linear-algebra-04-004-anchor-002",
            "title": "非齐次方程组的公共解",
            "searchText": "非齐次方程组的公共解 对 Ax=b, Bx=d, 上下联立： pmatrix A\\ pmatrix x = pmatrix b\\ pmatrix .",
            "summary": "对 Ax=b, Bx=d, 上下联立： pmatrix A\\ pmatrix x = pmatrix b\\ pmatrix ."
          },
          {
            "id": "anchor-1c5wkkw",
            "legacyId": "linear-algebra-04-004-anchor-003",
            "title": "齐次方程组同解",
            "searchText": "齐次方程组同解 对同列数矩阵： Ax=0 与 Bx=0 同解 r(A)=r(B)=r\\! pmatrix A\\ pmatrix . 同型矩阵还可分别化成行最简形比较。",
            "summary": "对同列数矩阵： Ax=0 与 Bx=0 同解 r(A)=r(B)=r\\! pmatrix A\\ pmatrix . 同型矩阵还可分别化成行最简形比较。"
          },
          {
            "id": "anchor-c38nu6",
            "legacyId": "linear-algebra-04-004-anchor-004",
            "title": "非齐次方程组同解",
            "searchText": "非齐次方程组同解 令 C= pmatrix A\\ pmatrix , c= pmatrix b\\ pmatrix . 则 Ax=b 与 Bx=d 同解，当且仅当 r(A)=r(B)=r(C),qquad r(C)=r(C,c).",
            "summary": "令 C= pmatrix A\\ pmatrix , c= pmatrix b\\ pmatrix . 则 Ax=b 与 Bx=d 同解，当且仅当 r(A)=r(B)=r(C),qquad r(C)=r(C,c)."
          }
        ],
        "formulas": [
          {
            "id": "linear-1pl7w9k",
            "parentAnchorId": "anchor-1anke8d",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-001",
            "title": "两个齐次方程组的公共解",
            "latex": "\\begin{pmatrix}A\\\\B\\end{pmatrix}x=0",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "两个齐次方程组 Ax=0、Bx=0 的公共解由",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 0
          },
          {
            "id": "linear-ohprr5",
            "parentAnchorId": "anchor-1anke8d",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-001",
            "title": "齐次公共解空间的维数",
            "latex": "n-r\\!\\begin{pmatrix}A\\\\B\\end{pmatrix}.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "若未知数个数为 n，则公共解的基础解向量个数为",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 1
          },
          {
            "id": "linear-3dmf3l-1",
            "parentAnchorId": "anchor-1anke8d",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-001",
            "title": "齐次方程组的公共解：x",
            "latex": "x=U\\alpha,\\qquad x=V\\beta,",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "若只给两组通解，分别写成",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 2
          },
          {
            "id": "linear-1wncgu4",
            "parentAnchorId": "anchor-1anke8d",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-001",
            "title": "齐次方程组的公共解：Uα",
            "latex": "U\\alpha=V\\beta,",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "所属知识点：齐次方程组的公共解。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 3
          },
          {
            "id": "linear-ax3nwd-1",
            "parentAnchorId": "anchor-18su3xv",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-002",
            "title": "非齐次方程组的公共解：Ax",
            "latex": "Ax=b,\\qquad Bx=d,",
            "sourceBlockIndex": 9,
            "searchAliases": [],
            "context": "所属知识点：非齐次方程组的公共解。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 4
          },
          {
            "id": "linear-149xlvw",
            "parentAnchorId": "anchor-18su3xv",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-002",
            "title": "两个非齐次方程组的公共解",
            "latex": "\\begin{pmatrix}A\\\\B\\end{pmatrix}x\n=\\begin{pmatrix}b\\\\d\\end{pmatrix}.",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "上下联立：",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 5
          },
          {
            "id": "linear-zowuos",
            "parentAnchorId": "anchor-1c5wkkw",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-003",
            "title": "齐次方程组同解：Ax",
            "latex": "Ax=0\\text{ 与 }Bx=0\\text{ 同解}\n\\Longleftrightarrow\nr(A)=r(B)=r\\!\\begin{pmatrix}A\\\\B\\end{pmatrix}.",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "对同列数矩阵：",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 6
          },
          {
            "id": "linear-1na1j52-1",
            "parentAnchorId": "anchor-c38nu6",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-004",
            "title": "非齐次方程组同解：C",
            "latex": "C=\\begin{pmatrix}A\\\\B\\end{pmatrix},\\qquad\nc=\\begin{pmatrix}b\\\\d\\end{pmatrix}.",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "所属知识点：非齐次方程组同解。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 7
          },
          {
            "id": "linear-1gs464a",
            "parentAnchorId": "anchor-c38nu6",
            "legacyParentAnchorId": "linear-algebra-04-004-anchor-004",
            "title": "非齐次方程组同解：r(A)",
            "latex": "r(A)=r(B)=r(C),qquad r(C)=r(C,c).",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "则 Ax=b 与 Bx=d 同解，当且仅当",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-004",
            "order": 8
          }
        ]
      },
      {
        "id": "linear-algebra-04-005",
        "title": "矩阵方程",
        "body": "##### 可逆情形\n\n<!-- formula {\"id\":\"linear-9vz164\",\"title\":\"可逆情形：AX\",\"aliases\":[],\"context\":\"所属知识点：可逆情形。\"} -->\n\\[\nAX=B\\Longrightarrow X=A^{-1}B,\n\\]\n\n<!-- formula {\"id\":\"linear-wasuk\",\"title\":\"可逆情形：XA\",\"aliases\":[],\"context\":\"所属知识点：可逆情形。\"} -->\n\\[\nXA=B\\Longrightarrow X=BA^{-1},\n\\]\n\n<!-- formula {\"id\":\"linear-2dugqs\",\"title\":\"可逆情形：AXB\",\"aliases\":[],\"context\":\"所属知识点：可逆情形。\"} -->\n\\[\nAXB=C\\Longrightarrow X=A^{-1}CB^{-1}.\n\\]\n\n顺序不能交换。\n\n##### 不可逆情形\n\n把未知矩阵按列写成 \\(X=(x_1,\\ldots,x_s)\\)，则\n\n<!-- formula {\"id\":\"linear-eoxqnq\",\"title\":\"不可逆情形：AX\",\"aliases\":[],\"context\":\"把未知矩阵按列写成 \\\\(X=(x_1,\\\\ldots,x_s)\\\\)，则\"} -->\n\\[\nAX=B=(b_1,\\ldots,b_s)\n\\]\n\n等价于逐列解 \\(Ax_i=b_i\\)。若要求 \\(X\\) 可逆，解出各列的一般形式后还要检验 \\(|X|\\ne0\\)。含参数时先判断每个列方程何时有解，再写全部解。",
        "searchText": "矩阵方程 矩阵方程 矩阵方程 可逆情形 AX=B ⇒ X=A^ -1 B, XA=B ⇒ X=BA^ -1 , AXB=C ⇒ X=A^ -1 CB^ -1 . 顺序不能交换。 不可逆情形 把未知矩阵按列写成 X=(x 1, ,x s)，则 AX=B=(b 1, ,b s) 等价于逐列解 Ax i=b i。若要求 X 可逆，解出各列的一般形式后还要检验 X ≠0。含参数时先判断每个列方程何时有解，再写全部解。",
        "summary": "可逆情形 AX=B ⇒ X=A^ -1 B, XA=B ⇒ X=BA^ -1 , AXB=C ⇒ X=A^ -1 CB^ -1 . 顺序不能交换。 不可逆情形 把未知矩阵按列写成 X=(x 1, ,x s)，则 AX=B=(b 1, ,b s) 等价于逐列…",
        "anchors": [
          {
            "id": "anchor-1arudjf",
            "legacyId": "linear-algebra-04-005-anchor-001",
            "title": "可逆情形",
            "searchText": "可逆情形 AX=B ⇒ X=A^ -1 B, XA=B ⇒ X=BA^ -1 , AXB=C ⇒ X=A^ -1 CB^ -1 . 顺序不能交换。",
            "summary": "AX=B ⇒ X=A^ -1 B, XA=B ⇒ X=BA^ -1 , AXB=C ⇒ X=A^ -1 CB^ -1 . 顺序不能交换。"
          },
          {
            "id": "anchor-rq628u",
            "legacyId": "linear-algebra-04-005-anchor-002",
            "title": "不可逆情形",
            "searchText": "不可逆情形 把未知矩阵按列写成 X=(x 1, ,x s)，则 AX=B=(b 1, ,b s) 等价于逐列解 Ax i=b i。若要求 X 可逆，解出各列的一般形式后还要检验 X ≠0。含参数时先判断每个列方程何时有解，再写全部解。",
            "summary": "把未知矩阵按列写成 X=(x 1, ,x s)，则 AX=B=(b 1, ,b s) 等价于逐列解 Ax i=b i。若要求 X 可逆，解出各列的一般形式后还要检验 X ≠0。含参数时先判断每个列方程何时有解，再写全部解。"
          }
        ],
        "formulas": [
          {
            "id": "linear-9vz164",
            "parentAnchorId": "anchor-1arudjf",
            "legacyParentAnchorId": "linear-algebra-04-005-anchor-001",
            "title": "可逆情形：AX",
            "latex": "AX=B\\Longrightarrow X=A^{-1}B,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：可逆情形。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-005",
            "order": 0
          },
          {
            "id": "linear-wasuk",
            "parentAnchorId": "anchor-1arudjf",
            "legacyParentAnchorId": "linear-algebra-04-005-anchor-001",
            "title": "可逆情形：XA",
            "latex": "XA=B\\Longrightarrow X=BA^{-1},",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：可逆情形。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-005",
            "order": 1
          },
          {
            "id": "linear-2dugqs",
            "parentAnchorId": "anchor-1arudjf",
            "legacyParentAnchorId": "linear-algebra-04-005-anchor-001",
            "title": "可逆情形：AXB",
            "latex": "AXB=C\\Longrightarrow X=A^{-1}CB^{-1}.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "所属知识点：可逆情形。",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-005",
            "order": 2
          },
          {
            "id": "linear-eoxqnq",
            "parentAnchorId": "anchor-rq628u",
            "legacyParentAnchorId": "linear-algebra-04-005-anchor-002",
            "title": "不可逆情形：AX",
            "latex": "AX=B=(b_1,\\ldots,b_s)",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "把未知矩阵按列写成 \\(X=(x_1,\\ldots,x_s)\\)，则",
            "chapterId": "linear-algebra-04",
            "topicId": "linear-algebra-04-005",
            "order": 3
          }
        ]
      }
    ]
  },
  {
    "id": "linear-algebra-05",
    "partId": "linear-algebra",
    "partTitle": "线性代数",
    "title": "第五章　特征值与特征向量",
    "topics": [
      {
        "id": "linear-algebra-05-001",
        "title": "特征值与特征向量",
        "body": "##### 特征值、特征向量、特征方程与特征子空间\n\n<!-- formula {\"id\":\"linear-12k0arn-1\",\"title\":\"特征值、特征向量、特征方程与特征子空间：Aα\",\"aliases\":[],\"context\":\"所属知识点：特征值、特征向量、特征方程与特征子空间。\"} -->\n\\[\nA\\alpha=\\lambda\\alpha,\\qquad \\alpha\\ne0.\n\\]\n\n先解\n\n<!-- formula {\"id\":\"linear-ea2gqa\",\"title\":\"特征值、特征向量、特征方程与特征子空间：|λ E-A|\",\"aliases\":[],\"context\":\"所属知识点：特征值、特征向量、特征方程与特征子空间。\"} -->\n\\[\n|\\lambda E-A|=0\n\\]\n\n得到全部特征值；再对每个 \\(\\lambda_i\\) 解\n\n<!-- formula {\"id\":\"linear-143ie5\",\"title\":\"特征值、特征向量、特征方程与特征子空间：(λ_iE-A)x\",\"aliases\":[],\"context\":\"得到全部特征值；再对每个 \\\\lambda_i 解\"} -->\n\\[\n(\\lambda_iE-A)x=0\n\\]\n\n得到对应特征向量。\n\n##### 特征值之和、乘积、谱映射与凯莱—哈密顿公式\n\n<!-- formula {\"items\":[{\"id\":\"linear-ajemyi-1\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：λ_1+cdots+λ_n\",\"aliases\":[],\"context\":\"所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。\",\"latex\":\"\\\\lambda_1+\\\\cdots+\\\\lambda_n=\\\\operatorname{tr}(A)\"},{\"id\":\"linear-ajemyi-2\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：λ_1cdotsλ_n\",\"aliases\":[],\"context\":\"所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。\",\"latex\":\"\\\\lambda_1\\\\cdots\\\\lambda_n=|A|\"}]} -->\n\\[\n\\lambda_1+\\cdots+\\lambda_n=\\operatorname{tr}(A),\n\\qquad\n\\lambda_1\\cdots\\lambda_n=|A|.\n\\]\n\n若 \\(A\\alpha=\\lambda\\alpha\\)，则\n\n<!-- formula {\"id\":\"linear-2kaco1\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：f(A)α\",\"aliases\":[],\"context\":\"若 A\\\\alpha=\\\\lambda\\\\alpha，则\"} -->\n\\[\nf(A)\\alpha=f(\\lambda)\\alpha.\n\\]\n\n所以 \\(A^m,A^{-1},A^*,A+kE\\) 的对应特征值分别是\n\n<!-- formula {\"id\":\"linear-tfy60l\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：λ^m, λ^-1, (|A|)/(λ), λ+k\",\"aliases\":[],\"context\":\"所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。\"} -->\n\\[\n\\lambda^m,\\quad \\lambda^{-1},\\quad \\frac{|A|}{\\lambda},\\quad \\lambda+k\n\\]\n\n（涉及逆或除法时先保证 \\(\\lambda\\ne0\\)）。不同特征值对应的特征向量线性无关。\n\n更完整的特征值变换公式：\n\n<!-- formula {\"id\":\"linear-sjzaip\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：kA: kλ,\",\"aliases\":[],\"context\":\"更完整的特征值变换公式：\"} -->\n\\[\nkA:\\ k\\lambda,\\qquad\nA+kE:\\ \\lambda+k,\\qquad\nA^m:\\ \\lambda^m,\n\\]\n\n<!-- formula {\"id\":\"linear-1kdffp3\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：A^-1: frac1λ,\",\"aliases\":[],\"context\":\"所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。\"} -->\n\\[\nA^{-1}:\\ \\frac1\\lambda,\\qquad\nA^*:\\ \\frac{|A|}{\\lambda}\\quad(A\\text{ 可逆}),\\qquad\nf(A):\\ f(\\lambda).\n\\]\n\n\\(A^T\\) 与 \\(A\\) 的特征多项式完全相同，因此特征值及其代数重数相同。\n\n凯莱—哈密顿公式：设\n\n<!-- formula {\"id\":\"linear-14dsf15\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：p_A(λ)\",\"aliases\":[],\"context\":\"凯莱—哈密顿公式：设\"} -->\n\\[\np_A(\\lambda)=|\\lambda E-A|,\n\\]\n\n则\n\n<!-- formula {\"id\":\"linear-gbh71y\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：p_A(A)\",\"aliases\":[],\"context\":\"所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。\"} -->\n\\[\np_A(A)=O.\n\\]\n\n特别地，对二阶矩阵：\n\n<!-- formula {\"id\":\"linear-kgmq49\",\"title\":\"特征值之和、乘积、谱映射与凯莱—哈密顿公式：A^2-tr(A)A+|A|E\",\"aliases\":[],\"context\":\"特别地，对二阶矩阵：\"} -->\n\\[\nA^2-\\operatorname{tr}(A)A+|A|E=O.\n\\]\n\n##### 由特征值和特征向量反求矩阵\n\n若 \\(n\\) 个线性无关特征向量组成\n\n<!-- formula {\"id\":\"linear-1o7l6c4\",\"title\":\"由特征值和特征向量反求矩阵：P\",\"aliases\":[],\"context\":\"若 n 个线性无关特征向量组成\"} -->\n\\[\nP=(\\alpha_1,\\ldots,\\alpha_n),\n\\]\n\n对应特征值组成\n\n<!-- formula {\"id\":\"linear-a0pbfp\",\"title\":\"由特征值和特征向量反求矩阵：Lambda\",\"aliases\":[],\"context\":\"对应特征值组成\"} -->\n\\[\n\\Lambda=\\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n),\n\\]\n\n则\n\n<!-- formula {\"id\":\"linear-1t2ah4o\",\"title\":\"由特征值和特征向量反求矩阵：A\",\"aliases\":[],\"context\":\"所属知识点：由特征值和特征向量反求矩阵。\"} -->\n\\[\nA=P\\Lambda P^{-1}.\n\\]\n\n若这些特征向量已经标准正交，记其组成正交矩阵 \\(Q\\)，则\n\n<!-- formula {\"id\":\"linear-kb21ok\",\"title\":\"由特征值和特征向量反求矩阵：A\",\"aliases\":[],\"context\":\"若这些特征向量已经标准正交，记其组成正交矩阵 Q，则\"} -->\n\\[\nA=Q\\Lambda Q^T.\n\\]",
        "searchText": "特征值与特征向量 特征值与特征向量 特征值与特征向量 特征值、特征向量、特征方程与特征子空间 A = , ≠0. 先解 E-A =0 得到全部特征值；再对每个 i 解 ( iE-A)x=0 得到对应特征向量。 特征值之和、乘积、谱映射与凯莱—哈密顿公式 1+ + n= tr (A), 1 n= A . 若 A = ，则 f(A) =f( ) . 所以 A^m,A^ -1 ,A^ ,A+kE 的对应特征值分别是 ^m, ^ -1 , A , +k （涉及逆或除法时先保证 ≠0）。不同特征值对应的特征向量线性无关。 更完整的特征值变换公式： kA:\\ k , A+kE:\\ +k, A^m:\\ ^m, A^ -1 :\\ 1 , A^ :\\ A (A 可逆), f(A):\\ f( ). A^T 与 A 的特征多项式完全相同，因此特征值及其代数重数相同。 凯莱—哈密顿公式：设 p A( )= E-A , 则 p A(A)=O. 特别地，对二阶矩阵： A^2- tr (A)A+ A E=O. 由特征值和特征向量反求矩阵 若 n 个线性无关特征向量组成 P=( 1, , n), 对应特征值组成 = diag ( 1, , n), 则 A=P P^ -1 . 若这些特征向量已经标准正交，记其组成正交矩阵 Q，则 A=Q Q^T.",
        "summary": "特征值、特征向量、特征方程与特征子空间 A = , ≠0. 先解 E-A =0 得到全部特征值；再对每个 i 解 ( iE-A)x=0 得到对应特征向量。 特征值之和、乘积、谱映射与凯莱—哈密顿公式 1+ + n= tr (A), 1 n= A . 若 A…",
        "anchors": [
          {
            "id": "anchor-1uq8hih",
            "legacyId": "linear-algebra-05-001-anchor-001",
            "title": "特征值、特征向量、特征方程与特征子空间",
            "searchText": "特征值、特征向量、特征方程与特征子空间 A = , ≠0. 先解 E-A =0 得到全部特征值；再对每个 i 解 ( iE-A)x=0 得到对应特征向量。",
            "summary": "A = , ≠0. 先解 E-A =0 得到全部特征值；再对每个 i 解 ( iE-A)x=0 得到对应特征向量。"
          },
          {
            "id": "anchor-1t3tr3e",
            "legacyId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式",
            "searchText": "特征值之和、乘积、谱映射与凯莱—哈密顿公式 1+ + n= tr (A), 1 n= A . 若 A = ，则 f(A) =f( ) . 所以 A^m,A^ -1 ,A^ ,A+kE 的对应特征值分别是 ^m, ^ -1 , A , +k （涉及逆或除法时先保证 ≠0）。不同特征值对应的特征向量线性无关。 更完整的特征值变换公式： kA:\\ k , A+kE:\\ +k, A^m:\\ ^m, A^ -1 :\\ 1 , A^ :\\ A (A 可逆), f(A):\\ f( ). A^T 与 A 的特征多项式完全相同，因此特征值及其代数重数相同。 凯莱—哈密顿公式：设 p A( )= E-A , 则 p A(A)=O. 特别地，对二阶矩阵： A^2- tr (A)A+ A E=O.",
            "summary": "1+ + n= tr (A), 1 n= A . 若 A = ，则 f(A) =f( ) . 所以 A^m,A^ -1 ,A^ ,A+kE 的对应特征值分别是 ^m, ^ -1 , A , +k （涉及逆或除法时先保证 ≠0）。不同特征值对应的特征向量线性…"
          },
          {
            "id": "anchor-4j6of9",
            "legacyId": "linear-algebra-05-001-anchor-003",
            "title": "由特征值和特征向量反求矩阵",
            "searchText": "由特征值和特征向量反求矩阵 若 n 个线性无关特征向量组成 P=( 1, , n), 对应特征值组成 = diag ( 1, , n), 则 A=P P^ -1 . 若这些特征向量已经标准正交，记其组成正交矩阵 Q，则 A=Q Q^T.",
            "summary": "若 n 个线性无关特征向量组成 P=( 1, , n), 对应特征值组成 = diag ( 1, , n), 则 A=P P^ -1 . 若这些特征向量已经标准正交，记其组成正交矩阵 Q，则 A=Q Q^T."
          }
        ],
        "formulas": [
          {
            "id": "linear-12k0arn-1",
            "parentAnchorId": "anchor-1uq8hih",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-001",
            "title": "特征值、特征向量、特征方程与特征子空间：Aα",
            "latex": "A\\alpha=\\lambda\\alpha,\\qquad \\alpha\\ne0.",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：特征值、特征向量、特征方程与特征子空间。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 0
          },
          {
            "id": "linear-ea2gqa",
            "parentAnchorId": "anchor-1uq8hih",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-001",
            "title": "特征值、特征向量、特征方程与特征子空间：|λ E-A|",
            "latex": "|\\lambda E-A|=0",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "所属知识点：特征值、特征向量、特征方程与特征子空间。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 1
          },
          {
            "id": "linear-143ie5",
            "parentAnchorId": "anchor-1uq8hih",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-001",
            "title": "特征值、特征向量、特征方程与特征子空间：(λ_iE-A)x",
            "latex": "(\\lambda_iE-A)x=0",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "得到全部特征值；再对每个 \\lambda_i 解",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 2
          },
          {
            "id": "linear-ajemyi-1",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：λ_1+cdots+λ_n",
            "latex": "\\lambda_1+\\cdots+\\lambda_n=\\operatorname{tr}(A)",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 3
          },
          {
            "id": "linear-ajemyi-2",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：λ_1cdotsλ_n",
            "latex": "\\lambda_1\\cdots\\lambda_n=|A|",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 4
          },
          {
            "id": "linear-2kaco1",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：f(A)α",
            "latex": "f(A)\\alpha=f(\\lambda)\\alpha.",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "若 A\\alpha=\\lambda\\alpha，则",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 5
          },
          {
            "id": "linear-tfy60l",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：λ^m, λ^-1, (|A|)/(λ), λ+k",
            "latex": "\\lambda^m,\\quad \\lambda^{-1},\\quad \\frac{|A|}{\\lambda},\\quad \\lambda+k",
            "sourceBlockIndex": 8,
            "searchAliases": [],
            "context": "所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 6
          },
          {
            "id": "linear-sjzaip",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：kA: kλ,",
            "latex": "kA:\\ k\\lambda,\\qquad\nA+kE:\\ \\lambda+k,\\qquad\nA^m:\\ \\lambda^m,",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "更完整的特征值变换公式：",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 7
          },
          {
            "id": "linear-1kdffp3",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：A^-1: frac1λ,",
            "latex": "A^{-1}:\\ \\frac1\\lambda,\\qquad\nA^*:\\ \\frac{|A|}{\\lambda}\\quad(A\\text{ 可逆}),\\qquad\nf(A):\\ f(\\lambda).",
            "sourceBlockIndex": 11,
            "searchAliases": [],
            "context": "所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 8
          },
          {
            "id": "linear-14dsf15",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：p_A(λ)",
            "latex": "p_A(\\lambda)=|\\lambda E-A|,",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "凯莱—哈密顿公式：设",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 9
          },
          {
            "id": "linear-gbh71y",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：p_A(A)",
            "latex": "p_A(A)=O.",
            "sourceBlockIndex": 15,
            "searchAliases": [],
            "context": "所属知识点：特征值之和、乘积、谱映射与凯莱—哈密顿公式。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 10
          },
          {
            "id": "linear-kgmq49",
            "parentAnchorId": "anchor-1t3tr3e",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-002",
            "title": "特征值之和、乘积、谱映射与凯莱—哈密顿公式：A^2-tr(A)A+|A|E",
            "latex": "A^2-\\operatorname{tr}(A)A+|A|E=O.",
            "sourceBlockIndex": 16,
            "searchAliases": [],
            "context": "特别地，对二阶矩阵：",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 11
          },
          {
            "id": "linear-1o7l6c4",
            "parentAnchorId": "anchor-4j6of9",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-003",
            "title": "由特征值和特征向量反求矩阵：P",
            "latex": "P=(\\alpha_1,\\ldots,\\alpha_n),",
            "sourceBlockIndex": 18,
            "searchAliases": [],
            "context": "若 n 个线性无关特征向量组成",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 12
          },
          {
            "id": "linear-a0pbfp",
            "parentAnchorId": "anchor-4j6of9",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-003",
            "title": "由特征值和特征向量反求矩阵：Lambda",
            "latex": "\\Lambda=\\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n),",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "对应特征值组成",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 13
          },
          {
            "id": "linear-1t2ah4o",
            "parentAnchorId": "anchor-4j6of9",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-003",
            "title": "由特征值和特征向量反求矩阵：A",
            "latex": "A=P\\Lambda P^{-1}.",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：由特征值和特征向量反求矩阵。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 14
          },
          {
            "id": "linear-kb21ok",
            "parentAnchorId": "anchor-4j6of9",
            "legacyParentAnchorId": "linear-algebra-05-001-anchor-003",
            "title": "由特征值和特征向量反求矩阵：A",
            "latex": "A=Q\\Lambda Q^T.",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "若这些特征向量已经标准正交，记其组成正交矩阵 Q，则",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-001",
            "order": 15
          }
        ]
      },
      {
        "id": "linear-algebra-05-002",
        "title": "相似",
        "body": "##### 相似矩阵定义、相似不变量与矩阵多项式\n\n<!-- formula {\"id\":\"linear-1ordvlf\",\"title\":\"相似矩阵定义、相似不变量与矩阵多项式：B\",\"aliases\":[],\"context\":\"所属知识点：相似矩阵定义、相似不变量与矩阵多项式。\"} -->\n\\[\nB=P^{-1}AP\\quad(P\\text{ 可逆}).\n\\]\n\n相似矩阵有相同的特征方程 \\(|\\lambda E-A|=0\\)、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。\n\n若 \\(B=P^{-1}AP\\)，则对任意正整数 \\(m\\) 和多项式 \\(f\\)：\n\n<!-- formula {\"items\":[{\"id\":\"linear-a8dp93-1\",\"title\":\"相似矩阵定义、相似不变量与矩阵多项式：B^m\",\"aliases\":[],\"context\":\"相似矩阵有相同的特征方程 |\\\\lambda E-A|=0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。\",\"latex\":\"B^m=P^{-1}A^mP\"},{\"id\":\"linear-a8dp93-2\",\"title\":\"相似矩阵定义、相似不变量与矩阵多项式：f(B)\",\"aliases\":[],\"context\":\"相似矩阵有相同的特征方程 |\\\\lambda E-A|=0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。\",\"latex\":\"f(B)=P^{-1}f(A)P\"}]} -->\n\\[\nB^m=P^{-1}A^mP,\\qquad f(B)=P^{-1}f(A)P.\n\\]\n\n##### 两个矩阵是否相似的判断步骤\n\n设 \\(A,B\\) 为同阶方阵，按下面的顺序判断：\n\n1. 比较 \\(A,B\\) 的秩。秩不相等，则不相似；秩相等，继续下一步。\n2. 比较 \\(A,B\\) 的特征值及其代数重数。不同则不相似；相同则继续下一步。\n3. 判断 \\(A,B\\) 是否都可相似对角化。若都可相似对角化，则它们相似；若只有一个可相似对角化，则它们不相似。若两个都不可相似对角化，前三步还不能确定是否相似，需进一步寻找可逆矩阵 \\(S\\) 满足 \\(B=S^{-1}AS\\)。\n\n在第 3 步中，若两者都可对角化且特征值及其代数重数相同，就能将对角元按相同顺序排列，使\n\n<!-- formula {\"id\":\"linear-1xtw3dn-1\",\"title\":\"两个矩阵是否相似的判断步骤：P^-1AP\",\"aliases\":[],\"context\":\"在第 3 步中，若两者都可对角化且特征值及其代数重数相同，就能将对角元按相同顺序排列，使\"} -->\n\\[\nP^{-1}AP=\\Lambda,\\qquad Q^{-1}BQ=\\Lambda.\n\\]\n\n于是\n\n<!-- formula {\"id\":\"linear-zazdaw\",\"title\":\"两个矩阵是否相似的判断步骤：B\",\"aliases\":[],\"context\":\"所属知识点：两个矩阵是否相似的判断步骤。\"} -->\n\\[\nB=QP^{-1}APQ^{-1}=(PQ^{-1})^{-1}A(PQ^{-1}),\n\\]\n\n故 \\(A\\sim B\\)。若要直接求相似变换矩阵，也可解 \\(AS=SB\\)，并检查 \\(S\\) 是否可逆。",
        "searchText": "相似 相似 相似 相似矩阵定义、相似不变量与矩阵多项式 B=P^ -1 AP (P 可逆). 相似矩阵有相同的特征方程 E-A =0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。 若 B=P^ -1 AP，则对任意正整数 m 和多项式 f： B^m=P^ -1 A^mP, f(B)=P^ -1 f(A)P. 两个矩阵是否相似的判断步骤 设 A,B 为同阶方阵，按下面的顺序判断： 比较 A,B 的秩。秩不相等，则不相似；秩相等，继续下一步。 比较 A,B 的特征值及其代数重数。不同则不相似；相同则继续下一步。 判断 A,B 是否都可相似对角化。若都可相似对角化，则它们相似；若只有一个可相似对角化，则它们不相似。若两个都不可相似对角化，前三步还不能确定是否相似，需进一步寻找可逆矩阵 S 满足 B=S^ -1 AS。 在第 3 步中，若两者都可对角化且特征值及其代数重数相同，就能将对角元按相同顺序排列，使 P^ -1 AP= , Q^ -1 BQ= . 于是 B=QP^ -1 APQ^ -1 =(PQ^ -1 )^ -1 A(PQ^ -1 ), 故 A B。若要直接求相似变换矩阵，也可解 AS=SB，并检查 S 是否可逆。",
        "summary": "相似矩阵定义、相似不变量与矩阵多项式 B=P^ -1 AP (P 可逆). 相似矩阵有相同的特征方程 E-A =0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。 若 B=P^ -1 AP，则对任意正整数 m 和多项式 f： B^m…",
        "anchors": [
          {
            "id": "anchor-3href9",
            "legacyId": "linear-algebra-05-002-anchor-001",
            "title": "相似矩阵定义、相似不变量与矩阵多项式",
            "searchText": "相似矩阵定义、相似不变量与矩阵多项式 B=P^ -1 AP (P 可逆). 相似矩阵有相同的特征方程 E-A =0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。 若 B=P^ -1 AP，则对任意正整数 m 和多项式 f： B^m=P^ -1 A^mP, f(B)=P^ -1 f(A)P.",
            "summary": "B=P^ -1 AP (P 可逆). 相似矩阵有相同的特征方程 E-A =0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。 若 B=P^ -1 AP，则对任意正整数 m 和多项式 f： B^m=P^ -1 A^mP, f(B)=P…"
          },
          {
            "id": "anchor-wp404o",
            "legacyId": "linear-algebra-05-002-anchor-002",
            "title": "两个矩阵是否相似的判断步骤",
            "searchText": "两个矩阵是否相似的判断步骤 设 A,B 为同阶方阵，按下面的顺序判断： 比较 A,B 的秩。秩不相等，则不相似；秩相等，继续下一步。 比较 A,B 的特征值及其代数重数。不同则不相似；相同则继续下一步。 判断 A,B 是否都可相似对角化。若都可相似对角化，则它们相似；若只有一个可相似对角化，则它们不相似。若两个都不可相似对角化，前三步还不能确定是否相似，需进一步寻找可逆矩阵 S 满足 B=S^ -1 AS。 在第 3 步中，若两者都可对角化且特征值及其代数重数相同，就能将对角元按相同顺序排列，使 P^ -1 AP= , Q^ -1 BQ= . 于是 B=QP^ -1 APQ^ -1 =(PQ^ -1 )^ -1 A(PQ^ -1 ), 故 A B。若要直接求相似变换矩阵，也可解 AS=SB，并检查 S 是否可逆。",
            "summary": "设 A,B 为同阶方阵，按下面的顺序判断： 比较 A,B 的秩。秩不相等，则不相似；秩相等，继续下一步。 比较 A,B 的特征值及其代数重数。不同则不相似；相同则继续下一步。 判断 A,B 是否都可相似对角化。若都可相似对角化，则它们相似；若只有一个可相似…"
          }
        ],
        "formulas": [
          {
            "id": "linear-1ordvlf",
            "parentAnchorId": "anchor-3href9",
            "legacyParentAnchorId": "linear-algebra-05-002-anchor-001",
            "title": "相似矩阵定义、相似不变量与矩阵多项式：B",
            "latex": "B=P^{-1}AP\\quad(P\\text{ 可逆}).",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：相似矩阵定义、相似不变量与矩阵多项式。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-002",
            "order": 0
          },
          {
            "id": "linear-a8dp93-1",
            "parentAnchorId": "anchor-3href9",
            "legacyParentAnchorId": "linear-algebra-05-002-anchor-001",
            "title": "相似矩阵定义、相似不变量与矩阵多项式：B^m",
            "latex": "B^m=P^{-1}A^mP",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "相似矩阵有相同的特征方程 |\\lambda E-A|=0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-002",
            "order": 1
          },
          {
            "id": "linear-a8dp93-2",
            "parentAnchorId": "anchor-3href9",
            "legacyParentAnchorId": "linear-algebra-05-002-anchor-001",
            "title": "相似矩阵定义、相似不变量与矩阵多项式：f(B)",
            "latex": "f(B)=P^{-1}f(A)P",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "相似矩阵有相同的特征方程 |\\lambda E-A|=0、特征值、迹、行列式和秩；这些相同一般只是必要条件，不足以单独证明相似。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-002",
            "order": 2
          },
          {
            "id": "linear-1xtw3dn-1",
            "parentAnchorId": "anchor-wp404o",
            "legacyParentAnchorId": "linear-algebra-05-002-anchor-002",
            "title": "两个矩阵是否相似的判断步骤：P^-1AP",
            "latex": "P^{-1}AP=\\Lambda,\\qquad Q^{-1}BQ=\\Lambda.",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "在第 3 步中，若两者都可对角化且特征值及其代数重数相同，就能将对角元按相同顺序排列，使",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-002",
            "order": 3
          },
          {
            "id": "linear-zazdaw",
            "parentAnchorId": "anchor-wp404o",
            "legacyParentAnchorId": "linear-algebra-05-002-anchor-002",
            "title": "两个矩阵是否相似的判断步骤：B",
            "latex": "B=QP^{-1}APQ^{-1}=(PQ^{-1})^{-1}A(PQ^{-1}),",
            "sourceBlockIndex": 13,
            "searchAliases": [],
            "context": "所属知识点：两个矩阵是否相似的判断步骤。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-002",
            "order": 4
          }
        ]
      },
      {
        "id": "linear-algebra-05-003",
        "title": "相似对角化",
        "body": "##### 矩阵能否相似对角化的判断步骤\n\n设 \\(A\\) 是 \\(n\\) 阶矩阵，按下面的顺序判断：\n\n1. 若 \\(A\\) 是实对称矩阵，则一定可相似对角化；否则继续下一步。\n2. 若 \\(A\\) 有 \\(n\\) 个互不相同的特征值，则一定可相似对角化；否则继续下一步。\n3. 对每个重复 \\(k\\) 次的特征值 \\(\\lambda\\)，检查其几何重数是否等于代数重数，即\n\n<!-- formula {\"id\":\"linear-m6scbb\",\"title\":\"矩阵能否相似对角化的判断步骤：dimker(A-λ E)\",\"aliases\":[],\"context\":\"3. 对每个重复 k 次的特征值 \\\\lambda，检查其几何重数是否等于代数重数，即\"} -->\n\\[\n\\dim\\ker(A-\\lambda E)=n-r(A-\\lambda E)=k.\n\\]\n\n若每个重特征值都满足上式，则 \\(A\\) 可相似对角化；只要有一个不满足，就不可相似对角化。这里的代数重数 \\(k\\) 是 \\(\\lambda\\) 作为特征多项式根的重数；几何重数是方程组 \\((A-\\lambda E)x=0\\) 的基础解系向量个数，也就是 \\(n-r(A-\\lambda E)\\)。等价地，\\(A\\) 可相似对角化当且仅当有 \\(n\\) 个线性无关特征向量。\n\n##### 相似对角化中 \\(P\\) 与 \\(\\Lambda\\) 的求法\n\n1. 求全部特征值。\n2. 求每个特征值对应的特征向量。\n3. 按 \\(\\Lambda\\) 对角元顺序，把对应特征向量依次作为 \\(P\\) 的列。\n4. 写出 \\(P^{-1}AP=\\Lambda\\)。\n\n若只有一个特征值 \\(\\lambda\\)，矩阵可对角化当且仅当 <!-- formula {\"id\":\"linear-single-eigenvalue-diagonalizable-scalar\",\"title\":\"只有一个特征值时可对角化的判定\",\"aliases\":[\"单一特征值对角化\",\"A等于lambdaE\"],\"context\":\"n 阶矩阵只有一个特征值 λ 时，可对角化当且仅当它就是 λE。\"} -->\\(A=\\lambda E\\)。",
        "searchText": "相似对角化 相似对角化 相似对角化 矩阵能否相似对角化的判断步骤 设 A 是 n 阶矩阵，按下面的顺序判断： 若 A 是实对称矩阵，则一定可相似对角化；否则继续下一步。 若 A 有 n 个互不相同的特征值，则一定可相似对角化；否则继续下一步。 对每个重复 k 次的特征值 ，检查其几何重数是否等于代数重数，即 (A- E)=n-r(A- E)=k. 若每个重特征值都满足上式，则 A 可相似对角化；只要有一个不满足，就不可相似对角化。这里的代数重数 k 是 作为特征多项式根的重数；几何重数是方程组 (A- E)x=0 的基础解系向量个数，也就是 n-r(A- E)。等价地，A 可相似对角化当且仅当有 n 个线性无关特征向量。 相似对角化中 P 与 的求法 求全部特征值。 求每个特征值对应的特征向量。 按 对角元顺序，把对应特征向量依次作为 P 的列。 写出 P^ -1 AP= 。 若只有一个特征值 ，矩阵可对角化当且仅当 A= E。",
        "summary": "矩阵能否相似对角化的判断步骤 设 A 是 n 阶矩阵，按下面的顺序判断： 若 A 是实对称矩阵，则一定可相似对角化；否则继续下一步。 若 A 有 n 个互不相同的特征值，则一定可相似对角化；否则继续下一步。 对每个重复 k 次的特征值 ，检查其几何重数是否…",
        "anchors": [
          {
            "id": "anchor-1bg5ylq",
            "legacyId": "linear-algebra-05-003-anchor-001",
            "title": "矩阵能否相似对角化的判断步骤",
            "searchText": "矩阵能否相似对角化的判断步骤 设 A 是 n 阶矩阵，按下面的顺序判断： 若 A 是实对称矩阵，则一定可相似对角化；否则继续下一步。 若 A 有 n 个互不相同的特征值，则一定可相似对角化；否则继续下一步。 对每个重复 k 次的特征值 ，检查其几何重数是否等于代数重数，即 (A- E)=n-r(A- E)=k. 若每个重特征值都满足上式，则 A 可相似对角化；只要有一个不满足，就不可相似对角化。这里的代数重数 k 是 作为特征多项式根的重数；几何重数是方程组 (A- E)x=0 的基础解系向量个数，也就是 n-r(A- E)。等价地，A 可相似对角化当且仅当有 n 个线性无关特征向量。",
            "summary": "设 A 是 n 阶矩阵，按下面的顺序判断： 若 A 是实对称矩阵，则一定可相似对角化；否则继续下一步。 若 A 有 n 个互不相同的特征值，则一定可相似对角化；否则继续下一步。 对每个重复 k 次的特征值 ，检查其几何重数是否等于代数重数，即 (A- E)…"
          },
          {
            "id": "anchor-13tlbne",
            "legacyId": "linear-algebra-05-003-anchor-002",
            "title": "相似对角化中 \\(P\\) 与 \\(\\Lambda\\) 的求法",
            "searchText": "相似对角化中 P 与 的求法 求全部特征值。 求每个特征值对应的特征向量。 按 对角元顺序，把对应特征向量依次作为 P 的列。 写出 P^ -1 AP= 。 若只有一个特征值 ，矩阵可对角化当且仅当 A= E。",
            "summary": "求全部特征值。 求每个特征值对应的特征向量。 按 对角元顺序，把对应特征向量依次作为 P 的列。 写出 P^ -1 AP= 。 若只有一个特征值 ，矩阵可对角化当且仅当 A= E。"
          }
        ],
        "formulas": [
          {
            "id": "linear-m6scbb",
            "parentAnchorId": "anchor-1bg5ylq",
            "legacyParentAnchorId": "linear-algebra-05-003-anchor-001",
            "title": "矩阵能否相似对角化的判断步骤：dimker(A-λ E)",
            "latex": "\\dim\\ker(A-\\lambda E)=n-r(A-\\lambda E)=k.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "3. 对每个重复 k 次的特征值 \\lambda，检查其几何重数是否等于代数重数，即",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-003",
            "order": 0
          },
          {
            "id": "linear-single-eigenvalue-diagonalizable-scalar",
            "parentAnchorId": "anchor-13tlbne",
            "legacyParentAnchorId": "linear-algebra-05-003-anchor-002",
            "title": "只有一个特征值时可对角化的判定",
            "latex": "A=\\lambda E",
            "sourceBlockIndex": 21,
            "searchAliases": [
              "单一特征值对角化",
              "A等于lambdaE"
            ],
            "context": "n 阶矩阵只有一个特征值 λ 时，可对角化当且仅当它就是 λE。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-003",
            "order": 1
          }
        ]
      },
      {
        "id": "linear-algebra-05-004",
        "title": "实对称矩阵",
        "body": "##### 实对称矩阵六条常用结论\n\n设 \\(A\\) 为 \\(n\\) 阶实对称矩阵，以下结论可以一起背：\n\n1. **不同特征值对应的特征向量正交。** 特征值都为实数；同一重特征值下选出的向量若不正交，可再作施密特正交化。\n2. **一定能正交对角化。** 存在正交矩阵 \\(Q\\)，使 \\(Q^TAQ=\\Lambda\\)，其中 \\(\\Lambda\\) 的对角元是 \\(A\\) 的特征值。\n3. **零特征值的重数等于 \\(n-r(A)\\)。** 因为实对称矩阵可对角化，零特征值的代数重数和几何重数相同。\n4. **两个实对称矩阵相似，当且仅当特征值按重数计完全相同。** 等价地，它们的特征多项式相同；这个逆向判定不能直接套用到一般矩阵。\n5. **两个实对称矩阵相似，则一定合同；反过来不一定。** 合同只要求正、负、零特征值的个数分别相同，不要求具体特征值相同。例如 \\(\\operatorname{diag}(1,2)\\) 与 \\(\\operatorname{diag}(1,3)\\) 合同但不相似。\n6. **合同规范形由正、负惯性指数决定。** 存在可逆矩阵 \\(P\\)，使\n\n<!-- formula {\"id\":\"linear-symmetric-inertia-normal-form\",\"title\":\"实对称矩阵的合同规范形\",\"aliases\":[\"惯性定理\",\"正负惯性指数\",\"实对称矩阵规范形\"],\"context\":\"p、q 分别是正、负特征值的个数，零块阶数为 n-p-q；P 是可逆矩阵。\"} -->\n\\[\n\\begin{aligned}\nP^TAP&=\\operatorname{diag}(I_p,-I_q,O_{n-p-q}),\\\\\np+q&=r(A).\n\\end{aligned}\n\\]\n\n其中 \\(p\\) 是正特征值个数，\\(q\\) 是负特征值个数，零特征值个数为 \\(n-p-q\\)。\n\n##### 实对称矩阵正交对角化与正交矩阵 \\(Q\\) 的求法\n\n求特征值与特征向量；同一特征值下先正交化；所有向量单位化；按目标对角元顺序组成 \\(Q\\)。四阶题步骤不变，只是各特征值对应向量的数量更多。\n\n若已知两组标准正交特征向量组成 \\(Q\\)，则\n\n<!-- formula {\"id\":\"linear-jqeurs\",\"title\":\"实对称矩阵正交对角化与正交矩阵 \\\\(Q\\\\) 的求法：A\",\"aliases\":[],\"context\":\"若已知两组标准正交特征向量组成 Q，则\"} -->\n\\[\nA=Q\\Lambda Q^T\n=\\sum_{i=1}^n\\lambda_iq_iq_i^T.\n\\]\n\n因此对任意非零向量 \\(x\\)：\n\n<!-- formula {\"id\":\"linear-dsmmbf\",\"title\":\"实对称矩阵正交对角化与正交矩阵 \\\\(Q\\\\) 的求法：λ_min\",\"aliases\":[],\"context\":\"因此对任意非零向量 x：\"} -->\n\\[\n\\lambda_{\\min}\\le\\frac{x^TAx}{x^Tx}\\le\\lambda_{\\max},\n\\]\n\n也就是\n\n<!-- formula {\"id\":\"linear-7hb4jr\",\"title\":\"实对称矩阵正交对角化与正交矩阵 \\\\(Q\\\\) 的求法：λ_minx^Tx\",\"aliases\":[],\"context\":\"所属知识点：实对称矩阵正交对角化与正交矩阵 \\\\(Q\\\\) 的求法。\"} -->\n\\[\n\\lambda_{\\min}x^Tx\\le x^TAx\\le\\lambda_{\\max}x^Tx.\n\\]\n\n两个实对称矩阵要同时被同一个正交矩阵对角化，常用条件是它们可交换：<!-- formula {\"id\":\"linear-commuting-symmetric-simultaneous-diagonalization\",\"title\":\"实对称矩阵同时正交对角化的交换条件\",\"aliases\":[\"同时正交对角化\",\"对称矩阵可交换\"],\"context\":\"A、B 都为实对称矩阵时，可同时正交对角化当且仅当 AB=BA。\"} -->\\(AB=BA\\)。",
        "searchText": "实对称矩阵 实对称矩阵 实对称矩阵 实对称矩阵六条常用结论 设 A 为 n 阶实对称矩阵，以下结论可以一起背： 不同特征值对应的特征向量正交。 特征值都为实数；同一重特征值下选出的向量若不正交，可再作施密特正交化。 一定能正交对角化。 存在正交矩阵 Q，使 Q^TAQ= ，其中 的对角元是 A 的特征值。 零特征值的重数等于 n-r(A)。 因为实对称矩阵可对角化，零特征值的代数重数和几何重数相同。 两个实对称矩阵相似，当且仅当特征值按重数计完全相同。 等价地，它们的特征多项式相同；这个逆向判定不能直接套用到一般矩阵。 两个实对称矩阵相似，则一定合同；反过来不一定。 合同只要求正、负、零特征值的个数分别相同，不要求具体特征值相同。例如 diag (1,2) 与 diag (1,3) 合同但不相似。 合同规范形由正、负惯性指数决定。 存在可逆矩阵 P，使 aligned P^TAP&= diag (I p,-I q,O n-p-q ),\\\\ p+q&=r(A). aligned 其中 p 是正特征值个数，q 是负特征值个数，零特征值个数为 n-p-q。 实对称矩阵正交对角化与正交矩阵 Q 的求法 求特征值与特征向量；同一特征值下先正交化；所有向量单位化；按目标对角元顺序组成 Q。四阶题步骤不变，只是各特征值对应向量的数量更多。 若已知两组标准正交特征向量组成 Q，则 A=Q Q^T = i=1 ^n iq iq i^T. 因此对任意非零向量 x： ≤ x^TAx x^Tx ≤ , 也就是 x^Tx≤ x^TAx≤ x^Tx. 两个实对称矩阵要同时被同一个正交矩阵对角化，常用条件是它们可交换： AB=BA。",
        "summary": "实对称矩阵六条常用结论 设 A 为 n 阶实对称矩阵，以下结论可以一起背： 不同特征值对应的特征向量正交。 特征值都为实数；同一重特征值下选出的向量若不正交，可再作施密特正交化。 一定能正交对角化。 存在正交矩阵 Q，使 Q^TAQ= ，其中 的对角元是 …",
        "anchors": [
          {
            "id": "anchor-1q9af1w",
            "legacyId": "linear-algebra-05-004-anchor-001",
            "title": "实对称矩阵六条常用结论",
            "searchText": "实对称矩阵六条常用结论 设 A 为 n 阶实对称矩阵，以下结论可以一起背： 不同特征值对应的特征向量正交。 特征值都为实数；同一重特征值下选出的向量若不正交，可再作施密特正交化。 一定能正交对角化。 存在正交矩阵 Q，使 Q^TAQ= ，其中 的对角元是 A 的特征值。 零特征值的重数等于 n-r(A)。 因为实对称矩阵可对角化，零特征值的代数重数和几何重数相同。 两个实对称矩阵相似，当且仅当特征值按重数计完全相同。 等价地，它们的特征多项式相同；这个逆向判定不能直接套用到一般矩阵。 两个实对称矩阵相似，则一定合同；反过来不一定。 合同只要求正、负、零特征值的个数分别相同，不要求具体特征值相同。例如 diag (1,2) 与 diag (1,3) 合同但不相似。 合同规范形由正、负惯性指数决定。 存在可逆矩阵 P，使 aligned P^TAP&= diag (I p,-I q,O n-p-q ),\\\\ p+q&=r(A). aligned 其中 p 是正特征值个数，q 是负特征值个数，零特征值个数为 n-p-q。",
            "summary": "设 A 为 n 阶实对称矩阵，以下结论可以一起背： 不同特征值对应的特征向量正交。 特征值都为实数；同一重特征值下选出的向量若不正交，可再作施密特正交化。 一定能正交对角化。 存在正交矩阵 Q，使 Q^TAQ= ，其中 的对角元是 A 的特征值。 零特征值…"
          },
          {
            "id": "anchor-1f0w0mb",
            "legacyId": "linear-algebra-05-004-anchor-002",
            "title": "实对称矩阵正交对角化与正交矩阵 \\(Q\\) 的求法",
            "searchText": "实对称矩阵正交对角化与正交矩阵 Q 的求法 求特征值与特征向量；同一特征值下先正交化；所有向量单位化；按目标对角元顺序组成 Q。四阶题步骤不变，只是各特征值对应向量的数量更多。 若已知两组标准正交特征向量组成 Q，则 A=Q Q^T = i=1 ^n iq iq i^T. 因此对任意非零向量 x： ≤ x^TAx x^Tx ≤ , 也就是 x^Tx≤ x^TAx≤ x^Tx. 两个实对称矩阵要同时被同一个正交矩阵对角化，常用条件是它们可交换： AB=BA。",
            "summary": "求特征值与特征向量；同一特征值下先正交化；所有向量单位化；按目标对角元顺序组成 Q。四阶题步骤不变，只是各特征值对应向量的数量更多。 若已知两组标准正交特征向量组成 Q，则 A=Q Q^T = i=1 ^n iq iq i^T. 因此对任意非零向量 x： …"
          }
        ],
        "formulas": [
          {
            "id": "linear-symmetric-inertia-normal-form",
            "parentAnchorId": "anchor-1q9af1w",
            "legacyParentAnchorId": "linear-algebra-05-004-anchor-001",
            "title": "实对称矩阵的合同规范形",
            "latex": "\\begin{aligned}\nP^TAP&=\\operatorname{diag}(I_p,-I_q,O_{n-p-q}),\\\\\np+q&=r(A).\n\\end{aligned}",
            "sourceBlockIndex": 10,
            "searchAliases": [
              "惯性定理",
              "正负惯性指数",
              "实对称矩阵规范形"
            ],
            "context": "p、q 分别是正、负特征值的个数，零块阶数为 n-p-q；P 是可逆矩阵。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-004",
            "order": 0
          },
          {
            "id": "linear-jqeurs",
            "parentAnchorId": "anchor-1f0w0mb",
            "legacyParentAnchorId": "linear-algebra-05-004-anchor-002",
            "title": "实对称矩阵正交对角化与正交矩阵 \\(Q\\) 的求法：A",
            "latex": "A=Q\\Lambda Q^T\n=\\sum_{i=1}^n\\lambda_iq_iq_i^T.",
            "sourceBlockIndex": 17,
            "searchAliases": [],
            "context": "若已知两组标准正交特征向量组成 Q，则",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-004",
            "order": 1
          },
          {
            "id": "linear-dsmmbf",
            "parentAnchorId": "anchor-1f0w0mb",
            "legacyParentAnchorId": "linear-algebra-05-004-anchor-002",
            "title": "实对称矩阵正交对角化与正交矩阵 \\(Q\\) 的求法：λ_min",
            "latex": "\\lambda_{\\min}\\le\\frac{x^TAx}{x^Tx}\\le\\lambda_{\\max},",
            "sourceBlockIndex": 19,
            "searchAliases": [],
            "context": "因此对任意非零向量 x：",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-004",
            "order": 2
          },
          {
            "id": "linear-7hb4jr",
            "parentAnchorId": "anchor-1f0w0mb",
            "legacyParentAnchorId": "linear-algebra-05-004-anchor-002",
            "title": "实对称矩阵正交对角化与正交矩阵 \\(Q\\) 的求法：λ_minx^Tx",
            "latex": "\\lambda_{\\min}x^Tx\\le x^TAx\\le\\lambda_{\\max}x^Tx.",
            "sourceBlockIndex": 20,
            "searchAliases": [],
            "context": "所属知识点：实对称矩阵正交对角化与正交矩阵 \\(Q\\) 的求法。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-004",
            "order": 3
          },
          {
            "id": "linear-commuting-symmetric-simultaneous-diagonalization",
            "parentAnchorId": "anchor-1f0w0mb",
            "legacyParentAnchorId": "linear-algebra-05-004-anchor-002",
            "title": "实对称矩阵同时正交对角化的交换条件",
            "latex": "AB=BA",
            "sourceBlockIndex": 21,
            "searchAliases": [
              "同时正交对角化",
              "对称矩阵可交换"
            ],
            "context": "A、B 都为实对称矩阵时，可同时正交对角化当且仅当 AB=BA。",
            "chapterId": "linear-algebra-05",
            "topicId": "linear-algebra-05-004",
            "order": 4
          }
        ]
      }
    ]
  },
  {
    "id": "linear-algebra-06",
    "partId": "linear-algebra",
    "partTitle": "线性代数",
    "title": "第六章　二次型",
    "topics": [
      {
        "id": "linear-algebra-06-001",
        "title": "二次型的秩或矩阵",
        "body": "##### 二次型矩阵表示、交叉项系数与二次型的秩\n\n<!-- formula {\"id\":\"linear-1ipo4fj\",\"title\":\"二次型矩阵表示、交叉项系数与二次型的秩：f(x)\",\"aliases\":[],\"context\":\"所属知识点：二次型矩阵表示、交叉项系数与二次型的秩。\"} -->\n\\[\nf(x)=x^TAx,\n\\]\n\n其中 \\(A\\) 取实对称矩阵。平方项系数放主对角线；交叉项 \\(c_{ij}x_ix_j\\) 的一半放在 \\(a_{ij},a_{ji}\\)：\n\n<!-- formula {\"id\":\"linear-1792x9t\",\"title\":\"二次型矩阵表示、交叉项系数与二次型的秩：a_ij\",\"aliases\":[],\"context\":\"所属知识点：二次型矩阵表示、交叉项系数与二次型的秩。\"} -->\n\\[\na_{ij}=a_{ji}=\\frac{c_{ij}}2.\n\\]\n\n二次型的秩就是 \\(r(A)\\)。由矩阵写二次型时，两个对称位置合并，所以交叉项系数是 \\(2a_{ij}\\)。",
        "searchText": "二次型的秩或矩阵 二次型的秩或矩阵 二次型的秩或矩阵 二次型矩阵表示、交叉项系数与二次型的秩 f(x)=x^TAx, 其中 A 取实对称矩阵。平方项系数放主对角线；交叉项 c ij x ix j 的一半放在 a ij ,a ji ： a ij =a ji = c ij 2. 二次型的秩就是 r(A)。由矩阵写二次型时，两个对称位置合并，所以交叉项系数是 2a ij 。",
        "summary": "二次型矩阵表示、交叉项系数与二次型的秩 f(x)=x^TAx, 其中 A 取实对称矩阵。平方项系数放主对角线；交叉项 c ij x ix j 的一半放在 a ij ,a ji ： a ij =a ji = c ij 2. 二次型的秩就是 r(A)。由矩阵写…",
        "anchors": [
          {
            "id": "anchor-18p87o1",
            "legacyId": "linear-algebra-06-001-anchor-001",
            "title": "二次型矩阵表示、交叉项系数与二次型的秩",
            "searchText": "二次型矩阵表示、交叉项系数与二次型的秩 f(x)=x^TAx, 其中 A 取实对称矩阵。平方项系数放主对角线；交叉项 c ij x ix j 的一半放在 a ij ,a ji ： a ij =a ji = c ij 2. 二次型的秩就是 r(A)。由矩阵写二次型时，两个对称位置合并，所以交叉项系数是 2a ij 。",
            "summary": "f(x)=x^TAx, 其中 A 取实对称矩阵。平方项系数放主对角线；交叉项 c ij x ix j 的一半放在 a ij ,a ji ： a ij =a ji = c ij 2. 二次型的秩就是 r(A)。由矩阵写二次型时，两个对称位置合并，所以交叉项系…"
          }
        ],
        "formulas": [
          {
            "id": "linear-1ipo4fj",
            "parentAnchorId": "anchor-18p87o1",
            "legacyParentAnchorId": "linear-algebra-06-001-anchor-001",
            "title": "二次型矩阵表示、交叉项系数与二次型的秩：f(x)",
            "latex": "f(x)=x^TAx,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：二次型矩阵表示、交叉项系数与二次型的秩。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-001",
            "order": 0
          },
          {
            "id": "linear-1792x9t",
            "parentAnchorId": "anchor-18p87o1",
            "legacyParentAnchorId": "linear-algebra-06-001-anchor-001",
            "title": "二次型矩阵表示、交叉项系数与二次型的秩：a_ij",
            "latex": "a_{ij}=a_{ji}=\\frac{c_{ij}}2.",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：二次型矩阵表示、交叉项系数与二次型的秩。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-001",
            "order": 1
          }
        ]
      },
      {
        "id": "linear-algebra-06-002",
        "title": "标准型",
        "body": "##### 配方法与可逆线性变换化二次型为标准形\n\n用配方法，或对行、列同时作相互对应的初等变换，把\n\n<!-- formula {\"id\":\"linear-178gm07\",\"title\":\"配方法与可逆线性变换化二次型为标准形：x^TAx\",\"aliases\":[],\"context\":\"用配方法，或对行、列同时作相互对应的初等变换，把\"} -->\n\\[\nx^TAx\n\\]\n\n化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 \\(x=Py\\)。若暂时没有平方项但有 \\(x_ix_j\\)，可令\n\n<!-- formula {\"id\":\"linear-w6whtt-1\",\"title\":\"配方法与可逆线性变换化二次型为标准形：x_i\",\"aliases\":[],\"context\":\"化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 x=Py。若暂时没有平方项但有 x_ix_j，可令\"} -->\n\\[\nx_i=u+v,\\qquad x_j=u-v\n\\]\n\n制造平方项。\n\n##### 正交变换化二次型为标准形\n\n对实对称矩阵求正交矩阵 \\(Q\\)，使\n\n<!-- formula {\"id\":\"linear-e4d6yq\",\"title\":\"正交变换化二次型为标准形：Q^TAQ\",\"aliases\":[],\"context\":\"对实对称矩阵求正交矩阵 Q，使\"} -->\n\\[\nQ^TAQ=\\Lambda.\n\\]\n\n令 \\(x=Qy\\)，则\n\n<!-- formula {\"id\":\"linear-1uclu4c\",\"title\":\"正交变换化二次型为标准形：x^TAx\",\"aliases\":[],\"context\":\"令 x=Qy，则\"} -->\n\\[\nx^TAx=\\lambda_1y_1^2+\\cdots+\\lambda_ny_n^2.\n\\]\n\n正交变换得到的标准形系数就是特征值；一般可逆变换得到的系数不一定是特征值。",
        "searchText": "标准型 标准型 标准型 配方法与可逆线性变换化二次型为标准形 用配方法，或对行、列同时作相互对应的初等变换，把 x^TAx 化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 x=Py。若暂时没有平方项但有 x ix j，可令 x i=u+v, x j=u-v 制造平方项。 正交变换化二次型为标准形 对实对称矩阵求正交矩阵 Q，使 Q^TAQ= . 令 x=Qy，则 x^TAx= 1y 1^2+ + ny n^2. 正交变换得到的标准形系数就是特征值；一般可逆变换得到的系数不一定是特征值。",
        "summary": "配方法与可逆线性变换化二次型为标准形 用配方法，或对行、列同时作相互对应的初等变换，把 x^TAx 化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 x=Py。若暂时没有平方项但有 x ix j，可令 x i=u+v, x j=u-v 制造…",
        "anchors": [
          {
            "id": "anchor-voomvu",
            "legacyId": "linear-algebra-06-002-anchor-001",
            "title": "配方法与可逆线性变换化二次型为标准形",
            "searchText": "配方法与可逆线性变换化二次型为标准形 用配方法，或对行、列同时作相互对应的初等变换，把 x^TAx 化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 x=Py。若暂时没有平方项但有 x ix j，可令 x i=u+v, x j=u-v 制造平方项。",
            "summary": "用配方法，或对行、列同时作相互对应的初等变换，把 x^TAx 化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 x=Py。若暂时没有平方项但有 x ix j，可令 x i=u+v, x j=u-v 制造平方项。"
          },
          {
            "id": "anchor-w491mz",
            "legacyId": "linear-algebra-06-002-anchor-002",
            "title": "正交变换化二次型为标准形",
            "searchText": "正交变换化二次型为标准形 对实对称矩阵求正交矩阵 Q，使 Q^TAQ= . 令 x=Qy，则 x^TAx= 1y 1^2+ + ny n^2. 正交变换得到的标准形系数就是特征值；一般可逆变换得到的系数不一定是特征值。",
            "summary": "对实对称矩阵求正交矩阵 Q，使 Q^TAQ= . 令 x=Qy，则 x^TAx= 1y 1^2+ + ny n^2. 正交变换得到的标准形系数就是特征值；一般可逆变换得到的系数不一定是特征值。"
          }
        ],
        "formulas": [
          {
            "id": "linear-178gm07",
            "parentAnchorId": "anchor-voomvu",
            "legacyParentAnchorId": "linear-algebra-06-002-anchor-001",
            "title": "配方法与可逆线性变换化二次型为标准形：x^TAx",
            "latex": "x^TAx",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "用配方法，或对行、列同时作相互对应的初等变换，把",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-002",
            "order": 0
          },
          {
            "id": "linear-w6whtt-1",
            "parentAnchorId": "anchor-voomvu",
            "legacyParentAnchorId": "linear-algebra-06-002-anchor-001",
            "title": "配方法与可逆线性变换化二次型为标准形：x_i",
            "latex": "x_i=u+v,\\qquad x_j=u-v",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "化成只含平方项的形式。配方后必须把旧变量写成新变量的可逆线性变换 x=Py。若暂时没有平方项但有 x_ix_j，可令",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-002",
            "order": 1
          },
          {
            "id": "linear-e4d6yq",
            "parentAnchorId": "anchor-w491mz",
            "legacyParentAnchorId": "linear-algebra-06-002-anchor-002",
            "title": "正交变换化二次型为标准形：Q^TAQ",
            "latex": "Q^TAQ=\\Lambda.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "对实对称矩阵求正交矩阵 Q，使",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-002",
            "order": 2
          },
          {
            "id": "linear-1uclu4c",
            "parentAnchorId": "anchor-w491mz",
            "legacyParentAnchorId": "linear-algebra-06-002-anchor-002",
            "title": "正交变换化二次型为标准形：x^TAx",
            "latex": "x^TAx=\\lambda_1y_1^2+\\cdots+\\lambda_ny_n^2.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "令 x=Qy，则",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-002",
            "order": 3
          }
        ]
      },
      {
        "id": "linear-algebra-06-003",
        "title": "规范形",
        "body": "##### 二次型规范形、正负惯性指数与零平方项个数\n\n把标准形中所有正系数缩放成 \\(1\\)、负系数缩放成 \\(-1\\)，零项保留，得到\n\n<!-- formula {\"id\":\"linear-97dfwj\",\"title\":\"二次型规范形\",\"aliases\":[],\"context\":\"把标准形中所有正系数缩放成 1、负系数缩放成 -1，零项保留，得到\"} -->\n\\[\nz_1^2+\\cdots+z_p^2-z_{p+1}^2-\\cdots-z_{p+q}^2.\n\\]\n\n其中 \\(p\\) 是正惯性指数，\\(q\\) 是负惯性指数，并且\n\n<!-- formula {\"id\":\"linear-zj9rkw\",\"title\":\"二次型规范形、正负惯性指数与零平方项个数：p+q\",\"aliases\":[],\"context\":\"其中 p 是正惯性指数，q 是负惯性指数，并且\"} -->\n\\[\np+q=r(A),\\qquad n-p-q\\text{ 是零项个数}.\n\\]",
        "searchText": "规范形 规范形 规范形 二次型规范形、正负惯性指数与零平方项个数 把标准形中所有正系数缩放成 1、负系数缩放成 -1，零项保留，得到 z 1^2+ +z p^2-z p+1 ^2- -z p+q ^2. 其中 p 是正惯性指数，q 是负惯性指数，并且 p+q=r(A), n-p-q 是零项个数.",
        "summary": "二次型规范形、正负惯性指数与零平方项个数 把标准形中所有正系数缩放成 1、负系数缩放成 -1，零项保留，得到 z 1^2+ +z p^2-z p+1 ^2- -z p+q ^2. 其中 p 是正惯性指数，q 是负惯性指数，并且 p+q=r(A), n-p-…",
        "anchors": [
          {
            "id": "anchor-1u32o0e",
            "legacyId": "linear-algebra-06-003-anchor-001",
            "title": "二次型规范形、正负惯性指数与零平方项个数",
            "searchText": "二次型规范形、正负惯性指数与零平方项个数 把标准形中所有正系数缩放成 1、负系数缩放成 -1，零项保留，得到 z 1^2+ +z p^2-z p+1 ^2- -z p+q ^2. 其中 p 是正惯性指数，q 是负惯性指数，并且 p+q=r(A), n-p-q 是零项个数.",
            "summary": "把标准形中所有正系数缩放成 1、负系数缩放成 -1，零项保留，得到 z 1^2+ +z p^2-z p+1 ^2- -z p+q ^2. 其中 p 是正惯性指数，q 是负惯性指数，并且 p+q=r(A), n-p-q 是零项个数."
          }
        ],
        "formulas": [
          {
            "id": "linear-97dfwj",
            "parentAnchorId": "anchor-1u32o0e",
            "legacyParentAnchorId": "linear-algebra-06-003-anchor-001",
            "title": "二次型规范形",
            "latex": "z_1^2+\\cdots+z_p^2-z_{p+1}^2-\\cdots-z_{p+q}^2.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "把标准形中所有正系数缩放成 1、负系数缩放成 -1，零项保留，得到",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-003",
            "order": 0
          },
          {
            "id": "linear-zj9rkw",
            "parentAnchorId": "anchor-1u32o0e",
            "legacyParentAnchorId": "linear-algebra-06-003-anchor-001",
            "title": "二次型规范形、正负惯性指数与零平方项个数：p+q",
            "latex": "p+q=r(A),\\qquad n-p-q\\text{ 是零项个数}.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "其中 p 是正惯性指数，q 是负惯性指数，并且",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-003",
            "order": 1
          }
        ]
      },
      {
        "id": "linear-algebra-06-004",
        "title": "一个二次型变成另一个二次型，求变换矩阵",
        "body": "##### 一般可逆变换\n\n若\n\n<!-- formula {\"id\":\"linear-3dm9vf-1\",\"title\":\"一般可逆变换：P_1^TAP_1\",\"aliases\":[],\"context\":\"所属知识点：一般可逆变换。\"} -->\n\\[\nP_1^TAP_1=D,\\qquad P_2^TBP_2=D,\n\\]\n\n则可由同一个标准形搭桥。令 \\(x=Cy\\)，满足 \\(C^TAC=B\\) 的一个取法是\n\n<!-- formula {\"id\":\"linear-asipld\",\"title\":\"一般可逆变换：C\",\"aliases\":[],\"context\":\"则可由同一个标准形搭桥。令 x=Cy，满足 C^TAC=B 的一个取法是\"} -->\n\\[\nC=P_1P_2^{-1}.\n\\]\n\n存在可逆变换的前提是两个实对称矩阵的正、负惯性指数分别相同。\n\n##### 正交变换\n\n若\n\n<!-- formula {\"id\":\"linear-1vekdwn-1\",\"title\":\"正交变换：Q_1^TAQ_1\",\"aliases\":[],\"context\":\"所属知识点：正交变换。\"} -->\n\\[\nQ_1^TAQ_1=\\Lambda,\\qquad Q_2^TBQ_2=\\Lambda,\n\\]\n\n且特征值顺序一致，则\n\n<!-- formula {\"id\":\"linear-1v2a081\",\"title\":\"正交变换：C\",\"aliases\":[],\"context\":\"且特征值顺序一致，则\"} -->\n\\[\nC=Q_1Q_2^T\n\\]\n\n为所求正交变换。正交变换要求两边特征值及重数相同，比一般可逆变换条件更强。",
        "searchText": "一个二次型变成另一个二次型，求变换矩阵 一个二次型变成另一个二次型，求变换矩阵 一个二次型变成另一个二次型，求变换矩阵 一般可逆变换 若 P 1^TAP 1=D, P 2^TBP 2=D, 则可由同一个标准形搭桥。令 x=Cy，满足 C^TAC=B 的一个取法是 C=P 1P 2^ -1 . 存在可逆变换的前提是两个实对称矩阵的正、负惯性指数分别相同。 正交变换 若 Q 1^TAQ 1= , Q 2^TBQ 2= , 且特征值顺序一致，则 C=Q 1Q 2^T 为所求正交变换。正交变换要求两边特征值及重数相同，比一般可逆变换条件更强。",
        "summary": "一般可逆变换 若 P 1^TAP 1=D, P 2^TBP 2=D, 则可由同一个标准形搭桥。令 x=Cy，满足 C^TAC=B 的一个取法是 C=P 1P 2^ -1 . 存在可逆变换的前提是两个实对称矩阵的正、负惯性指数分别相同。 正交变换 若 Q 1…",
        "anchors": [
          {
            "id": "anchor-1vmfp82",
            "legacyId": "linear-algebra-06-004-anchor-001",
            "title": "一般可逆变换",
            "searchText": "一般可逆变换 若 P 1^TAP 1=D, P 2^TBP 2=D, 则可由同一个标准形搭桥。令 x=Cy，满足 C^TAC=B 的一个取法是 C=P 1P 2^ -1 . 存在可逆变换的前提是两个实对称矩阵的正、负惯性指数分别相同。",
            "summary": "若 P 1^TAP 1=D, P 2^TBP 2=D, 则可由同一个标准形搭桥。令 x=Cy，满足 C^TAC=B 的一个取法是 C=P 1P 2^ -1 . 存在可逆变换的前提是两个实对称矩阵的正、负惯性指数分别相同。"
          },
          {
            "id": "anchor-eb4ki4",
            "legacyId": "linear-algebra-06-004-anchor-002",
            "title": "正交变换",
            "searchText": "正交变换 若 Q 1^TAQ 1= , Q 2^TBQ 2= , 且特征值顺序一致，则 C=Q 1Q 2^T 为所求正交变换。正交变换要求两边特征值及重数相同，比一般可逆变换条件更强。",
            "summary": "若 Q 1^TAQ 1= , Q 2^TBQ 2= , 且特征值顺序一致，则 C=Q 1Q 2^T 为所求正交变换。正交变换要求两边特征值及重数相同，比一般可逆变换条件更强。"
          }
        ],
        "formulas": [
          {
            "id": "linear-3dm9vf-1",
            "parentAnchorId": "anchor-1vmfp82",
            "legacyParentAnchorId": "linear-algebra-06-004-anchor-001",
            "title": "一般可逆变换：P_1^TAP_1",
            "latex": "P_1^TAP_1=D,\\qquad P_2^TBP_2=D,",
            "sourceBlockIndex": 0,
            "searchAliases": [],
            "context": "所属知识点：一般可逆变换。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-004",
            "order": 0
          },
          {
            "id": "linear-asipld",
            "parentAnchorId": "anchor-1vmfp82",
            "legacyParentAnchorId": "linear-algebra-06-004-anchor-001",
            "title": "一般可逆变换：C",
            "latex": "C=P_1P_2^{-1}.",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "则可由同一个标准形搭桥。令 x=Cy，满足 C^TAC=B 的一个取法是",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-004",
            "order": 1
          },
          {
            "id": "linear-1vekdwn-1",
            "parentAnchorId": "anchor-eb4ki4",
            "legacyParentAnchorId": "linear-algebra-06-004-anchor-002",
            "title": "正交变换：Q_1^TAQ_1",
            "latex": "Q_1^TAQ_1=\\Lambda,\\qquad Q_2^TBQ_2=\\Lambda,",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：正交变换。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-004",
            "order": 2
          },
          {
            "id": "linear-1v2a081",
            "parentAnchorId": "anchor-eb4ki4",
            "legacyParentAnchorId": "linear-algebra-06-004-anchor-002",
            "title": "正交变换：C",
            "latex": "C=Q_1Q_2^T",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "且特征值顺序一致，则",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-004",
            "order": 3
          }
        ]
      },
      {
        "id": "linear-algebra-06-005",
        "title": "求二次型的解",
        "body": "##### 二次型方程的零解、非零解与标准形回代\n\n要求 \\(x^TAx=0\\)：\n\n1. 先用可逆或正交变换化成标准形 \\(d_1y_1^2+\\cdots+d_ny_n^2=0\\)。\n2. 解这个平方项方程。\n3. 用 \\(x=Py\\) 换回原变量。\n\n若 \\(A\\) 正定或负定，只有零解；若半正定，解正好来自零特征值对应的齐次方程；若不定，通常有非零解。",
        "searchText": "求二次型的解 求二次型的解 求二次型的解 二次型方程的零解、非零解与标准形回代 要求 x^TAx=0： 先用可逆或正交变换化成标准形 d 1y 1^2+ +d ny n^2=0。 解这个平方项方程。 用 x=Py 换回原变量。 若 A 正定或负定，只有零解；若半正定，解正好来自零特征值对应的齐次方程；若不定，通常有非零解。",
        "summary": "二次型方程的零解、非零解与标准形回代 要求 x^TAx=0： 先用可逆或正交变换化成标准形 d 1y 1^2+ +d ny n^2=0。 解这个平方项方程。 用 x=Py 换回原变量。 若 A 正定或负定，只有零解；若半正定，解正好来自零特征值对应的齐次方…",
        "anchors": [
          {
            "id": "anchor-1dr847p",
            "legacyId": "linear-algebra-06-005-anchor-001",
            "title": "二次型方程的零解、非零解与标准形回代",
            "searchText": "二次型方程的零解、非零解与标准形回代 要求 x^TAx=0： 先用可逆或正交变换化成标准形 d 1y 1^2+ +d ny n^2=0。 解这个平方项方程。 用 x=Py 换回原变量。 若 A 正定或负定，只有零解；若半正定，解正好来自零特征值对应的齐次方程；若不定，通常有非零解。",
            "summary": "要求 x^TAx=0： 先用可逆或正交变换化成标准形 d 1y 1^2+ +d ny n^2=0。 解这个平方项方程。 用 x=Py 换回原变量。 若 A 正定或负定，只有零解；若半正定，解正好来自零特征值对应的齐次方程；若不定，通常有非零解。"
          }
        ],
        "formulas": []
      },
      {
        "id": "linear-algebra-06-006",
        "title": "求二次型最值",
        "body": "##### 球面约束下二次型最值、最佳常数与等号条件\n\n设 \\(A\\) 为实对称矩阵，特征值按\n\n<!-- formula {\"id\":\"linear-ijejgu\",\"title\":\"球面约束下二次型最值、最佳常数与等号条件：λ_min\",\"aliases\":[],\"context\":\"设 A 为实对称矩阵，特征值按\"} -->\n\\[\n\\lambda_{\\min}\\le\\cdots\\le\\lambda_{\\max}\n\\]\n\n排列。在约束 \\(x^Tx=1\\) 下：\n\n<!-- formula {\"items\":[{\"id\":\"linear-1xfzh6b-1\",\"title\":\"球面约束下二次型最值、最佳常数与等号条件：min x^TAx\",\"aliases\":[],\"context\":\"排列。在约束 x^Tx=1 下：\",\"latex\":\"\\\\min x^TAx=\\\\lambda_{\\\\min}\"},{\"id\":\"linear-1xfzh6b-2\",\"title\":\"球面约束下二次型最值、最佳常数与等号条件：max x^TAx\",\"aliases\":[],\"context\":\"排列。在约束 x^Tx=1 下：\",\"latex\":\"\\\\max x^TAx=\\\\lambda_{\\\\max}\"}]} -->\n\\[\n\\min x^TAx=\\lambda_{\\min},\n\\qquad\n\\max x^TAx=\\lambda_{\\max}.\n\\]\n\n最小值、最大值分别在对应的单位特征向量处取到。若 \\(x^Tx=c>0\\)，最值分别为\n\n<!-- formula {\"id\":\"linear-18nft5d\",\"title\":\"球面约束下二次型最值、最佳常数与等号条件：cλ_min, cλ_max\",\"aliases\":[],\"context\":\"最小值、最大值分别在对应的单位特征向量处取到。若 x^Tx=c>0，最值分别为\"} -->\n\\[\nc\\lambda_{\\min},\\qquad c\\lambda_{\\max}.\n\\]\n\n最佳常数直接转成同一结论：\n\n<!-- formula {\"id\":\"linear-k7062j\",\"title\":\"球面约束下二次型最值、最佳常数与等号条件：x^TAx\",\"aliases\":[],\"context\":\"最佳常数直接转成同一结论：\"} -->\n\\[\nx^TAx\\le kx^Tx\\ (\\forall x)\n\\Longrightarrow k_{\\min}=\\lambda_{\\max},\n\\]\n\n<!-- formula {\"id\":\"linear-d5vi8a\",\"title\":\"球面约束下二次型最值、最佳常数与等号条件：x^TAx\",\"aliases\":[],\"context\":\"所属知识点：球面约束下二次型最值、最佳常数与等号条件。\"} -->\n\\[\nx^TAx\\ge kx^Tx\\ (\\forall x)\n\\Longrightarrow k_{\\max}=\\lambda_{\\min}.\n\\]\n\n这类题不需要另记专业名称，只需“求特征值—取最大或最小—写等号成立的特征向量”。",
        "searchText": "求二次型最值 求二次型最值 求二次型最值 球面约束下二次型最值、最佳常数与等号条件 设 A 为实对称矩阵，特征值按 ≤ ≤ 排列。在约束 x^Tx=1 下： x^TAx= , x^TAx= . 最小值、最大值分别在对应的单位特征向量处取到。若 x^Tx=c 0，最值分别为 c , c . 最佳常数直接转成同一结论： x^TAx≤ kx^Tx\\ ( x) ⇒ k = , x^TAx≥ kx^Tx\\ ( x) ⇒ k = . 这类题不需要另记专业名称，只需“求特征值—取最大或最小—写等号成立的特征向量”。",
        "summary": "球面约束下二次型最值、最佳常数与等号条件 设 A 为实对称矩阵，特征值按 ≤ ≤ 排列。在约束 x^Tx=1 下： x^TAx= , x^TAx= . 最小值、最大值分别在对应的单位特征向量处取到。若 x^Tx=c 0，最值分别为 c , c . 最佳常数…",
        "anchors": [
          {
            "id": "anchor-1peva2f",
            "legacyId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件",
            "searchText": "球面约束下二次型最值、最佳常数与等号条件 设 A 为实对称矩阵，特征值按 ≤ ≤ 排列。在约束 x^Tx=1 下： x^TAx= , x^TAx= . 最小值、最大值分别在对应的单位特征向量处取到。若 x^Tx=c 0，最值分别为 c , c . 最佳常数直接转成同一结论： x^TAx≤ kx^Tx\\ ( x) ⇒ k = , x^TAx≥ kx^Tx\\ ( x) ⇒ k = . 这类题不需要另记专业名称，只需“求特征值—取最大或最小—写等号成立的特征向量”。",
            "summary": "设 A 为实对称矩阵，特征值按 ≤ ≤ 排列。在约束 x^Tx=1 下： x^TAx= , x^TAx= . 最小值、最大值分别在对应的单位特征向量处取到。若 x^Tx=c 0，最值分别为 c , c . 最佳常数直接转成同一结论： x^TAx≤ kx^T…"
          }
        ],
        "formulas": [
          {
            "id": "linear-ijejgu",
            "parentAnchorId": "anchor-1peva2f",
            "legacyParentAnchorId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件：λ_min",
            "latex": "\\lambda_{\\min}\\le\\cdots\\le\\lambda_{\\max}",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "设 A 为实对称矩阵，特征值按",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-006",
            "order": 0
          },
          {
            "id": "linear-1xfzh6b-1",
            "parentAnchorId": "anchor-1peva2f",
            "legacyParentAnchorId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件：min x^TAx",
            "latex": "\\min x^TAx=\\lambda_{\\min}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "排列。在约束 x^Tx=1 下：",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-006",
            "order": 1
          },
          {
            "id": "linear-1xfzh6b-2",
            "parentAnchorId": "anchor-1peva2f",
            "legacyParentAnchorId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件：max x^TAx",
            "latex": "\\max x^TAx=\\lambda_{\\max}",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "排列。在约束 x^Tx=1 下：",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-006",
            "order": 2
          },
          {
            "id": "linear-18nft5d",
            "parentAnchorId": "anchor-1peva2f",
            "legacyParentAnchorId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件：cλ_min, cλ_max",
            "latex": "c\\lambda_{\\min},\\qquad c\\lambda_{\\max}.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "最小值、最大值分别在对应的单位特征向量处取到。若 x^Tx=c>0，最值分别为",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-006",
            "order": 3
          },
          {
            "id": "linear-k7062j",
            "parentAnchorId": "anchor-1peva2f",
            "legacyParentAnchorId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件：x^TAx",
            "latex": "x^TAx\\le kx^Tx\\ (\\forall x)\n\\Longrightarrow k_{\\min}=\\lambda_{\\max},",
            "sourceBlockIndex": 6,
            "searchAliases": [],
            "context": "最佳常数直接转成同一结论：",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-006",
            "order": 4
          },
          {
            "id": "linear-d5vi8a",
            "parentAnchorId": "anchor-1peva2f",
            "legacyParentAnchorId": "linear-algebra-06-006-anchor-001",
            "title": "球面约束下二次型最值、最佳常数与等号条件：x^TAx",
            "latex": "x^TAx\\ge kx^Tx\\ (\\forall x)\n\\Longrightarrow k_{\\max}=\\lambda_{\\min}.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "所属知识点：球面约束下二次型最值、最佳常数与等号条件。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-006",
            "order": 5
          }
        ]
      },
      {
        "id": "linear-algebra-06-007",
        "title": "求可逆矩阵 $\\mathbf{P}$，使得 $\\mathbf{A} = \\mathbf{P}^\\top \\mathbf{E} \\mathbf{P}$",
        "body": "这个等式存在可逆解的前提是 \\(A\\) 正定。先求正交矩阵 \\(Q\\)，使\n\n<!-- formula {\"id\":\"linear-1xledry-1\",\"title\":\"正定矩阵的正交对角化\",\"aliases\":[\"正定矩阵分解\",\"正交对角化\"],\"context\":\"A 正定时，可用正交矩阵 Q 对角化，全部特征值均为正。\"} -->\n\\[\nA=Q\\Lambda Q^T,\n\\qquad \\Lambda=\\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n),\\quad\\lambda_i>0.\n\\]\n\n可取\n\n<!-- formula {\"id\":\"linear-132unpb\",\"title\":\"由正交对角化构造可逆矩阵 P\",\"aliases\":[\"求 P\",\"正定矩阵分解\"],\"context\":\"在 A=QΛQᵀ 且 Λ 的对角元全为正时，可这样构造 P。\"} -->\n\\[\nP=\\Lambda^{\\frac12}Q^T,\n\\]\n\n于是\n\n<!-- formula {\"id\":\"linear-160ggmb\",\"title\":\"正定矩阵的 PᵀP 分解\",\"aliases\":[\"A=PᵀP\",\"正定矩阵分解\"],\"context\":\"由 P=Λ 的平方根乘 Qᵀ，得到 A=PᵀP。\"} -->\n\\[\nP^TEP=P^TP=A.\n\\]\n\n若题目先把二次型用可逆变换化成 \\(y^Ty\\)，也可直接从变量变换中读出一个符合条件的 \\(P\\)。",
        "searchText": "求可逆矩阵 P ，使得 A = P ^ E P 求可逆矩阵 P ，使得 A = P ^ E P 求可逆矩阵 P ，使得 A = P ^ E P 这个等式存在可逆解的前提是 A 正定。先求正交矩阵 Q，使 A=Q Q^T, = diag ( 1, , n), i 0. 可取 P= ^ 12 Q^T, 于是 P^TEP=P^TP=A. 若题目先把二次型用可逆变换化成 y^Ty，也可直接从变量变换中读出一个符合条件的 P。",
        "summary": "这个等式存在可逆解的前提是 A 正定。先求正交矩阵 Q，使 A=Q Q^T, = diag ( 1, , n), i 0. 可取 P= ^ 12 Q^T, 于是 P^TEP=P^TP=A. 若题目先把二次型用可逆变换化成 y^Ty，也可直接从变量变换中读出…",
        "anchors": [],
        "formulas": [
          {
            "id": "linear-1xledry-1",
            "parentAnchorId": "linear-algebra-06-007",
            "legacyParentAnchorId": "linear-algebra-06-007",
            "title": "正定矩阵的正交对角化",
            "latex": "A=Q\\Lambda Q^T,\n\\qquad \\Lambda=\\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n),\\quad\\lambda_i>0.",
            "sourceBlockIndex": 2,
            "searchAliases": [
              "正定矩阵分解",
              "正交对角化"
            ],
            "context": "A 正定时，可用正交矩阵 Q 对角化，全部特征值均为正。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-007",
            "order": 0
          },
          {
            "id": "linear-132unpb",
            "parentAnchorId": "linear-algebra-06-007",
            "legacyParentAnchorId": "linear-algebra-06-007",
            "title": "由正交对角化构造可逆矩阵 P",
            "latex": "P=\\Lambda^{\\frac12}Q^T,",
            "sourceBlockIndex": 3,
            "searchAliases": [
              "求 P",
              "正定矩阵分解"
            ],
            "context": "在 A=QΛQᵀ 且 Λ 的对角元全为正时，可这样构造 P。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-007",
            "order": 1
          },
          {
            "id": "linear-160ggmb",
            "parentAnchorId": "linear-algebra-06-007",
            "legacyParentAnchorId": "linear-algebra-06-007",
            "title": "正定矩阵的 PᵀP 分解",
            "latex": "P^TEP=P^TP=A.",
            "sourceBlockIndex": 4,
            "searchAliases": [
              "A=PᵀP",
              "正定矩阵分解"
            ],
            "context": "由 P=Λ 的平方根乘 Qᵀ，得到 A=PᵀP。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-007",
            "order": 2
          }
        ]
      },
      {
        "id": "linear-algebra-06-008",
        "title": "正负惯性指数",
        "body": "##### 正惯性指数、负惯性指数与含参数符号分类\n\n正惯性指数就是标准形中正平方项个数，也等于正特征值个数；负惯性指数同理。求法可用特征值、配方法，或对行、列同时作相互对应的初等变换。含参数时，先找行列式或主子式变号的临界参数，再在各区间判断正负号；临界参数要单独代回。",
        "searchText": "正负惯性指数 正负惯性指数 正负惯性指数 正惯性指数、负惯性指数与含参数符号分类 正惯性指数就是标准形中正平方项个数，也等于正特征值个数；负惯性指数同理。求法可用特征值、配方法，或对行、列同时作相互对应的初等变换。含参数时，先找行列式或主子式变号的临界参数，再在各区间判断正负号；临界参数要单独代回。",
        "summary": "正惯性指数、负惯性指数与含参数符号分类 正惯性指数就是标准形中正平方项个数，也等于正特征值个数；负惯性指数同理。求法可用特征值、配方法，或对行、列同时作相互对应的初等变换。含参数时，先找行列式或主子式变号的临界参数，再在各区间判断正负号；临界参数要单独代回…",
        "anchors": [
          {
            "id": "anchor-1q6o6r2",
            "legacyId": "linear-algebra-06-008-anchor-001",
            "title": "正惯性指数、负惯性指数与含参数符号分类",
            "searchText": "正惯性指数、负惯性指数与含参数符号分类 正惯性指数就是标准形中正平方项个数，也等于正特征值个数；负惯性指数同理。求法可用特征值、配方法，或对行、列同时作相互对应的初等变换。含参数时，先找行列式或主子式变号的临界参数，再在各区间判断正负号；临界参数要单独代回。",
            "summary": "正惯性指数就是标准形中正平方项个数，也等于正特征值个数；负惯性指数同理。求法可用特征值、配方法，或对行、列同时作相互对应的初等变换。含参数时，先找行列式或主子式变号的临界参数，再在各区间判断正负号；临界参数要单独代回。"
          }
        ],
        "formulas": []
      },
      {
        "id": "linear-algebra-06-009",
        "title": "合同",
        "body": "##### 矩阵等价、相似与合同的区别及不变量\n\n实对称矩阵 \\(A,B\\) 合同，是指存在可逆矩阵 \\(P\\)，使\n\n<!-- formula {\"id\":\"linear-1sv65in\",\"title\":\"矩阵等价、相似与合同的区别及不变量：B\",\"aliases\":[],\"context\":\"实对称矩阵 A,B 合同，是指存在可逆矩阵 P，使\"} -->\n\\[\nB=P^TAP.\n\\]\n\n两个实对称矩阵合同，当且仅当它们的正惯性指数相同、负惯性指数也相同。因此合同保持秩和正、负惯性指数，但一般不保持具体特征值。\n\n等价、相似、合同不要混用：\n\n<!-- formula {\"id\":\"linear-1nn4e53\",\"title\":\"矩阵等价、相似与合同的区别及不变量：B\",\"aliases\":[],\"context\":\"等价、相似、合同不要混用：\"} -->\n\\[\nB=PAQ\\quad\\text{是等价},\n\\]\n\n<!-- formula {\"id\":\"linear-1pqad7g\",\"title\":\"矩阵等价、相似与合同的区别及不变量：B\",\"aliases\":[],\"context\":\"所属知识点：矩阵等价、相似与合同的区别及不变量。\"} -->\n\\[\nB=P^{-1}AP\\quad\\text{是相似},\n\\]\n\n<!-- formula {\"id\":\"linear-4uoiis\",\"title\":\"矩阵等价、相似与合同的区别及不变量：B\",\"aliases\":[],\"context\":\"所属知识点：矩阵等价、相似与合同的区别及不变量。\"} -->\n\\[\nB=P^TAP\\quad\\text{是合同}.\n\\]",
        "searchText": "合同 合同 合同 矩阵等价、相似与合同的区别及不变量 实对称矩阵 A,B 合同，是指存在可逆矩阵 P，使 B=P^TAP. 两个实对称矩阵合同，当且仅当它们的正惯性指数相同、负惯性指数也相同。因此合同保持秩和正、负惯性指数，但一般不保持具体特征值。 等价、相似、合同不要混用： B=PAQ 是等价, B=P^ -1 AP 是相似, B=P^TAP 是合同.",
        "summary": "矩阵等价、相似与合同的区别及不变量 实对称矩阵 A,B 合同，是指存在可逆矩阵 P，使 B=P^TAP. 两个实对称矩阵合同，当且仅当它们的正惯性指数相同、负惯性指数也相同。因此合同保持秩和正、负惯性指数，但一般不保持具体特征值。 等价、相似、合同不要混用…",
        "anchors": [
          {
            "id": "anchor-sg4ahl",
            "legacyId": "linear-algebra-06-009-anchor-001",
            "title": "矩阵等价、相似与合同的区别及不变量",
            "searchText": "矩阵等价、相似与合同的区别及不变量 实对称矩阵 A,B 合同，是指存在可逆矩阵 P，使 B=P^TAP. 两个实对称矩阵合同，当且仅当它们的正惯性指数相同、负惯性指数也相同。因此合同保持秩和正、负惯性指数，但一般不保持具体特征值。 等价、相似、合同不要混用： B=PAQ 是等价, B=P^ -1 AP 是相似, B=P^TAP 是合同.",
            "summary": "实对称矩阵 A,B 合同，是指存在可逆矩阵 P，使 B=P^TAP. 两个实对称矩阵合同，当且仅当它们的正惯性指数相同、负惯性指数也相同。因此合同保持秩和正、负惯性指数，但一般不保持具体特征值。 等价、相似、合同不要混用： B=PAQ 是等价, B=P^ …"
          }
        ],
        "formulas": [
          {
            "id": "linear-1sv65in",
            "parentAnchorId": "anchor-sg4ahl",
            "legacyParentAnchorId": "linear-algebra-06-009-anchor-001",
            "title": "矩阵等价、相似与合同的区别及不变量：B",
            "latex": "B=P^TAP.",
            "sourceBlockIndex": 2,
            "searchAliases": [],
            "context": "实对称矩阵 A,B 合同，是指存在可逆矩阵 P，使",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-009",
            "order": 0
          },
          {
            "id": "linear-1nn4e53",
            "parentAnchorId": "anchor-sg4ahl",
            "legacyParentAnchorId": "linear-algebra-06-009-anchor-001",
            "title": "矩阵等价、相似与合同的区别及不变量：B",
            "latex": "B=PAQ\\quad\\text{是等价},",
            "sourceBlockIndex": 3,
            "searchAliases": [],
            "context": "等价、相似、合同不要混用：",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-009",
            "order": 1
          },
          {
            "id": "linear-1pqad7g",
            "parentAnchorId": "anchor-sg4ahl",
            "legacyParentAnchorId": "linear-algebra-06-009-anchor-001",
            "title": "矩阵等价、相似与合同的区别及不变量：B",
            "latex": "B=P^{-1}AP\\quad\\text{是相似},",
            "sourceBlockIndex": 4,
            "searchAliases": [],
            "context": "所属知识点：矩阵等价、相似与合同的区别及不变量。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-009",
            "order": 2
          },
          {
            "id": "linear-4uoiis",
            "parentAnchorId": "anchor-sg4ahl",
            "legacyParentAnchorId": "linear-algebra-06-009-anchor-001",
            "title": "矩阵等价、相似与合同的区别及不变量：B",
            "latex": "B=P^TAP\\quad\\text{是合同}.",
            "sourceBlockIndex": 5,
            "searchAliases": [],
            "context": "所属知识点：矩阵等价、相似与合同的区别及不变量。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-009",
            "order": 3
          }
        ]
      },
      {
        "id": "linear-algebra-06-010",
        "title": "正定",
        "body": "##### 正定、负定、半正定、半负定与不定的判定\n\n实对称矩阵 \\(A\\) 正定，是指\n\n<!-- formula {\"id\":\"linear-cht9e0-1\",\"title\":\"正定、负定、半正定、半负定与不定的判定：x^TAx\",\"aliases\":[],\"context\":\"实对称矩阵 A 正定，是指\"} -->\n\\[\nx^TAx>0\\qquad(\\forall x\\ne0).\n\\]\n\n以下条件等价：\n\n1. \\(A\\) 正定；\n2. 全部特征值大于零；\n3. 各阶顺序主子式全部大于零；\n4. 正惯性指数为 \\(n\\)；\n5. \\(A\\) 合同于单位矩阵；\n6. 存在可逆矩阵 \\(C\\)，使 <!-- formula {\"id\":\"linear-positive-definite-gram-factorization\",\"title\":\"正定矩阵的 CᵀC 分解\",\"aliases\":[\"正定矩阵分解\",\"正定矩阵充要条件\"],\"context\":\"实对称矩阵 A 正定，当且仅当可写成可逆矩阵 C 的 CᵀC。\"} -->\\(A=C^TC\\)。\n\n负定时全部特征值小于零，顺序主子式满足\n\n<!-- formula {\"id\":\"linear-1buffa9\",\"title\":\"正定、负定、半正定、半负定与不定的判定：(-1)^kDelta_k\",\"aliases\":[],\"context\":\"负定时全部特征值小于零，顺序主子式满足\"} -->\n\\[\n(-1)^k\\Delta_k>0.\n\\]\n\n半正定应检查全部特征值非负，或全部主子式非负；不能只凭“顺序主子式非负”下结论。\n\n实对称矩阵 \\(A\\) 半正定的等价条件还包括：存在实矩阵 \\(B\\)，使\n\n<!-- formula {\"id\":\"linear-12s9icp\",\"title\":\"正定、负定、半正定、半负定与不定的判定：A\",\"aliases\":[],\"context\":\"实对称矩阵 A 半正定的等价条件还包括：存在实矩阵 B，使\"} -->\n\\[\nA=B^TB.\n\\]\n\n实对称矩阵 \\(A\\) 正定时还必有\n\n<!-- formula {\"id\":\"linear-1slm0cv\",\"title\":\"正定、负定、半正定、半负定与不定的判定：a_ii\",\"aliases\":[],\"context\":\"实对称矩阵 A 正定时还必有\"} -->\n\\[\na_{ii}>0\\quad(i=1,\\ldots,n),\\qquad |A|>0.\n\\]\n\n##### 正定矩阵、伴随矩阵、逆矩阵与合同变换结论\n\n若 \\(A\\) 正定，则\n\n<!-- formula {\"id\":\"linear-qojgqd\",\"title\":\"正定矩阵、伴随矩阵、逆矩阵与合同变换结论：A^-1, A^*, A^m (minmathbb N)\",\"aliases\":[],\"context\":\"若 A 正定，则\"} -->\n\\[\nA^{-1},\\quad A^*,\\quad A^m\\ (m\\in\\mathbb N)\n\\]\n\n都正定；任意可逆矩阵 \\(P\\) 满足 \\(P^TAP\\) 正定。若 \\(A,B\\) 都正定，则 \\(A+B\\) 正定。一般不能直接说 \\(AB\\) 正定，因为 \\(AB\\) 未必对称。\n\n任意实矩阵 \\(B\\) 都有\n\n<!-- formula {\"id\":\"linear-1phexqw\",\"title\":\"正定矩阵、伴随矩阵、逆矩阵与合同变换结论：B^TB 半正定\",\"aliases\":[],\"context\":\"任意实矩阵 B 都有\"} -->\n\\[\nB^TB\\text{ 半正定},\n\\]\n\n并且\n\n<!-- formula {\"id\":\"linear-1odvef1\",\"title\":\"正定矩阵、伴随矩阵、逆矩阵与合同变换结论：B^TB 正定\",\"aliases\":[],\"context\":\"所属知识点：正定矩阵、伴随矩阵、逆矩阵与合同变换结论。\"} -->\n\\[\nB^TB\\text{ 正定}\\Longleftrightarrow B\\text{ 的列向量线性无关}.\n\\]",
        "searchText": "正定 正定 正定 正定、负定、半正定、半负定与不定的判定 实对称矩阵 A 正定，是指 x^TAx 0 ( x≠0). 以下条件等价： A 正定； 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n； A 合同于单位矩阵； 存在可逆矩阵 C，使 A=C^TC。 负定时全部特征值小于零，顺序主子式满足 (-1)^k k 0. 半正定应检查全部特征值非负，或全部主子式非负；不能只凭“顺序主子式非负”下结论。 实对称矩阵 A 半正定的等价条件还包括：存在实矩阵 B，使 A=B^TB. 实对称矩阵 A 正定时还必有 a ii 0 (i=1, ,n), A 0. 正定矩阵、伴随矩阵、逆矩阵与合同变换结论 若 A 正定，则 A^ -1 , A^ , A^m\\ (m N) 都正定；任意可逆矩阵 P 满足 P^TAP 正定。若 A,B 都正定，则 A+B 正定。一般不能直接说 AB 正定，因为 AB 未必对称。 任意实矩阵 B 都有 B^TB 半正定, 并且 B^TB 正定 B 的列向量线性无关.",
        "summary": "正定、负定、半正定、半负定与不定的判定 实对称矩阵 A 正定，是指 x^TAx 0 ( x≠0). 以下条件等价： A 正定； 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n； A 合同于单位矩阵； 存在可逆矩阵 C，使 A=C^TC。 …",
        "anchors": [
          {
            "id": "anchor-fj9h9c",
            "legacyId": "linear-algebra-06-010-anchor-001",
            "title": "正定、负定、半正定、半负定与不定的判定",
            "searchText": "正定、负定、半正定、半负定与不定的判定 实对称矩阵 A 正定，是指 x^TAx 0 ( x≠0). 以下条件等价： A 正定； 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n； A 合同于单位矩阵； 存在可逆矩阵 C，使 A=C^TC。 负定时全部特征值小于零，顺序主子式满足 (-1)^k k 0. 半正定应检查全部特征值非负，或全部主子式非负；不能只凭“顺序主子式非负”下结论。 实对称矩阵 A 半正定的等价条件还包括：存在实矩阵 B，使 A=B^TB. 实对称矩阵 A 正定时还必有 a ii 0 (i=1, ,n), A 0.",
            "summary": "实对称矩阵 A 正定，是指 x^TAx 0 ( x≠0). 以下条件等价： A 正定； 全部特征值大于零； 各阶顺序主子式全部大于零； 正惯性指数为 n； A 合同于单位矩阵； 存在可逆矩阵 C，使 A=C^TC。 负定时全部特征值小于零，顺序主子式满足 …"
          },
          {
            "id": "anchor-6e3f6t",
            "legacyId": "linear-algebra-06-010-anchor-002",
            "title": "正定矩阵、伴随矩阵、逆矩阵与合同变换结论",
            "searchText": "正定矩阵、伴随矩阵、逆矩阵与合同变换结论 若 A 正定，则 A^ -1 , A^ , A^m\\ (m N) 都正定；任意可逆矩阵 P 满足 P^TAP 正定。若 A,B 都正定，则 A+B 正定。一般不能直接说 AB 正定，因为 AB 未必对称。 任意实矩阵 B 都有 B^TB 半正定, 并且 B^TB 正定 B 的列向量线性无关.",
            "summary": "若 A 正定，则 A^ -1 , A^ , A^m\\ (m N) 都正定；任意可逆矩阵 P 满足 P^TAP 正定。若 A,B 都正定，则 A+B 正定。一般不能直接说 AB 正定，因为 AB 未必对称。 任意实矩阵 B 都有 B^TB 半正定, 并且 B…"
          }
        ],
        "formulas": [
          {
            "id": "linear-cht9e0-1",
            "parentAnchorId": "anchor-fj9h9c",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-001",
            "title": "正定、负定、半正定、半负定与不定的判定：x^TAx",
            "latex": "x^TAx>0\\qquad(\\forall x\\ne0).",
            "sourceBlockIndex": 1,
            "searchAliases": [],
            "context": "实对称矩阵 A 正定，是指",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 0
          },
          {
            "id": "linear-positive-definite-gram-factorization",
            "parentAnchorId": "anchor-fj9h9c",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-001",
            "title": "正定矩阵的 CᵀC 分解",
            "latex": "A=C^TC",
            "sourceBlockIndex": 6,
            "searchAliases": [
              "正定矩阵分解",
              "正定矩阵充要条件"
            ],
            "context": "实对称矩阵 A 正定，当且仅当可写成可逆矩阵 C 的 CᵀC。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 1
          },
          {
            "id": "linear-1buffa9",
            "parentAnchorId": "anchor-fj9h9c",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-001",
            "title": "正定、负定、半正定、半负定与不定的判定：(-1)^kDelta_k",
            "latex": "(-1)^k\\Delta_k>0.",
            "sourceBlockIndex": 7,
            "searchAliases": [],
            "context": "负定时全部特征值小于零，顺序主子式满足",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 2
          },
          {
            "id": "linear-12s9icp",
            "parentAnchorId": "anchor-fj9h9c",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-001",
            "title": "正定、负定、半正定、半负定与不定的判定：A",
            "latex": "A=B^TB.",
            "sourceBlockIndex": 10,
            "searchAliases": [],
            "context": "实对称矩阵 A 半正定的等价条件还包括：存在实矩阵 B，使",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 3
          },
          {
            "id": "linear-1slm0cv",
            "parentAnchorId": "anchor-fj9h9c",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-001",
            "title": "正定、负定、半正定、半负定与不定的判定：a_ii",
            "latex": "a_{ii}>0\\quad(i=1,\\ldots,n),\\qquad |A|>0.",
            "sourceBlockIndex": 12,
            "searchAliases": [],
            "context": "实对称矩阵 A 正定时还必有",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 4
          },
          {
            "id": "linear-qojgqd",
            "parentAnchorId": "anchor-6e3f6t",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-002",
            "title": "正定矩阵、伴随矩阵、逆矩阵与合同变换结论：A^-1, A^*, A^m (minmathbb N)",
            "latex": "A^{-1},\\quad A^*,\\quad A^m\\ (m\\in\\mathbb N)",
            "sourceBlockIndex": 14,
            "searchAliases": [],
            "context": "若 A 正定，则",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 5
          },
          {
            "id": "linear-1phexqw",
            "parentAnchorId": "anchor-6e3f6t",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-002",
            "title": "正定矩阵、伴随矩阵、逆矩阵与合同变换结论：B^TB 半正定",
            "latex": "B^TB\\text{ 半正定},",
            "sourceBlockIndex": 22,
            "searchAliases": [],
            "context": "任意实矩阵 B 都有",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 6
          },
          {
            "id": "linear-1odvef1",
            "parentAnchorId": "anchor-6e3f6t",
            "legacyParentAnchorId": "linear-algebra-06-010-anchor-002",
            "title": "正定矩阵、伴随矩阵、逆矩阵与合同变换结论：B^TB 正定",
            "latex": "B^TB\\text{ 正定}\\Longleftrightarrow B\\text{ 的列向量线性无关}.",
            "sourceBlockIndex": 23,
            "searchAliases": [],
            "context": "所属知识点：正定矩阵、伴随矩阵、逆矩阵与合同变换结论。",
            "chapterId": "linear-algebra-06",
            "topicId": "linear-algebra-06-010",
            "order": 7
          }
        ]
      }
    ]
  }
]

export const mathTopics = mathChapters.flatMap((chapter) => chapter.topics.map((topic) => ({ ...topic, chapterId: chapter.id, chapterTitle: chapter.title, partId: chapter.partId, partTitle: chapter.partTitle })))

export const mathFormulas = mathTopics.flatMap((topic) => topic.formulas.map((formula) => ({ ...formula, chapterTitle: topic.chapterTitle, partTitle: topic.partTitle, topicTitle: topic.title })))

export const legacyAnchorIds: Record<string, string> = { ...Object.fromEntries(mathTopics.flatMap((topic) => topic.anchors.map((anchor) => [anchor.legacyId, anchor.id]))), ...{"calculus-01-001-anchor-001":"anchor-lbvq5s","calculus-01-001-anchor-002":"anchor-j518hz","calculus-01-001-anchor-003":"anchor-t7xlog","calculus-01-001-anchor-004":"anchor-4ye243","calculus-01-001-anchor-005":"anchor-1d76xhd","calculus-01-001-anchor-006":"anchor-1bazviw","calculus-01-001-anchor-007":"anchor-2z340d","calculus-01-001-anchor-008":"anchor-8ea5i0","calculus-01-001-anchor-009":"anchor-aj5441","calculus-01-001-anchor-010":"anchor-j2hham","calculus-01-001-anchor-011":"anchor-3hexw1","calculus-01-002-anchor-001":"anchor-w8b1zu","calculus-01-002-anchor-002":"anchor-t8lpq4","calculus-01-002-anchor-003":"anchor-5x1cm7","calculus-01-002-anchor-004":"anchor-wcsi6k","calculus-01-002-anchor-005":"anchor-1lndnrm","calculus-01-002-anchor-006":"anchor-128640p","calculus-01-002-anchor-007":"anchor-15sbt8p","calculus-01-002-anchor-008":"anchor-bvlpa4","calculus-01-002-anchor-009":"anchor-1ohmc4u","calculus-01-003-anchor-001":"anchor-wg2dg","calculus-01-003-anchor-002":"anchor-1hhdk3","calculus-02-001-anchor-001":"anchor-1reuj12","calculus-02-001-anchor-002":"anchor-11rqxyq","calculus-02-001-anchor-003":"anchor-8c1dh1","calculus-02-001-anchor-004":"anchor-115q6i","calculus-02-001-anchor-005":"anchor-15hqnun","calculus-02-001-anchor-006":"anchor-17lpmco","calculus-02-002-anchor-001":"anchor-fz2y9u","calculus-02-003-anchor-001":"anchor-1ewqz1p","calculus-02-003-anchor-002":"anchor-kv1rg4","calculus-02-003-anchor-003":"anchor-6zol1r","calculus-02-003-anchor-004":"anchor-1neg0u9","calculus-02-003-anchor-005":"anchor-h2faya","calculus-02-003-anchor-006":"anchor-u4g2km","calculus-02-003-anchor-007":"anchor-1wkdjbx","calculus-02-003-anchor-008":"anchor-1yxg28i","calculus-02-003-anchor-009":"anchor-rvnhse","calculus-02-003-anchor-010":"anchor-1vf3xuc","calculus-02-003-anchor-011":"anchor-soth9i","calculus-02-003-anchor-012":"anchor-1hr3ies","calculus-02-003-anchor-013":"anchor-1rznfp0","calculus-02-003-anchor-014":"anchor-bbkl7e","calculus-02-004-anchor-001":"anchor-1ynitiw","calculus-03-001-anchor-001":"anchor-cisdw4","calculus-03-002-anchor-001":"anchor-175zj2c","calculus-03-002-anchor-002":"anchor-1x4bzwi","calculus-03-002-anchor-003":"anchor-77fovp","calculus-03-002-anchor-004":"anchor-jby4bt","calculus-03-002-anchor-005":"anchor-1ygnrh0","calculus-03-002-anchor-006":"anchor-t2ts4i","calculus-03-002-anchor-007":"anchor-6k9zg2","calculus-03-002-anchor-008":"anchor-1qa371k","calculus-03-002-anchor-009":"anchor-1n801g8","calculus-03-002-anchor-010":"anchor-c6zvhx","calculus-03-002-anchor-011":"anchor-1vm6c8a","calculus-03-003-anchor-001":"anchor-10742oa","calculus-03-003-anchor-002":"anchor-11l6bhp","calculus-03-004-anchor-001":"anchor-rayly0","calculus-03-004-anchor-002":"anchor-1w6iuac","calculus-04-001-anchor-001":"anchor-nx51k3","calculus-04-001-anchor-002":"anchor-1ozvu54","calculus-04-001-anchor-003":"anchor-itds84","calculus-04-002-anchor-001":"anchor-1chjnui","calculus-04-002-anchor-002":"anchor-dfmuvv","calculus-04-002-anchor-003":"anchor-198u1h9","calculus-04-005-anchor-001":"anchor-1l1gmdb","calculus-05-001-anchor-001":"anchor-1waukw5","calculus-05-002-anchor-001":"anchor-1611dtg","calculus-05-003-anchor-001":"anchor-ey2hqb","calculus-05-003-anchor-002":"anchor-1euphqa","calculus-05-003-anchor-003":"anchor-hwjhzo","calculus-05-003-anchor-004":"anchor-mpy8o7","calculus-05-004-anchor-001":"anchor-156v72a","calculus-05-004-anchor-002":"anchor-i8i1m","calculus-05-004-anchor-003":"anchor-1c0bni3","calculus-06-001-anchor-001":"anchor-kw6aq","calculus-06-001-anchor-002":"anchor-a903lx","calculus-06-001-anchor-003":"anchor-1no3ayr","calculus-06-001-anchor-004":"anchor-1p3v1i4","calculus-06-001-anchor-005":"anchor-1w9znj5","calculus-06-002-anchor-001":"anchor-1gpyc81","calculus-06-002-anchor-002":"anchor-128uc8u","calculus-06-002-anchor-003":"anchor-1saj91z","calculus-06-002-anchor-004":"anchor-lfgr2w","linear-algebra-01-001-anchor-001":"anchor-1a5bvic","linear-algebra-01-001-anchor-002":"anchor-111xxjc","linear-algebra-01-001-anchor-003":"anchor-1yn9mi4","linear-algebra-01-001-anchor-004":"anchor-ml8ruf","linear-algebra-01-001-anchor-005":"anchor-zf8f1p","linear-algebra-01-001-anchor-006":"anchor-1ojz8ps","linear-algebra-01-001-anchor-007":"anchor-1uvhxuq","linear-algebra-01-001-anchor-008":"anchor-1pg39ph","linear-algebra-01-001-anchor-009":"anchor-1eqpfuu","linear-algebra-01-001-anchor-010":"anchor-1342a6z","linear-algebra-01-001-anchor-011":"anchor-1ulaybf","linear-algebra-01-001-anchor-012":"anchor-1r4kep3","linear-algebra-01-001-anchor-013":"anchor-1jdggfb","linear-algebra-01-001-anchor-014":"anchor-1jzimhm","linear-algebra-01-001-anchor-015":"anchor-72u727","linear-algebra-01-001-anchor-016":"anchor-4kgzu","linear-algebra-01-001-anchor-017":"anchor-17571s4","linear-algebra-01-001-anchor-018":"anchor-im67ae","linear-algebra-01-001-anchor-019":"anchor-1x76og0","linear-algebra-01-001-anchor-020":"anchor-tkxywz","linear-algebra-01-001-anchor-021":"anchor-uadu3h","linear-algebra-01-001-anchor-022":"anchor-th36ml","linear-algebra-01-001-anchor-023":"anchor-x4fj9u","linear-algebra-01-001-anchor-024":"anchor-11n4d9n","linear-algebra-01-001-anchor-025":"anchor-19ugkjx","linear-algebra-01-001-anchor-026":"anchor-15fx8au","linear-algebra-01-001-anchor-027":"anchor-14miwg4","linear-algebra-01-001-anchor-028":"anchor-oqrdrk","linear-algebra-01-002-anchor-001":"anchor-1k8qs45","linear-algebra-01-003-anchor-001":"anchor-s7ns51","linear-algebra-01-003-anchor-002":"anchor-ypaqr","linear-algebra-01-005-anchor-001":"anchor-danus2","linear-algebra-02-001-anchor-001":"anchor-1tdu4gv","linear-algebra-02-001-anchor-002":"anchor-1mie9hc","linear-algebra-02-002-anchor-001":"anchor-nw0c5e","linear-algebra-02-003-anchor-001":"anchor-6exx6v","linear-algebra-02-003-anchor-002":"anchor-fyvavw","linear-algebra-02-004-anchor-001":"anchor-xqcsjc","linear-algebra-02-004-anchor-002":"anchor-1xtyyy4","linear-algebra-02-004-anchor-003":"anchor-1mtrtso","linear-algebra-02-005-anchor-001":"anchor-18y9zhv","linear-algebra-02-006-anchor-001":"anchor-1w7eg5d","linear-algebra-02-006-anchor-002":"anchor-1fgtxmu","linear-algebra-02-007-anchor-001":"anchor-hn0so9","linear-algebra-02-007-anchor-002":"anchor-175f3w3","linear-algebra-02-007-anchor-003":"anchor-giw2wf","linear-algebra-02-007-anchor-004":"anchor-5mrg4g","linear-algebra-02-008-anchor-001":"anchor-7cc37g","linear-algebra-02-008-anchor-002":"anchor-20es8i","linear-algebra-02-009-anchor-001":"anchor-7tiisf","linear-algebra-02-009-anchor-002":"anchor-1ub8g42","linear-algebra-02-009-anchor-003":"anchor-doq5h6","linear-algebra-03-001-anchor-001":"anchor-1fskpc6","linear-algebra-03-002-anchor-001":"anchor-122cvtk","linear-algebra-03-003-anchor-001":"anchor-126wx4i","linear-algebra-03-004-anchor-001":"anchor-zlkmt1","linear-algebra-03-004-anchor-002":"anchor-7ywz00","linear-algebra-03-004-anchor-003":"anchor-mh2klw","linear-algebra-03-004-anchor-004":"anchor-2bq40v","linear-algebra-03-005-anchor-001":"anchor-10bslxo","linear-algebra-04-001-anchor-001":"anchor-1eupkxq","linear-algebra-04-001-anchor-002":"anchor-75rng7","linear-algebra-04-002-anchor-001":"anchor-gzj65a","linear-algebra-04-002-anchor-002":"anchor-80c63q","linear-algebra-04-002-anchor-003":"anchor-1gj34rp","linear-algebra-04-002-anchor-004":"anchor-z4dd55","linear-algebra-04-002-anchor-005":"anchor-uco91y","linear-algebra-04-003-anchor-001":"anchor-cl5tr5","linear-algebra-04-004-anchor-001":"anchor-1anke8d","linear-algebra-04-004-anchor-002":"anchor-18su3xv","linear-algebra-04-004-anchor-003":"anchor-1c5wkkw","linear-algebra-04-004-anchor-004":"anchor-c38nu6","linear-algebra-04-005-anchor-001":"anchor-1arudjf","linear-algebra-04-005-anchor-002":"anchor-rq628u","linear-algebra-05-001-anchor-001":"anchor-1uq8hih","linear-algebra-05-001-anchor-002":"anchor-1t3tr3e","linear-algebra-05-001-anchor-003":"anchor-4j6of9","linear-algebra-05-002-anchor-001":"anchor-3href9","linear-algebra-05-002-anchor-002":"anchor-wp404o","linear-algebra-05-003-anchor-001":"anchor-1bg5ylq","linear-algebra-05-003-anchor-002":"anchor-13tlbne","linear-algebra-05-004-anchor-001":"anchor-6ed71h","linear-algebra-05-004-anchor-002":"anchor-1f0w0mb","linear-algebra-06-001-anchor-001":"anchor-18p87o1","linear-algebra-06-002-anchor-001":"anchor-voomvu","linear-algebra-06-002-anchor-002":"anchor-w491mz","linear-algebra-06-003-anchor-001":"anchor-1u32o0e","linear-algebra-06-004-anchor-001":"anchor-1vmfp82","linear-algebra-06-004-anchor-002":"anchor-eb4ki4","linear-algebra-06-005-anchor-001":"anchor-1dr847p","linear-algebra-06-006-anchor-001":"anchor-1peva2f","linear-algebra-06-008-anchor-001":"anchor-1q6o6r2","linear-algebra-06-009-anchor-001":"anchor-sg4ahl","linear-algebra-06-010-anchor-001":"anchor-fj9h9c","linear-algebra-06-010-anchor-002":"anchor-6e3f6t"} }

export const mathContentStats = { chapters: mathChapters.length, topics: mathTopics.length, anchors: 180, formulas: mathFormulas.length }
