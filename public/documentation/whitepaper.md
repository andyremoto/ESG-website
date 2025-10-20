ESTRUTURART GOLDEN (ESG) — WHITEPAPER v1.1
1. Resumo Executivo

Estruturart Golden (ESG) é um token ERC-20 lastreado em ouro na Polygon (Mainnet), cujo objetivo é proporcionar exposição transparente ao preço de 1 grama de ouro por token (1 ESG = 1 g).
O contrato utiliza padrões OpenZeppelin e inclui emissão (mint), queima (burn), pausa (pause) e blacklist.
A governança multisig (Safe) não está ativada nesta versão; poderá ser adotada futuramente, mediante política pública.

Contrato (PolygonScan): https://polygonscan.com/token/0xF5b5AefFFFbf838A1Da1f97d2Ab9dFb7330B924A

Sites oficiais:

https://www.estruturart.com.br

https://www.estruturartbank.com.br

Pilares: lastro documentado, cálculo objetivo de preço (USD/BRL), transparência operacional e segurança do smart contract.

2. Proposta de Valor

Acesso simples ao ouro: 1 token = 1 g de ouro certificado.

Custos e liquidez: rede Polygon e integração com DEX.

Transparência: documentação de lastro e trilhas on-chain (emissões/queimas/pausas/blacklist).

3. Definição do Ativo

Nome/Símbolo: Estruturart Golden (ESG)

Padrão: ERC-20 (18 casas decimais)

Rede: Polygon Mainnet (Chain ID 137)

Contrato: 0xF5b5AefFFFbf838A1Da1f97d2Ab9dFb7330B924A

Paridade-alvo: 1 ESG = 1 g de ouro

Supply: ajustável via mint/burn em função do lastro efetivo.

4. Precificação (NAV) e Fórmulas

Conversões:

1
 
oz troy
=
31,1034768
 
g
1oz troy=31,1034768g

USD/g
=
USD/oz
31,1034768
USD/g=
31,1034768
USD/oz
	​


Preço do ESG (USD): 
ESG
𝑈
𝑆
𝐷
=
USD/g
ESG
USD
	​

=USD/g

Preço do ESG (BRL): 
ESG
𝐵
𝑅
𝐿
=
ESG
𝑈
𝑆
𝐷
×
USD/BRL
ESG
BRL
	​

=ESG
USD
	​

×USD/BRL

O site oficial exibe ESG/USD e ESG/BRL com timestamp e, quando disponível, variação 24h.

5. Prova de Lastro (visão geral)

O lastro se materializa em ouro certificado (ou instrumentos/cotas representativos, conforme documentação contratual aplicável).

A Estruturart publicará, em base periódica, relatórios de posição, atestados de custódia e hashes/IPFS de documentos-chave (quando aplicável).

Emissões (mint) ocorrem somente após a entrada/validação de lastro; queimas (burn) acompanham reduções/resgates.

Observação: este whitepaper descreve diretrizes e processos; os instrumentos jurídicos (contratos, aditivos, regulamentos) prevalecem em caso de divergência.

6. Política de Emissão e Queima

Princípio 1:1 — supply circulante acompanha gramas de ouro sob custódia/controle comprovado.

Mint: após confirmação documental/operacional do aumento de lastro.

Burn: em saídas, resgates ou ajustes de lastro.

Todos os eventos são on-chain e divulgados em relatórios públicos.

7. Smart Contract (visão técnica)

Base: OpenZeppelin ERC20, ERC20Burnable, ERC20Pausable, AccessControl.

Funções principais:

mint(address to, uint256 amount)

burn(uint256 amount) / burnFrom(address from, uint256 amount)

pause() / unpause()

blacklist(address) / unblacklist(address) / isBlacklisted(address)

Importante: não existe função de force transfer na versão atual do contrato.

Papéis (roles): administrados por endereços controlados pelo emissor conforme política interna.

DEFAULT_ADMIN_ROLE — administração de papéis

MINTER_ROLE — emissão

PAUSER_ROLE — pausa

BLACKLIST_ADMIN_ROLE — gestão de blacklist

Governança multisig: não implementada nesta versão. Caso a Estruturart opte no futuro, os papéis poderão ser migrados para um contrato Safe (multisig) mediante anúncio público e transações on-chain verificáveis.

8. Liquidez e Formação de Preço

Mercado secundário: abertura de pool ESG/USDC em DEX (ex.: Uniswap v3, taxa 0,05%) poderá ser utilizada para liquidez ao varejo.

Gestão de slippage: tamanho e faixa de liquidez são definidos por política interna, buscando refletir o NAV (1 g) com baixa derrapagem.

Mesa primária: negociações institucionais e movimentos de grandes volumes são preferencialmente realizados fora do livro (OTC), sincronizados com mint/burn.

9. Controles, Risco e Compliance

Pausa (emergência): pode suspender temporariamente transferências em eventos de risco operacional/segurança.

Blacklist: endereços podem ser bloqueados quando houver suspeita fundamentada, ordem legal ou riscos claros (política pública descreve critérios e procedimentos).

Riscos:

Mercado: variações no ouro e no câmbio.

Operacional: custódia, documentação, processos.

Tecnológico: vulnerabilidades em contratos/infra; mitigadas por padrões consagrados e testes.

Regulatório: mudanças de entendimento de autoridades.

10. Roadmap (alto nível)

v1 (atual): contrato em produção, documentação pública, cálculo de preço (USD/BRL) e rotinas de transparência.

Próximos passos:

Publicação de relatórios de lastro periódicos e, se aplicável, atestados de terceiros.

Integrações de carteira/DEX (logo e metadados).

(Opcional Futuro) Migração de papéis para Safe (multisig), mediante anúncio e execução on-chain.

Auditoria independente do smart contract (quando oportuno).

11. Termos Legais (resumo)

Este documento tem caráter informativo e não constitui oferta pública de valores mobiliários.

A aquisição de tokens envolve riscos. Leia as políticas e documentos aplicáveis antes de investir.

Em caso de conflito, prevalecem os instrumentos jurídicos (contratos, aditivos, regulamentos) e a legislação vigente.

12. Canais Oficiais

Contrato (PolygonScan): https://polygonscan.com/token/0xF5b5AefFFFbf838A1Da1f97d2Ab9dFb7330B924A

Site: https://www.estruturart.com.br

Site Bancário: https://www.estruturartbank.com.br