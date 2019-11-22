<template>
  <v-container class="my-auto mt-8">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" lg="5" xl="5">
        <v-form>
          <v-card class="mx-auto">
            <router-link to="/" class="router-bar">
              <v-card-title class="logo justify-center font-weight-black display-2">Agro+Feira</v-card-title>
            </router-link>
            <v-card-title class="title font-weight-regular justify-center">
              <span>Crie sua conta Agro+Feira</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                filled
                color="success"
                v-model="user.name"
                label="Nome"
                required
                autofocus
                shaped
                hint="Digite seu Nome completo"
                counter
                maxlength="40"
              ></v-text-field>
              <v-text-field
                filled
                color="success"
                v-model="user.cpf"
                label="CPF"
                required
                :error="error"
                mask="true"
                v-mask="mask"
                shaped
                :error-messages="errorMsg"
                hint="Este é o CPF que você irá utilizar para entrar na sua conta Agro+Feira"
              ></v-text-field>
              <v-text-field
                filled
                color="success"
                v-model="user.phone"
                required
                label="Contato ou Whatsapp"
                mask="true"
                v-mask="mask1"
                shaped
                hint="Este é o seu Número que será utilizado como Contato"
              ></v-text-field>
              <v-text-field
                :append-icon="show ? 'visibility' : 'visibility_off'"
                filled
                label="Senha"
                :type="show ? 'text' : 'password'"
                color="success"
                v-model="user.password"
                :rules="passRules"
                required
                shaped
                hint="Este é a senha que você irá utilizar para entrar na sua conta Agro+Feira"
              ></v-text-field>
              <v-checkbox
                v-model="termos"
                color="success"
                label="Você aceita os termos de usuário ?"
                class="ml-1 mt-n3 mb-n3"
                @click.prevent="aceitarTermos()"
              ></v-checkbox>
            </v-card-text>
            <v-card-actions>
              <v-row class="justify-center">
                <v-col cols="10">
                  <v-btn
                    color="success"
                    @click="createAccount"
                    class="white--text mt-n6"
                    :disabled="!active"
                    block
                    rounded
                    large
                  >Criar conta</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-container>
              <p class="text-center">
                Já possui conta ?
                <router-link to="/entrar" class="decoration-link">Faça login</router-link>
              </p>
            </v-container>
          </v-card>
        </v-form>
        <v-row justify="center">
          <v-dialog v-model="modal" persistent scrollable>
            <v-card>
              <v-card-title class="headline">Termos de usuário</v-card-title>
              <v-card-text class="text-justify">
                1. Acordo de Termos O programa Agro+, permite o acesso e a utilização deste website sujeito a este termo de uso. Serviços específicos disponíveis através deste Site podem incluir termos adicionais, que são incorporados a este termo. Por favor, leia esse Termo e quaisquer termos adicionais cuidadosamente antes de acessar ou usar este Site. PARA USO DO SITE, o usuário deve primeiro CONCORDAR COM ESTAS CONDIÇÕES. Ao usar ou acessar O SITE, O USUÁRIO ACEITA ESTES TERMOS e garante que tem 18 anos de idade ou mais. SE FOR EMPRESA OU ENTIDADE LEGAL, O USUÁRIO DECLARA E GARANTE QUE TEM AUTORIDADE PARA LIGAR A ENTIDADE A ESTES TERMOS.
                <br />2. Modificação dos Termos Podemos alterar este Termo periodicamente. Nesse caso, Se forem feitas alterações no Termo, iremos notificá-lo, colocando um aviso destacado no Site e/ou envio de um e-mail para o seu endereço de e-mail. Qualquer alteração neste Termo será imediatamente efetivada para os novos usuários do Site, caso contrário, essas mudanças serão efetivadas após trinta dias do envio de uma notificação por e-mail para o usuário ou trinta dias após a publicação de um aviso no Site. O usuário é responsável, em todos os momentos pela atualização de sua conta, bem como do endereço de e-mail.
                <br />3. Suas Informações e Conta Para determinados usos do Site, o Programa Agro+ pode exigir que o usuário forneça informações pessoais (tais como identificação ou informações de contato) ou para criar uma conta de usuário. O usuário concorda que qualquer informação que fornecer em conexão com a sua conta será sempre legítima, correta, completa e atualizada. O usuário será responsável por todas as atividades que decorram sob sua conta e, portanto, o usuário concorda em manter sua senha confidencial. O usuário concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta, ou se o usuário acredita que sua senha não é mais confidencial. Reservamo-nos o direito de exigir que o usuário altere seu nome de usuário e/ou senha, se acreditarmos que sua conta não é mais segura. O usuário não deve:(a) fornecer informações falsas como parte de suas informações de conta, ou em conexão com o Site, (b) criar uma conta para ninguém além de si mesmo, (c) criar ou usar mais de uma conta a qualquer momento (d) transferir sua conta para terceiros, (e) permitir que outros usem sua conta, ou (f) usar ou acessar contas de outras pessoas.
                <br />4. Privacidade O usuário concorda e autoriza a utilização dos seus dados pessoais, em conformidade com a Política de privacidade do Programa Agro+. Consulte a Política de privacidade da Programa Agro+.
                <br />5. Conduta do Site Ao utilizar o Site, o usuário concorda em cumprir com as seguintes diretrizes: Não é permitido postar ou transmitir informação, dado, texto, software, gráficos, sons, fotografias, vídeos, mensagens ou outro conteúdo que seja ilegal, ofensivo, impreciso, difamatório, obsceno, fraudulento, prejudicial, ameaçador ou abusivo. Não interferir no uso de outros usuários do Site. Não postar ou fazer upload de qualquer vírus, worms, arquivo corrompido ou outro software capaz de perturbar, incapacitar ou prejudicar o funcionamento do Site. Irá cumprir com este Termo e quaisquer leis ou regulamentos aplicáveis (incluindo quaisquer leis relativas à exportação de dados ou software para os Estados Unidos ou outros países relevantes). Não é permitido usar o Site para divulgar ou vender produtos ou serviços para os outros ou se envolver em atividades como concursos, sorteios ou esquemas de pirâmide. Não se passar por qualquer pessoa ou entidade, declarar falsamente ou deturpar sua afiliação com uma pessoa ou entidade. Não enviar ou transmitir conteúdo que o usuário não tem o direito de publicar ou transmitir sob qualquer lei ou sob relações contratuais ou fiduciárias (tais como informação privilegiada, informações confidenciais, etc). Não usar o Site para solicitar, obter ou armazenar dados pessoais ou senhas de outros usuários.
                <br />6. Violação do Termo Se o usuário violar qualquer item do Termo ou informações de outros usuários postadas no Site, ou se o Programa Agro+ acreditar que sua conduta ou conteúdo é ofensivo ou ilegal, que viola os direitos ou ameaça prejudicar terceiros, e que podem criar responsabilidade para o Programa Agro+ ou terceiros, reservamo-nos o direito de investigar e tomar as medidas legais cabíveis, incluindo a remoção de conteúdo do Site, notificação das autoridades competentes sobre a fonte do conteúdo, impedindo-o de acessar o Site e promover o encerramento de sua Conta.
                <br />7. Envio de Conteúdo O usuário concede ao Programa Agro+, que é isento de royalties, perpétuo, irrevogável, intransferível, a licença para utilizar, reproduzir, modificar, adaptar, publicar, traduzir, preparar trabalhos derivados, distribuir, executar e exibir todo e qualquer conteúdo (no todo ou em parte) que o usuário postar ou enviar para o Site e de incorporar o conteúdo do usuário em outras obras, de qualquer forma, mídia ou tecnologia conhecida ou posteriormente desenvolvida. O usuário declara e garante que: (a) o usuário tem o direito de conceder a licença anterior e postar e enviar o Conteúdo do Usuário, e (b) o Conteúdo do Usuário não pode infringir, negar ou violar direitos de terceiros (incluindo direitos de propriedade). O usuário é o único responsável por seu Conteúdo do Usuário. Reserva-se o Programa Agro+, o direito a seu exclusivo critério para excluir ou deixar inalterado qualquer Conteúdo submetido no Site.
                <br />8. Links de Terceiros no Site O Programa Agro+ ou terceiros podem fornecer links do Site para outros Sites ou serviços; não tem controle sobre sites e Serviços de Terceiros; não endossa e não é responsável por quaisquer sites e Serviços de Terceiros ou pela informação, material, produtos ou serviços contidos ou acessíveis através dos sites e Serviços de Terceiros. O usuário reconhece que o Programa Agro+ não é responsável, direta ou indiretamente, por qualquer perda ou dano causado ou alegadamente causados por ou em conexão com o uso ou dependência de qualquer informação, material, produtos ou serviços. Todos os sites e serviços de terceiros têm seus próprios termos de uso e políticas de privacidade diferentes das nossas. Os termos do Programa Agro+ e Política de Privacidade apenas se aplica exclusivamente a este e não se aplicam a todos os sites e Serviços de Terceiros. Podemos permitir que terceiros forneçam certas informações apresentadas no Site. Qualquer informação de terceiros não é patrocinada, apoiada, recomendada, ou licenciada pelo Programa Agro+. O usuário deve contatar diretamente a terceiros e/ou suas referências para as informações mais precisas. Sua interação correspondente ou transações com terceiros através do Site, incluindo a participação em promoções ou de e-commerce e quaisquer termos, condições, garantias ou representações associadas com interações de Terceiros, são exclusivamente entre o usuário e tais terceiros. O usuário concorda que o Programa Agro+ não será responsável por qualquer perda ou dano de qualquer tipo incorridos em conexão com suas interações de Terceiros ou a presença de tais terceiros no site. O Programa Agro+ reserva o direito (mas não é obrigado), de monitorar ou tomar qualquer ação que considerar útil relativamente, nas disputas entre o usuário e terceiros usando o Site. Na medida do permitido pelas leis aplicáveis, o usuário decide liberar o Programa Agro+ de toda e qualquer responsabilidade ou reclamação relacionados a: (a) qualquer conteúdo postado no Site pelo usuário ou por terceiros, ou (b) pela conduta, seja online ou off-line de terceiros.
                <br />9. Indenização O usuário concorda em indenizar, defender e isentar o Programa Agro+, suas afiliadas, conselho de administração, diretores, agentes, empregados, parceiros e fornecedores de qualquer responsabilidade, perda, reclamação, demanda, custos e despesas (incluindo honorários razoáveis de advogados) relacionados com : O uso do Site. Qualquer violação ou inexatidão de qualquer representação ou garantia feita ao abrigo destes Termos. Violação sua destes Termos. Violação de sua legislação aplicável ou quaisquer direitos de terceiros, ou Sua postagem de conteúdo do usuário ao Site.
                <br />10. Uso e Armazenamento de Conteúdo do Site O Programa Agro+ pode estabelecer práticas gerais e limites relativos à utilização do Site, incluindo, sem limitação, o número máximo de dias que o conteúdo estará disponível ou mantido no Site. O Programa Agro+, a seu exclusivo critério, reserva-se o direito de modificar estas práticas gerais e limites a qualquer tempo.
                <br />11. Posse dos Direitos de Conteúdo e Propriedade Intelectual O Programa Agro+ e seus licenciadores são proprietários do Site e de todo conteúdo nele inserido e de todos os direitos de propriedade intelectual relacionados com o que precede. O usuário não pode sob qualquer hipótese copiar, distribuir, vender, alugar, executar, sublicenciar, modificar ou preparar trabalhos derivados do Site ou o Conteúdo do Site, no todo ou em parte, exceto quando expressamente autorizado. Qualquer uso do Site não expressamente permitido por estes Termos será considerado violação destes Termos e violação dos direitos autorais, marcas e outras leis. O Programa Agro+ irá considerar qualquer comentário ou sugestão que o usuário fornecer como não-confidencial e não-proprietária. O usuário concede à Agro+ o direito de usar qualquer comentário ou sugestão que fornecer de qualquer maneira e para qualquer finalidade, sem qualquer obrigação de compensar.
                <br />12. Isenção de Garantia Nada nestes termos excluirá ou limitará a garantia do programa Agro+ para medidas que não podem ser legalmente excluídas ou limitadas por lei. Algumas jurisdições não permitem a exclusão de garantias ou condições. Portanto, apenas exclusões e limitações que são legais na jurisdição se aplicarão ao usuário e a nossa responsabilidade é limitada aos termos permitidos por lei. O usuário concorda expressamente que o uso do site está por sua conta e que o site, conteúdo do Site e todos os serviços são fornecidos da forma que está e como está disponível. O programa Agro+ renuncia expressamente todas as garantias e condições de qualquer tipo, expressa ou implícita, mas sem limitação. As garantias e condições de comercialização, adequação para um determinado fim, título e não violação. Em particular, nem o programa Agro+, nem qualquer de suas controladas ou coligadas representam ou garantem que: o uso do Site ou conteúdo do Site vai atender suas necessidades; o uso do Site ou conteúdo do Site será ininterrupto, oportuno, seguro e livre de erros, livre de vírus ou outro código nocivo, qualquer informação obtida pelo usuário como resultado do seu uso do Site será preciso ou de confiança, ou que os defeitos no funcionamento ou funcionalidade de qualquer software fornecido ao usuário como parte dos serviços serão corrigidos. O usuário faz download ou obtém material do Site por sua própria conta e risco, o usuário será o único responsável por quaisquer danos ao seu computador ou outro dispositivo ou perda de dados que resultam em danos materiais. No conselho ou informação, verbal ou por escrito, obtido do programa Agro+ através do site, ou conteúdo do Site, qualquer garantia não expressa nestes termos.
                <br />13. Limitações de Responsabilidade Nada nestes termos excluirá ou limitará a responsabilidade do Programa Agro+ por perda ou responsabilidade, medida em que tal não pode ser legalmente excluído ou limitado. Algumas jurisdições não permitem a exclusão de responsabilidade por perda ou danos causados por violação, negligência do contrato, violação dos termos implícitos ou danos. Assim, só as limitações e exclusões que são legais na jurisdição se aplicarão ao usuário e a nossa responsabilidade limitada ao limite estabelecido por lei. O usuário concorda expressamente que o programa Agro+, suas filiadas, conselho de administração, diretores, agente, empregados, parceiros e fornecedores não serão responsáveis por qualquer um dos seguintes: (A) Qualquer dano indireto, incidental, especial, consequentes ou exemplares na conexão com o site, conteúdo do site, quaisquer serviços prestados na conexão com o Site, ou estes termos, causados e sob qualquer teoria de responsabilidade. Isso deve incluir, mas não será limitada a perda de lucros (incorrida direta ou indiretamente) perda de reputação, boa vontade ou negócios, perda de dados, custo de aquisição de bens ou serviços, ou outras perdas intangíveis; e (B) Qualquer perda ou dano que pode incorrer, incluindo, mas não limitado, a perda ou danos em conexão com: Confiança a qualquer conteúdo colocado pelo usuário na integridade, precisão ou existência de qualquer informação publicada no Site. Qualquer alteração que o Programa Agro+ possa fazer no Site, ou qualquer seção permanente ou temporária do fornecimento do Site (ou quaisquer funcionalidades dentro do Site). Supressão, corrupção ou falha no armazenamento de qualquer conteúdo ou outros dados de comunicações mantidos ou transmitidos pela ou através da utilização do Site. Falta de prestação de suas informações pelo Programa Agro+ sobre informações de conta; sua falta para manter sua senha ou requisitos de conta segura e confidencial; ou Qualquer relação ou transação realizada com terceiros. As limitações de responsabilidade do Programa Agro+ para o usuário nos parágrafos acima aplica-se ou não, desde que o Programa Agro+ tenha sido comunicado ou ter conhecimento da possibilidade de tais perdas.
                <br />14. Política de Violação de Direitos Autorais O Programa Agro+ leva reivindicações de violação de direitos autorais a sério. Nós vamos responder a acusações de violação de direitos autorais, conforme a lei aplicável e manter uma política de encerrar as contas de infratores reincidentes. Se o usuário acredita que quaisquer materiais acessíveis a partir do Site viola seus direitos autorais, o usuário pode solicitar a remoção desses materiais (ou acesso aos mesmos) a partir do Site, enviando notificação por escrito ao nosso endereço de email. O aviso prévio deverá incluir substancialmente o seguinte: Sua assinatura física ou eletrônica. Identificação de direitos autorais da obra que o usuário acredita ter sido violada ou se o pedido envolve várias obras no Site, uma lista representativa de tais trabalhos; Identificação do material que o usuário acredita estar violando de forma suficientemente precisa para nos permitir localizar o material. Informação adequada pela qual podemos entrar em contato (incluindo o seu nome, endereço, número de telefone e, se disponível, endereço de e-mail). Uma declaração de que o usuário tem uma boa fé, que o uso do material protegido por direitos autorais não é autorizado pelo proprietário dos direitos autorais, seu agente ou a lei. Uma declaração de que as informações na notificação por escrito são precisas. Uma declaração, sob pena de perjúrio, que o usuário está autorizado a agir em nome do proprietário dos direitos autorais. O endereço da ATN segue abaixo: ATN – Associação Telecentro de Informação e Negócios SHCGN - CR 706/707, BLOCO C, SALAS 204, 205 E 206 - ASA NORTE BRASÍLIA-DF CEP 70.740-790 suporte @atn.org.br
                <br />15. Marcas O Programa Agro+ e seu logotipo são marcas registradas. O usuário não deve usar qualquer marca do Programa Agro+, sem a permissão prévia e por escrito. Todas as marcas registradas de terceiros no Site são de propriedade de seus respectivos proprietários.
                <br />16. Modificações para o Site O Programa Agro+ reserva o direito de modificar o Site, suspender o acesso a todos ou a partes do Site, ou fechar o Site por tempo indeterminado, com ou sem aviso prévio. O usuário concorda que o Programa Agro+ não será responsabilizado pelo usuário ou terceiros por qualquer modificação ou suspensão do Site, no todo ou em parte.
                <br />17. Terminação Sujeito a esta Seção, o presente acordo permanecerá em pleno vigor e efeito, enquanto o usuário usar o Site ou manter uma conta. O usuário pode encerrar sua conta a qualquer momento e por qualquer motivo através da página apropriada de gerenciamento de conta no Site. O Programa Agro+ tem o direito de encerrar sua conta, mediante o envio de aviso prévio, no endereço de e-mail que o usuário fornecer em sua conta. O usuário concorda que nós não teremos nenhuma responsabilidade por quaisquer custos, despesas, perdas, danos, ou responsabilidades decorrentes ou relacionadas ao encerramento da sua conta, o seu acesso e uso do Site, ou este Contrato. Mesmo após este Acordo for denunciado por qualquer razão, as seguintes disposições do presente acordo permanecerá em vigor: Seções 7, 8, 9, 12 a 14, 17, 19 e 20. Sem limitar o precedente, se o usuário usar, copiar, distribuir, vender, exibir, executar, sublicenciar ou preparar trabalhos derivados de qualquer parte do Site, em violação destes Termos, o seu direito de usar o Site cessará imediatamente e o usuário deve, em exclusivo critério do Programa Agro+, devolver ou destruir quaisquer cópias de materiais do Site que o usuário fez.
                <br />18. Divulgação A ATN está localizada no endereço abaixo: ATN – Associação Telecentro de Informação e Negócios SHCGN - CR 706/707, BLOCO C, SALAS 204, 205 E 206 - ASA NORTE - BRASÍLIA-DF CEP 70.740-790 Telefone: 55 (61) 3965-3399 O usuário pode relatar queixas ao Instituto de Defesa do Consumidor – PROCON, no endereço: SCS Venâncio 2000 - bl. B-60, sala 240 - Brasília - DF - CEP: 70.333-900 Telefone: 151 | E-mail procon@procon.df.gov.br
                <br />19. Comunicações Eletrônicas Para fins contratuais, o usuário concorda em receber comunicações do Programa Agro+ em um formulário eletrônico e (b) concorda que todos os termos e condições, acordos, notificações, divulgações e outras comunicações que o Programa Agro+ fornece ao usuário eletronicamente, satisfazem quaisquer requisitos legais e que tais comunicações satisfariam como se fosse em via impressa. Todas as notificações enviadas ao usuário pelo Programa Agro+ podem ser feitas por qualquer e-mail.
                <br />20. Disposições Gerais Estes Termos e quaisquer Termos Adicionais constituem, completa e ficam incluídas no acordo final entre o usuário e o Programa Agro+ sobre o Site e substituem todos os acordos anteriores ou contemporâneos, entendimentos e comunicações, escritas ou orais, entre o usuário e o Programa Agro+ (incluindo, mas não se limitando a, qualquer versão anterior destes Termos). Estes Termos e a resolução de qualquer controvérsia ou reivindicação decorrente ou relacionadas com estes Termos ou do Site serão regidos e interpretados de acordo com as leis do País, sem dar efeito a quaisquer princípios de conflitos de lei. A falha do Programa Agro+ em insistir em aplicação rigorosa de qualquer disposição destes Termos não deve ser interpretada como uma renúncia de qualquer provisão ou direito. Todas as isenções só serão eficazes por escrito. Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições destas Condições serão aplicadas de acordo com seus termos. O usuário reconhece que o Site e Conteúdo do Site contém segredos comerciais valiosos e informações de propriedade do Programa Agro+, que qualquer violação ou ameaça da seção intitulada Propriedade do Conteúdo e dos Direitos de Propriedade Intelectual constituirá um dano imediato, irreparáveis ao Programa Agro+ para o qual os danos monetários seriam um remédio inadequado, e que a medida cautelar é uma solução adequada para tal violação. Os títulos das seções destes Termos são apenas para conveniência e não têm efeito legal ou contratual. Inclui e incluindo, não são limitativos. Independentemente de qualquer estatuto ou lei em contrário, o usuário renuncia a seu direito de apresentar qualquer reclamação contra o Programa Agro+ mais de 1 ano após tal reclamação surgir pela primeira vez.
              </v-card-text>
              <v-card-actions>
                <v-btn color="indigo" text @click="negarTermos">Negar</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn color="green darken-1" text @click="modal = false">Aceito</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { api } from "@/services";
import router from "@/router";
import { mask, mask1 } from "vue-the-mask";
export default {
  directives: { mask, mask1 },
  data() {
    return {
      mask: "###.###.###-##",
      mask1: "(##) #####-####",
      show: false,
      active: true,
      termos: false,
      status: false,
      modal: false,
      error: false,
      passRules: [v => v >= 6 || "Sua senha deve possuir mais de 6 caracteres"],
      user: {
        name: null,
        cpf: null,
        phone: null,
        password: null
      }
    };
  },
  methods: {
    createAccount() {
      if (this.pass !== null) {
        api.post("user", this.user).then(response => {
          if (response.data.error) {
            this.error = true;
          } else {
            this.error = false;
            setTimeout(function() {
              router.replace("/entrar");
            }, 1000);
          }
        });
      }
    },
    aceitarTermos() {
      if (this.modal !== null) {
        this.modal = true;
        this.termos = true;
      }
    },
    negarTermos() {
      this.modal = false;
      this.termos = false;
    }
  },
  computed: {
    errorMsg() {
      return this.error ? ["Já existe um registro associado a esse CPF"] : [];
    }
  }
};
</script>

<style>
</style>