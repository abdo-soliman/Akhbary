<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The username instance.
     *
     * @var \App\Models\User Name
     */
    protected $userName;

    /**
     * The username instance.
     *
     * @var \App\Models\User Password
     */
    protected $userPassword;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(String $_userName, String $_userPassword)
    {
        $this->userName = $_userName;
        $this->userPassword = $_userPassword;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.register_password')->with([
            'name' => $this->userName,
            'password' => $this->userPassword,
        ]);
    }
}
