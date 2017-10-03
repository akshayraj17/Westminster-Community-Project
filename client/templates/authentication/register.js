Template.register.events({
	"submit #register-form": function (e) {
		e.preventDefault();

		var errors = validateUser(e);
		if (errors && errors.reason)
			return alert(errors.reason);

		Accounts.createUser({
			email: $(e.target).find("#register-email").val(),
			password: $(e.target).find("#register-password").val(),
			profile: {
				fullName: $(e.target).find("#register-full-name").val(),
				community: $(e.target).find("#register-community").val(),
				favoriteActivities: [],
				favoritePrograms: [],
			}
		}, function (error) {
			if (error) {
				alert("There was an error creating your account. Please try again later.");
			} else {
				Router.go("programList");
			}
		});
	}
});

var validateUser = function (e) {
	var fullName = $(e.target).find("#register-full-name").val();
	if (fullName.length < 2 || (fullName.indexOf(" ") < 0))
		return { reason: "You must enter a Full Name." };
}
// get the credentials from request parameters or something
var email = "...",
    password = "...";

var newUser = User({
    email: email,
    password: password
});

nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
    // some sort of error
    if (err)
        // handle error...

    // user already exists in persistent collection...
    if (existingPersistentUser)
        // handle user's existence... violently.

    // a new user
    if (newTempUser) {
        var URL = newTempUser[nev.options.URLFieldName];
        nev.sendVerificationEmail(email, URL, function(err, info) {
            if (err)
                // handle error...

            // flash message of success
        });

    // user already exists in temporary collection...
    } else {
        // flash message of failure...
    }
});

    createdAt: {
        type: Date,
        expires: 86400,
        default: Date.now
   
}
var options = {
    verificationURL: 'http://example.com/email-verification/${URL}',
    URLLength: 48,

    // mongo-stuff
    persistentUserModel: null,
    tempUserModel: null,
    tempUserCollection: 'temporary_users',
    emailFieldName: 'email',
    passwordFieldName: 'password',
    URLFieldName: 'GENERATED_VERIFYING_URL',
    expirationTime: 86400,

    // emailing options
    transportOptions: {
        service: 'Gmail',
        auth: {
            user: 'user@gmail.com',
            pass: 'password'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <user@gmail.com>',
        subject: 'Confirm your account',
        html: '<p>Please verify your account by clicking <a href="${URL}">this link</a>. If you are unable to do so, copy and ' +
                'paste the following link into your browser:</p><p>${URL}</p>',
        text: 'Please verify your account by clicking the following link, or by copying and pasting it into your browser: ${URL}'
    },
    shouldSendConfirmation: true,
    confirmMailOptions: {
        from: 'Do Not Reply <user@gmail.com>',
        subject: 'Successfully verified!',
        html: '<p>Your account has been successfully verified.</p>',
        text: 'Your account has been successfully verified.'
    },

    hashingFunction: null,
}
