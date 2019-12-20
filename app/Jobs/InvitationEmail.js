'use strict'

const Mail = use('Mail')

class InvitationEmail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'InvitationEmail-job'
  }

  // This is where the work is done.
  async handle ({ user, team, email }) {
    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.name },
      message => {
        message
          .to('cleiton@rocketseat.com.br')
          .from('osvaldokalvaitir@outlook.com', 'Osvaldo | OmniStack')
          .subject('Convite')
      }
    )
  }
}

module.exports = InvitationEmail

